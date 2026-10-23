# Western Yokai candidates / 西山神怪候選

Eight source identities SHJ-033–040, fifteen preserved image revisions, each a transparent two-view raster sheet. None is user-approved or website-published. This is a partial batch, not the whole collection.

Rendering remains locked to the deployed portrait-01.png and portrait-02.png. The user’s human/yokai fusion reference is the official Onmyoji Arena setting: https://www.onmyojiarena.tw/ . No game-painting, neon or glossy rendering is adopted.

Source passages and stable IDs come from docs/shanhaijing/theme-catalog.json. The 716 provisional records / 975 occurrences are an evidence index, not a certified character total.


## Feiyi / 肥遺（六足四翼蛇） / R02

https://zh.wikisource.org/w/index.php?title=山海經/西山經&oldid=2650930

有蛇焉，名曰肥𧔥，六足四翼，見則天下大旱。

R02 removes unintended reference goggles and differentiates the aubergine hairstyle. Front view shows four arms and two legs, an explicit creative adaptation of six source feet. Four wing membranes are readable in front; overlaps in the second view remain a counting limitation.
Scale pattern is denser than the production masters; retain as candidate, not approved final.


## Wenyao / 文鰩魚 / R01

https://zh.wikisource.org/w/index.php?title=山海經/西山經&oldid=2650930

是多文鰩魚，狀如鯉魚，魚身而鳥翼，蒼文而白首，赤喙。

Fish scales, fin ears, bird wings, white head and red fin accents are visible and consistent across both angles.
The source red beak is interpreted as red fin accents while retaining a human mouth; this is a deliberate adaptation, not a literal red beak. Feather and hair interiors remain more detailed than the source portraits.


## Tiangou / 天狗 / R01

https://zh.wikisource.org/w/index.php?title=山海經/西山經&oldid=2650930

有獸焉，其狀如狸而白首，名曰天狗。

White-headed youthful human face with organic rounded beast ears and tail; expressive angular brows and open mouth. No long red tengu nose or bird wings.
Source 狸 is a historical animal description; modern tanuki-like ears are a design choice, not a zoological identification.


## Bifang / 畢方 / R01

https://zh.wikisource.org/w/index.php?title=山海經/西山經&oldid=2650930

其狀如鶴，一足，赤文青質而白喙，名曰畢方。

Both full-body views visibly have one central bird leg and one foot; teal/red feathers grow from the back.
White beak is interpreted via ivory feather/keratin accents; no literal beak. Ear feather/jaw ridge separation and interior line density remain candidates for refinement.


## Yingzhao / 英招 / R02

https://zh.wikisource.org/w/index.php?title=山海經/西山經&oldid=2650930

神英招司之，其狀馬身而人面，虎文而鳥翼。

Actual output visually inspected. R02 simplifies eyes to flat amber/solid black and hides visible duplicated human ears, simplifies hair and wing interiors.
Young male identity, green/ivory/rust outfit, real horse ears and tail, tiger skin markings and bird wings persist across front and three-quarter-back views.
Two views are one raster sheet, not separate angle files; no vectorization claimed.
Outer RGB preview shows brown/cream glow; sampled background is checked through alpha and source PNG is retained unmodified.
Tight silhouette clearance near upper and lateral edges is below the requested 5%; retain as reviewed candidate, not user-approved final.


## Luwu / 陸吾 / R03

https://zh.wikisource.org/w/index.php?title=山海經/西山經&oldid=2650930

其神狀虎身而九尾，人面而虎爪。

R03 adds two distinguishable cream-tipped tiger tails to the far-right lower portion of the right three-quarter figure; all nine visible tips can now be counted in each view.
Approximate 1536x1024 tail-tip centers for the right view: (1170,48), (990,170), (912,335), (890,553), (910,712), (1005,866), (1488,420), (1497,755), (1495,908). The last two are the requested additions.
The left front view retains nine visible tail tips. Face, expression, clothing, hand pose and overall identity appear visually consistent with R02. Pixel-identical preservation is not claimed.
Some tail roots remain naturally occluded by the jacket and body. The result passes visible-tip counting; complete tracing of every root to the anatomical origin cannot be independently seen.
True transparent alpha verified from PNG data; the dark brown RGB visible in some viewers exists beneath zero-alpha background pixels. No pixel edits were applied.
Rendering retains near-black contours, flat cel shading and warm peach skin; some fur/hair interior texture remains denser than the production portrait masters. This is an unapproved candidate, not a user-approved final.


## Kaiming / 開明獸 / R03

https://zh.wikisource.org/wiki/山海經/海內西經

開明獸身大類虎而九首，皆人面。

R03 was a localized request to preserve the existing seven heads and add two; both returned views still contain seven. Count remains failed after two correction attempts.
All visible heads are living human-faced branches of the torso, not masks or emblems. Youthful human identity, tiger-marked necks and clothing stay consistent.
Keep R01-R03 as historical candidate iterations. Do not count this item as complete or publish it to the website.


## Xiwangmu / 西王母 / R02

https://zh.wikisource.org/w/index.php?title=山海經/西山經&oldid=2650930

西王母其狀如人，豹尾虎齒而善嘯，蓬髪戴勝。

Generated image visually inspected in tool output: youthful female identity remains consistent across frontal and three-quarter-back views.
Both views retain actual leopard tail, visible tiger canines, long unruly dark-plum hair and small pale jade sheng ornament. No invented wings, horns or animal ears.
R02 eyes are simplified flat olive with solid black pupils; outlines stronger and long hair reduced to broader blocks. Hair remains more elaborate than short-haired production portraits because this identity requires long dishevelled hair.
RGB preview includes hidden halo colors; sampled exterior alpha is checked and output retained unchanged. No scripted pixel editing.
Upper/lateral clearance remains tighter than requested 5%; full tail curve and hair silhouette are visible. Record as reviewed candidate, not user-approved final.
One raster PNG contains two views; no separate angle exports or vectorization claimed.

PNG alpha was inspected without modifying pixels. Some native previews expose colored RGB underneath zero alpha; Figma composites verify transparency.

Figma stores editable research and prompts plus separately named raster assets. GitHub archive branch/draft PR is separate from website production.

Next: preserve all revisions, verify Figma fills and GitHub blob equality; continue unresolved anatomy via separate angle generation, then next queued source identities.

## Kaiming R04: separate views / 開明獸九首修訂

Source commit: eb3e2836c3d40290979f08b8c0fb68850efc3011. Exact prompts and source verification are in shj-039-r04-record.json.

Two independently generated PNGs replace the packed R03 sheet as the current candidate. Front R04b and three-quarter R04 each show nine human faces (one central, four per side) on visible living tiger-striped neck connections. Initial front R04 had two floating bottom heads and is preserved only as failed history. No pixel compositing or scripted edits were used.

The revised cream/navy tunic and rust waist sash remain consistent between the two angles; the older diagonal shoulder sash was omitted. Hair shadows and skin modulation still exceed the strict flatness of production references. Anatomy count passed is not a declaration of style approval or final publication. All old versions remain archived.
