const fragments = ["index-i_gIHvSx.part1.txt", "index-i_gIHvSx.part2.txt", "index-i_gIHvSx.part3.txt"];
const base = import.meta.url;
(async () => {
  const parts = await Promise.all(fragments.map(async name => {
    const response = await fetch(new URL(name, base));
    if (!response.ok) throw new Error(`WebGPU code ${name}: ${response.status}`);
    return response.text();
  }));
  const url = URL.createObjectURL(new Blob(parts, { type: 'text/javascript' }));
  try { await import(url); }
  finally { URL.revokeObjectURL(url); }
})().catch(error => {
  console.error('[ASTROMATRIX] WebGPU 版载入失败', error);
  const notice = document.createElement('p');
  notice.textContent = '完整 WebGPU 版载入失败，请返回星尘引力轻量版。';
  notice.style.cssText = 'position:fixed;z-index:9999;bottom:24px;left:24px;padding:12px 16px;background:#0b0e13;color:#ff7183;border:1px solid #ff304a';
  document.body.appendChild(notice);
});
