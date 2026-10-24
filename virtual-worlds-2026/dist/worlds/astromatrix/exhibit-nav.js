(() => {
  const page = location.pathname.match(/\/(01|02|03|05)\//)?.[1] || '';
  const items = [
    ['01', '星渊漫游', '01/'],
    ['02', '事件视界', '02/'],
    ['03', '星尘引力', '03/'],
    ['05', '深空信使', '05/?local=1'],
  ];
  const nav = document.createElement('nav');
  nav.id = 'am-nav';
  nav.setAttribute('aria-label', 'ASTROMATRIX 展项导航');
  const home = document.createElement('a');
  home.href = '../';
  home.textContent = '← ASTROMATRIX';
  nav.append(home);
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.textContent = 'EXPLORE +';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'am-nav-panel');
  nav.append(toggle);
  const panel = document.createElement('div');
  panel.id = 'am-nav-panel';
  panel.setAttribute('aria-hidden', 'true');
  items.forEach(([id, label, href]) => {
    const a = document.createElement('a');
    a.href = '../' + href;
    a.textContent = `${id}  ${label}`;
    if (id === page) a.setAttribute('aria-current', 'page');
    panel.append(a);
  });
  const notice = document.createElement('a');
  notice.href = '../NOTICE.md';
  notice.textContent = 'PROJECT & CREDITS ↗';
  panel.append(notice);
  nav.append(panel);
  document.body.append(nav);
  const close = () => {
    panel.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'EXPLORE +';
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
    toggle.textContent = open ? 'CLOSE ×' : 'EXPLORE +';
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.addEventListener('pointerdown', e => { if (!nav.contains(e.target)) close(); });

})();
