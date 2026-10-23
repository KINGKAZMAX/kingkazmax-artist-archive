# Portrait AI deployment

The public website remains on GitHub Pages. `server/portrait-api.mjs` runs separately on Cloudflare Workers and uses an OpenAI-compatible Images API. It supports both text-to-image (`images/generations`) and photo-reference (`images/edits`); one 1024px PNG at medium quality per request. The current adapter defaults to `gpt-image-2`. A provider returning only remote image URLs is intentionally unsupported: the browser receives PNG bytes encoded as base64, without a third-party image URL fetch.

## Local server

Node 22+ (tested Node 24): `node server/dev.mjs`, then open `http://127.0.0.1:8787/#studio`.

The server reads `IMAGE_API_KEY`, `IMAGE_API_BASE_URL`, `IMAGE_MODEL`, `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` and `ALLOWED_ORIGINS` from its process environment. Supply credentials using your local secret manager; do not put them into `lab-config.js`, committed files or terminal history. The local server has a two-request-per-minute in-memory limiter. Production requires the Cloudflare binding in `wrangler.toml`.

Without credentials and verification settings, health returns `ready:false` and the front-end shows an honest unavailable state. No fabricated generation is returned. Local editing still works.

## Cloudflare Worker

1. Use your own Cloudflare account. Create a Turnstile widget for `kingkazmax.github.io` (and your future domain). Configure its action as `portrait` in the widget invocation; the client already does so. For local real-provider testing, include `127.0.0.1` in widget hostnames.
2. Install/run Wrangler using your preferred package manager, authenticate with `npx wrangler login`.
3. Set `TURNSTILE_SITE_KEY` in `[vars]` of `wrangler.toml`. If using another Images API, set the HTTPS `IMAGE_API_BASE_URL` and supported model there. The account's provider must support both generation and edits with the documented parameters.
4. Enter the server-only secrets using the secure interactive prompt: `npx wrangler secret put IMAGE_API_KEY` and `npx wrangler secret put TURNSTILE_SECRET_KEY`. A new image-provider project key is preferred for production so its budget can be managed separately.
5. `npx wrangler deploy`. Confirm the Worker `/api/portrait/health` returns `ready:true`. `ALLOWED_ORIGINS` is a comma-separated exact origin allowlist; include the actual site origin and no arbitrary wildcard.
6. Set the **public** `apiBaseUrl` in `lab-config.js` to the Worker HTTPS origin, then publish the static website. This value is not a key.
7. Run one text generation and one photo-reference generation through the real live UI; verify downloaded PNGs and provider usage records before marking the AI service live. The test fixture is not evidence of real provider availability.

## Request behaviour and cost controls

Only clicking Generate after explicit consent sends the description/photo. Raster references are restricted to PNG/JPEG/WebP, 8 MiB; request bodies are bounded before multipart decoding. Inputs are validated before image billing. Turnstile success, hostname and action are checked on the server; CORS is not treated as authentication. Cloudflare limits each IP to two attempts/minute. This binding is distributed and is not a global daily spending cap: configure an appropriate provider budget/quota as well. The app makes no automatic paid retries.

There is no photo, prompt or generated-image database, request-body logging, or public output gallery. Inputs are transiently forwarded to the configured image provider, whose retention terms still apply. Failed replacements preserve the last successful local portrait. A client timeout does not guarantee provider cancellation; the UI tells users to wait before retrying. Provider errors are normalized and do not expose response bodies, secrets or upstream URLs.

## Verification

`node --test tests/portrait-api.test.mjs` tests upstream payloads, photo forwarding, origin/consent checks, verification, quota and sanitized errors with mocked HTTP responses.

`node tests/browser-server.mjs`, then `ego-browser nodejs < tests/portrait-lab-browser.mjs`, tests rendering, exports, error recovery, language and mobile widths with an explicit fixture. This server is test-only and is never imported by the Worker. Make `/tmp/aokizy-invalid.png` a corrupt image fixture before the browser run.

Official references: [Images model](https://developers.openai.com/api/docs/models/gpt-image-2), [image edits](https://developers.openai.com/api/reference/resources/images/methods/edit), [Worker secrets](https://developers.cloudflare.com/workers/configuration/secrets/), [rate limiting](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/).
