(function (root) {
  "use strict";

  const TILE = 16;
  const WIDTH = 480;
  const HEIGHT = 270;
  const FLOOR = 224;
  const STEP = 1 / 60;
  const GRAVITY = 850;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const approach = (value, target, amount) =>
    value < target ? Math.min(value + amount, target) : Math.max(value - amount, target);
  const overlaps = (a, b) =>
    a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

  const WORLDS = [
    {
      id: "meadow",
      name: "Sunlit Meadow",
      description: "Every adventure starts with a little leap.",
      length: 180,
      checkpoint: 87,
      gaps: [[24, 3], [51, 4], [82, 3], [111, 4], [141, 4]],
      platforms: [
        [14, 10, 3], [35, 11, 4], [63, 11, 4], [74, 9, 3], [94, 11, 3],
        [106, 11, 3], [123, 11, 4], [151, 11, 3], [158, 10, 3], [165, 9, 3],
      ],
      blocks: [
        [8, 11, "coin"], [9, 11, "brick"], [10, 11, "fruit"], [11, 11, "brick"],
        [32, 11, "coin"], [33, 11, "brick"], [44, 11, "fruit"], [60, 11, "coin"],
        [70, 11, "brick"], [71, 11, "coin"], [90, 11, "fruit"], [102, 11, "coin"],
        [119, 11, "coin"], [132, 11, "fruit"], [150, 11, "coin"], [156, 11, "brick"],
      ],
      pillars: [[20, 12, 2, 2], [46, 12, 2, 2], [99, 12, 2, 2], [136, 12, 2, 2],
        [169, 13, 1, 1], [170, 12, 1, 2], [171, 11, 1, 3]],
      trails: [
        [6, 10, 5], [14, 8, 3], [23, 10, 5], [35, 9, 4], [51, 10, 4],
        [62, 9, 4], [81, 10, 5], [94, 9, 3], [111, 10, 4], [123, 9, 4],
        [140, 10, 6], [157, 8, 4], [165, 7, 3],
      ],
      shards: [[15, 7], [75, 6], [160, 7]],
      enemies: [[17, "beetle"], [39, "beetle"], [48, "hopper"], [67, "beetle"],
        [77, "beetle"], [97, "beetle"], [105, "hopper"], [126, "beetle"],
        [138, "beetle"], [153, "hopper"], [162, "beetle"]],
      theme: {
        sky: "#79c5dd", horizon: "#d8f0cf", far: "#93c9b6", middle: "#66b59c",
        near: "#398e79", grass: "#75bb63", grassLight: "#bee887", grassDark: "#40856a",
        soil: "#bf8d60", soilDark: "#9c6d4e", fleck: "#d7ab77", accent: "#ffe18a",
        cloud: "#f1f8dd", stone: "#73a09a", stoneDark: "#4c7778",
      },
    },
    {
      id: "grotto",
      name: "Glowstone Grotto",
      description: "Follow the glow. Mind the gaps.",
      length: 188,
      checkpoint: 91,
      gaps: [[28, 4], [58, 3], [84, 4], [115, 4], [146, 5], [168, 3]],
      platforms: [
        [17, 11, 4], [24, 9, 3], [38, 11, 4], [65, 11, 4], [72, 9, 4],
        [96, 11, 4], [106, 10, 3], [122, 11, 4], [135, 10, 4],
        [155, 11, 4], [164, 9, 4], [176, 11, 4],
      ],
      blocks: [
        [8, 11, "fruit"], [9, 11, "brick"], [10, 11, "coin"], [15, 11, "coin"],
        [22, 11, "brick"], [23, 11, "coin"], [35, 11, "fruit"], [48, 11, "coin"],
        [55, 11, "brick"], [64, 11, "fruit"], [70, 11, "coin"], [80, 11, "coin"],
        [92, 11, "fruit"], [103, 11, "coin"], [112, 11, "coin"], [130, 11, "fruit"],
        [143, 11, "coin"], [160, 11, "coin"], [161, 11, "fruit"], [174, 11, "coin"],
      ],
      pillars: [[13, 12, 2, 2], [44, 12, 2, 2], [77, 12, 2, 2],
        [101, 12, 2, 2], [140, 12, 2, 2], [180, 13, 1, 1], [181, 12, 1, 2]],
      trails: [
        [6, 10, 4], [17, 9, 4], [24, 7, 3], [27, 10, 6], [38, 9, 4],
        [57, 10, 5], [65, 9, 4], [72, 7, 4], [83, 10, 6], [96, 9, 4],
        [114, 10, 6], [135, 8, 4], [145, 10, 7], [155, 9, 4], [167, 10, 5],
        [176, 9, 4],
      ],
      shards: [[25, 6], [74, 6], [166, 6]],
      enemies: [[19, "beetle"], [34, "hopper"], [42, "beetle"], [53, "beetle"],
        [68, "hopper"], [81, "beetle"], [98, "hopper"], [110, "beetle"],
        [125, "beetle"], [138, "hopper"], [158, "beetle"], [173, "hopper"]],
      theme: {
        sky: "#182438", horizon: "#44466b", far: "#29364f", middle: "#364365",
        near: "#4b5981", grass: "#72beb5", grassLight: "#b3ecd1", grassDark: "#4b8997",
        soil: "#676784", soilDark: "#4b4e69", fleck: "#8781a2", accent: "#c7bbff",
        cloud: "#7670aa", stone: "#707b9f", stoneDark: "#4e567a",
      },
    },
    {
      id: "canopy",
      name: "Cloudtop Canopy",
      description: "One last climb. The whole sky is waiting.",
      length: 196,
      checkpoint: 114,
      gaps: [[23, 4], [49, 4], [78, 5], [109, 4], [139, 5], [164, 4]],
      platforms: [
        [10, 11, 4], [18, 9, 3], [33, 11, 4], [42, 10, 3], [57, 11, 3],
        [62, 10, 2], [66, 9, 4], [88, 11, 4], [98, 10, 4],
        [116, 11, 4], [128, 9, 3], [149, 11, 4], [158, 10, 3],
        [172, 11, 4], [181, 9, 4],
      ],
      blocks: [
        [7, 11, "fruit"], [8, 11, "coin"], [16, 11, "coin"], [29, 11, "fruit"],
        [40, 11, "coin"], [46, 11, "coin"], [55, 11, "brick"], [64, 11, "coin"],
        [73, 11, "fruit"], [85, 11, "coin"], [94, 11, "fruit"], [105, 11, "coin"],
        [121, 11, "brick"], [125, 11, "coin"], [133, 11, "fruit"],
        [146, 11, "coin"], [155, 11, "fruit"], [161, 11, "coin"],
        [170, 11, "fruit"], [178, 11, "coin"],
      ],
      pillars: [[37, 12, 2, 2], [70, 12, 2, 2], [102, 12, 2, 2], [124, 12, 2, 2],
        [153, 12, 2, 2], [186, 13, 1, 1], [187, 12, 1, 2], [188, 11, 1, 3]],
      trails: [
        [7, 9, 4], [18, 7, 3], [22, 10, 6], [33, 9, 4], [42, 8, 3],
        [48, 10, 6], [57, 9, 3], [66, 7, 4], [77, 10, 7], [88, 9, 4],
        [98, 8, 4], [108, 10, 6], [116, 9, 4], [128, 7, 3],
        [138, 10, 7], [149, 9, 4], [158, 8, 3], [163, 10, 6], [181, 7, 4],
      ],
      shards: [[19, 6], [68, 6], [183, 6]],
      enemies: [[15, "beetle"], [30, "hopper"], [45, "beetle"], [60, "hopper"],
        [75, "beetle"], [91, "hopper"], [106, "beetle"], [120, "hopper"],
        [135, "beetle"], [151, "beetle"], [160, "hopper"], [174, "beetle"]],
      theme: {
        sky: "#7192ba", horizon: "#f6d1ab", far: "#b8a9bc", middle: "#a19db2",
        near: "#798ea0", grass: "#afb976", grassLight: "#e1e9a0", grassDark: "#708a71",
        soil: "#c69c81", soilDark: "#a57e72", fleck: "#e1b995", accent: "#ffe8a3",
        cloud: "#ffe7cd", stone: "#a29ea4", stoneDark: "#777b89",
      },
    },
  ];

  function createLevel(index) {
    const config = WORLDS[index];
    if (!config) throw new RangeError(`Unknown world: ${index}`);
    const solids = [];
    let start = 0;
    for (const [gap, width] of [...config.gaps, [config.length, 0]]) {
      solids.push({ x: start * TILE, y: FLOOR, w: (gap - start) * TILE,
        h: HEIGHT - FLOOR + TILE, kind: "ground" });
      start = gap + width;
    }
    for (const [x, y, width] of config.platforms) {
      solids.push({ x: x * TILE, y: y * TILE, w: width * TILE, h: TILE, kind: "platform" });
    }
    for (const [x, y, width, height] of config.pillars) {
      solids.push({ x: x * TILE, y: y * TILE, w: width * TILE, h: height * TILE, kind: "pillar" });
    }
    const blocks = config.blocks.map(([x, y, content]) => ({
      x: x * TILE, y: y * TILE, w: TILE, h: TILE, kind: "block",
      content, used: false, removed: false, bump: 0,
    }));
    const coins = config.trails.flatMap(([x, row, count]) =>
      Array.from({ length: count }, (_, i) => ({
        x: (x + i) * TILE + 5,
        y: row * TILE + 4 - Math.sin((i / Math.max(1, count - 1)) * Math.PI) * 10,
        w: 6, h: 8, collected: false,
      })));
    const shards = config.shards.map(([x, y]) => ({
      x: x * TILE + 3, y: y * TILE + 2, w: 10, h: 12, collected: false,
    }));
    const enemies = config.enemies.map(([x, type], i) => ({
      x: x * TILE + 2, y: FLOOR - 12, w: 13, h: 12,
      spawnX: x * TILE + 2, spawnY: FLOOR - 12,
      vx: -(type === "hopper" ? 22 : 27 + index * 3), vy: 0,
      type, grounded: true, dead: false, squash: 0, hopTimer: 0.8 + (i % 3) * 0.3,
    }));
    return {
      ...config, width: config.length * TILE, solids, blocks, coins, shards, enemies,
      items: [], timeLeft: 180, checkpointReached: false,
      checkpointX: config.checkpoint * TILE, goalX: (config.length - 5) * TILE,
    };
  }

  class Engine {
    constructor(options = {}) {
      this.onEvent = options.onEvent || (() => {});
      this.reducedMotion = Boolean(options.reducedMotion);
      this.randomState = 1731;
      this.mode = "title";
      this.score = 0;
      this.coins = 0;
      this.lives = 3;
      this.totalShards = 0;
      this.elapsed = 0;
      this.particles = [];
      this.messages = [];
      this.shake = 0;
      this.loadLevel(0);
    }

    random() {
      this.randomState = (this.randomState * 1664525 + 1013904223) >>> 0;
      return this.randomState / 4294967296;
    }

    emit(type, detail = {}) {
      this.onEvent({ type, ...detail });
    }

    setMode(mode) {
      this.mode = mode;
      this.emit("mode", { mode });
    }

    makePlayer(x = 3 * TILE) {
      return {
        x, y: FLOOR - 18, w: 12, h: 18, vx: 0, vy: 0,
        grounded: true, facing: 1, shield: false, invincible: 0,
        coyote: 0.1, jumpBuffer: 0, stride: 0, dustTimer: 0,
      };
    }

    loadLevel(index) {
      this.levelIndex = index;
      this.level = createLevel(index);
      this.player = this.makePlayer();
      this.camera = 0;
      this.particles = [];
      this.messages = [];
      this.deathTime = 0;
      this.deathReason = "";
      this.emit("world", { index });
    }

    start() {
      this.score = 0;
      this.coins = 0;
      this.lives = 3;
      this.totalShards = 0;
      this.elapsed = 0;
      this.loadLevel(0);
      this.setMode("playing");
      this.emit("start");
    }

    action() {
      if (this.mode === "complete") {
        const shield = this.player.shield;
        this.loadLevel(this.levelIndex + 1);
        this.player.shield = shield;
        this.setMode("playing");
        this.emit("start");
      } else if (this.mode === "paused") {
        this.setMode("playing");
      } else if (["title", "game-over", "won"].includes(this.mode)) {
        this.start();
      }
    }

    pause() {
      if (this.mode === "playing") this.setMode("paused");
    }

    togglePause() {
      if (this.mode === "paused") this.setMode("playing");
      else this.pause();
    }

    getSolids() {
      return this.level.solids.concat(this.level.blocks.filter((block) => !block.removed));
    }

    move(body, axis, amount, solids) {
      body[axis] += amount;
      let hit = null;
      for (const solid of solids) {
        if (solid.removed || !overlaps(body, solid)) continue;
        if (axis === "x") {
          if (amount > 0) body.x = solid.x - body.w;
          else if (amount < 0) body.x = solid.x + solid.w;
        } else {
          if (amount > 0) {
            body.y = solid.y - body.h;
            body.grounded = true;
          } else if (amount < 0) {
            body.y = solid.y + solid.h;
            if (body === this.player && solid.kind === "block") this.hitBlock(solid);
          }
          body.vy = 0;
        }
        hit = solid;
      }
      return hit;
    }

    burst(x, y, colors, count = 10, power = 65) {
      for (let i = 0; i < count; i++) {
        const life = 0.35 + this.random() * 0.4;
        this.particles.push({
          x, y, vx: (this.random() - 0.5) * power * 2,
          vy: -this.random() * power - 25, gravity: 160,
          life, maxLife: life, color: colors[i % colors.length],
          size: this.random() > 0.7 ? 3 : 2,
        });
      }
      if (this.particles.length > 220) this.particles.splice(0, this.particles.length - 220);
    }

    message(text, x, y, color = "#fff2b5") {
      this.messages.push({ text, x, y, color, life: 1.2 });
    }

    gainCoin(x, y) {
      const previous = this.coins;
      this.coins++;
      this.score += 100;
      this.emit("coin");
      this.burst(x, y, ["#ffe6a0", "#fff9d8"], 5, 35);
      if (Math.floor(this.coins / 50) > Math.floor(previous / 50)) {
        this.lives = Math.min(9, this.lives + 1);
        this.message("EXTRA LIFE!", x, y - 12);
        this.emit("extra-life");
      }
    }

    hitBlock(block) {
      if (block.bump > 0 || block.removed) return;
      block.bump = 0.16;
      if (block.content === "brick") {
        if (this.player.shield) {
          block.removed = true;
          this.score += 50;
          this.burst(block.x + 8, block.y + 8, ["#e1b995", "#a57e72"], 12, 90);
          this.emit("break");
        } else this.emit("bump");
        return;
      }
      if (block.used) {
        this.emit("bump");
        return;
      }
      block.used = true;
      if (block.content === "coin") {
        this.gainCoin(block.x + 8, block.y - 8);
        this.message("+100", block.x + 8, block.y - 8);
      } else {
        this.level.items.push({
          x: block.x + 2, y: block.y, originY: block.y, w: 12, h: 12,
          vx: this.player.facing * 34, vy: 0, emerging: 0.35, grounded: false, collected: false,
        });
        this.emit("reveal");
      }
    }

    step(dt, input = {}) {
      if (this.mode === "paused") return;
      this.elapsed += dt;
      this.shake = Math.max(0, this.shake - dt);
      this.updateEffects(dt);
      for (const block of this.level.blocks) block.bump = Math.max(0, block.bump - dt);
      if (this.mode === "dying") {
        this.deathTime -= dt;
        this.player.vy += GRAVITY * dt;
        this.player.y += this.player.vy * dt;
        if (this.deathTime <= 0) {
          if (this.lives <= 0) this.setMode("game-over");
          else this.respawn();
        }
        return;
      }
      if (this.mode !== "playing") return;
      this.level.timeLeft = Math.max(0, this.level.timeLeft - dt);
      if (this.level.timeLeft === 0) {
        this.die("Out of time");
        return;
      }
      const previousBottom = this.player.y + this.player.h;
      const solids = this.getSolids();
      this.updatePlayer(dt, input, solids);
      if (this.mode !== "playing") return;
      this.updateEnemies(dt, solids, previousBottom, Boolean(input.jump));
      if (this.mode !== "playing") return;
      this.updateItems(dt, solids);
      this.collect();
      if (!this.level.checkpointReached && this.player.x >= this.level.checkpointX &&
          this.player.y + this.player.h <= FLOOR + 2) {
        this.level.checkpointReached = true;
        this.message("CHECKPOINT", this.level.checkpointX, FLOOR - 54, "#b8ffdc");
        this.burst(this.level.checkpointX + 6, FLOOR - 36, ["#8ce5bc", "#fff2b5"], 20);
        this.emit("checkpoint");
      }
      if (this.player.x + this.player.w >= this.level.goalX && this.player.y < FLOOR) {
        this.finishLevel();
      }
      const target = clamp(this.player.x - WIDTH * 0.35 + this.player.facing * 20,
        0, this.level.width - WIDTH);
      this.camera += (target - this.camera) * (1 - Math.exp(-dt * 7));
    }

    updatePlayer(dt, input, solids) {
      const p = this.player;
      const direction = Number(Boolean(input.right)) - Number(Boolean(input.left));
      const wasGrounded = p.grounded;
      p.invincible = Math.max(0, p.invincible - dt);
      p.coyote = p.grounded ? 0.1 : Math.max(0, p.coyote - dt);
      p.jumpBuffer = input.jumpPressed ? 0.13 : Math.max(0, p.jumpBuffer - dt);
      if (direction) {
        p.facing = direction;
        p.vx = approach(p.vx, direction * (input.run ? 150 : 98), (p.grounded ? 900 : 600) * dt);
      } else p.vx = approach(p.vx, 0, (p.grounded ? 950 : 240) * dt);
      if (p.jumpBuffer > 0 && p.coyote > 0) {
        p.vy = -340;
        p.grounded = false;
        p.coyote = 0;
        p.jumpBuffer = 0;
        this.burst(p.x + 6, p.y + p.h, ["#e5e8bf", "#b9d1a7"], 5, 25);
        this.emit("jump");
      }
      if (input.jumpReleased && p.vy < -110) p.vy *= 0.45;
      p.vy = Math.min(p.vy + GRAVITY * dt, 440);
      if (this.move(p, "x", p.vx * dt, solids)) p.vx = 0;
      p.x = clamp(p.x, 0, this.level.width - p.w);
      p.grounded = false;
      this.move(p, "y", p.vy * dt, solids);
      if (p.grounded && !wasGrounded) {
        this.burst(p.x + 6, p.y + p.h, ["#e5e8bf", "#b9d1a7"], 5, 25);
      }
      p.stride += Math.abs(p.vx) * dt;
      p.dustTimer -= dt;
      if (p.grounded && Math.abs(p.vx) > 110 && p.dustTimer <= 0) {
        this.burst(p.x + 6, p.y + p.h, ["#e5e8bf"], 1, 12);
        p.dustTimer = 0.1;
      }
      if (p.y > HEIGHT + 40) this.die("Mind the gap");
    }

    updateEnemies(dt, solids, previousBottom, holdingJump) {
      const p = this.player;
      for (const enemy of this.level.enemies) {
        enemy.squash = Math.max(0, enemy.squash - dt);
        if (enemy.dead || Math.abs(enemy.x - p.x) > WIDTH + 80) continue;
        if (enemy.grounded) {
          const ahead = enemy.x + (enemy.vx > 0 ? enemy.w + 3 : -3);
          const feet = enemy.y + enemy.h;
          if (!solids.some((s) => ahead >= s.x && ahead < s.x + s.w &&
              s.y >= feet - 2 && s.y <= feet + 5)) enemy.vx *= -1;
          if (enemy.type === "hopper") {
            enemy.hopTimer -= dt;
            if (enemy.hopTimer <= 0) {
              enemy.vy = -190;
              enemy.hopTimer = 1.6;
            }
          }
        }
        enemy.vy = Math.min(enemy.vy + GRAVITY * dt, 400);
        if (this.move(enemy, "x", enemy.vx * dt, solids)) enemy.vx *= -1;
        enemy.grounded = false;
        this.move(enemy, "y", enemy.vy * dt, solids);
        if (enemy.y > HEIGHT + 24) {
          enemy.dead = true;
          continue;
        }
        if (!overlaps(p, enemy)) continue;
        if (p.vy >= 0 && previousBottom <= enemy.y + 6) {
          enemy.dead = true;
          enemy.squash = 0.25;
          p.vy = holdingJump ? -285 : -225;
          p.grounded = false;
          p.coyote = 0;
          this.score += 200;
          this.burst(enemy.x + 6, enemy.y + 4, ["#ffe8ae", "#d89770"], 8, 50);
          this.message("+200", enemy.x + 6, enemy.y - 4);
          this.emit("stomp");
        } else if (p.invincible <= 0) {
          this.hurt(enemy.x);
          if (this.mode !== "playing") return;
        }
      }
    }

    updateItems(dt, solids) {
      for (const item of this.level.items) {
        if (item.collected) continue;
        if (item.emerging > 0) {
          item.emerging = Math.max(0, item.emerging - dt);
          item.y = item.originY - item.h * (1 - item.emerging / 0.35);
          continue;
        }
        item.vy = Math.min(item.vy + GRAVITY * dt, 350);
        if (this.move(item, "x", item.vx * dt, solids)) item.vx *= -1;
        item.grounded = false;
        this.move(item, "y", item.vy * dt, solids);
        if (item.y > HEIGHT + 24) item.collected = true;
      }
    }

    collect() {
      const p = this.player;
      for (const coin of this.level.coins) {
        if (!coin.collected && overlaps(p, coin)) {
          coin.collected = true;
          this.gainCoin(coin.x + 3, coin.y + 4);
        }
      }
      for (const shard of this.level.shards) {
        if (!shard.collected && overlaps(p, shard)) {
          shard.collected = true;
          this.totalShards++;
          this.score += 500;
          this.burst(shard.x + 5, shard.y + 6, ["#fff5bb", "#9ceac4", "#ffffff"], 24, 85);
          this.message("SUN SHARD! +500", shard.x + 5, shard.y - 8);
          this.emit("shard");
        }
      }
      for (const item of this.level.items) {
        if (!item.collected && item.emerging <= 0 && overlaps(p, item)) {
          item.collected = true;
          p.shield = true;
          this.score += 300;
          this.burst(p.x + 6, p.y + 8, ["#b4ffdc", "#fff3a4"], 20, 60);
          this.message("SUNFRUIT SHIELD", p.x + 6, p.y - 12, "#b8ffdc");
          this.emit("power");
        }
      }
    }

    hurt(sourceX) {
      if (this.player.invincible > 0 || this.mode !== "playing") return;
      if (this.player.shield) {
        this.player.shield = false;
        this.player.invincible = 2;
        this.player.vx = this.player.x < sourceX ? -95 : 95;
        this.player.vy = -150;
        this.player.grounded = false;
        this.shake = 0.18;
        this.burst(this.player.x + 6, this.player.y + 8, ["#b4ffdc", "#faffd9"], 18, 85);
        this.emit("hurt");
      } else this.die("Watch those beetles");
    }

    die(reason) {
      if (this.mode !== "playing") return;
      this.lives--;
      this.deathReason = reason;
      this.deathTime = 1.1;
      this.player.vy = -245;
      this.player.vx = 0;
      this.player.shield = false;
      this.shake = 0.2;
      this.setMode("dying");
      this.emit("death", { reason });
    }

    respawn() {
      this.player = this.makePlayer(this.level.checkpointReached ? this.level.checkpointX + 8 : 3 * TILE);
      this.player.invincible = 2;
      this.camera = clamp(this.player.x - WIDTH * 0.35, 0, this.level.width - WIDTH);
      if (this.deathReason === "Out of time") this.level.timeLeft = 180;
      for (const enemy of this.level.enemies) {
        if (!enemy.dead) {
          enemy.x = enemy.spawnX;
          enemy.y = enemy.spawnY;
          enemy.vy = 0;
          enemy.grounded = true;
        }
      }
      this.setMode("playing");
      this.emit("respawn");
    }

    finishLevel() {
      if (this.mode !== "playing") return;
      this.score += Math.ceil(this.level.timeLeft) * 10;
      this.player.vx = 0;
      this.burst(this.level.goalX + 8, FLOOR - 70,
        ["#ffe8a3", "#a2e8bd", "#ffffff", "#f6ac91"], 70, 130);
      this.setMode(this.levelIndex === WORLDS.length - 1 ? "won" : "complete");
      this.emit("clear");
    }

    updateEffects(dt) {
      for (const particle of this.particles) {
        particle.life -= dt;
        particle.vy += particle.gravity * dt;
        particle.x += particle.vx * dt;
        particle.y += particle.vy * dt;
      }
      this.particles = this.particles.filter((particle) => particle.life > 0);
      for (const message of this.messages) {
        message.life -= dt;
        message.y -= dt * 16;
      }
      this.messages = this.messages.filter((message) => message.life > 0);
    }
  }

  const api = { Engine, createLevel, WORLDS, TILE, WIDTH, HEIGHT, FLOOR, STEP, GRAVITY, clamp, overlaps };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.SkySprout = api;
})(globalThis);
