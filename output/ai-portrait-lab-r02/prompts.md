# Character Studio R02 — prompts and image provenance

UI direction: large calm canvas; a compact Imagine / Remix & refine inspector; warm neutral surfaces, ultramarine actions, restrained lines and text controls. Preserve English-first entry, Traditional Chinese switch and unified archive. Research: docs/portrait-lab-product-research-2026-10-24.md.

UI preview reuses `assets/characters/frontal-red-cap-01.png`, original R01 asset already synced to Figma Assets page 163:13713 / node 164:2. No new decorative UI artwork was generated.

Runtime image prompt is the `promptFor` function and three style definitions in `server/portrait-api.mjs`. It specifies one original head-and-shoulders character with clear framing, plain background, no text or watermark. Optional reference is a likeness/visual guide, not a promise of exact identity preservation. User descriptions are appended as subject details.

Browser reference images are decoded locally and resized to at most 500 pixels per side for generation. The user's original local file remains unchanged. Canvas export is always 1024 × 1024 PNG, including when a provider returns JPEG.

Test-only browser fixture reuses the existing frontal character. Its outputs are explicitly mocked and are not evidence of model generation. Actual provider results and availability are recorded separately in integration JSON files. No API secrets belong in this directory.
