// TEST ONLY. Deterministic API fixture; never used by the deployed worker.
import {fileURLToPath} from 'node:url';
import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
let requests=0,lastRequest=null;
createServer(async(req,res)=>{try{const path=new URL(req.url,'http://127.0.0.1:8766').pathname;
if(path==='/lab-config.js'){res.setHeader('Content-Type','text/javascript');res.end('window.KKM_LAB_CONFIG = { apiBaseUrl: "" };');return;}
if(path==='/api/portrait/health'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify({ready:true,turnstileSiteKey:null}));return;}
if(path==='/api/portrait/generate'){const chunks=[];for await(const chunk of req)chunks.push(chunk);const form=await new Request('http://test.local',{method:'POST',headers:req.headers,body:Buffer.concat(chunks)}).formData();requests++;const image=form.get('image'),imageBytes=image?Buffer.from(await image.arrayBuffer()):null;lastRequest={prompt:form.get('prompt'),style:form.get('style'),consent:form.get('consent'),hasImage:!!image,imageType:image?.type||null,imageWidth:imageBytes?.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))?imageBytes.readUInt32BE(16):null,imageHeight:imageBytes?.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))?imageBytes.readUInt32BE(20):null};res.setHeader('Content-Type','application/json');await new Promise(resolve=>setTimeout(resolve,700));if(form.get('prompt')==='TEST FAILURE'){res.writeHead(503);res.end(JSON.stringify({error:'credits'}));return;}res.end(JSON.stringify({image:'data:image/png;base64,'+(await readFile(resolve(root,'assets/characters/frontal-red-cap-01.png'))).toString('base64')}));return;}
if(path==='/test-count'){res.end(String(requests));return;}
if(path==='/test-last'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify(lastRequest));return;}
const file=resolve(root,'.'+(path==='/'?'/index.html':decodeURIComponent(path)));if(!file.startsWith(root+'/')||path.includes('..')||path.includes('/.'))throw Error();const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.webp':'image/webp'};res.setHeader('Content-Type',types[extname(file)]||'text/plain');res.setHeader('Cache-Control','no-store');res.end(await readFile(file));}catch{res.writeHead(404);res.end();}}).listen(8766,'127.0.0.1',()=>console.log('TEST fixture http://127.0.0.1:8766'));
