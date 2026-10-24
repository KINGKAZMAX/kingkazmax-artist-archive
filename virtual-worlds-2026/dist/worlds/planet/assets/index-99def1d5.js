const fragments = ['index-99def1d5.part1.txt', 'index-99def1d5.part2.txt', 'index-99def1d5.part3.txt'];
const base = import.meta.url;
(async () => {
  const parts = await Promise.all(fragments.map(async name => {
    const response = await fetch(new URL(name, base));
    if (!response.ok) throw new Error(`World code ${name}: ${response.status}`);
    return response.text();
  }));
  const url = URL.createObjectURL(new Blob(parts, { type: 'text/javascript' }));
  try { await import(url); }
  finally { URL.revokeObjectURL(url); }
})().catch(error => {
  console.error('[黔图] 世界载入失败', error);
  const notice = document.createElement('p');
  notice.textContent = '世界资源载入失败，请刷新页面重试。';
  notice.style.cssText = 'position:fixed;z-index:9999;bottom:24px;left:24px;padding:12px 16px;background:#130e10;color:#ff7183;border:1px solid #ff304a';
  document.body.appendChild(notice);
});
