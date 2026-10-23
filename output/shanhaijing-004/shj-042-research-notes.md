# SHJ-042 / Qianyang 羬羊 / research and iterations

Status: **candidate pending extra-ear anatomy correction**, not a qualified final and not user-approved. Website publication is false.

## Selection and source

SHJ-041 育沛 was skipped because the catalog marks it scope_review: its object/animal/plant nature is unresolved. SHJ-042 羬羊 and SHJ-043 䳋渠 were generation_ready and queued in coverage; no existing batch-004 artwork was found before generation.

Primary source: [Shan Hai Jing · Western Mountains](https://zh.wikisource.org/wiki/山海經/西山經), paragraph P0044, occurrence MT-P0044-01; [pinned source](https://zh.wikisource.org/w/index.php?title=山海經/西山經&oldid=2650930).
Base-text excerpt: 「有獸焉，其狀如羊而馬尾，名曰羬羊，其脂可以已腊。」
The current primary text was opened and checked online. Its traditional healing statement is treated as literary lore, not medical advice or a factual claim of efficacy.

## Character interpretation

Qian / 謙, a 20-year-old male mountain-path salve keeper. Youthful handsome face, alert amber eyes, open mouth and tense brows; protective and quick-witted. Sand-brown hair with a charcoal side patch, ivory curled ram horns, sideways sheep ears, cream organic wool regions and one long brown horse-hair tail.
The sheep-like body and horse tail come from the source. Horn curvature, human face, age, gender, occupation, wool placement and sage/cream/navy costume are original design choices.

[The official Onmyoji Arena homepage](https://www.onmyojiarena.tw/) was checked online: it describes the Onmyoji character lineage, multiple aesthetic collections and named shikigami. Applied concept: a distinct human identity with readable yokai anatomy. The game is not the rendering master; both deployed production PNGs were directly passed to every generation/edit.

## Iterations

- R01: full-body front and three-quarter with consistent face, costume, horns, wool and horse tail. Extra human ears appeared alongside sheep ears, producing unsupported four-ear anatomy.
- R02: one targeted correction attempted to cover human ear pinnae with hair while preserving the two sheep ears, plus added transparent margins. Frontal extra pinnae are covered; a flesh-colored ear-like pinna remains in the three-quarter view. Parent independently confirmed this remaining issue. **Anatomy is still pending; no further generation in this task.**
- R02 right margin is 52 px at alpha >=128. Both tails and feet remain inside frame. Some wool reads as fur cuffs; hair/cloth detail remains finer than the production portraits.

Current candidate asset: assets/characters/shanhaijing-004/shj-042-two-views-r02.png.
Historical asset: assets/characters/shanhaijing-004/shj-042-two-views-r01.png.
R02 is RGBA, 1312 × 1199, alpha 0–255, SHA-256 ecfd2a62d81900bee251506faa76bac5da45de9c0eb9cedef52db4d8fa26609e.

Precise original and repair prompts, full reference paths, source excerpts, per-view observations and metadata are in shj-042-r01-record.json and shj-042-r02-record.json, with prompt markdown companions. Online data.js and both PNG hashes were rechecked in shj-042-live-check.json.

Built-in image generation: 2 calls. No manual pixel edits, cropping, compositing or vectorization. GitHub/Figma/shared-manifest integration belongs to the parent task.
