(function () {
  "use strict";

  const { Engine, WIDTH, HEIGHT, FLOOR, STEP, clamp } = window.SkySprout;
  const canvas = document.getElementById("game");
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) throw new Error("SkySprout requires a browser with a 2D canvas.");
  context.imageSmoothingEnabled = false;

  const ui = Object.fromEntries([
    "best-score", "world-number", "world-name", "sound-button", "pause-button",
    "restart-button", "game-overlay", "overlay-badge", "overlay-title",
    "overlay-description", "overlay-stats", "play-button", "play-label",
    "start-hint", "death-message", "adventure-status", "tip", "announcements",
  ].map((id) => [id, document.getElementById(id)]));

  let storageAvailable = true;
  function storageFailure(error) {
    if (storageAvailable) {
      console.warn("SkySprout: browser storage is unavailable. Scores and sound preferences will not persist.", error);
      ui["best-score"].title = "Browser storage is unavailable. This score lasts for this page only.";
    }
    storageAvailable = false;
  }
  function readStorage(key) {
    try { return localStorage.getItem(`skysprout.v1.${key}`); }
    catch (error) { storageFailure(error); return null; }
  }
  function writeStorage(key, value) {
    if (!storageAvailable) return;
    try { localStorage.setItem(`skysprout.v1.${key}`, String(value)); }
    catch (error) { storageFailure(error); }
  }

  class Sound {
    constructor() {
      this.context = null;
      this.master = null;
      this.muted = readStorage("muted") === "true";
      this.unavailable = false;
      this.beat = 0;
      this.timer = 0;
      this.melody = [72, null, 79, 81, 76, 74, 79, null, 76, 72, 74, 69, 67, null, 74, 76,
        79, 84, 81, null, 79, 76, 74, 72, 69, 74, 76, null, 74, 67, 69, null];
    }

    async unlock() {
      if (this.unavailable) return;
      try {
        if (!this.context) {
          const Audio = window.AudioContext || window.webkitAudioContext;
          if (!Audio) throw new Error("Web Audio is not supported by this browser.");
          this.context = new Audio();
          this.master = this.context.createGain();
          this.master.gain.value = this.muted ? 0 : 0.23;
          this.master.connect(this.context.destination);
        }
        if (this.context.state === "suspended") await this.context.resume();
      } catch (error) {
        console.warn("SkySprout: audio could not start. The game remains playable without sound.", error);
        this.unavailable = true;
        ui["sound-button"].disabled = true;
        ui["sound-button"].title = "Sound is unavailable in this browser";
        ui.announcements.textContent = "Sound is unavailable in this browser. You can still play.";
      }
    }

    toggle() {
      this.muted = !this.muted;
      writeStorage("muted", this.muted);
      if (this.master) this.master.gain.setTargetAtTime(this.muted ? 0 : 0.23, this.context.currentTime, 0.015);
      this.unlock();
      syncSound();
    }

    tone(frequency, duration, type = "square", volume = 0.12, delay = 0, endFrequency = frequency) {
      if (!this.context || this.context.state !== "running" || this.muted || this.unavailable) return;
      const start = this.context.currentTime + delay;
      const oscillator = this.context.createOscillator();
      const envelope = this.context.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, start);
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), start + duration);
      envelope.gain.setValueAtTime(0.0001, start);
      envelope.gain.linearRampToValueAtTime(volume, start + 0.006);
      envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      oscillator.connect(envelope);
      envelope.connect(this.master);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.01);
      oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); };
    }

    chord(notes, spacing = 0.08) {
      notes.forEach((note, i) => this.tone(440 * 2 ** ((note - 69) / 12), 0.18, "triangle", 0.3, i * spacing));
    }

    effect(type) {
      switch (type) {
        case "jump": this.tone(190, 0.13, "square", 0.08, 0, 480); break;
        case "coin": this.tone(1050, 0.11, "triangle", 0.35, 0, 1650); break;
        case "bump": this.tone(120, 0.07, "triangle", 0.24, 0, 65); break;
        case "break": this.tone(130, 0.15, "sawtooth", 0.12, 0, 35); break;
        case "stomp": this.tone(210, 0.1, "square", 0.12, 0, 65); break;
        case "reveal": this.chord([55, 60, 64]); break;
        case "power": this.chord([60, 67, 72, 76]); break;
        case "shard": this.chord([72, 79, 84, 88], 0.065); break;
        case "checkpoint": this.chord([64, 69, 76], 0.09); break;
        case "extra-life": this.chord([60, 64, 69, 76, 81]); break;
        case "hurt": this.tone(360, 0.22, "sawtooth", 0.11, 0, 80); break;
        case "death": this.chord([64, 60, 55, 48], 0.11); break;
        case "clear": this.chord([60, 67, 72, 76, 79, 84], 0.09); break;
        case "start": this.timer = 0.25; this.beat = 0; break;
      }
    }

    tick(dt, playing, world) {
      if (!playing || !this.context || this.context.state !== "running" || this.muted) return;
      this.timer -= dt;
      if (this.timer > 0) return;
      this.timer += world === 1 ? 0.23 : 0.19;
      const note = this.melody[this.beat % this.melody.length];
      const transpose = world === 1 ? -5 : world === 2 ? 2 : 0;
      if (note !== null) this.tone(440 * 2 ** ((note + transpose - 69) / 12), 0.12, "triangle", 0.13);
      if (this.beat % 4 === 0) {
        const bass = [48, 53, 45, 55][Math.floor(this.beat / 8) % 4] + transpose;
        this.tone(440 * 2 ** ((bass - 69) / 12), 0.2, "triangle", 0.19);
      }
      this.beat++;
    }
  }

  function makeSprite(rows, palette) {
    const image = document.createElement("canvas");
    image.width = Math.max(...rows.map((row) => row.length));
    image.height = rows.length;
    const ctx = image.getContext("2d");
    if (!ctx) throw new Error("Unable to create a sprite canvas.");
    rows.forEach((row, y) => [...row].forEach((pixel, x) => {
      if (palette[pixel]) {
        ctx.fillStyle = palette[pixel];
        ctx.fillRect(x, y, 1, 1);
      }
    }));
    return image;
  }

  const heroRows = [
    "       ll       ", "   lll llll     ", "    llll        ", "      l         ",
    "    dddddddd    ", "   dggggggggd   ", "  dgggLLLLgggd  ", "  dggLLLLLLggd  ",
    "  dgtTTTTTTTgd  ", "  dtTTnTTnTTTd  ", "  dtTTnTTnTTTd  ", "  dtTTTTTTTTTd  ",
    "   dtTTTTTtd    ", "   dddddddd     ", "   oooooooood   ", "  doooooodoooo  ",
    "  dnbbbbnd oo   ", "  dnbbbbnd      ", "   bbbbbb       ", "   bbbbbb       ",
    "   bb  bb       ", "  dtt  dtt      ", "  dttt dttt     ",
  ];
  const heroPalette = {
    l: "#bce797", g: "#70ad80", L: "#a4d398", d: "#254b45",
    T: "#f9e5b7", t: "#debd91", n: "#284a4b", o: "#ed9270", b: "#578685",
  };
  const sprites = {
    hero: makeSprite(heroRows, heroPalette),
    walk: makeSprite([...heroRows.slice(0, 20), "  bb    bb      ", " dtt     dtt    ", " dttt    dttt   "], heroPalette),
    jump: makeSprite([...heroRows.slice(0, 19), "  bbbb bbb      ", " dttt   bb      ", " dtt    dttt    ", "                "], heroPalette),
    beetle: makeSprite([
      "    dddddd      ", "  ddoooooodd    ", " dooOOOOOOood   ", " doOOllOOOood   ",
      "doOOOOOOOOoood  ", "doOOOddOOOOood  ", "doOOOddOOOddod  ", " doooooooodTnd  ",
      " ddooooooodTnd  ", "  ddddddddddd   ", "  tt  tt  tt    ", " ttt ttt ttt    ",
    ], { d: "#654a40", o: "#ba7255", O: "#de9970", l: "#f4c28a", T: "#f9deb0", n: "#273e3a", t: "#73514a" }),
    hopper: makeSprite([
      "   a      a     ", "  aa      aa    ", "   dddddddd     ", "  dbbbbbbbbd    ",
      " dbbBLLBBbbbd   ", " dbBBBBBBBBbd   ", "dbBBnBBBnnBbbd  ", "dbBBnBBBnnBbbd  ",
      " dbBBBBBBBBbd   ", "  dbbbbbbbbd    ", "  dddddddddd    ", " aa        aa   ",
    ], { a: "#b9d8bf", d: "#43496b", b: "#7f80ae", B: "#aca5cf", L: "#d9d4e6", n: "#363c59" }),
    heart: makeSprite([
      " rr rr ", "rrrrrrr", "rrrrrrr", " rrrrr ", "  rrr  ", "   r   ",
    ], { r: "#f9c3a2" }),
    shard: makeSprite([
      "    A     ", "   ABA    ", "   ABA    ", "  ABBBA   ", "ABBBBBBBA ", " CBBBBBC  ",
      "  CBBBC   ", "  CBBBC   ", "  CB BC   ", " C     C  ",
    ], { A: "#fff6c7", B: "#ffe197", C: "#d8a969" }),
    fruit: makeSprite([
      "     gg     ", "   ggggg    ", "    dd      ", "  ddyydd    ", " dyyYYYyd   ",
      "dyYYYYYYyd  ", "dyYYwYYYyd  ", "dyYYYYYYyd  ", " dyyYYYyd   ", "  dyyyyd    ",
      "   dddd     ", "            ",
    ], { g: "#b3e697", d: "#93664b", y: "#edba6e", Y: "#ffe5a0", w: "#fff6d6" }),
  };

  class Renderer {
    constructor(ctx, game) {
      this.ctx = ctx;
      this.game = game;
    }

    rect(x, y, w, h, color) {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
    }

    text(value, x, y, color = "#fff5d4", size = 8, align = "left") {
      const ctx = this.ctx;
      ctx.font = `bold ${size}px monospace`;
      ctx.textAlign = align;
      ctx.textBaseline = "top";
      ctx.fillStyle = "#153a4050";
      ctx.fillText(value, Math.round(x), Math.round(y + 1));
      ctx.fillStyle = color;
      ctx.fillText(value, Math.round(x), Math.round(y));
    }

    cloud(x, y, scale, color) {
      this.rect(x + 8 * scale, y, 24 * scale, 5 * scale, color);
      this.rect(x + 3 * scale, y + 5 * scale, 38 * scale, 7 * scale, color);
      this.rect(x, y + 12 * scale, 48 * scale, 7 * scale, color);
      this.rect(x + 7 * scale, y + 19 * scale, 35 * scale, 3 * scale, color);
    }

    ridge(color, base, height, period, parallax) {
      const ctx = this.ctx;
      const camera = this.game.camera * parallax;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(-8, HEIGHT);
      let previousY = base;
      for (let x = -8; x <= WIDTH + 8; x += 6) {
        const sample = x + camera;
        const y = Math.round((base - Math.abs(Math.sin(sample / period) +
          0.35 * Math.sin(sample / (period * 0.43))) * height) / 4) * 4;
        ctx.lineTo(x, previousY);
        ctx.lineTo(x, y);
        previousY = y;
      }
      ctx.lineTo(WIDTH + 8, HEIGHT);
      ctx.closePath();
      ctx.fill();
    }

    tree(x, y, size, color) {
      this.rect(x + 10 * size, y - 8 * size, 4 * size, 18 * size, color);
      this.rect(x + 8 * size, y - 38 * size, 8 * size, 6 * size, color);
      this.rect(x + 4 * size, y - 32 * size, 16 * size, 10 * size, color);
      this.rect(x, y - 22 * size, 24 * size, 10 * size, color);
      this.rect(x + 3 * size, y - 12 * size, 18 * size, 5 * size, color);
    }

    crystal(x, y, size, color, highlight) {
      for (let row = 0; row < 8; row++) {
        const half = Math.min(row + 1, 3);
        this.rect(x - half * size, y + row * size * 2, half * size * 2, size * 2, color);
        this.rect(x, y + row * size * 2, size, size * 2, highlight);
      }
    }

    background() {
      const { level, camera, elapsed } = this.game;
      const t = level.theme;
      const ctx = this.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
      gradient.addColorStop(0, t.sky);
      gradient.addColorStop(1, t.horizon);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      if (level.id === "grotto") {
        for (let i = 0; i < 18; i++) {
          const x = ((i * 61 - camera * 0.12) % 530 + 530) % 530 - 25;
          const top = (i * 13) % 33;
          this.rect(x, 0, 16, top + 8, "#182638");
          this.rect(x + 4, top + 8, 8, 12, "#182638");
          this.rect(x + 6, top + 20, 4, 9, "#182638");
        }
        this.ridge(t.far, 244, 110, 127, 0.13);
        this.ridge(t.middle, 255, 75, 87, 0.25);
        for (let i = 0; i < 12; i++) {
          const x = ((i * 79 - camera * 0.35) % 600 + 600) % 600 - 50;
          this.crystal(x, 144 + (i % 3) * 13, 3 + i % 2, "#546383", "#697a97");
          const glow = 0.4 + Math.sin(elapsed * 1.8 + i * 2) * 0.3;
          ctx.globalAlpha = glow;
          this.rect(x + 27, 96 + (i * 37) % 93, 2, 2, "#c5f5db");
          ctx.globalAlpha = 1;
        }
      } else {
        const sunX = 369 - camera * 0.025;
        const sunY = level.id === "canopy" ? 66 : 56;
        this.rect(sunX - 14, sunY + 3, 42, 28, t.accent + "22");
        this.rect(sunX - 8, sunY - 3, 30, 40, t.accent + "22");
        this.rect(sunX - 4, sunY, 22, 33, t.accent);
        this.rect(sunX - 10, sunY + 7, 34, 19, t.accent);
        for (let i = 0; i < 6; i++) {
          const x = ((i * 127 + 28 - camera * 0.12) % 690 + 690) % 690 - 90;
          this.cloud(x, 45 + (i * 29) % 69, 0.7 + (i % 3) * 0.3, t.cloud);
        }
        this.ridge(t.far, 219, 68, 119, 0.16);
        this.ridge(t.middle, 241, 70, 88, 0.3);
        this.ridge(t.near, 257, 46, 61, 0.43);
        for (let i = 0; i < 9; i++) {
          const x = ((i * 83 - camera * 0.45) % 620 + 620) % 620 - 50;
          this.tree(x, 216 + (i % 3) * 3, 0.65 + (i % 3) * 0.25, t.near);
        }
        if (level.id === "canopy") {
          for (let i = 0; i < 4; i++) {
            const x = ((i * 177 - camera * 0.21) % 680 + 680) % 680 - 70;
            this.rect(x, 145 + i % 2 * 16, 48, 4, "#d9c3ac");
            this.rect(x + 5, 149 + i % 2 * 16, 38, 6, "#b4a5a3");
            this.rect(x + 14, 155 + i % 2 * 16, 22, 6, "#b4a5a3");
          }
        }
      }
    }

    terrain(solid) {
      const t = this.game.level.theme;
      const { x, y, w, h, kind } = solid;
      if (kind === "pillar") {
        this.rect(x, y, w, h, t.stoneDark);
        this.rect(x + 2, y + 2, w - 4, h - 2, t.stone);
        this.rect(x, y, w, 3, t.grassLight);
        this.rect(x + 3, y + 3, 2, h - 5, "#ffffff1a");
        this.rect(x + w - 4, y + 4, 2, h - 4, "#243f4920");
        for (let row = y + 12; row < y + h; row += 13) {
          this.rect(x + 2, row, w - 4, 1, t.stoneDark);
          this.rect(x + w / 2, row - 8, 1, 8, t.stoneDark);
        }
        if (w >= 24) {
          this.rect(x + 11, y + 10, 9, 2, t.stoneDark);
          this.rect(x + 14, y + 7, 3, 9, t.stoneDark);
        }
        return;
      }
      this.rect(x, y + 3, w, h - 3, t.soilDark);
      this.rect(x + 1, y + 4, w - 2, h - 5, t.soil);
      const start = Math.max(Math.floor(x / 16), Math.floor(this.game.camera / 16) - 1);
      const end = Math.min((x + w) / 16, (this.game.camera + WIDTH) / 16 + 1);
      for (let tile = start; tile < end; tile++) {
        const at = tile * 16;
        this.rect(at, y, 16, 3, t.grassLight);
        this.rect(at, y + 3, 16, 4, t.grass);
        this.rect(at + 2, y + 7, 5, 3, t.grassDark);
        this.rect(at + 11, y + 7, 3, 2, t.grassDark);
        for (let row = 0; row < Math.floor((h - 10) / 10); row++) {
          const dx = (tile * 7 + row * 11) % 12;
          this.rect(at + dx, y + 12 + row * 10, 3, 2, t.fleck);
          this.rect(at + (dx + 5) % 13, y + 16 + row * 10, 2, 2, t.soilDark);
        }
        if (kind === "ground") {
          if (tile % 7 === 3) {
            this.rect(at + 8, y - 5, 1, 5, t.grassDark);
            this.rect(at + 6, y - 4, 2, 2, t.grass);
            this.rect(at + 8, y - 7, 2, 2, tile % 2 ? "#f8d498" : "#f3b8a5");
          } else if (tile % 5 === 2) {
            this.rect(at + 3, y - 3, 2, 3, t.grass);
            this.rect(at + 6, y - 5, 1, 5, t.grass);
            this.rect(at + 8, y - 2, 2, 2, t.grass);
          }
        }
      }
      if (kind === "platform") {
        this.rect(x + 2, y + h - 2, w - 4, 2, t.soilDark);
        this.rect(x + 7, y + h, 2, 4, t.grassDark);
        this.rect(x + w - 9, y + h, 2, 7, t.grassDark);
      }
    }

    block(block) {
      if (block.removed) return;
      const x = block.x;
      const y = block.y - Math.sin(block.bump / 0.16 * Math.PI) * 4;
      if (block.content === "brick") {
        this.rect(x, y, 16, 16, "#946c56");
        this.rect(x + 1, y + 1, 14, 13, "#d5a27a");
        this.rect(x + 1, y + 1, 14, 2, "#ebbd8a");
        this.rect(x + 1, y + 7, 14, 2, "#946c56");
        this.rect(x + 7, y + 1, 2, 6, "#946c56");
        this.rect(x + 4, y + 9, 2, 5, "#946c56");
        this.rect(x + 12, y + 9, 2, 5, "#946c56");
        return;
      }
      this.rect(x, y, 16, 16, block.used ? "#74766a" : "#b28b50");
      this.rect(x + 1, y + 1, 14, 13, block.used ? "#a1a28a" : "#f4d28a");
      this.rect(x + 2, y + 2, 12, 1, block.used ? "#b9b99c" : "#fff0bd");
      if (block.used) {
        this.rect(x + 6, y + 7, 4, 2, "#868b73");
      } else {
        this.rect(x + 8, y + 5, 4, 4, "#689366");
        this.rect(x + 5, y + 7, 4, 4, "#689366");
        this.rect(x + 5, y + 5, 2, 2, "#8dae72");
        this.rect(x + 5, y + 11, 2, 1, "#689366");
      }
      this.rect(x + 2, y + 12, 1, 1, "#807955");
      this.rect(x + 13, y + 12, 1, 1, "#807955");
    }

    coin(x, y, phase = 0) {
      const width = 2 + Math.round(Math.abs(Math.cos(this.game.elapsed * 5 + phase)) * 4);
      this.rect(x + (6 - width) / 2, y + 1, width, 7, "#c49a52");
      this.rect(x + (6 - width) / 2, y, width, 6, "#ffe8a3");
      if (width > 3) this.rect(x + 2, y + 1, 1, 4, "#fff6cd");
    }

    checkpoint() {
      const level = this.game.level;
      const x = level.checkpointX;
      this.rect(x + 3, FLOOR - 43, 3, 43, "#557d73");
      this.rect(x + 2, FLOOR - 45, 5, 4, "#dfeac1");
      this.rect(x - 1, FLOOR - 2, 11, 2, "#557d73");
      const flagColor = level.checkpointReached ? "#c3f2aa" : "#d3e5c1";
      const lift = Math.sin(this.game.elapsed * 5) > 0 ? 0 : 1;
      this.rect(x + 6, FLOOR - 42 + lift, 14, 7, flagColor);
      this.rect(x + 6, FLOOR - 35 + lift, 9, 3, flagColor);
      this.rect(x + 9, FLOOR - 40 + lift, 3, 3, "#6f9b73");
    }

    goal() {
      const { level, elapsed } = this.game;
      const x = level.goalX;
      this.rect(x - 2, FLOOR - 71, 5, 71, "#52766e");
      this.rect(x + 1, FLOOR - 69, 2, 66, "#94ac89");
      this.rect(x - 5, FLOOR - 74, 30, 4, "#526e66");
      this.rect(x - 1, FLOOR - 78, 22, 4, "#8faa89");
      this.rect(x + 8, FLOOR - 70, 2, 7, "#526e66");
      const y = FLOOR - 62 + Math.round(Math.sin(elapsed * 2) * 2);
      this.rect(x + 1, y + 1, 18, 20, "#fff2b520");
      this.rect(x + 5, y, 10, 18, "#e9b973");
      this.rect(x + 3, y + 4, 14, 10, "#ffe6a0");
      this.rect(x + 6, y + 4, 7, 10, "#fff4c3");
      this.rect(x + 5, y - 2, 10, 3, "#658775");
      this.rect(x + 5, y + 18, 10, 3, "#658775");
      this.rect(x + 9, y + 21, 2, 4, "#e9b973");
      this.rect(x - 7, FLOOR - 4, 15, 4, "#52766e");
      this.text("HOME", x + 10, FLOOR - 91, "#fff3c6", 6, "center");
      const house = x + 34;
      this.rect(house, FLOOR - 29, 34, 29, "#e5ceb0");
      this.rect(house - 4, FLOOR - 33, 42, 4, "#738c7c");
      this.rect(house + 1, FLOOR - 39, 32, 6, "#88a38b");
      this.rect(house + 7, FLOOR - 45, 20, 6, "#a7b797");
      this.rect(house + 12, FLOOR - 18, 11, 18, "#57766f");
      this.rect(house + 3, FLOOR - 24, 7, 7, "#fff0b6");
      this.rect(house + 26, FLOOR - 24, 5, 7, "#fff0b6");
      this.rect(house + 19, FLOOR - 10, 2, 2, "#e5ceb0");
    }

    hero() {
      const p = this.game.player;
      const ctx = this.ctx;
      if (p.invincible > 0 && Math.floor(this.game.elapsed * 14) % 2 === 0) return;
      const x = Math.round(p.x - 2);
      const y = Math.round(p.y - 5);
      if (p.shield) {
        ctx.strokeStyle = "#f5ffd9b0";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(p.x + 6, p.y + 7, 12, 16, 0, 0, Math.PI * 2);
        ctx.stroke();
        this.rect(p.x + 13, p.y - 6, 2, 2, "#f8ffca");
        this.rect(p.x - 4, p.y + 15, 2, 2, "#c9f5c6");
      }
      const moving = Math.abs(p.vx) > 9;
      const image = !p.grounded || this.game.mode === "dying"
        ? sprites.jump : moving && Math.floor(p.stride / 7) % 2 ? sprites.walk : sprites.hero;
      ctx.save();
      ctx.translate(x + (p.facing < 0 ? 16 : 0), y);
      ctx.scale(p.facing < 0 ? -1 : 1, 1);
      ctx.drawImage(image, 0, moving && p.grounded && image === sprites.walk ? -1 : 0);
      ctx.restore();
    }

    enemy(enemy) {
      if (enemy.dead && enemy.squash <= 0) return;
      const image = sprites[enemy.type];
      const ctx = this.ctx;
      const walk = enemy.grounded && Math.sin(this.game.elapsed * 16 + enemy.x) > 0 ? 1 : 0;
      ctx.save();
      ctx.translate(Math.round(enemy.x - 1) + (enemy.vx > 0 ? 16 : 0),
        Math.round(enemy.y) + (enemy.dead ? 8 : -walk));
      ctx.scale(enemy.vx > 0 ? -1 : 1, enemy.dead ? 0.3 : 1);
      ctx.drawImage(image, 0, 0);
      ctx.restore();
    }

    hud() {
      const game = this.game;
      const ctx = this.ctx;
      const shade = ctx.createLinearGradient(0, 0, 0, 53);
      shade.addColorStop(0, "#24484c55");
      shade.addColorStop(1, "#24484c00");
      ctx.fillStyle = shade;
      ctx.fillRect(0, 0, WIDTH, 53);
      this.text("SCORE", 16, 11, "#e6f1d1", 6);
      this.text(String(game.score).padStart(6, "0"), 16, 21, "#fff5d3", 9);
      for (let i = 0; i < Math.min(game.lives, 5); i++) ctx.drawImage(sprites.heart, 17 + i * 10, 35);
      if (game.lives > 5) this.text(`+${game.lives - 5}`, 69, 34, "#fff5d3", 7);
      this.text("COINS", 135, 11, "#e6f1d1", 6);
      this.coin(136, 23);
      this.text(String(game.coins).padStart(2, "0"), 148, 21, "#fff5d3", 9);
      this.text("SUN SHARDS", 245, 11, "#e6f1d1", 6);
      game.level.shards.forEach((shard, i) => {
        ctx.globalAlpha = shard.collected ? 1 : 0.33;
        ctx.drawImage(sprites.shard, 247 + i * 17, 22);
      });
      ctx.globalAlpha = 1;
      this.text("TIME", WIDTH - 16, 11, "#e6f1d1", 6, "right");
      this.text(String(Math.ceil(game.level.timeLeft)).padStart(3, "0"), WIDTH - 16, 21,
        game.level.timeLeft < 30 ? "#ffd0ac" : "#fff5d3", 9, "right");
      if (game.player.shield) this.text("SHIELD", 17, 46, "#e3ffc2", 6);
    }

    draw() {
      const ctx = this.ctx;
      const game = this.game;
      const camera = Math.round(game.camera);
      this.background();
      ctx.save();
      const shake = game.shake > 0 && !game.reducedMotion ? Math.round(Math.sin(game.elapsed * 89) * 2) : 0;
      ctx.translate(-camera + shake, 0);
      const visible = (object, margin = 24) =>
        object.x + (object.w || 16) > camera - margin && object.x < camera + WIDTH + margin;
      this.goal();
      this.checkpoint();
      for (const solid of game.level.solids) if (visible(solid)) this.terrain(solid);
      for (const coin of game.level.coins) {
        if (!coin.collected && visible(coin)) {
          this.coin(coin.x, coin.y + Math.sin(game.elapsed * 3 + coin.x) * 1.2, coin.x);
        }
      }
      for (const shard of game.level.shards) {
        if (!shard.collected && visible(shard)) {
          const float = Math.round(Math.sin(game.elapsed * 3 + shard.x) * 3);
          const x = Math.round(shard.x);
          const y = Math.round(shard.y + float);
          this.rect(x - 3, y - 2, 16, 14, "#fff3b91a");
          ctx.drawImage(sprites.shard, x, y);
          if (Math.sin(game.elapsed * 6 + shard.x) > 0.3) {
            this.rect(x + 13, y - 2, 1, 5, "#fff8d0");
            this.rect(x + 11, y, 5, 1, "#fff8d0");
          }
        }
      }
      for (const item of game.level.items) {
        if (!item.collected && visible(item)) ctx.drawImage(sprites.fruit, Math.round(item.x), Math.round(item.y));
      }
      for (const block of game.level.blocks) if (visible(block)) this.block(block);
      for (const enemy of game.level.enemies) if (visible(enemy)) this.enemy(enemy);
      this.hero();
      for (const particle of game.particles) {
        ctx.globalAlpha = clamp(particle.life / particle.maxLife * 2, 0, 1);
        this.rect(particle.x, particle.y, particle.size, particle.size, particle.color);
      }
      for (const message of game.messages) {
        ctx.globalAlpha = Math.min(1, message.life * 3);
        this.text(message.text, message.x, message.y, message.color, 7, "center");
      }
      ctx.globalAlpha = 1;
      if (game.mode === "title") {
        this.text("THIS WAY", 61, FLOOR - 36, "#f8f4cb", 6, "center");
        this.text(">", 83, FLOOR - 22, "#f8f4cb", 8);
      }
      ctx.restore();
      this.hud();
    }
  }

  const sound = new Sound();
  const game = new Engine({ reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches });
  const renderer = new Renderer(context, game);
  let best = Number(readStorage("best") || 0);
  if (!Number.isSafeInteger(best) || best < 0) {
    console.warn("SkySprout: an invalid saved best score was ignored.");
    best = 0;
  }
  const held = new Set();
  const touchHeld = new Set();
  let jumpPressed = false;
  let jumpReleased = false;
  const movement = {
    left: ["ArrowLeft", "KeyA"], right: ["ArrowRight", "KeyD"],
    jump: ["Space", "ArrowUp", "KeyW", "KeyZ"], run: ["ShiftLeft", "ShiftRight", "KeyX"],
  };
  const isHeld = (action) => touchHeld.has(action) || movement[action].some((key) => held.has(key));
  function clearInput() {
    held.clear();
    touchHeld.clear();
    jumpPressed = false;
    jumpReleased = false;
    game.player.jumpBuffer = 0;
  }
  function focusGame() { canvas.focus({ preventScroll: true }); }

  function syncSound() {
    ui["sound-button"].classList.toggle("is-muted", sound.muted);
    ui["sound-button"].setAttribute("aria-label", sound.muted ? "Unmute sound" : "Mute sound");
    ui["sound-button"].setAttribute("aria-pressed", String(sound.muted));
  }

  function saveBest() {
    if (game.score > best) {
      best = game.score;
      writeStorage("best", best);
    }
    ui["best-score"].textContent = String(best).padStart(6, "0");
  }

  function syncWorldUI() {
    const mode = game.mode;
    ui["world-number"].textContent = `0${game.levelIndex + 1}`;
    ui["world-name"].textContent = game.level.name;
    document.querySelectorAll("[data-world]").forEach((element) => {
      const index = Number(element.dataset.world);
      element.classList.toggle("is-current", index === game.levelIndex && mode !== "won");
      element.classList.toggle("is-done", index < game.levelIndex || mode === "won");
      if (index === game.levelIndex && mode !== "won") element.setAttribute("aria-current", "step");
      else element.removeAttribute("aria-current");
    });
  }

  function syncUI() {
    const mode = game.mode;
    const overlay = ui["game-overlay"];
    const overlayVisible = !["playing", "dying"].includes(mode);
    overlay.hidden = !overlayVisible;
    overlay.classList.toggle("is-small", mode !== "title");
    ui["death-message"].hidden = mode !== "dying";
    ui["death-message"].textContent = `${game.deathReason}. ${game.lives > 0 ? "One more try!" : "So close!"}`;
    ui["pause-button"].disabled = !["playing", "paused"].includes(mode);
    ui["pause-button"].setAttribute("aria-label", mode === "paused" ? "Resume game" : "Pause game");
    syncWorldUI();
    const statuses = {
      title: "READY WHEN YOU ARE", playing: "ADVENTURE IN PROGRESS", paused: "TAKE YOUR TIME",
      dying: "BACK IN A MOMENT", complete: "A LITTLE CLOSER TO THE SKY",
      won: "THE SKY IS SHINING", "game-over": "THERE'S ALWAYS ANOTHER TRY",
    };
    ui["adventure-status"].innerHTML = `<span class="status-dot"></span> ${statuses[mode]}`;
    ui["overlay-stats"].hidden = !["complete", "won", "game-over"].includes(mode);
    ui["overlay-stats"].innerHTML = `<div><strong>${String(game.score).padStart(6, "0")}</strong><span>SCORE</span></div>
      <div><strong>${game.totalShards} / 9</strong><span>SUN SHARDS</span></div>`;
    let title = "The sky is calling.";
    let description = "Chase the sunshine. Hop over trouble.<br>Bring a little light back to the sky.";
    let badge = "A FRESH ADVENTURE";
    let button = "Let's play";
    let hint = "to begin";
    if (mode === "paused") {
      title = "A little intermission.";
      description = "Catch your breath. Your adventure<br>is right where you left it.";
      badge = "TAKE A BREATHER";
      button = "Keep exploring";
      hint = "to resume";
    } else if (mode === "complete") {
      title = game.levelIndex === 0 ? "Meadow, mastered." : "Grotto, glowing.";
      description = `Time bonus collected. Lantern lit.<br>Next stop: ${window.SkySprout.WORLDS[game.levelIndex + 1].name}.`;
      badge = `WORLD 0${game.levelIndex + 1} COMPLETE`;
      button = game.levelIndex === 0 ? "Into the grotto" : "Up to the canopy";
      hint = "to continue";
    } else if (mode === "won") {
      title = "You lit up the sky.";
      description = game.totalShards === 9
        ? "All nine sun shards. Three glowing worlds.<br>A perfect little adventure."
        : "Three worlds, one tiny legend.<br>Can you find all nine sun shards next time?";
      badge = "ADVENTURE COMPLETE";
      button = "One more adventure";
      hint = "to play again";
    } else if (mode === "game-over") {
      title = "One more jump?";
      description = "A few bumps. A few bruises.<br>Every great explorer starts again.";
      badge = "A NEW START IS WAITING";
      button = "Try again";
      hint = "to try again";
    }
    ui["overlay-title"].textContent = title;
    ui["overlay-description"].innerHTML = description;
    ui["overlay-badge"].innerHTML = `<span></span> ${badge}`;
    ui["play-label"].textContent = button;
    ui["start-hint"].innerHTML = `or press <kbd>ENTER</kbd> ${hint}`;
    if (mode !== "playing") clearInput();
    if (overlayVisible) ui["play-button"].focus({ preventScroll: true });
  }

  game.onEvent = (event) => {
    sound.effect(event.type);
    if (["coin", "shard", "power", "stomp", "break", "clear"].includes(event.type)) saveBest();
    if (event.type === "world") syncWorldUI();
    if (event.type === "mode") {
      syncUI();
      if (["complete", "won", "game-over"].includes(event.mode)) saveBest();
      const announcement = event.mode === "playing" ? `Exploring ${game.level.name}.`
        : event.mode === "dying" ? `${game.deathReason}. ${game.lives} lives left.`
        : ui["overlay-title"].textContent;
      ui.announcements.textContent = announcement;
    }
    const tips = {
      start: "Hold jump to leap higher. Run with Shift to clear the wider gaps.",
      power: "Sunfruit shield! You can take one hit and break brick blocks from below.",
      checkpoint: "Checkpoint lit. If you take a tumble, your adventure resumes here.",
      shard: "A sun shard! There are three tucked away in every world.",
      death: "Try a running jump with Shift + Space. You can also move with A and D.",
      clear: "A lantern lit, a world explored. Your next adventure is ready.",
      "extra-life": "An extra life! Every 50 coins gives you another chance.",
    };
    if (tips[event.type]) ui.tip.textContent = tips[event.type];
  };

  function beginOrContinue() {
    clearInput();
    sound.unlock();
    game.action();
    if (game.mode === "playing") focusGame();
  }
  ui["play-button"].addEventListener("click", beginOrContinue);
  ui["sound-button"].addEventListener("click", () => sound.toggle());
  ui["pause-button"].addEventListener("click", () => {
    sound.unlock();
    game.togglePause();
    if (game.mode === "playing") focusGame();
  });
  ui["restart-button"].addEventListener("click", () => {
    clearInput();
    sound.unlock();
    game.start();
    focusGame();
  });

  const controlledKeys = new Set([...Object.values(movement).flat(), "Enter", "KeyP", "Escape", "KeyM", "KeyR"]);
  window.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey ||
        event.target.closest?.("input, textarea, [contenteditable='true']")) return;
    if (!controlledKeys.has(event.code)) return;
    event.preventDefault();
    if (event.repeat) return;
    if (event.code === "KeyM") { sound.toggle(); return; }
    if (event.code === "KeyP" || event.code === "Escape") {
      game.togglePause();
      if (game.mode === "playing") focusGame();
      return;
    }
    if (event.code === "KeyR") {
      clearInput();
      sound.unlock();
      game.start();
      focusGame();
      return;
    }
    if ((event.code === "Enter" || event.code === "Space") &&
        ["title", "paused", "complete", "won", "game-over"].includes(game.mode)) {
      beginOrContinue();
      return;
    }
    const wasJumping = isHeld("jump");
    held.add(event.code);
    if (!wasJumping && isHeld("jump")) jumpPressed = true;
  });
  window.addEventListener("keyup", (event) => {
    if (controlledKeys.has(event.code) && !event.metaKey && !event.ctrlKey) event.preventDefault();
    const wasJumping = isHeld("jump");
    held.delete(event.code);
    if (wasJumping && !isHeld("jump")) jumpReleased = true;
  });

  document.querySelectorAll("[data-control]").forEach((button) => {
    const action = button.dataset.control;
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      if (game.mode === "title") beginOrContinue();
      if (action === "jump" && !isHeld("jump")) jumpPressed = true;
      touchHeld.add(action);
    });
    const release = () => {
      const wasJumping = isHeld("jump");
      touchHeld.delete(action);
      if (wasJumping && !isHeld("jump")) jumpReleased = true;
    };
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("lostpointercapture", release);
  });

  function autoPause() {
    clearInput();
    game.pause();
  }
  window.addEventListener("blur", autoPause);
  document.addEventListener("visibilitychange", () => { if (document.hidden) autoPause(); });
  window.addEventListener("pagehide", () => { autoPause(); saveBest(); });
  canvas.addEventListener("pointerdown", focusGame);
  window.skySprout = game;
  syncSound();
  saveBest();
  syncUI();

  let lastTime = performance.now();
  let accumulator = 0;
  function frame(now) {
    accumulator += Math.min(Math.max(0, (now - lastTime) / 1000), 0.1);
    lastTime = now;
    while (accumulator >= STEP) {
      const input = {
        left: isHeld("left"), right: isHeld("right"), run: isHeld("run"),
        jump: isHeld("jump"), jumpPressed, jumpReleased,
      };
      game.step(STEP, input);
      sound.tick(STEP, game.mode === "playing", game.levelIndex);
      jumpPressed = false;
      jumpReleased = false;
      accumulator -= STEP;
    }
    renderer.draw();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
