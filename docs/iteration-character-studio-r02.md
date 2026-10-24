# Character Studio R02 — 2026-10-25

## Delivered design and interaction

Research compared the official 捏Ta, Picrew and NovelAI flows. The studio now places a large portrait canvas beside an Imagine / Remix & refine inspector. Presets, visual style radios, visible reference thumbnail, drag-and-drop, character count, privacy disclosure, keyboard tabs and service recovery make each action clear. Existing archive characters remain the single source collection. English and Traditional Chinese remain supported.

Successful images enter six-item tab-local history, with prompt/style restoration and use-as-reference. Failures preserve the current portrait. Reference validation and generation lock conflicting actions and duplicate submissions. References are resized locally to at most 500 px before sending; original local files are unchanged. Download exports the actual canvas as 1024-square PNG.

## Actual backend

Cloudflare Worker: https://kingkazmax-portrait-api.xinlise.workers.dev

Production provider is Workers AI `@cf/black-forest-labs/flux-2-klein-4b`, supporting text and reference input. Turnstile is restricted to kingkazmax.github.io; server validates origin, hostname/action, file type/size and a two-per-minute IP limit. Secret stays in Worker configuration. The optional OpenAI adapter is retained; gpt-image-2 calls returned429 during investigation and are not represented as successful.

The account remains on Workers Free. Workers AI currently includes 10,000 neurons/day; beyond the free allocation requests fail unless the account is upgraded. This is not unlimited generation. Official pricing: https://developers.cloudflare.com/workers-ai/platform/pricing/ . No paid plan was purchased.

## Verification

- 23 backend tests pass, including Workers AI multipart, MIME validation, Turnstile and normalized billing/content errors.
- 44 local browser checks pass, using an explicitly isolated mocked API: mode changes, templates, archive148, PNG download, upload errors, exact reset, references, history, duplicate prevention, asynchronous validation, keyboard access, Traditional Chinese and mobile320/390 layouts.
- Official Cloudflare model calls returned real1024-square images: text17.83s; reference8.31s. Evidence: output/ai-portrait-lab-r02/cloudflare-integration.json and two JPEGs.
- Public Worker health verified ready in the real browser. Full public-page generation is being verified after publishing this source revision; final metadata will record that separately.
- Figma revision56 is being synchronized with four editable language/device views and named verification assets. Final confirmed node links are recorded in docs/figma-sync-manifest.json.

## Asset provenance

The studio default preview reuses frontal-red-cap-01.png / R01. New FLUX test portraits are original adult character verification samples, not replacements for the homepage or new archive entries. Prompt details and source files live in output/ai-portrait-lab-r02/prompts.md and the integration record.
