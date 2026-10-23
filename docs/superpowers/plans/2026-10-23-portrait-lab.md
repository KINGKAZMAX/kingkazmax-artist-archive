# Portrait Lab completion plan

Goal: a usable, free local portrait editor within the existing bilingual artist site. Retain the English-first entry, unified archive and text-only controls. Default to the frontal cover character; accept user raster photos and all 148 archive portraits. This phase edits existing images; it does not claim to generate a new AI identity.

Files: `portrait-lab.js` owns canvas rendering, source loading, validation, framing, deterministic effects, export and local draft persistence; `script.js` retains archive/navigation/language and calls the lab API; `index.html` contains accessible controls; `styles.css` contains responsive editor styles. Tests exercise the actual browser export and recovery paths.

- [ ] Establish failing browser acceptance: square 1024 PNG, framing/reset, material effect, invalid upload recovery, local draft restore, bilingual controls and mobile width.
- [ ] Add reliable latest-request source loading, file limits/errors and visible status; retain previous valid image when replacement fails.
- [ ] Add character selection, zoom/position, real pixelation, paper/ceramic treatment, transparent/white/dark backgrounds, reset and 1024 PNG export.
- [ ] Add explicit save/restore/delete draft with IndexedDB; keep user photos in this browser, never send them to a server.
- [ ] Validate at desktop/mobile widths and both languages; record hosting/domain research with primary-source links.
- [ ] Commit only this task's changes; synchronize GitHub and a new confirmed editable Figma revision. Preserve unrelated candidate work and all historical Figma pages.

Acceptance: zero distortion, no fragment displacement at zero, transparent PNG alpha preserved, export matches preview, corrupt/unsupported/oversize upload reports a recoverable error, draft restores the actual image plus settings, changes during pending loads cannot be overwritten by stale requests. No API keys or paid services are needed for this phase.

## User clarification

User selected AI generation (description or uploaded photo) with backend/image costs. Scope now prioritizes the real API adapter, photo forwarding, consent, secret isolation, verification/rate limits and unavailable/loading/failure/success states. A local draft store is deferred: the current page keeps images only in memory and never promises persistence. Finish the basic editor as the post-generation step. No paid domain or server purchase is authorized or needed to prepare the implementation. Production connection requires a Cloudflare account, Turnstile configuration and a server-side image API key.
