(() => {
  const root = document.getElementById('launch');
  if (!root) return;
  const get = id => document.getElementById(id);
  const cover = get('launch-cover');
  const coverLink = get('launch-cover-link');
  const runLink = get('launch-run');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fallbackCover = 'assets/ai-night-courtyard.webp';
  let worlds = [];
  let selected = 0;
  let firstCoverReady = false;
  let changeToken = 0;

  function progress(value, label) {
    const amount = Math.max(0, Math.min(100, value));
    get('launch-progress-fill').style.width = `${amount}%`;
    get('launch-percent').textContent = `${String(amount).padStart(2, '0')}%`;
    get('launch-progress').setAttribute('aria-valuenow', amount);
    if (label) get('launch-load-label').textContent = label;
  }

  function selectWorld(index) {
    if (!worlds.length) return;
    selected = (index + worlds.length) % worlds.length;
    const world = worlds[selected];
    const token = ++changeToken;
    const image = world.image || fallbackCover;
    get('launch-category').textContent = `${world.category || 'WORLD'} / ${world.maker || 'CAI · KINGKAZMAX'}`;
    get('launch-position').textContent = `${String(selected + 1).padStart(2, '0')} / ${String(worlds.length).padStart(2, '0')}`;
    get('launch-world-title').textContent = world.title;
    get('launch-world-description').textContent = world.description || '进入这个可以探索的世界。';
    runLink.href = world.url;
    coverLink.href = world.url;
    coverLink.setAttribute('aria-label', `进入 ${world.title}`);
    cover.classList.add('is-changing');
    const nextImage = new Image();
    nextImage.onload = () => {
      if (token !== changeToken) return;
      cover.src = image;
      cover.alt = `${world.title}封面`;
      requestAnimationFrame(() => cover.classList.remove('is-changing'));
      if (!firstCoverReady) {
        firstCoverReady = true;
        progress(100, '世界坐标已就绪');
        get('launch-system-text').textContent = 'WORLD INDEX READY';
        root.classList.add('is-ready');
      }
    };
    nextImage.onerror = () => {
      if (token !== changeToken) return;
      cover.src = fallbackCover;
      cover.alt = `${world.title}的替代封面`;
      cover.classList.remove('is-changing');
      if (!firstCoverReady) {
        firstCoverReady = true;
        progress(100, '世界坐标已就绪');
        get('launch-system-text').textContent = 'WORLD INDEX READY';
        root.classList.add('is-ready');
      }
    };
    nextImage.src = image;
  }

  progress(12, '正在定位世界坐标');
  fetch('worlds.json')
    .then(response => {
      if (!response.ok) throw new Error(`World index ${response.status}`);
      progress(52, '正在读取世界目录');
      return response.json();
    })
    .then(items => {
      worlds = items.filter(item => item && item.url && item.title);
      if (!worlds.length) throw new Error('World index is empty');
      get('launch-count').textContent = `${worlds.length} 个世界已建立连接 · 点击封面直接运行`;
      const total = get('world-total');
      if (total) total.textContent = String(worlds.length);
      progress(78, '正在装载世界封面');
      const featured = worlds.findIndex(item => item.id === 'astromatrix');
      const night = worlds.findIndex(item => item.id === 'night-courtyard');
      selectWorld(featured >= 0 ? featured : Math.max(night, 0));
    })
    .catch(() => {
      root.classList.add('is-error');
      progress(100, '目录暂不可用 · 可进入全部世界');
      get('launch-system-text').textContent = 'DIRECT ACCESS AVAILABLE';
      get('launch-count').textContent = '使用「世界入口」浏览现有作品';
    });

  get('launch-prev').addEventListener('click', () => selectWorld(selected - 1));
  get('launch-next').addEventListener('click', () => selectWorld(selected + 1));
  document.addEventListener('keydown', event => {
    const rect = root.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= window.innerHeight * .8) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName)) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      event.stopImmediatePropagation();
      selectWorld(selected + (event.key === 'ArrowRight' ? 1 : -1));
    }
  }, true);

  let swipeStart = null;
  let suppressCoverClick = false;
  coverLink.addEventListener('pointerdown', event => { swipeStart = event.clientX; });
  coverLink.addEventListener('pointerup', event => {
    if (swipeStart === null) return;
    const delta = event.clientX - swipeStart;
    swipeStart = null;
    if (Math.abs(delta) < 40) return;
    suppressCoverClick = true;
    selectWorld(selected + (delta < 0 ? 1 : -1));
    window.setTimeout(() => { suppressCoverClick = false; }, 200);
  });
  coverLink.addEventListener('click', event => {
    if (suppressCoverClick) event.preventDefault();
  });

  const canvas = get('launch-canvas');
  const context = canvas.getContext('2d', { alpha: true });
  if (!context) return;
  const stars = Array.from({ length: 118 }, (_, i) => {
    const n = (i * 2654435761) >>> 0;
    const m = (n ^ (n >>> 16)) >>> 0;
    return { x: (m % 10000) / 10000, y: ((m * 1597) % 10000) / 10000, size: i % 13 === 0 ? 1.8 : .5 + (i % 5) * .16, red: i % 19 === 0 };
  });
  let width = 1, height = 1, px = .5, py = .5, visible = true, lastFrame = 0;
  function resize() {
    const bounds = root.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw(0);
  }
  function draw(time) {
    context.clearRect(0, 0, width, height);
    const drift = reducedMotion ? 0 : Math.sin(time * .00012) * 7;
    const parallaxX = (px - .5) * 22;
    const parallaxY = (py - .5) * 16;
    for (const star of stars) {
      const x = star.x * width + parallaxX * (star.size / 2) + drift;
      const y = star.y * height + parallaxY * (star.size / 2);
      context.beginPath();
      context.arc(x, y, star.size, 0, Math.PI * 2);
      context.fillStyle = star.red ? 'rgba(255,48,74,.65)' : 'rgba(235,226,232,.36)';
      context.fill();
    }
    const cx = width * (width < 760 ? .52 : .73) + parallaxX * .4;
    const cy = height * .49 + parallaxY * .5;
    context.lineWidth = 1;
    for (const [rx, ry, opacity] of [[.24, .32, .15], [.31, .41, .10], [.39, .52, .06]]) {
      context.beginPath();
      context.ellipse(cx, cy, width * rx, height * ry, -.27, 0, Math.PI * 2);
      context.strokeStyle = `rgba(255,48,74,${opacity})`;
      context.stroke();
    }
    context.beginPath();
    context.arc(px * width, py * height, 18, 0, Math.PI * 2);
    context.strokeStyle = 'rgba(255,48,74,.24)';
    context.stroke();
  }
  function animate(time) {
    if (visible && time - lastFrame >= 30) { draw(time); lastFrame = time; }
    if (!reducedMotion) requestAnimationFrame(animate);
  }
  root.addEventListener('pointermove', event => {
    const bounds = root.getBoundingClientRect();
    px = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    py = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    get('launch-clock').textContent = `FIELD / ${px.toFixed(3)} : ${py.toFixed(3)}`;
    if (!reducedMotion && width > 760) root.style.setProperty('--launch-tilt', `${((px - .5) * -2.5).toFixed(2)}deg`);
    if (reducedMotion) draw(0);
  });
  root.addEventListener('pointerleave', () => { px = .5; py = .5; root.style.setProperty('--launch-tilt', '0deg'); });
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }, { threshold: 0 }).observe(root);
  window.addEventListener('resize', resize);
  resize();
  if (!reducedMotion) requestAnimationFrame(animate);
})();
