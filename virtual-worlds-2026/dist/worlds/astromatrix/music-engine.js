/* 深空回响 DEEP ECHO · 可复用 WebAudio 引擎（移动版，deploy#7）
 * 来源：07-camera-interaction/music.html L40-169 逐行搬运（源文件不动）。
 * 合成参数与音色逻辑零改动：55Hz 失谐 drone / 暗色缓扫 pad / 太阳风噪声 / 随机五声泛音，
 * 信号链 master→compressor→analyser→destination，音量 ~4s 渐入渐出——听感与现场一致。
 * 封装差异仅有三点（均为包装层，不触碰算法）：
 *   1) AudioContext 延迟创建：首次 start() 才 build（页面加载零音频开销）；
 *   2) UI 读写剥离：原 getElementById 的按钮/状态/画布改为 attachViz(canvas) 可选挂载；
 *   3) iOS resume 兜底：start() 内 resume + document touchend 补一次 resume（成功即卸载）。
 * 用法：__CFMusic.start() / stop() / volume(0~1) / running / attachViz(canvas) / analyser
 */
(function () {
  'use strict';
  var AC = window.AudioContext || window.webkitAudioContext;
  var ctx = null, master = null, analyser = null, started = false;
  var volTarget = 0.55, volCur = 0;
  var nodeCount = 0, pingTimer = 0;

  /* 可视化画布（可选，对应原 #viz） */
  var cv = null, cx = null;
  var data = new Uint8Array(256);

  function build() {
    ctx = new AC({ latencyHint: 'playback' });
    master = ctx.createGain();
    master.gain.value = 0;
    var comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -34; comp.knee.value = 26; comp.ratio.value = 3.2;
    analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    master.connect(comp); comp.connect(analyser); analyser.connect(ctx.destination);
    nodeCount += 3;

    /* 1) 深空 drone: 两组微失谐正弦(55Hz±) + 八度, 各带极慢呼吸 LFO */
    [[55, .5], [55.6, .5], [110, .22], [36.7, .3]].forEach(function (d, i) {
      var o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = d[0];
      var g = ctx.createGain(); g.gain.value = 0;
      var lfo = ctx.createOscillator(); lfo.frequency.value = 0.017 + i * 0.011;
      var lg = ctx.createGain(); lg.gain.value = d[1] * 0.45;
      lfo.connect(lg); lg.connect(g.gain); g.gain.value = d[1] * 0.55;
      o.connect(g); g.connect(master); o.start(); lfo.start();
    });
    nodeCount += 16; /* 4 × (osc + gain + lfo + lfoGain) */

    /* 2) 暗色 pad: 失谐锯齿 → 低通(截止频率被 0.02Hz LFO 缓慢扫动) */
    var padCut = ctx.createBiquadFilter();
    padCut.type = 'lowpass'; padCut.Q.value = 6;
    var sweep = ctx.createOscillator(); sweep.frequency.value = 0.02;
    var sweepG = ctx.createGain(); sweepG.gain.value = 260;
    sweep.connect(sweepG); sweepG.connect(padCut.frequency); padCut.frequency.value = 320;
    sweep.start();
    var padG = ctx.createGain(); padG.gain.value = 0.05;
    padCut.connect(padG); padG.connect(master);
    [82.4, 123.5, 164.8, 164.2].forEach(function (f) {
      var o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
      var g = ctx.createGain(); g.gain.value = 0.25;
      o.connect(g); g.connect(padCut); o.start();
    });
    nodeCount += 12; /* filter + sweep + sweepG + padG + 4 × (osc + gain) */

    /* 3) 太阳风: 白噪声 → 带通(中心 500Hz, 被呼吸 LFO 拉扯) */
    var len = ctx.sampleRate * 4;
    var buf = ctx.createBuffer(1, len, ctx.sampleRate);
    var ch = buf.getChannelData(0);
    for (var i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
    var noise = ctx.createBufferSource(); noise.buffer = buf; noise.loop = true;
    var bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 0.9;
    var nlfo = ctx.createOscillator(); nlfo.frequency.value = 0.03;
    var nlg = ctx.createGain(); nlg.gain.value = 300;
    nlfo.connect(nlg); nlg.connect(bp.frequency); bp.frequency.value = 560;
    var ng = ctx.createGain(); ng.gain.value = 0.028;
    noise.connect(bp); bp.connect(ng); ng.connect(master);
    noise.start(); nlfo.start();
    nodeCount += 5; /* source + bp + nlfo + nlg + ng */

    /* 4) 星光泛音: 每 7~16s 一颗, 高八度五声音阶纯音, 长衰减 */
    var SCALE = [523.25, 587.33, 698.46, 783.99, 880, 1046.5, 1174.7, 1396.9];
    (function ping() {
      pingTimer = setTimeout(function () {
        if (ctx.state === 'running') {
          var o = ctx.createOscillator(); o.type = 'sine';
          o.frequency.value = SCALE[Math.floor(Math.random() * SCALE.length)];
          var g = ctx.createGain(); g.gain.value = 0;
          o.connect(g); g.connect(master);
          var t = ctx.currentTime;
          g.gain.linearRampToValueAtTime(0.05 + Math.random() * 0.04, t + 0.6);
          g.gain.exponentialRampToValueAtTime(0.0001, t + 7);
          o.start(t); o.stop(t + 7.2);
          nodeCount += 2;
        }
        ping();
      }, 7000 + Math.random() * 9000);
    })();
  }

  function start() {
    if (!AC) return false;
    if (!ctx) build();                       /* AudioContext 延迟创建: 首次 start 才建图 */
    ctx.resume().then(function () {
      started = true;                        /* 同原版: resume 落定后置位, 渐入由主循环完成 */
    });
    return true;
  }
  function stop() {
    if (!ctx) return;
    volTarget = 0; started = false;          /* 渐出由主循环完成; 再启动前需 volume(v) 重设音量(同原按钮语义) */
  }
  function volume(v) {
    if (v === undefined) return volTarget;
    v = +v;
    if (isNaN(v)) return volTarget;
    volTarget = v < 0 ? 0 : v > 1 ? 1 : v;
    return volTarget;
  }
  function attachViz(canvas) {
    if (!canvas || !canvas.getContext) return;
    cv = canvas; cx = cv.getContext('2d');
  }

  /* 主循环: 音量渐变 + 波形可视化（rAF + 0.012 系数, 与原版一致 ≈4s 渐入渐出） */
  (function loop() {
    if (master) {
      var tgt = started ? volTarget * 0.9 : 0;
      volCur += (tgt - volCur) * 0.012;
      master.gain.value = volCur;
    }
    if (cv) {
      cv.width = cv.clientWidth; cv.height = cv.clientHeight;
      cx.clearRect(0, 0, cv.width, cv.height);
      if (analyser) {
        analyser.getByteFrequencyData(data);
        cx.beginPath();
        for (var i = 0; i < 128; i++) {
          var x = i / 127 * cv.width;
          var v = data[i] / 255;
          var y = cv.height * 0.82 - Math.pow(v, 1.6) * cv.height * 0.68;
          i ? cx.lineTo(x, y) : cx.moveTo(x, y);
        }
        cx.strokeStyle = 'rgba(255,255,255,.55)'; cx.lineWidth = 1; cx.stroke();
      }
    }
    requestAnimationFrame(loop);
  })();

  /* iOS 兜底: 若 start() 不在手势调用栈内导致 resume 未生效, document 首次 touchend 再补一次 */
  function touchResume() {
    if (!ctx) return;                        /* 引擎未启动则等下一次 touchend */
    if (ctx.state !== 'suspended') { detachTouch(); return; }
    ctx.resume().then(function () {
      if (ctx.state !== 'suspended') detachTouch();
    }).catch(function () {});
  }
  function detachTouch() { document.removeEventListener('touchend', touchResume, true); }
  document.addEventListener('touchend', touchResume, true);

  window.__CFMusic = {
    start: start,
    stop: stop,
    volume: volume,
    attachViz: attachViz,
    get running() { return started; },
    get analyser() { return analyser; },     /* 暴露给可视化/自测（AnalyserNode） */
    _debug: function () {
      return {
        running: started,
        ctxState: ctx ? ctx.state : 'not-created',
        nodeCount: nodeCount,
        pingTimer: pingTimer,
        volTarget: volTarget,
        volCur: Math.round(volCur * 1000) / 1000,
        sampleRate: ctx ? ctx.sampleRate : 0,
        vizAttached: !!cv
      };
    }
  };
})();
