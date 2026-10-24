# Portrait AI deployment

The public website remains on GitHub Pages. `server/portrait-api.mjs` runs separately on Cloudflare Workers. The production configuration uses the account's Workers AI binding with `@cf/black-forest-labs/flux-2-klein-4b`, supporting both text and a reference image without a separate image-provider key. One 1024px image is requested per click. The model receives references resized to a maximum side of 500px by the browser. The adapter sends the official multipart `input_image_0` field and returns a data URL with the actual PNG/JPEG/WebP type; PNG download is produced by the browser's editor. It never fetches arbitrary provider image URLs.

An optional OpenAI-compatible adapter remains available: set `IMAGE_PROVIDER="openai"`, `IMAGE_MODEL="gpt-image-2"`, `IMAGE_API_BASE_URL="https://api.openai.com/v1"` and a server-only `IMAGE_API_KEY`. It uses `images/generations` for text and `images/edits` for references. Switching providers is an operator action, never a silent fallback that creates unexpected bills.

## Local server

Node 22+ (tested Node 24): `node server/dev.mjs`, then open `http://127.0.0.1:8787/#studio`.

The Node server reads the OpenAI adapter's `IMAGE_API_KEY`, `IMAGE_API_BASE_URL`, `IMAGE_MODEL`, `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` and `ALLOWED_ORIGINS` from its process environment. Supply credentials using your local secret manager; do not put them into `lab-config.js`, committed files or terminal history. The local server has a two-request-per-minute in-memory limiter. Production requires the Cloudflare bindings in `wrangler.toml`; Node does not emulate the Workers AI binding.

For local development only, an existing process `OPENAI_API_KEY` is accepted when the upstream is exactly the official OpenAI `/v1` endpoint. It is never forwarded to a different provider through this fallback, copied to disk, or automatically installed as a production secret. `node server/check-config.mjs` prints only whether required settings are present. Exit code 1 means setup is incomplete. The public health route validates configuration and advertises supported styles, dimensions and upload bounds; `ready:true` is not proof of successful billable generation or an available provider balance.

Without credentials and verification settings, health returns `ready:false` and the front-end shows an honest unavailable state. No fabricated generation is returned. Local editing still works.

## Cloudflare Worker

1. Use your own Cloudflare account. Create a Turnstile widget for `kingkazmax.github.io` (and your future domain). Configure its action as `portrait` in the widget invocation; the client already does so. For local real-provider testing, include `127.0.0.1` in widget hostnames.
2. Install/run Wrangler using your preferred package manager, authenticate with `npx wrangler login`.
3. Set `TURNSTILE_SITE_KEY` in `[vars]` of `wrangler.toml`. The existing `IMAGE_PROVIDER="workers-ai"`, model and `[ai]` binding run on the selected Cloudflare account. Retain its free plan if you want usage to stop at the included daily allowance rather than enabling paid overages. The free allowance is shared across that account's Workers AI use.
4. Enter the server-only secret using the secure interactive prompt: `npx wrangler secret put TURNSTILE_SECRET_KEY`. No OpenAI key is needed for Workers AI. If explicitly choosing the OpenAI adapter instead, also set `IMAGE_API_KEY` as a Worker secret and configure a provider budget.
5. `npx wrangler deploy`. Confirm the Worker `/api/portrait/health` returns `ready:true`. `ALLOWED_ORIGINS` is a comma-separated exact origin allowlist; include the actual site origin and no arbitrary wildcard.
6. Set the **public** `apiBaseUrl` in `lab-config.js` to the Worker HTTPS origin, then publish the static website. This value is not a key.
7. Run one text generation and one photo-reference generation through the real live UI; verify downloaded PNGs and provider usage records before marking the AI service live. The test fixture is not evidence of real provider availability.

## Request behaviour and cost controls

Only clicking Generate after explicit consent sends the description/photo. Raster references are restricted to PNG/JPEG/WebP, 8 MiB; request bodies are bounded before multipart decoding. Inputs are validated before image billing. Turnstile success, hostname and action are checked on the server; CORS is not treated as authentication. Cloudflare limits each IP to two attempts/minute. This binding is distributed and is not a global daily spending cap: configure an appropriate provider budget/quota as well. The app makes no automatic paid retries.

