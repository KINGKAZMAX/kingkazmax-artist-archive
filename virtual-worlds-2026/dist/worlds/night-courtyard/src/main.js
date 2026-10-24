// 3D World Starter — three.js + anime.js
// ---------------------------------------------------------------------------
// A polished, production-baseline three.js scene wired up with anime.js.
// Everything below is meant to be a clean canvas you can describe changes to:
// terrain, characters, mechanics, etc. The heavy lifting (renderer, sky,
// lighting, post-processing, controls) is already done and looks good.
//
// Building with Claude Code? Just describe what you want next ("add a river",
// "make the crystals collectible", "spawn a character I can walk around as")
// and let it edit this file. See CLAUDE.md for how it's meant to work.
//
// Libraries are loaded locally via the importmap in index.html — no CDN, no
// build step. To use ANY three.js addon, just:  import { X } from 'three/addons/...';
// ---------------------------------------------------------------------------

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { animate, createTimeline, stagger, utils } from 'animejs';

// ---------------------------------------------------------------------------
// Renderer
// ---------------------------------------------------------------------------
const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.7;
app.appendChild(renderer.domElement);

// ---------------------------------------------------------------------------
// Scene + camera
// ---------------------------------------------------------------------------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x08090b);
scene.fog = new THREE.FogExp2(0x160a10, 0.009);

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(14, 9, 18);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(0, 2, 0);
controls.maxPolarAngle = Math.PI * 0.495; // don't go under the ground
controls.minDistance = 6;
controls.maxDistance = 60;

// ---------------------------------------------------------------------------
// Sky + sun
// ---------------------------------------------------------------------------
const sky = new Sky();
sky.scale.setScalar(4500);
// Keep the daylight shader offstage; setSun still positions the key light.

const sun = new THREE.Vector3();
const skyU = sky.material.uniforms;
skyU.turbidity.value = 8;
skyU.rayleigh.value = 2;
skyU.mieCoefficient.value = 0.005;
skyU.mieDirectionalG.value = 0.8;

function setSun(elevationDeg, azimuthDeg) {
  const phi = THREE.MathUtils.degToRad(90 - elevationDeg);
  const theta = THREE.MathUtils.degToRad(azimuthDeg);
  sun.setFromSphericalCoords(1, phi, theta);
  skyU.sunPosition.value.copy(sun);
  sunLight.position.copy(sun).multiplyScalar(60);
}

// ---------------------------------------------------------------------------
// Lighting
// ---------------------------------------------------------------------------
const hemi = new THREE.HemisphereLight(0xffc2cc, 0x170b12, 0.9);
scene.add(hemi);

const sunLight = new THREE.DirectionalLight(0xff9caa, 1.3);
sunLight.castShadow = true;
sunLight.shadow.mapSize.set(2048, 2048);
sunLight.shadow.camera.near = 1;
sunLight.shadow.camera.far = 200;
sunLight.shadow.camera.left = -40;
sunLight.shadow.camera.right = 40;
sunLight.shadow.camera.top = 40;
sunLight.shadow.camera.bottom = -40;
sunLight.shadow.bias = -0.0002;
scene.add(sunLight);
scene.add(sunLight.target);

setSun(18, 135);

// ---------------------------------------------------------------------------
// Ground
// ---------------------------------------------------------------------------
const ground = new THREE.Mesh(
  new THREE.CircleGeometry(120, 64),
  new THREE.MeshStandardMaterial({ color: 0x3c252f, emissive: 0x1d0910, emissiveIntensity: 0.6, roughness: 1, metalness: 0 })
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// A soft grid so the space reads as a buildable world, not a void.
const grid = new THREE.GridHelper(120, 60, 0xffffff, 0xffffff);
grid.material.transparent = true;
grid.material.opacity = 0.06;
grid.position.y = 0.01;
scene.add(grid);

// ---------------------------------------------------------------------------
// Demo objects — floating crystals (placeholder content, fun to look at)
// These prove lighting + bloom + anime.js entrance animations all work.
// ---------------------------------------------------------------------------
const crystals = new THREE.Group();
scene.add(crystals);

const crystalColors = [0xff304a, 0xff5c72, 0xff93a3, 0xb71432, 0xffffff];
for (let i = 0; i < 5; i++) {
  const mat = new THREE.MeshStandardMaterial({
    color: crystalColors[i],
    emissive: crystalColors[i],
    emissiveIntensity: 0.35,
    roughness: 0.15,
    metalness: 0.1,
    flatShading: true,
  });
  const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), mat);
  const angle = (i / 5) * Math.PI * 2;
  mesh.position.set(Math.cos(angle) * 6, 3, Math.sin(angle) * 6);
  mesh.castShadow = true;
  mesh.userData.baseY = mesh.position.y;
  mesh.userData.spin = 0.3 + Math.random() * 0.5;
  mesh.scale.setScalar(0); // start hidden; anime.js pops them in
  crystals.add(mesh);
}

