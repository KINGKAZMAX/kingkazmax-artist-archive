# SHJ-039 Kaiming — R04 single-view anatomy repair

Status: two candidate views pass the nine-head count and attached-neck inspection. User approval and production-style approval remain pending. No website publication.

## Source

[Shan Hai Jing · Inner Classic of the Western Realm](https://zh.wikisource.org/zh-hant/山海經/海內西經), paragraph P0594: 「開明獸身大類虎而九首，皆人面，東嚮立昆侖上。」

The [Chinese Text Project text](https://ctext.org/shan-hai-jing/hai-nei-xi-jing) independently preserves the same sentence. The pinned historical Wikisource URL was unavailable to web.open during this run; current primary-text search results confirmed the wording.

The slender human torso with tiger marks is an intentional personification of the tiger-like body. The nine human faces remain a literal source trait. All nine heads are parts of one living character, not masks or costume symbols.

## Deliverables and manual inspection

| File | Actual complete human heads | Detached heads | Result |
| --- | ---: | ---: | --- |
| shj-039-front-r04.png | 9: central 1 + left 4 + right 4 | 2 | Superseded; lowest left/right heads floated |
| shj-039-front-r04b.png | 9: central 1 + left 4 + right 4 | 0 | Current front candidate; two missing necks repaired |
| shj-039-three-quarter-r04.png | 9: central 1 + left 4 + right 4 | 0 | Current three-quarter candidate; first generation passed |

The front R04b and three-quarter R04 views preserve charcoal hair, olive eyes, expressive brows/mouth, tiger-striped branches/arms and the same cream/navy tunic with rust-red waist sash. The earlier two-view revision's diagonal red shoulder sash is absent in both new views; this wardrobe simplification is recorded rather than claimed unchanged.

Both new views visibly join the four-level fan of side heads to the same shoulder/back root. The upper-right branch in the three-quarter view passes behind the central hair but its neck and continuation remain visible. Hair and skin modulation are somewhat more detailed than a literal flat production master, so the anatomy result is not a claim of final style approval.

## Generation and reference verification

Built-in image generation only: 3 calls (front generation + one targeted neck repair; three-quarter generation). No manual pixel editing, cropping, compositing or vectorization.

Every call directly received both absolute production PNG paths. The final front PNG was an additional identity/anatomy reference for the three-quarter call. Online characters/data.js listed both production PNGs and both downloaded images matched local bytes exactly.

All three files are RGBA, 1374 × 1145, with real alpha values spanning 0–255. Alpha metadata, SHA-256, exact prompts, input paths, original generation paths and per-image manual counts are in:

- shj-039-r04-live-check.json
- shj-039-r04-front-record.json
- shj-039-r04-front-repair-record.json
- shj-039-r04-three-quarter-record.json
- shj-039-r04-record.json

The previous two-view R01–R03 files each show seven heads per view and remain historical failed-count candidates. The current recommended pair is front R04b + three-quarter R04.

Figma/GitHub/shared-manifest integration is handled by the parent task.