Billing/quota failures (including `429 insufficient_quota`) use `credits`; authentication or model configuration failures use `unavailable`; provider capacity uses `busy`; content rejection uses `content`. Only these short error codes reach visitors. Upstream messages and credentials are never returned. A Turnstile HTTP error fails closed before sending an image request.

There is no photo, prompt or generated-image database, request-body logging, or public output gallery. Inputs are transiently forwarded to the configured image provider, whose retention terms still apply. Failed replacements preserve the last successful local portrait. A client timeout does not guarantee provider cancellation; the UI tells users to wait before retrying. Provider errors are normalized and do not expose response bodies, secrets or upstream URLs.

## Verification

`node --test tests/portrait-api.test.mjs` tests upstream payloads, photo forwarding, origin/consent checks, verification, quota and sanitized errors with mocked HTTP responses.

`npx --yes wrangler@4 deploy --dry-run --outdir /tmp/kingkazmax-worker-check` checks the actual Worker bundle and binding configuration without publishing. The 2026-10-25 run completed successfully with Wrangler 4.152.0.

`node server/live-smoke.mjs --run-paid --reference` is an **explicitly billable**, operator-only integration test. It passes one text request and, only if successful, one reference edit through the production handler. Turnstile is mocked only inside that local process; the deployed Worker has no test bypass. Keys come from the process environment, and results plus sanitized timings/status/usage are written to `output/ai-portrait-lab-r02/` (override with `PORTRAIT_SMOKE_OUTPUT`). Run it only when a small paid test is authorized. It does not retry. Where this machine's Node HTTPS route is unavailable, `--python-transport` uses Python's HTTPS transport for the same request; `operator-http.py` is never imported by the Worker. The script is not a web endpoint.

OpenAI alternative live check, 2026-10-25: official `/v1/models` returned HTTP 200 and listed `gpt-image-2`; two text-generation attempts returned HTTP 429 with no image. No reference edit was sent. That provider remains unverified for generation. The earlier diagnostic captured only `other` for the upstream error, so its exact quota/rate cause cannot be reconstructed; the operator script now records safe error type/code and a classified reason on a future authorized run. Local Node networking also produced a connection timeout; the Python transport reached the API. These failures are recorded in the output metadata and must not be reported as a successful integration.

`CLOUDFLARE_ACCOUNT_ID=<your account> python3 server/cloudflare-smoke.py --run --reference` verifies the Workers AI model directly with the existing operator Wrangler OAuth session. It requires Pillow for decoding and resizing, makes at most two image requests, and writes `cloudflare-integration.json`. Direct model verification is separate from the live browser's Turnstile-protected end-to-end check.

Workers AI and deployment check, 2026-10-25: real text generation succeeded in 17.83 seconds and reference editing in 8.31 seconds; both returned decoded 1024×1024 JPEGs. The deployed API is `https://kingkazmax-portrait-api.xinlise.workers.dev`. Public health returns HTTP 200 / `ready:true` with exact-origin CORS, confirmed in the actual browser. A wrong origin returns 403 and an invalid Turnstile token returns 403 without model generation. The Turnstile secret was transferred directly from the authorized Cloudflare API into the Worker secret store; the project contains only its public site key. `output/ai-portrait-lab-r02/deployment-verification.json` records these checks. The static site's real browser generation check is recorded separately when it completes.

`node tests/browser-server.mjs`, then `ego-browser nodejs < tests/portrait-lab-browser.mjs`, tests rendering, exports, error recovery, language and mobile widths with an explicit fixture. This server is test-only and is never imported by the Worker. Make `/tmp/aokizy-invalid.png` a corrupt image fixture before the browser run.

Official references: [FLUX.2 klein 4B](https://developers.cloudflare.com/workers-ai/models/flux-2-klein-4b/), [multipart reference-image contract](https://developers.cloudflare.com/changelog/product/workers-ai/2/), [Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/), [Images model](https://developers.openai.com/api/docs/models/gpt-image-2), [image edits](https://developers.openai.com/api/reference/resources/images/methods/edit), [Worker secrets](https://developers.cloudflare.com/workers/configuration/secrets/), [rate limiting](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/).