// Cai Zhixin's architectural intervention: three luminous thresholds turn
// an open courtyard into a sequence of rooms that the visitor can traverse.
const thresholds = new THREE.Group();
const darkStone = new THREE.MeshStandardMaterial({ color: 0x150f15, roughness: 0.42, metalness: 0.72 });
const redEdge = new THREE.MeshStandardMaterial({ color: 0xff304a, emissive: 0xff304a, emissiveIntensity: 1.8, roughness: 0.2 });
for (let i = 0; i < 3; i++) {
  const gate = new THREE.Group();
  const angle = (i / 3) * Math.PI * 2 + 0.45;
  const addBeam = (width, height, depth, x, y, z, material) => {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    beam.position.set(x, y, z);
    beam.castShadow = true;
    gate.add(beam);
  };
  addBeam(0.65, 6.6, 0.7, -2.5, 3.3, 0, darkStone);
  addBeam(0.65, 6.6, 0.7, 2.5, 3.3, 0, darkStone);
  addBeam(5.65, 0.65, 0.7, 0, 6.25, 0, darkStone);
  addBeam(5.7, 0.08, 0.76, 0, 5.83, 0, redEdge);
  addBeam(0.08, 5.9, 0.76, -2.08, 2.9, 0, redEdge);
  gate.position.set(Math.cos(angle) * 17, 0, Math.sin(angle) * 17);
  gate.rotation.y = angle + Math.PI / 2;
  thresholds.add(gate);
}
scene.add(thresholds);

// ---------------------------------------------------------------------------
// Loaded 3D assets — real CC0 models (Kenney Fantasy Town Kit).
// This is the asset pipeline: drop a .glb in assets/models/ and load it here.
// A cute fairy-tale courtyard: a fountain in the middle, trees around it.
// ---------------------------------------------------------------------------
const gltfLoader = new GLTFLoader();

// helper: load a model, enable shadows, place + scale it, add to the scene.
function loadModel(file, { position = [0, 0, 0], rotationY = 0, scale = 1 } = {}) {
  gltfLoader.load(`./assets/models/${file}`, (gltf) => {
    const model = gltf.scene;
    model.position.set(...position);
    model.rotation.y = rotationY;
    model.scale.setScalar(scale);
    model.traverse((o) => {
      if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    });
    scene.add(model);
    // gentle "place down" pop using anime.js
    model.scale.setScalar(scale * 0.001);
    animate(model.scale, { x: scale, y: scale, z: scale, duration: 600, ease: 'out(3)' });
  });
}

const TREE_RING = 11;
loadModel('fountain-round.glb', { position: [0, 0, 0], scale: 2.4 });
for (let i = 0; i < 6; i++) {
  const a = (i / 6) * Math.PI * 2;
  const file = i % 2 === 0 ? 'tree-high-round.glb' : 'tree.glb';
  loadModel(file, { position: [Math.cos(a) * TREE_RING, 0, Math.sin(a) * TREE_RING], rotationY: a, scale: 2.2 });
}
loadModel('lantern.glb', { position: [3.5, 0, 3.5], rotationY: -0.6, scale: 2 });
loadModel('lantern.glb', { position: [-3.5, 0, -3.5], rotationY: 2.4, scale: 2 });

// ---------------------------------------------------------------------------
// Post-processing — subtle bloom for that "production" glow
// ---------------------------------------------------------------------------
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.5,  // strength
  0.6,  // radius
  0.85  // threshold
);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ---------------------------------------------------------------------------
// Keyboard movement — arrow keys (and WASD) glide you across the world.
// Movement is relative to where the camera faces: Up = forward, Down = back,
// Left/Right = strafe. Drag-to-look and scroll-zoom still work alongside it.
// ---------------------------------------------------------------------------
const keys = new Set();
const MOVE_SPEED = 12; // world units per second

