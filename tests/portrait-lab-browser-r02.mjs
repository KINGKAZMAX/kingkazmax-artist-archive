// Ego Browser acceptance. Run with the explicit local fixture on :8766.
// All generations here are mocked; no real model, credentials or paid calls.
const fs=await import('node:fs/promises');
const output='/Users/mekzenx2/Documents/ChatGPT/375-aokizy网站/output/ai-portrait-lab-r02';
const root='/Users/mekzenx2/Documents/ChatGPT/375-aokizy网站';
await fs.mkdir(output+'/screenshots',{recursive:true});
await fs.writeFile('/tmp/aokizy-r02-invalid.png','not an image');
const task=await taskSpace(17),page=task.page('p1');
const results={testKind:'Local browser acceptance using test-only mocked image API',productionGenerationVerified:false,startedAt:new Date().toISOString(),checks:[],screenshots:[]};
const assert=(value,name,details)=>{results.checks.push({name,passed:!!value,...(details?{details}:{})});console.log((value?'PASS ':'FAIL ')+name);if(!value)throw new Error(name);};
const activate=async(selector)=>{await page.focus(selector);await page.press(selector,'Enter');};
const data=()=>page.evaluate(()=>document.querySelector('#portraitCanvas').toDataURL());
const count=async()=>Number(await (await fetch('http://127.0.0.1:8766/test-count')).text());
const check=async(fn,name)=>assert(await page.evaluate(fn),name);
const screenshot=async(name)=>{await page.evaluate(async()=>{await document.fonts.ready;document.querySelector('#studio').scrollIntoView({behavior:'instant'});await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));});const box=await page.evaluate(()=>{const r=document.querySelector('#studio').getBoundingClientRect();return{x:r.left+scrollX,y:r.top+scrollY,width:r.width,height:r.height,scale:1};});const shot=await page.cdp('Page.captureScreenshot',(name.startsWith('desktop')?{format:'png'}:{format:'png',captureBeyondViewport:true,clip:box}));await fs.writeFile(output+'/screenshots/'+name,Buffer.from(shot.data,'base64'));results.screenshots.push('screenshots/'+name);};
try{
  await page.cdp('Emulation.setDeviceMetricsOverride',{width:1440,height:1100,deviceScaleFactor:1,mobile:false});
  await page.goto('http://127.0.0.1:8766/?lang=en&acceptance=r02-run-'+Date.now()+'#studio');
  await page.evaluate(()=>document.querySelector('#studio').scrollIntoView({behavior:'instant'}));
  await page.waitForFunction(()=>document.querySelector('#portraitCanvas').style.display==='block'&&!document.querySelector('#generatePortrait').disabled);
  await check(()=>document.querySelector('#portraitCanvas').width===1024&&document.querySelector('#portraitCanvas').height===1024,'Canvas exports at 1024 × 1024');
  await check(()=>!document.querySelector('#createPanel').hidden&&document.querySelector('#refinePanel').hidden,'Imagine is the initial active mode');
  await screenshot('desktop-en-create.png');
  for(const template of ['trainer','myth','pilot']){await activate(`[data-prompt-example="${template}"]`);await check(()=>document.querySelector('#characterPrompt').value.length>60&&document.querySelector('#promptCount').textContent===document.querySelector('#characterPrompt').value.length+' / 1600','Template '+template+' populates description and count');}
  for(const style of ['soft','pixel','archive']){await page.focus(`[name="drawingStyle"][value="${style}"]`);await page.press(`[name="drawingStyle"][value="${style}"]`,'Space');assert(await page.evaluate(s=>document.querySelector('#generationStyle').value===s&&document.querySelector(`[name="drawingStyle"][value="${s}"]`).checked,style),'Style '+style+' updates submitted value');}
  await page.focus('#createTab');await page.press('#createTab','ArrowRight');
  await check(()=>document.activeElement.id==='refineTab'&&!document.querySelector('#refinePanel').hidden&&document.querySelector('#createPanel').hidden,'Keyboard ArrowRight activates and focuses Remix');
  await page.press('#refineTab','Home');await check(()=>document.activeElement.id==='createTab'&&!document.querySelector('#createPanel').hidden,'Keyboard Home returns to Imagine');
  await page.press('#createTab','Tab');await check(()=>document.activeElement.id==='characterPrompt','Tab reaches the prompt without entering hidden panels');
  await activate('#refineTab');const initial=await data();
  await page.evaluate(()=>{document.querySelector('#zoom').value='150';document.querySelector('#zoom').dispatchEvent(new Event('input'));});
  await page.waitForFunction(expected=>document.querySelector('#portraitCanvas').toDataURL()!==expected,initial);
  await activate('#resetPortrait');await page.waitForFunction(expected=>document.querySelector('#portraitCanvas').toDataURL()===expected,initial);
  assert(await data()===initial,'Reset restores exact initial canvas pixels');
  await activate('[data-material="pixel"]');await page.waitForFunction(expected=>document.querySelector('#portraitCanvas').toDataURL()!==expected,initial);assert(await data()!==initial,'Pixel finish renders a visibly different bitmap');await activate('#resetPortrait');
  await page.waitForFunction(expected=>document.querySelector('#portraitCanvas').toDataURL()===expected,initial);
  await page.setInputFiles('#upload',['/tmp/aokizy-r02-invalid.png']);await page.waitForFunction(()=>document.querySelector('#editorStatus').dataset.error==='true');assert(await data()===initial,'Invalid local upload preserves current portrait');
  await check(()=>document.querySelector('#characterSelect').options.length===150,'Archive has 148 characters plus cover and uploaded-image options');
  await page.selectOption('#characterSelect','148');await page.waitForFunction(()=>document.querySelector('#portraitSourceName').textContent==='Xuannu');await check(()=>!document.querySelector('#download').disabled,'Archive character 148 is selectable and downloadable');
  await page.selectOption('#characterSelect','cover');await page.waitForFunction(()=>document.querySelector('#portraitSourceName').textContent==='Cover character');
  await screenshot('desktop-en-refine.png');
  const downloadPromise=page.waitForEvent('download',{timeout:15000});await activate('#download');const download=await downloadPromise;await download.saveAs(output+'/screenshots/downloaded-portrait-1024.png');const png=await fs.readFile(output+'/screenshots/downloaded-portrait-1024.png');assert(png.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))&&png.readUInt32BE(16)===1024&&png.readUInt32BE(20)===1024,'Actual browser download is a valid 1024 × 1024 PNG');
  await activate('#createTab');
  await page.setInputFiles('#referenceUpload',[root+'/assets/characters/frontal-red-cap-01.png']);await page.waitForFunction(()=>!document.querySelector('#referencePreview').hidden&&document.querySelector('#referencePreview').naturalWidth>0);
  await check(()=>document.querySelector('#addReference').textContent==='Replace reference'&&!document.querySelector('#removeReference').hidden,'Reference upload shows thumbnail, replace and remove controls');
  const referenceBefore=await page.evaluate(()=>document.querySelector('#referencePreview').src);
  await page.setInputFiles('#referenceUpload',['/tmp/aokizy-r02-invalid.png']);await page.waitForFunction(()=>document.querySelector('#generationStatus').dataset.error==='true');assert(await page.evaluate(()=>document.querySelector('#referencePreview').src)===referenceBefore,'Invalid reference preserves previous valid reference');
  await activate('#removeReference');await check(()=>document.querySelector('#referencePreview').hidden&&document.querySelector('#removeReference').hidden,'Remove reference restores empty upload state');
  await activate('#useAsReference');await page.waitForFunction(()=>!document.querySelector('#referencePreview').hidden);await check(()=>!document.querySelector('#createPanel').hidden&&document.querySelector('#referenceInfo').textContent.includes('my-character.png'),'Use as reference copies current canvas and opens Imagine');
  await page.fill('#characterPrompt','R02 first character: midnight explorer with pale blue scarf.');await page.focus('[name="drawingStyle"][value="soft"]');await page.press('[name="drawingStyle"][value="soft"]','Space');await page.focus('#generationConsent');await page.press('#generationConsent','Space');await page.waitForFunction(()=>document.querySelector('#generationConsent').checked);const before=await count();
  await activate('#generatePortrait');await page.waitForFunction(()=>document.querySelector('#generationForm').getAttribute('aria-busy')==='true');
  await check(()=>document.querySelector('#generatePortrait').disabled&&document.querySelector('#generationFields').disabled&&document.querySelector('.lab-editor').inert&&document.querySelector('#useAsReference').disabled&&!document.querySelector('#generationProgress').hidden,'Generation locks conflicting controls and exposes progress');
  await page.evaluate(()=>{document.querySelector('#generationForm').dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));document.querySelector('#generationForm').dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));});
  await page.waitForFunction(()=>document.querySelector('#historyList').children.length===1&&!document.querySelector('#generationProgress').hidden===false,undefined,{timeout:15000});assert(await count()===before+1,'Repeated submit events create exactly one API request');
  await check(()=>!document.querySelector('#refinePanel').hidden&&document.querySelector('#portraitSourceName').textContent==='Your AI character'&&!document.querySelector('#sessionHistory').hidden,'Successful generation opens refinement and session history');
  const submitted=await (await fetch('http://127.0.0.1:8766/test-last')).json();assert(submitted.style==='soft'&&submitted.hasImage&&submitted.consent==='true','Request carries selected style, reference image and consent');
  const successPixels=await data();await activate('#createTab');await page.fill('#characterPrompt','R02 second character: orange flight jacket.');await page.focus('[name="drawingStyle"][value="pixel"]');await page.press('[name="drawingStyle"][value="pixel"]','Space');await activate('#generatePortrait');await page.waitForFunction(()=>document.querySelector('#historyList').children.length===2,undefined,{timeout:15000});await activate('#historyList button:nth-child(2)');
  await page.waitForFunction(()=>document.querySelector('#editorStatus').textContent.includes('description restored'));await check(()=>document.querySelector('#characterPrompt').value==='R02 first character: midnight explorer with pale blue scarf.'&&document.querySelector('#generationStyle').value==='soft'&&document.querySelector('#historyList button:nth-child(2)').getAttribute('aria-pressed')==='true','History restores matching description, style and selected state');
  await activate('#createTab');await page.fill('#characterPrompt','TEST FAILURE');await activate('#generatePortrait');await page.waitForFunction(()=>document.querySelector('#generationStatus').dataset.error==='true',undefined,{timeout:15000});assert(await data()===successPixels,'API failure preserves the last successful portrait');await check(()=>document.querySelector('#historyList').children.length===2&&!document.querySelector('#createPanel').hidden&&!document.querySelector('#generatePortrait').disabled,'Failure preserves history and restores editable creation mode');
  await activate('[data-lang="zh-Hant"]');await check(()=>document.querySelector('#generationStatus').textContent.includes('額度不足')&&document.querySelector('#generatePortrait').textContent.includes('生成角色形象')&&document.querySelector('#portraitSourceName').textContent==='你的 AI 角色','Traditional Chinese localizes status, action and source');
  for(const width of [390,320]){await page.cdp('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,mobile:true});await check(()=>document.documentElement.scrollWidth<=innerWidth,'Mobile '+width+' px has no horizontal overflow');const geometry=await page.evaluate(()=>[...document.querySelectorAll('.style-option')].map(el=>{const r=el.getBoundingClientRect();return{width:r.width,height:r.height};}));assert(geometry.every(r=>r.width>=70&&r.height>=44),'Mobile '+width+' px style cards retain usable hit targets');await screenshot('mobile-'+width+'-zh-create.png');await activate('#refineTab');await check(()=>document.documentElement.scrollWidth<=innerWidth,'Mobile '+width+' px refinement has no horizontal overflow');await screenshot('mobile-'+width+'-zh-refine.png');await activate('#createTab');}
  await page.cdp('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await activate('[data-lang="en"]');await page.waitForFunction(()=>document.documentElement.lang==='en');await screenshot('mobile-390-en-create.png');
  await activate('#clearHistory');await page.waitForFunction(()=>document.querySelector('#historyList').children.length===0);await check(()=>document.querySelector('#sessionHistory').hidden&&document.querySelector('#historyList').children.length===0&&!document.querySelector('#download').disabled,'Clear history removes thumbnails and retains downloadable canvas');assert(await data()===successPixels,'Clearing history preserves canvas pixels');
  await page.cdp('Emulation.setDeviceMetricsOverride',{width:1440,height:1100,deviceScaleFactor:1,mobile:false});await page.goto('http://127.0.0.1:8765/?lang=en&acceptance=r02-final#studio');await page.evaluate(()=>document.querySelector('#studio').scrollIntoView({behavior:'instant'}));await page.waitForFunction(()=>document.querySelector('#serviceBadge').dataset.state!=='checking');const serviceState=await page.evaluate(()=>({state:document.querySelector('#serviceBadge').dataset.state,disabled:document.querySelector('#generatePortrait').disabled}));assert(serviceState.state==='ready'||serviceState.state==='offline'&&serviceState.disabled,'Local production page truthfully reflects service availability',serviceState);
  results.finishedAt=new Date().toISOString();results.passed=results.checks.every(c=>c.passed);await fs.writeFile(output+'/browser-validation.json',JSON.stringify(results,null,2)+'\n');console.log(JSON.stringify({passed:results.passed,checks:results.checks.length,screenshots:results.screenshots.length}));
}catch(error){results.finishedAt=new Date().toISOString();results.passed=false;results.error=error.message;await fs.writeFile(output+'/browser-validation.json',JSON.stringify(results,null,2)+'\n');throw error;}

// Targeted regression checks for reference preparation and archive deep links.
{
const fs=await import('node:fs/promises');
const root='/Users/mekzenx2/Documents/ChatGPT/375-aokizy网站';
const results=JSON.parse(await fs.readFile(root+'/output/ai-portrait-lab-r02/browser-validation.json','utf8'));
const page=(await taskSpace(17)).page('p1');
const assert=(value,name,details)=>{results.checks.push({name,passed:!!value,...(details?{details}:{})});console.log((value?'PASS ':'FAIL ')+name);if(!value)throw new Error(name);};
const count=async()=>Number(await(await fetch('http://127.0.0.1:8766/test-count')).text());
try{
await page.goto('http://127.0.0.1:8766/?lang=en&targeted='+Date.now()+'#studio');
await page.evaluate(()=>document.querySelector('#studio').scrollIntoView({behavior:'instant'}));
await page.waitForFunction(()=>document.querySelector('#portraitCanvas').style.display==='block'&&!document.querySelector('#generatePortrait').disabled);
assert(await page.evaluate(()=>document.querySelector('#characterSelect option[value="custom"]').disabled),'Empty uploaded-image selector cannot be chosen without an image');
await page.evaluate(()=>{document.querySelector('#characterPrompt').value='Targeted pending-reference test.';document.querySelector('#generationConsent').checked=true;const descriptor=Object.getOwnPropertyDescriptor(HTMLImageElement.prototype,'src');window.__qaOriginalImageSrc=descriptor;let next=true;Object.defineProperty(HTMLImageElement.prototype,'src',{...descriptor,set(value){if(next&&value.startsWith('blob:')){next=false;setTimeout(()=>descriptor.set.call(this,value),1200);}else descriptor.set.call(this,value);}});});
const before=await count();
await page.setInputFiles('#referenceUpload',[root+'/assets/characters/frontal-red-cap-01.png']);
assert(await page.evaluate(()=>document.querySelector('#generatePortrait').disabled),'Reference decoding temporarily disables generation');
await page.evaluate(()=>document.querySelector('#generationForm').dispatchEvent(new Event('submit',{bubbles:true,cancelable:true})));
assert(await count()===before,'Submitting during reference decoding does not call API');
await page.waitForFunction(()=>!document.querySelector('#generatePortrait').disabled&&!document.querySelector('#referencePreview').hidden,undefined,{timeout:5000});
await page.evaluate(()=>{Object.defineProperty(HTMLImageElement.prototype,'src',window.__qaOriginalImageSrc);delete window.__qaOriginalImageSrc;document.querySelector('#generationForm').requestSubmit();});
await page.waitForFunction(()=>document.querySelector('#historyList').children.length===1&&document.querySelector('#generationProgress').hidden,undefined,{timeout:15000});
const submission=await(await fetch('http://127.0.0.1:8766/test-last')).json();
assert(submission.imageType==='image/png'&&Math.max(submission.imageWidth,submission.imageHeight)===500,'Reference is converted to PNG with a maximum 500 px dimension',submission);
for(let index=2;index<=7;index++){await page.evaluate(i=>{window.PortraitLab.setMode('create');document.querySelector('#characterPrompt').value='Targeted session history test '+i;document.querySelector('#generationForm').requestSubmit();},index);await page.waitForFunction(i=>document.querySelector('#historyList button:first-child span')?.textContent===String(i).padStart(2,'0')&&document.querySelector('#generationProgress').hidden,index,{timeout:15000});}
assert(await page.evaluate(()=>document.querySelector('#historyList').children.length===6&&document.querySelector('#historyList button:last-child span').textContent==='02'),'Session history keeps the six most recent generations and discards the oldest');
await page.goto('http://127.0.0.1:8765/?lang=en&lab=148&targeted='+Date.now()+'#studio');
await page.waitForFunction(()=>document.querySelector('#portraitSourceName').textContent==='Xuannu'&&!document.querySelector('#refinePanel').hidden,undefined,{timeout:15000});
assert(await page.evaluate(()=>document.querySelector('#characterSelect').value==='148'&&document.querySelector('#refineTab').getAttribute('aria-selected')==='true'),'Archive deep link ?lab=148 opens Xuannu in refinement mode');
await page.goto('http://127.0.0.1:8765/?lang=en&qa-complete='+Date.now()+'#studio');
await page.cdp('Emulation.setDeviceMetricsOverride',{width:1440,height:1100,deviceScaleFactor:1,mobile:false});
await page.evaluate(()=>document.querySelector('#studio').scrollIntoView({behavior:'instant'}));
await page.waitForFunction(()=>!document.querySelector('#createPanel').hidden&&document.querySelector('#portraitCanvas').style.display==='block');
results.finishedAt=new Date().toISOString();results.passed=results.checks.every(c=>c.passed);await fs.writeFile(root+'/output/ai-portrait-lab-r02/browser-validation.json',JSON.stringify(results,null,2)+'\n');console.log(JSON.stringify({passed:results.passed,checks:results.checks.length}));
}catch(error){results.passed=false;results.error=error.message;await fs.writeFile(root+'/output/ai-portrait-lab-r02/browser-validation.json',JSON.stringify(results,null,2)+'\n');throw error;}

}
