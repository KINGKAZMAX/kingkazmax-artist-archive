# Character Studio R02 — fixed house style and provenance

Final user direction (2026-10-25): generate characters from keywords, concepts and themes only. Remove style selectors, filters and photo uploads. Preserve the existing drawing language.

UI: large canvas, compact Create / Framing inspector, warm neutral surfaces, ultramarine actions, restrained rules, text controls. English-first entry with Traditional Chinese. Theme starters assist with subject matter only.

The preview reuses `assets/characters/frontal-red-cap-01.png` (R01), already on Figma Assets page163:13713 / node164:2. `assets/characters/frontal-red-cap-style-reference-r02.png` is its 500px derivative, SHA256 `3edebaca37be9615347ada3c400ccedbda473983660551154f4061a3f1a27237`. `server/style-reference.mjs` bundles those same pixels for server use; it contains no credential.

`promptFor` in `server/portrait-api.mjs` is the canonical complete prompt. Every generation includes the fixed visual guide and specifies clean tapering near-black outlines, flat cel colours, hard angular two-tone shadows, sculpted features and expressive simplified eyes. Themes define a new identity, hairstyle, costume and accessories. The guide's red cap, trainer costume and likeness are explicitly excluded from copying. Framing is one front-facing head/upper-body subject, neutral background, no text or watermark. Style requests within keywords do not change the house style. Image generation remains stochastic, so the reference and prompt constrain consistency rather than guarantee identical drawing details.

Final genuine sample: `live-concept-flux-klein-4b-r03.jpg`, an ice-lotus mountain spirit with long silver hair, cyan eyes, translucent lotus crown and midnight-blue robes. Exact submitted prompt and model evidence: `cloudflare-fixed-style-integration.json`. Earlier `live-text-flux-klein-4b.jpg` and `live-reference-flux-klein-4b.jpg` are pre-lock integration samples, not examples of the final fixed style.

Browser fixture images reuse the original portrait and are explicitly mocked. Public-page generation is recorded separately. Download is always1024 ×1024 PNG even when Workers AI returns JPEG. No user photos are accepted, stored or sent to a model.

Public-site verification sample: `live-public-mountain-guardian-r03.jpg`; exact Chinese keywords and response/download evidence are in `public-fixed-style-verification.json`. This is the final deployed frontend + real Worker + Turnstile flow, with no mocked API.