const MOVE_KEYS = {
  ArrowUp: 'forward', KeyW: 'forward',
  ArrowDown: 'back', KeyS: 'back',
  ArrowLeft: 'left', KeyA: 'left',
  ArrowRight: 'right', KeyD: 'right',
};

window.addEventListener('keydown', (e) => {
  if (MOVE_KEYS[e.code]) { keys.add(MOVE_KEYS[e.code]); e.preventDefault(); }
});
window.addEventListener('keyup', (e) => {
  if (MOVE_KEYS[e.code]) keys.delete(MOVE_KEYS[e.code]);
});
// Stop drifting if focus leaves the page mid-press.
window.addEventListener('blur', () => keys.clear());

const _forward = new THREE.Vector3();
const _right = new THREE.Vector3();
const _move = new THREE.Vector3();

function updateMovement(dt) {
  if (keys.size === 0) return;

  // Camera forward, flattened onto the ground plane.
  camera.getWorldDirection(_forward);
  _forward.y = 0;
  if (_forward.lengthSq() === 0) return;
  _forward.normalize();
  _right.crossVectors(_forward, camera.up).normalize();

  _move.set(0, 0, 0);
  if (keys.has('forward')) _move.add(_forward);
  if (keys.has('back')) _move.sub(_forward);
  if (keys.has('right')) _move.add(_right);
  if (keys.has('left')) _move.sub(_right);
  if (_move.lengthSq() === 0) return;

  _move.normalize().multiplyScalar(MOVE_SPEED * dt);
  // Move camera and look-at target together so you glide over the world.
  camera.position.add(_move);
  controls.target.add(_move);
}

// ---------------------------------------------------------------------------
// Resize
// ---------------------------------------------------------------------------
window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  composer.setSize(w, h);
});

// ---------------------------------------------------------------------------
// Render loop
// ---------------------------------------------------------------------------
const timer = new THREE.Timer();
let frames = 0, fpsLast = 0;
const fpsEl = document.getElementById('fps');

function tick() {
  timer.update();
  const t = timer.getElapsed();
  const dt = timer.getDelta();

  crystals.children.forEach((c, i) => {
    c.rotation.y += c.userData.spin * dt;
    c.position.y = c.userData.baseY + Math.sin(t * 1.2 + i) * 0.4;
  });

  updateMovement(dt);
  controls.update();
  composer.render();

  // FPS readout
  frames++;
  if (t - fpsLast >= 0.5) {
    fpsEl.textContent = Math.round(frames / (t - fpsLast)) + ' fps';
    frames = 0; fpsLast = t;
  }
  requestAnimationFrame(tick);
}

// ---------------------------------------------------------------------------
// Intro sequence (anime.js) — drive the loading screen, then reveal the world
// ---------------------------------------------------------------------------
function runIntro() {
  const loader = document.getElementById('loader');
  const hud = document.getElementById('hud');

  createTimeline({ defaults: { ease: 'out(3)' } })
    .add('#loader .title', { opacity: [0, 1], translateY: [20, 0], duration: 600 })
    .add('#loader .sub', { opacity: [0, 1], duration: 400 }, '-=300')
    .add('#loader .bar > i', { width: ['0%', '100%'], duration: 900, ease: 'inOut(2)' }, '-=200')
    .add('#loader', {
      opacity: [1, 0],
      duration: 500,
      onComplete: () => { loader.style.display = 'none'; },
    }, '+=150')
    .add(hud, { opacity: [0, 1], duration: 600 }, '-=200')
    // Pop the crystals in with a staggered, springy entrance.
    // anime.js animates numeric props on any object — here each crystal's
    // THREE.Vector3 scale (x/y/z) directly.
    .add(crystals.children.map((c) => c.scale), {
      x: [0, 1], y: [0, 1], z: [0, 1],
      duration: 700,
      delay: stagger(90),
      ease: 'out(4)',
    }, '-=400');
}

// Start rendering immediately, then run the reveal.
tick();
runIntro();

// Expose the scene graph for quick tinkering from the console / future code.
window.WORLD = { THREE, scene, camera, renderer, controls, composer, crystals, thresholds, setSun, animate, utils };
