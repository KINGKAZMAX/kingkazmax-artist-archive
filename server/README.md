# Character generation API

The website on GitHub Pages calls `https://kingkazmax-portrait-api.xinlise.workers.dev`. The Cloudflare Worker uses `@cf/black-forest-labs/flux-2-klein-4b` through its native Workers AI binding. Visitors enter a keyword, concept or theme and receive one original 1024px character in the fixed KINGKAZMAX drawing style.

## Fixed visual style

Every model request includes the approved cover artwork as a rendering guide. The source is `assets/characters/frontal-red-cap-01.png`; its technical 500px RGB derivative is `assets/characters/frontal-red-cap-style-reference-r02.png`. `server/style-reference.mjs` bundles the same PNG bytes so generation does not depend on another network request. The asset SHA-256 is tested against the model attachment.

The shared server prompt in `portrait-api.mjs` fixes tapering black outlines, flat cel colours, angular features and hard two-tone shadows. It directs the model to design a distinct character from the submitted theme, retaining the drawing language while changing identity, hair, clothing and accessories. The guide is not a face template. The static artwork is always attached internally; visitors cannot replace it or choose a different rendering style.

`POST /api/portrait/generate` accepts multipart `prompt` (1–1600 characters), `consent=true` and `turnstileToken`. A legacy `style=archive` value is accepted; omitted style uses the same fixed style. Alternate styles, client `image`/`reference` fields and any file upload are rejected before model usage. Requests are limited to 24 KiB. Health reports `referenceImage:false`, `fixedStyle:true`, the style reference ID and supported output dimensions.

The Workers AI adapter sends `prompt`, `width=1024`, `height=1024` and the approved PNG in `input_image_0` using the official multipart binding contract. Returned image bytes are checked and wrapped in a data URL with their real PNG/JPEG/WebP type. The browser exports the result as PNG. The service never fetches arbitrary image URLs.

## Deployment

1. Authenticate the owner account with Wrangler. The project uses the existing `wrangler.toml` account, Workers AI binding and rate-limit binding.
2. Retain the account's free plan if usage should stop at its included allowance. The allowance is shared with other Workers AI use in that account; the application has no automatic provider fallback.
3. Keep the managed Turnstile widget on `kingkazmax.github.io`, with the client action `portrait`. `TURNSTILE_SITE_KEY` is public configuration. Install `TURNSTILE_SECRET_KEY` only with the Worker secret store, using `npx wrangler secret put TURNSTILE_SECRET_KEY`. No separate image API key is needed for the production Workers AI provider.
4. Run `node --test tests/portrait-api.test.mjs` and `npx --yes wrangler@4 deploy --dry-run --outdir /tmp/kingkazmax-worker-check`, then `npx --yes wrangler@4 deploy`.
5. Verify public `/api/portrait/health`, then generate a themed character through the live browser and inspect its download. Configuration readiness alone is not a generation test.

`ALLOWED_ORIGINS` contains exact origins. Turnstile HTTP status, success, hostname and action are checked before model invocation. Each IP is limited to two attempts per minute. This distributed limiter is not a global spending cap; the selected account plan/provider quota supplies that separate boundary. The service does not automatically retry image generation.

Short errors reach visitors: `credits` for quota/billing exhaustion, `unavailable` for configuration/authentication, `busy` for capacity, `content` for content refusal, and `verification` for unsuccessful human verification. Upstream messages, credentials and request bodies are not exposed or logged. Prompt and generated-image storage are not implemented. The fixed public artwork and entered concept are transiently sent to the configured model.

## Operator verification

`node --test tests/portrait-api.test.mjs` checks the fixed-style attachment, rejection of alternate styles/photos, model payloads, origin/consent/verification, limits and sanitized provider errors. It uses mocked model responses and is not evidence of real inference.

`CLOUDFLARE_ACCOUNT_ID=<your account> python3 server/cloudflare-smoke.py --run` performs one real Workers AI concept generation using the existing operator Wrangler OAuth session, the production prompt and the fixed approved reference. Optional `--concept` changes only the subject. It requires Pillow to verify the returned image. Results and prompts are recorded in `output/ai-portrait-lab-r02/cloudflare-fixed-style-integration.json`. Keys stay in process memory and are never copied into the project. This direct provider test is separate from the website's Turnstile-protected browser test.

The fixed-style check on 2026-10-25 returned HTTP 200 in 12.54 seconds. Its 1024×1024 ice-lotus character has silver hair, a crystal lotus crown and indigo robes while retaining the approved outline and cel-shadow treatment. The checked image is `live-concept-flux-klein-4b-r03.jpg`; the fixed reference's SHA-256 is recorded with that run. The reference is decoded once per Worker isolate to reduce CPU work on repeat requests.

The earlier two-image provider test in `cloudflare-integration.json` verified Cloudflare text generation and reference editing before the experience was restricted to concepts in a single style. Its successful 1024×1024 images are retained as historical evidence. `deployment-verification.json` records public readiness and rejection checks; the latest browser acceptance evidence is recorded with the current UI revision.

## Optional OpenAI adapter and local development

The optional OpenAI-compatible adapter is retained for an explicit operator choice: set `IMAGE_PROVIDER="openai"`, `IMAGE_MODEL="gpt-image-2"`, `IMAGE_API_BASE_URL="https://api.openai.com/v1"` and install `IMAGE_API_KEY` as a Worker secret. It also uses the fixed internal artwork via `images/edits`. A user photo or alternate style cannot enable a different path. Configure the provider's budget before switching.

`node server/dev.mjs` runs the website and OpenAI adapter locally on `http://127.0.0.1:8787/#studio`; Node does not emulate Workers AI. It reads configuration from the process environment. For local development only, `OPENAI_API_KEY` is an optional fallback when the endpoint is exactly the official OpenAI `/v1` API. It is never forwarded to another provider or installed automatically in production. `node server/check-config.mjs` prints only configuration presence, never values of secrets.

`node server/live-smoke.mjs --run-paid` explicitly requests one billable OpenAI concept test through the same handler. The optional `--python-transport` supports this machine's network routing; `operator-http.py` is only an operator transport, never part of the Worker. Local test Turnstile mocking is confined to this script and does not alter production protection. No new OpenAI image test was run for the fixed-style update. Earlier OpenAI generation attempts returned HTTP 429, so that optional provider remains unverified for successful image generation.

Official references: [FLUX.2 klein 4B](https://developers.cloudflare.com/workers-ai/models/flux-2-klein-4b/), [multipart reference contract](https://developers.cloudflare.com/changelog/product/workers-ai/2/), [Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/), [Worker secrets](https://developers.cloudflare.com/workers/configuration/secrets/), [rate limiting](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/), [OpenAI image edits](https://developers.openai.com/api/reference/resources/images/methods/edit).
