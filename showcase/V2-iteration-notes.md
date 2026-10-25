# V2 iteration — 2026-10-25

Request: use the user-edited Figma overview V2 (354:2), respect deletions, keep HTML lightweight, play video on click. Final direction: desktop-only local presentation with highest available original media.

Kept 122 works (49 web, 10 films, 63 images), plus 65 public repository links. Removed 21 entries from the display; preserved 5 intentionally coverless text entries. The user-requested duplicate nuo-mask-loop is removed from data, the source V2 canvas, and revision 359:3; the museum demo remains.

No framework, external fonts, pagination, load-more buttons or automatic video loading. All 117 retained covers match source Figma image hashes; 640px JPEG derivatives load lazily. No new image-generation prompts. Video and preview iframe elements are created only on entry and destroyed on exit.

Local HTML uses separately audited originals for 10 videos and 63 images, loaded on demand. Three higher-resolution video copies are known on an unmounted external drive; current best-readable files are used until available. HEVC falls back once to a compatible MP4 when decoding is unsupported. Public data contains only hosted paths and retains compatibility videos; local media manifests are excluded from publication.
