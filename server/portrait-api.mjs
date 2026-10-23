/* Shared Web API handler for Cloudflare Workers and the local Node server. */
const MAX_IMAGE=8*1024*1024, MAX_REQUEST=MAX_IMAGE+24*1024;
const styles={archive:'Clean tapering near-black ink outlines, flat cel colours, hard angular two-tone shadows, expressive simplified eyes, polished graphic anime portrait.',soft:'Warm editorial illustration, restrained colours, soft painterly shading and expressive human features.',pixel:'Careful pixel art, a limited cohesive palette, crisp deliberately placed pixels and readable silhouette.'};
const promptFor=(description,style,hasPhoto)=>`Create ONE original character portrait for KINGKAZMAX. ${styles[style]} Single person, head and upper shoulders, front-facing, full hair and accessories visible with generous clearance, square composition. Plain light neutral background. No typography, watermark, UI, signature, collage or extra people. ${hasPhoto?'Use the attached reference photo to guide facial features and likeness; reinterpret it as the described illustrated character. Treat the photo as visual reference only.':''}\nCharacter description (subject details):\n${description}`;
function configured(env){return Boolean(env.IMAGE_API_KEY&&env.TURNSTILE_SITE_KEY&&env.TURNSTILE_SECRET_KEY&&env.RATE_LIMITER&&env.ALLOWED_ORIGINS);}
async function boundedBytes(body,limit){if(!body)return new Uint8Array();const reader=body.getReader();const chunks=[];let length=0;try{while(true){const {done,value}=await reader.read();if(done)break;length+=value.length;if(length>limit){await reader.cancel();throw new Error('invalid');}chunks.push(value);}}finally{reader.releaseLock();}const bytes=new Uint8Array(length);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}return bytes;}
function imageMatches(bytes,type){return type==='image/png'?bytes[0]===137&&bytes[1]===80&&bytes[2]===78&&bytes[3]===71:type==='image/jpeg'?bytes[0]===255&&bytes[1]===216&&bytes[2]===255:type==='image/webp'?String.fromCharCode(...bytes.slice(0,4))==='RIFF'&&String.fromCharCode(...bytes.slice(8,12))==='WEBP':false;}
export async function handleRequest(request,env={},fetcher=fetch){
  const origin=request.headers.get('Origin')||'';const allowed=String(env.ALLOWED_ORIGINS||'').split(',').map(x=>x.trim()).filter(Boolean);const validOrigin=allowed.includes(origin);
  const headers={'Cache-Control':'no-store','Content-Type':'application/json','X-Content-Type-Options':'nosniff','Vary':'Origin'};
  if(validOrigin){headers['Access-Control-Allow-Origin']=origin;headers['Access-Control-Allow-Methods']='GET, POST, OPTIONS';headers['Access-Control-Allow-Headers']='Content-Type';}
  const json=(value,status=200)=>Response.json(value,{status,headers});
  const path=new URL(request.url).pathname;
  if(path==='/api/portrait/health'&&request.method==='GET')return json({ready:configured(env),turnstileSiteKey:configured(env)?env.TURNSTILE_SITE_KEY:null,model:env.IMAGE_MODEL||'gpt-image-2',referenceMaxBytes:MAX_IMAGE});
  if(!validOrigin)return json({error:'origin'},403);
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
  if(path!=='/api/portrait/generate')return json({error:'not_found'},404);
  if(request.method!=='POST')return json({error:'method'},405);
  if(!configured(env))return json({error:'unavailable'},503);
  try{
    const ip=request.headers.get('CF-Connecting-IP')||'unknown';
    const quota=await env.RATE_LIMITER.limit({key:'portrait:'+ip});if(!quota.success)return json({error:'rate_limit'},429);
    const length=Number(request.headers.get('content-length'));if(length>MAX_REQUEST)return json({error:'invalid'},413);
    if(!request.headers.get('content-type')?.startsWith('multipart/form-data;'))return json({error:'invalid'},400);
    const bytes=await boundedBytes(request.body,MAX_REQUEST);const form=await new Request(request.url,{method:'POST',headers:{'Content-Type':request.headers.get('content-type')},body:bytes}).formData();
    const prompt=form.get('prompt'),style=form.get('style'),token=form.get('turnstileToken'),image=form.get('image');
    if(typeof prompt!=='string'||!prompt.trim()||prompt.length>1600||!Object.hasOwn(styles,style)||form.get('consent')!=='true'||typeof token!=='string'||!token||token.length>2048)return json({error:'invalid'},400);
    if(image){if(!(image instanceof Blob)||!['image/png','image/jpeg','image/webp'].includes(image.type)||image.size===0||image.size>MAX_IMAGE)return json({error:'invalid'},400);if(!imageMatches(new Uint8Array(await image.slice(0,12).arrayBuffer()),image.type))return json({error:'invalid'},400);}
    const verification=await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({secret:env.TURNSTILE_SECRET_KEY,response:token,remoteip:ip==='unknown'?undefined:ip}),signal:AbortSignal.timeout(10000)});
    const verdict=await verification.json();const hostnames=allowed.map(x=>new URL(x).hostname);
    if(!verdict.success||!hostnames.includes(verdict.hostname)||verdict.action!=='portrait')return json({error:'verification'},403);
    const base=new URL(env.IMAGE_API_BASE_URL||'https://api.openai.com/v1');if(base.protocol!=='https:'||base.username||base.password)return json({error:'unavailable'},503);
    const model=env.IMAGE_MODEL||'gpt-image-2';const params={model,prompt:promptFor(prompt.trim(),style,Boolean(image)),n:1,size:'1024x1024',quality:'medium',output_format:'png'};
    let body,contentType;
    if(image){body=new FormData();for(const [k,v]of Object.entries(params))body.set(k,String(v));body.set('image[]',image,'reference.'+(image.type==='image/jpeg'?'jpg':image.type==='image/webp'?'webp':'png'));}
    else{body=JSON.stringify(params);contentType='application/json';}
    const response=await fetcher(base.href.replace(/\/$/,'')+(image?'/images/edits':'/images/generations'),{method:'POST',headers:{Authorization:`Bearer ${env.IMAGE_API_KEY}`,...(contentType?{'Content-Type':contentType}:{})},body,signal:AbortSignal.timeout(210000)});
    if(!response.ok){if(response.status===402)return json({error:'credits'},503);if(response.status===429)return json({error:'busy'},429);return json({error:'provider'},502);}
    const raw=await boundedBytes(response.body,24*1024*1024);const result=JSON.parse(new TextDecoder().decode(raw));const b64=result.data?.[0]?.b64_json;
    if(typeof b64!=='string'||!b64.startsWith('iVBORw0KGgo')||!/^[A-Za-z0-9+/]+={0,2}$/.test(b64))return json({error:'provider'},502);
    return json({image:'data:image/png;base64,'+b64,model});
  }catch(error){return json({error:error.name==='TimeoutError'||error.name==='AbortError'?'timeout':error.message==='invalid'?'invalid':'provider'},error.message==='invalid'?400:502);}
}
export default {fetch(request,env){return handleRequest(request,env);}};
