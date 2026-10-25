# Character studio R02 — final direction, 2026-10-25

The user narrowed the creator to keywords, concepts and themes in the existing KINGKAZMAX drawing style. This supersedes the earlier proposal for multiple styles and photo references. Preserve English-first entry, Traditional Chinese switch, text-only controls and the unified collection.

Design: large portrait canvas, quiet warm surfaces, precise rules and one ultramarine action. A compact Create / Framing inspector exposes one keyword field, three optional theme starters and a clear generate action. Fixed style is described in plain language. Framing only changes scale and position; it applies no image effects.

Interaction: successful generations remain in Create and enter six-item tab-local history. Selecting history restores its keywords and portrait. Failure preserves the previous result; generation locks conflicting actions and prevents duplicate requests. Download exports the current 1024-square PNG. History disappears on reload; there is no cloud gallery.

Backend: Cloudflare Workers AI FLUX.2 Klein 4B, server-controlled prompt and immutable 500px cover-art style reference. User themes define identity and costume; they cannot select another rendering style or upload photos. Turnstile, exact allowed origins, request limits and per-IP rate limits protect the endpoint. Provider secrets remain server-side. Free allocation is finite; no paid plan was purchased.

Validation: 25 backend checks, 24 isolated browser checks, actual model theme generation and a separate real public-site generation/download check. Four editable device/language Figma views and named assets are synchronized with the final source commit; retain historical pages and label pre-lock samples accurately.
