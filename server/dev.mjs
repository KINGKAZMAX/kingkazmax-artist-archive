// Local host: API secrets are read only from environment; no request bodies are logged.
import {fileURLToPath} from 'node:url';
import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {Readable} from 'node:stream';
import {handleRequest} from './portrait-api.mjs';
import {localEnvironment} from './local-environment.mjs';
const root=resolve(fileURLToPath(new URL('..',import.meta.url))),port=Number(process.env.PORT||8787),origin=`http://127.0.0.1:${port}`;
const counts=new Map();const env={...localEnvironment(),ALLOWED_ORIGINS:process.env.ALLOWED_ORIGINS||origin,RATE_LIMITER:{async limit({key}){const now=Date.now();for(const [k,v]of counts)if(now-v.start>=60000)counts.delete(k);const value=counts.get(key)||{start:now,n:0};value.n++;counts.set(key,value);return {success:value.n<=2};}}};
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.webp':'image/webp','.json':'application/json'};
createServer(async(req,res)=>{try{const url=new URL(req.url,origin);if(url.pathname.startsWith('/api/')){const request=new Request(url,{method:req.method,headers:req.headers,...(['GET','HEAD'].includes(req.method)?{}:{body:Readable.toWeb(req),duplex:'half'})});const response=await handleRequest(request,env);res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));return;}
const relative=decodeURIComponent(url.pathname).replace(/^\//,'')||'index.html';const file=resolve(root,relative);if(!file.startsWith(root+sep)||relative.split('/').some(p=>p.startsWith('.'))||relative.startsWith('server/')||!['.html','.js','.css','.png','.webp','.json','.ico'].includes(extname(file))){res.writeHead(404);res.end();return;}const info=await stat(file);if(!info.isFile())throw Error();res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(await readFile(file));}catch{res.writeHead(404);res.end('Not found');}}).listen(port,'127.0.0.1',()=>console.log(`Portrait Lab: ${origin}/#studio`));
