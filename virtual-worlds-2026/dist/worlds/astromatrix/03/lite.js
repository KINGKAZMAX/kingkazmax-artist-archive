(() => {
  const canvas = document.getElementById('lite-scene');
  const ctx = canvas.getContext('2d', { alpha: false });
  const count = matchMedia('(max-width: 700px)').matches ? 1450 : 3200;
  document.getElementById('particle-count').textContent = count.toLocaleString();
  const stateText = document.getElementById('field-state');
  const particles = [];
  let seed = 260913;
  const rnd = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < count; i++) {
    const r = 0.12 + Math.pow(rnd(), 0.7) * 0.95;
    particles.push({ r, a: rnd() * Math.PI * 2, speed: (0.00008 + 0.00011 / (r + 0.3)) * (rnd() < 0.1 ? -1 : 1), tilt: (rnd() - 0.5) * 0.22, size: 0.5 + rnd() * 1.2, tone: rnd() });
  }
  let w = 0, h = 0, ratio = 1, frame = 0, pulse = 0, zoom = 1, active = true;
  const pointer = { x: 0, y: 0, down: false, live: false };
  function resize() { ratio = Math.min(devicePixelRatio || 1, 1.5); w = innerWidth; h = innerHeight; canvas.width = Math.round(w * ratio); canvas.height = Math.round(h * ratio); ctx.setTransform(ratio, 0, 0, ratio, 0, 0); }
  function setPointer(e) { pointer.x = e.clientX; pointer.y = e.clientY; pointer.live = true; }
  canvas.addEventListener('pointermove', setPointer);
  canvas.addEventListener('pointerdown', e => { setPointer(e); pointer.down = true; canvas.setPointerCapture(e.pointerId); triggerPulse(); });
  canvas.addEventListener('pointerup', () => { pointer.down = false; });
  canvas.addEventListener('pointercancel', () => { pointer.down = false; });
  canvas.addEventListener('pointerleave', () => { if (!pointer.down) pointer.live = false; });
  canvas.addEventListener('wheel', e => { e.preventDefault(); zoom = Math.max(0.65, Math.min(1.7, zoom * (e.deltaY > 0 ? 0.93 : 1.07))); }, { passive: false });
  function triggerPulse() { pulse = 1; stateText.textContent = 'GRAVITY PULSE'; }
  document.getElementById('pulse-btn').addEventListener('click', triggerPulse);
  function draw() {
    if (!active) return;
    frame++;
    const cx = w * (w < 700 ? 0.54 : 0.59), cy = h * (w < 700 ? 0.37 : 0.49);
    const radius = Math.min(w, h) * (w < 700 ? 0.42 : 0.59) * zoom;
    const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.75);
    bg.addColorStop(0, '#181018'); bg.addColorStop(0.28, '#090912'); bg.addColorStop(1, '#030407');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.32);
    glow.addColorStop(0, `rgba(255,230,222,${0.25 + pulse * 0.35})`); glow.addColorStop(0.28, 'rgba(255,72,95,.11)'); glow.addColorStop(1, 'rgba(255,32,60,0)');
    ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(cx, cy, radius * 0.32, 0, Math.PI * 2); ctx.fill();
    for (const p of particles) {
      p.a += p.speed * (pointer.down ? 8 : 4);
      let x = cx + Math.cos(p.a + p.r * 3.3) * radius * p.r;
      let y = cy + Math.sin(p.a + p.r * 3.3) * radius * p.r * (0.52 + p.tilt);
      if (pointer.live) {
        const dx = pointer.x - x, dy = pointer.y - y, influence = Math.max(0, 1 - (dx * dx + dy * dy) / 32400);
        x += dx * influence * (pointer.down ? 0.35 : 0.12); y += dy * influence * (pointer.down ? 0.35 : 0.12);
      }
      const wave = pulse ? Math.sin(p.r * 25 - frame * 0.15) * pulse * 22 : 0;
      x += Math.cos(p.a) * wave; y += Math.sin(p.a) * wave * 0.65;
      const alpha = 0.25 + (1 - p.r) * 0.4 + p.tone * 0.24;
      ctx.fillStyle = p.tone < 0.16 ? `rgba(255,75,98,${alpha})` : p.tone < 0.42 ? `rgba(162,184,255,${alpha})` : `rgba(255,244,235,${alpha})`;
      ctx.beginPath(); ctx.arc(x, y, p.size * (1 + pulse * 0.35), 0, Math.PI * 2); ctx.fill();
    }
    if (pulse) { pulse = Math.max(0, pulse - 0.008); if (!pulse) stateText.textContent = 'ORBITING'; }
    requestAnimationFrame(draw);
  }
  addEventListener('resize', resize); resize(); draw();
  window.render_game_to_text = () => JSON.stringify({ mode: 'lite', particles: count, pulse: +pulse.toFixed(2), zoom: +zoom.toFixed(2), pointer: { x: Math.round(pointer.x), y: Math.round(pointer.y), down: pointer.down }, coordinateSystem: 'screen pixels, origin top-left' });
  const full = document.getElementById('full-btn');
  if (!navigator.gpu) { full.disabled = true; full.title = '当前浏览器不支持 WebGPU'; }
  full.addEventListener('click', () => {
    if (!navigator.gpu) return;
    active = false; canvas.remove(); document.getElementById('lite-ui').remove(); document.getElementById('info').hidden = false;
    const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = 'assets/index-DgSQKVSx.css'; document.head.append(css);
    const script = document.createElement('script'); script.type = 'module'; script.src = 'assets/index-i_gIHvSx.js'; document.body.append(script);
    window.render_game_to_text = () => JSON.stringify({ mode: 'full-webgpu' });
  });
})();
