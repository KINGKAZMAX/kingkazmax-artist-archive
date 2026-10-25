// Explicit operator-only integration test. Never imported by the deployed Worker.
// Runs one billable request; keys remain in this process environment.
import {mkdir, writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {handleRequest} from './portrait-api.mjs';
import {localEnvironment} from './local-environment.mjs';

if (!process.argv.includes('--run-paid')) {
  console.error('No image requested. To authorize this paid integration test, pass --run-paid.');
  process.exit(2);
}
const key=localEnvironment().IMAGE_API_KEY;
if(!key){console.error('Set IMAGE_API_KEY in the process environment. No key was found.');process.exit(2);}
const directory=resolve(process.env.PORTRAIT_SMOKE_OUTPUT||'output/ai-portrait-lab-r02');
await mkdir(directory,{recursive:true});
const origin='https://kingkazmax.github.io';
const env={IMAGE_API_KEY:key,IMAGE_API_BASE_URL:process.env.IMAGE_API_BASE_URL||'https://api.openai.com/v1',IMAGE_MODEL:process.env.IMAGE_MODEL||'gpt-image-2',ALLOWED_ORIGINS:origin,TURNSTILE_SITE_KEY:'operator-local-test',TURNSTILE_SECRET_KEY:'operator-local-test',RATE_LIMITER:{limit:async()=>({success:true})}};
const pythonTransport=process.argv.includes('--python-transport');
const report={testedAt:new Date().toISOString(),model:env.IMAGE_MODEL,productionHandler:true,realImageProvider:true,transport:pythonTransport?'Python HTTPS operator transport':'native fetch',turnstile:'mocked only in this operator test process; production protection is unchanged',publicDeploymentVerified:false,requests:[]};
let usage=null;
let upstreamStatus=null;
let upstreamErrorCode=null;
let upstreamErrorType=null;
let upstreamErrorCategory=null;
let retryAfterSeconds=null;
async function operatorFetch(url,options){
  const request=new Request(url,options);
  const payload={url:String(url),method:request.method,headers:Object.fromEntries(request.headers),body:Buffer.from(await request.arrayBuffer()).toString('base64')};
  const result=await new Promise((resolve,reject)=>{
    const child=spawn('python3',[fileURLToPath(new URL('./operator-http.py',import.meta.url))],{stdio:['pipe','pipe','pipe']});
    const chunks=[];let size=0;const timer=setTimeout(()=>child.kill(),220000);
    child.stdout.on('data',chunk=>{size+=chunk.length;if(size>48*1024*1024)child.kill();else chunks.push(chunk);});
    child.stderr.resume();
    child.on('error',reject);
    child.on('close',code=>{clearTimeout(timer);if(code!==0)return reject(new Error('Operator transport failed'));try{resolve(JSON.parse(Buffer.concat(chunks).toString()));}catch{reject(new Error('Operator transport failed'));}});
    child.stdin.on('error',()=>{});child.stdin.end(JSON.stringify(payload));
  });
  return new Response(Buffer.from(result.body,'base64'),{status:result.status,headers:{'Content-Type':result.contentType||'application/json',...(result.retryAfter?{'Retry-After':result.retryAfter}:{})}});
}
const fetcher=async(url,options)=>{
  if(String(url)==='https://challenges.cloudflare.com/turnstile/v0/siteverify')return Response.json({success:true,hostname:'kingkazmax.github.io',action:'portrait'});
  const response=await (pythonTransport?operatorFetch(url,options):fetch(url,options));
  upstreamStatus=response.status;
  if(response.ok){const data=await response.clone().json();usage=data.usage||null;}
  else{
    try{
      const data=await response.clone().json();
      const safeCode=value=>typeof value==='string'&&/^[A-Za-z_][A-Za-z0-9_]{0,79}$/.test(value)?value:null;
      upstreamErrorCode=safeCode(data.error?.code);upstreamErrorType=safeCode(data.error?.type);
      const message=String(data.error?.message||'').toLowerCase();
      upstreamErrorCategory=/billing|credit|balance|budget|insufficient quota|payment/.test(message)?'billing_or_budget':/rate limit|too many|capacity|per minute|per day/.test(message)?'rate_or_capacity':/verif/.test(message)?'account_verification':'unclassified';
    }catch{upstreamErrorCode='non_json';}
    const retry=Number(response.headers.get('Retry-After'));retryAfterSeconds=Number.isFinite(retry)&&retry>0?retry:null;
  }
  return response;
};
async function run(kind,description){
  const form=new FormData();
  for(const [name,value]of Object.entries({prompt:description,consent:'true',turnstileToken:'operator-local-test'}))form.set(name,value);
  usage=null;upstreamStatus=null;upstreamErrorCode=null;upstreamErrorType=null;upstreamErrorCategory=null;retryAfterSeconds=null;const start=performance.now();
  const response=await handleRequest(new Request('https://operator-test.invalid/api/portrait/generate',{method:'POST',headers:{Origin:origin},body:form}),env,fetcher);
  const result=await response.json();
  const record={kind,prompt:description,fixedStyle:true,httpStatus:response.status,upstreamHttpStatus:upstreamStatus,upstreamErrorCode,upstreamErrorType,upstreamErrorCategory,retryAfterSeconds,durationSeconds:Number(((performance.now()-start)/1000).toFixed(2)),usage};
  if(response.ok&&typeof result.image==='string'){
    const bytes=Buffer.from(result.image.split(',')[1],'base64');
    const name=`live-${kind}-gpt-image-2.png`;
    await writeFile(resolve(directory,name),bytes);
    Object.assign(record,{output:name,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});
  }else record.error=result.error||'provider';
  report.requests.push(record);
  await writeFile(resolve(directory,'live-integration.json'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(record));
  if(!response.ok)process.exitCode=1;
  return record.output?resolve(directory,record.output):null;
}
await run('concept','An ice-lotus mountain spirit with long silver hair, cyan eyes, a crown of translucent lotus petals and midnight-blue ceremonial robes. Serene and enigmatic.');
