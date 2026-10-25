# V2 iteration — 2026-10-25

Request: use the user-edited Figma overview V2 (354:2), respect deletions, keep HTML lightweight, play video on click. Final direction: desktop-only local presentation.

Kept 123 works (49 web, 11 films, 63 images), plus 65 public repository links. Removed 20 entries from the display; preserved 5 intentionally coverless text entries. New Figma revision 359:3 compacts rows without altering the user source.

No framework, external fonts, pagination, load-more buttons or automatic video loading. All 118 retained covers match source Figma image hashes; 640px JPEG derivatives load lazily. No new image-generation prompts. Video and preview iframe elements are created only on entry and destroyed on exit.

QA: all 11 local MP4s played in Chromium with advancing currentTime and readyState 4. Initial page has zero videos or MP4 requests. Closing removes media. Local file URL plays media without server. 123 unique IDs and ordering match the user selection; public payload excludes local absolute paths and private repositories. Desktop screenshot checked; speech prompts updated for new layout.
