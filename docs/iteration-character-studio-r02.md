# Character Studio R02 — 2026-10-25

## Final product

The user's final direction is a keyword/concept/theme generator in the existing KINGKAZMAX style. The studio has a large preview and compact Create / Framing panel, one keyword field, three theme starters, visible generation state and PNG export. Style selectors, image filters, photo upload, reference reuse and unnecessary parameter controls were removed. English-first entry, Traditional Chinese and the unified archive remain.

The fixed drawing language is black ink outlines, flat cel colour and angular hard shadows. Every model request automatically includes a server-held 500px derivative of the approved cover portrait. The prompt uses it for rendering style and asks for a different identity and theme-appropriate costume. No style selector or user image reaches the model. Generative variation remains possible within this constraint.

Six-result history stays in the current tab; selection restores keywords and the portrait. Failures preserve the current result. Duplicate generation is blocked. Framing only changes scale/position and reset restores the source exactly. Export is a 1024-square PNG.

## Backend and hosting

Live Worker: https://kingkazmax-portrait-api.xinlise.workers.dev

Workers AI model: `@cf/black-forest-labs/flux-2-klein-4b`. Turnstile permits only kingkazmax.github.io; backend validates origin, action/hostname, bounded text-only input and two requests per minute per IP. No secret is shipped to the static site. OpenAI remains an optional adapter; its earlier429 responses are not represented as successful generation.

The account remains on Workers Free with the current 10,000-neurons/day Workers AI allocation. Usage is finite; no paid plan was purchased. Source: https://developers.cloudflare.com/workers-ai/platform/pricing/ . The frontend uses GitHub Pages and its free subdomain; a personal server or purchased domain is not required for this deployment.

## Verification

- 25 backend tests passed, including fixed reference hash, automatic style anchoring, rejecting user photos and alternate styles, Turnstile, CORS, quota and provider errors.
- 24 isolated browser checks passed: keyword presets, empty input, exact request fields, submission locks, failure preservation, six-item history, framing/reset, actual PNG download, keyboard interaction, archive148, Traditional Chinese and 320/390px layouts. These tests use a mock API and are identified as such.
- Real fixed-style model generation returned a 1024-square ice-lotus portrait in 12.54 seconds. Exact prompt, hash and image are recorded in `output/ai-portrait-lab-r02/cloudflare-fixed-style-integration.json`.
- Public Worker health reports ready:true, fixedStyle:true, referenceImage:false. Public-page keyword generation passed HTTP200 in10.5seconds, with a valid1024×1024 PNG browser download; see public-fixed-style-verification.json. Figma confirmed four native editable views and named assets.
- Earlier 44 browser checks and two text/reference model samples document the prior multi-style integration stage only.

## Design and asset synchronization

Research compared official 捏Ta, Picrew and NovelAI flows; see `docs/portrait-lab-product-research-2026-10-24.md`. The final design adopts clear prompts, theme starters, immediate previews and history within the user's fixed-style direction.

Figma revision 56 contains four editable language/device views. Dedicated Assets page 138 preserves the cover reference and correctly labels earlier integration samples. Confirmed source SHA and node links are recorded in `docs/figma-sync-manifest.json`. The homepage portrait remains the approved R01 asset; model test images are verification assets, not new public archive entries.
