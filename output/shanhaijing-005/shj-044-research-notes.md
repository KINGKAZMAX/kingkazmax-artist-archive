# SHJ-044 / Chi Bi 赤鷩 / R01–R02 research and review

Current result: R02 two-view candidate, not user-approved, not a final qualified asset and not published to the website.

## Primary evidence and scope

[Shan Hai Jing · Western Mountains](https://zh.wikisource.org/wiki/山海經/西山經), P0047 / MT-P0047-01, was opened online. The base text says: 「鳥多赤鷩，可以禦火。」
The catalog also retains appearances at P0057 and P0305, plus P0335 where only 鷩 appears. The latter equation remains provisional; this design is anchored to the explicit 赤鷩 of P0047.

The opened page contains Guo commentary identifying 赤鷩 as 「山雞之屬」 and offering additional plumage colors. That commentary is distinct from the sparse base-text description. This asset is an original humanized red-bird character, not an asserted reconstruction of a fully specified phoenix. The fire-warding clause is treated as mythic literary lore.

Pinned source retained from the catalog: [Western Mountains revision 2650930](https://zh.wikisource.org/w/index.php?title=山海經/西山經&oldid=2650930).

[Official Onmyoji Arena homepage](https://www.onmyojiarena.tw/) was checked for the Onmyoji character lineage and varied shikigami settings. Only the concept of distinct human/yokai identities is applied; the game artwork is not a rendering reference.

## Original character

Yin / 殷 is a handsome 22-year-old village fire-watch runner: outspoken, confident and quick-moving, with a raised brow and crooked grin. His short crimson hair and broad pale amber forelock, oval face and wine-red eyes distinguish him from SHJ-043's charcoal side-cut female identity.

Red plumage grows visibly from skin along his neck, upper chest/shoulders and forearms. Both human hands remain visible. One compact red feather tail with dark green tips connects behind the hip. An off-white wrap tunic with charcoal edging, moss-green sash, charcoal trousers and brown ankle shoes leave the red feather growth readable. Human face, sex, age, role, costume, exact plumage placement and tail geometry are creative choices.

## Iterations and actual inspection

- R01 contains both front and three-quarter views with matching youthful face, haircut, feather regions and clothing. Hair and shoes have only 1 px margin at alpha >=128; the far-right tail has 30 px. These are tight-framing issues, not an anatomy failure.
- R02 used one targeted framing edit with the original two production PNGs and R01 as inputs. All hair crowns, pointed tail tips, hands and shoes are inside the canvas. Margins at alpha >=128 are left 103, top 90, right 77 and bottom 49 px.
- Both views retain one head, two ears, two arms/hands, two legs and one tail fan. Red feather-to-skin transitions are visible at neck/shoulders and forearms, with no floating body parts or costume-only emblem substitution.
- Face, hair colors, feather colors, tunic, sash, trousers and shoes match across the two angles. The main face/torso angle visibly differs.
- Feather and hair details are still denser than the simplest production portrait linework. Tail root is partially hidden by clothing. Hands and eyes are small in this full-body sheet. These remain explicit style/detail-review limitations.

Both PNGs are RGBA, 1312 × 1199 with real alpha spanning 0–255. R02 SHA-256: d8d3261a2f6e21423fffc8352b814d1382b6e38a69a6fd583437915fc24ad568.

Current: assets/characters/shanhaijing-005/shj-044-two-views-r02.png.
History: assets/characters/shanhaijing-005/shj-044-two-views-r01.png.

## Reproducibility and handoff

Two built-in generation calls were used: initial generation plus one framing repair. No manual pixel editing, cropping, compositing or vectorization. Every call directly used portrait-01.png and portrait-02.png, after fresh online data.js and PNG-byte checks and visual inspection. Exact prompts, absolute reference paths, original generated paths, sources, alpha metadata and hashes are in the accompanying R01/R02 records, prompt markdown files and live-check JSON.

Shared manifests, coverage, GitHub and Figma are handled by the parent task. No shared files or website code were changed by this subtask.

繁中說明：赤鷩正文僅明示鳥名與禦火傳說；「山雞之屬」來自郭注。此作的青年人形、身份和具體羽毛融合皆為原創。R02已改善四邊留白，仍屬待使用者確認的候選圖，不能宣稱已完成鳳凰考據或已發布。
