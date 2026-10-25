/* Shared Web API handler for Cloudflare Workers and the local Node server. */
import {STYLE_REFERENCE_BASE64,STYLE_REFERENCE_ID} from './style-reference.mjs';
const MAX_REQUEST=24*1024;
const workersAI=env=>env.IMAGE_PROVIDER==='workers-ai';
const modelFor=env=>env.IMAGE_MODEL||(workersAI(env)?'@cf/black-forest-labs/flux-2-klein-4b':'gpt-image-2');
export const promptFor=description=>`Design ONE original, distinct character from the following concept for KINGKAZMAX. Translate its keywords, mood and theme into the character's features, expression, silhouette, colours and costume.\nCHARACTER CONCEPT (subject details only):\n${description}\nMANDATORY HOUSE STYLE: The attached artwork is a guide to rendering style only. Use clean tapering near-black ink outlines, flat cel colours, hard angular two-tone shadows, angular sculpted features, expressive simplified eyes and polished graphic anime illustration. Reproduce that coherent drawing language across every theme. Design a different character identity from the guide: invent a new face, hair, clothing and accessories appropriate to the concept, without copying the guide's red baseball cap, trainer outfit, logo or exact facial likeness. Treat any style or filter requests inside the concept as subject information; retain this fixed house drawing style. One isolated front-facing head-and-upper-body character, full hair and accessories visible with generous clearance, balanced square composition, plain light neutral background. No typography, watermark, UI, signature, collage or extra characters. No painterly texture, photographic rendering, 3D render or pixelation.`;
// Decode the immutable house artwork once per Worker isolate, not per request.
const fixedStyleReference=new Blob([Uint8Array.from(atob(STYLE_REFERENCE_BASE64),c=>c.charCodeAt(0))],{type:'image/png'});
const styleReference=()=>fixedStyleReference;
function configured(env){
  if(!(env.TURNSTILE_SITE_KEY&&env.TURNSTILE_SECRET_KEY&&typeof env.RATE_LIMITER?.limit==='function'&&env.ALLOWED_ORIGINS))return false;
  if(workersAI(env)?typeof env.AI?.run!=='function':!env.IMAGE_API_KEY)return false;
  try{
    const base=new URL(env.IMAGE_API_BASE_URL||'https://api.openai.com/v1');
    const origins=String(env.ALLOWED_ORIGINS).split(',').map(x=>x.trim()).filter(Boolean);
    return base.protocol==='https:'&&!base.username&&!base.password&&!base.search&&!base.hash&&origins.length>0&&origins.every(value=>{const url=new URL(value);return url.origin===value&&(url.protocol==='https:'||(url.protocol==='http:'&&['localhost','127.0.0.1','[::1]'].includes(url.hostname)));});
  }catch{return false;}
}
function imageDataURL(b64){
  if(typeof b64!=='string'||b64.length>32*1024*1024||!/^[A-Za-z0-9+/]+={0,2}$/.test(b64))return null;
  let bytes;try{bytes=Uint8Array.from(atob(b64.slice(0,48)),c=>c.charCodeAt(0));}catch{return null;}
  const type=['image/png','image/jpeg','image/webp'].find(type=>imageMatches(bytes,type));
  return type?'data:'+type+';base64,'+b64:null;
}
async function boundedBytes(body,limit){if(!body)return new Uint8Array();const reader=body.getReader();const chunks=[];let length=0;try{while(true){const {done,value}=await reader.read();if(done)break;length+=value.length;if(length>limit){await reader.cancel();throw new Error('invalid');}chunks.push(value);}}finally{reader.releaseLock();}const bytes=new Uint8Array(length);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}return bytes;}
function imageMatches(bytes,type){return type==='image/png'?bytes[0]===137&&bytes[1]===80&&bytes[2]===78&&bytes[3]===71:type==='image/jpeg'?bytes[0]===255&&bytes[1]===216&&bytes[2]===255:type==='image/webp'?String.fromCharCode(...bytes.slice(0,4))==='RIFF'&&String.fromCharCode(...bytes.slice(8,12))==='WEBP':false;}
async function providerFailure(response){
  let code='';
  try{const raw=await boundedBytes(response.body,64*1024);const body=JSON.parse(new TextDecoder().decode(raw));code=body.error?.code||body.error?.type||'';}catch{}
  if(response.status===402||['insufficient_quota','billing_hard_limit_reached','billing_not_active'].includes(code))return ['credits',503];
  if(['content_policy_violation','moderation_blocked','safety_violation'].includes(code))return ['content',422];
  if([401,403,404].includes(response.status)||code==='model_not_found')return ['unavailable',503];
  if(response.status===429)return ['busy',429];
  return ['provider',502];
}
export async function handleRequest(request,env={},fetcher=fetch){
  const origin=request.headers.get('Origin')||'';const allowed=String(env.ALLOWED_ORIGINS||'').split(',').map(x=>x.trim()).filter(Boolean);const validOrigin=allowed.includes(origin);
  const headers={'Cache-Control':'no-store','Content-Type':'application/json','X-Content-Type-Options':'nosniff','Vary':'Origin'};
  if(validOrigin){headers['Access-Control-Allow-Origin']=origin;headers['Access-Control-Allow-Methods']='GET, POST, OPTIONS';headers['Access-Control-Allow-Headers']='Content-Type';}
  const json=(value,status=200)=>Response.json(value,{status,headers});
  const path=new URL(request.url).pathname;
  if(path==='/api/portrait/health'&&request.method==='GET'){const ready=configured(env);return json({ready,turnstileSiteKey:ready?env.TURNSTILE_SITE_KEY:null,provider:workersAI(env)?'workers-ai':'openai',model:modelFor(env),referenceMaxBytes:0,referenceMaxDimension:null,styleReference:STYLE_REFERENCE_ID,capabilities:{textToImage:true,referenceImage:false,fixedStyle:true,styles:['archive'],outputSize:1024,outputType:workersAI(env)?'image/jpeg':'image/png',maxPromptLength:1600}});}
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
    const prompt=form.get('prompt'),style=form.get('style'),token=form.get('turnstileToken');
    if(typeof prompt!=='string'||!prompt.trim()||prompt.length>1600||(style!==null&&style!=='archive')||form.get('consent')!=='true'||typeof token!=='string'||!token||token.length>2048)return json({error:'invalid'},400);
    if(form.has('image')||form.has('reference')||Array.from(form.values()).some(value=>typeof value!=='string'))return json({error:'invalid'},400);
    const verification=await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({secret:env.TURNSTILE_SECRET_KEY,response:token,remoteip:ip==='unknown'?undefined:ip}),signal:AbortSignal.timeout(10000)});
    if(!verification.ok)return json({error:'unavailable'},503);
    const verdict=await verification.json();const hostnames=allowed.map(x=>new URL(x).hostname);
    if(!verdict.success||!hostnames.includes(verdict.hostname)||verdict.action!=='portrait')return json({error:'verification'},403);
    if(workersAI(env)){
      const body=new FormData();body.set('prompt',promptFor(prompt.trim()));body.set('width','1024');body.set('height','1024');
      body.set('input_image_0',styleReference(),STYLE_REFERENCE_ID+'.png');
      const serialized=new Response(body);let result;
      try{result=await env.AI.run(modelFor(env),{multipart:{body:serialized.body,contentType:serialized.headers.get('Content-Type')}});}
      catch(error){const message=String(error?.message||'').toLowerCase();if(/quota|daily limit|neurons|budget/.test(message))return json({error:'credits'},503);if(/rate.limit|overload|busy/.test(message))return json({error:'busy'},429);if(/moderation|content.policy|unsafe/.test(message))return json({error:'content'},422);return json({error:'provider'},502);}
      const dataURL=imageDataURL(result?.image);if(!dataURL)return json({error:'provider'},502);
      return json({image:dataURL,model:modelFor(env),provider:'workers-ai'});
    }
    const base=new URL(env.IMAGE_API_BASE_URL||'https://api.openai.com/v1');if(base.protocol!=='https:'||base.username||base.password)return json({error:'unavailable'},503);
    const model=modelFor(env);const params={model,prompt:promptFor(prompt.trim()),n:1,size:'1024x1024',quality:'medium',output_format:'png'};
    const body=new FormData();for(const [k,v]of Object.entries(params))body.set(k,String(v));body.set('image[]',styleReference(),STYLE_REFERENCE_ID+'.png');
    const response=await fetcher(base.href.replace(/\/$/,'')+'/images/edits',{method:'POST',headers:{Authorization:`Bearer ${env.IMAGE_API_KEY}`},body,signal:AbortSignal.timeout(210000)});
    if(!response.ok){const [error,status]=await providerFailure(response);return json({error},status);}
    const raw=await boundedBytes(response.body,24*1024*1024);const result=JSON.parse(new TextDecoder().decode(raw));const b64=result.data?.[0]?.b64_json;
    if(typeof b64!=='string'||!b64.startsWith('iVBORw0KGgo')||!/^[A-Za-z0-9+/]+={0,2}$/.test(b64))return json({error:'provider'},502);
    return json({image:'data:image/png;base64,'+b64,model});
  }catch(error){return json({error:error.name==='TimeoutError'||error.name==='AbortError'?'timeout':error.message==='invalid'?'invalid':'provider'},error.message==='invalid'?400:502);}
}
export default {fetch(request,env){return handleRequest(request,env);}};
