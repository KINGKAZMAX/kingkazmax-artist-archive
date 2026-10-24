# Character studio R02

User asks for a polished creator, research including 捏Ta, and connected model/backend. Preserve the existing English-first archive, Traditional Chinese switch, text-only controls and collection.

Visual thesis: a quiet editorial workspace with a large image, warm neutral surfaces, precise rules and one ultramarine action colour. The portrait is the visual centre; controls form a compact inspector.

Content plan: compact studio introduction; image preview with export; Imagine / Remix & refine tabs; short guided prompt, three style choices, optional reference with thumbnail, explicit generation action; six-result session history. Advanced colour/fragment controls collapse under a disclosure. Clear service status without claiming unavailable AI works.

Interaction thesis: subtle canvas arrival after a successful image load; persistent desktop preview while editing; quick mode transitions and reduced-motion support. Native radios, tabs with keyboard navigation, visible focus and live statuses. No decorative animation during ordinary editing.

State: prompt and optional reference only go to the backend on consented submission. Generation prevents duplicate submission and changing the submitted settings. Failure keeps the previous image. Successful generations enter a six-item in-memory session history with prompt/style recall; cleared on tab reload. History items can return to the canvas and be reused as references. No automatic cloud gallery or image persistence.

Backend: Cloudflare Workers chosen by user; existing OpenAI image credential validated read-only in process. Integrate secret server-side, Cloudflare Turnstile, allowed origins and rate limits. Verify real text and image-reference requests. Never expose secrets in the static deployment. No billing account purchase or unbounded generator endpoint.

Validation: API tests plus browser tests for templates, radio style state, file errors, session history, reuse, duplicate prevention, failure preservation, full archive, output PNG, keyboard modes, English/Traditional Chinese, mobile layout. Publish only this task's files, leaving unrelated local work intact. Sync four editable Figma views and reused assets with source SHA.
