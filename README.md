# KINGKAZMAX — Artist Archive

[Visit the website](https://kingkazmax.github.io/kingkazmax-artist-archive/) · [English](https://kingkazmax.github.io/kingkazmax-artist-archive/?lang=en) · [繁體中文](https://kingkazmax.github.io/kingkazmax-artist-archive/?lang=zh-Hant)

An English-first artist archive with 98 original generated character portraits, an expandable fictional setting, a red-cap hero and a browser-based portrait remix studio. Every character has a shareable dossier route (`?character=01`) with original lore, equipment, a signature relic, an ability and six fictional attributes.

## Design

The layout references the [Ocula Aokizy artist page](https://ocula.com/artists/aokizy/): grey full-height opening, centred artwork, white artist name, dark navigation with blue actions, and a spacious editorial artwork grid. KINGKAZMAX is a separate project, not an official Aokizy or Ocula website. Images in the collection were generated for this project rather than copied from those websites.

The approved red-cap hero and existing page structure are retained. All twenty characters appear together in one artwork collection, without gender categories. Each portrait has a transparent PNG download; selecting a dossier opens its shareable character page, where it can also be opened in the studio. The archive adds distinct equipment concepts, five visual gear families, faction lore and six fictional attribute values. The upper-right language switch supports English and Traditional Chinese. New visitors see English; explicit choices persist locally. `?lang=en` and `?lang=zh-Hant` override the saved preference.

## Character and Web3 archive

`characters/data.js` is the source for all twenty character dossiers, including English and Traditional Chinese lore. Character records are fictional world-building data. The Web3 panel is a concept profile only: tokens have not been minted, no wallet is connected, and the site does not claim on-chain ownership or provenance. An actual on-chain release would require a separately reviewed contract, network, metadata hosting and minting plan.

## Portrait Lab

Choose a collection character or upload your own image, select a surface treatment, adjust fragment and colour offsets, then export PNG. Processing is local in the browser. The website does **not** call GPT or a generation API at runtime: the collection is pre-generated, and the lab remixes images using Canvas. Uploaded photographs retain their existing background. Save Artist is a local browser bookmark state, not an online account or subscription.

## Assets and prompts

| Location | Contents |
| --- | --- |
| `assets/characters/character-01.png` … `character-20.png` | Twenty final transparent character PNGs |
| `assets/characters/hero-red-cap.png` | Red/white cap male hero |
| `assets/portrait-01.png` … `portrait-04.png` | Preserved previous artwork iteration |
| `output/review-v1/` | Review sample and its prompt |
| `output/characters/prompt.md` | Fixed collection prompt and reference method |
| `output/characters/manifest.json` | Character names, descriptions, genders and paths |
| `output/characters/hero-red-cap-prompt.md` | Hero generation prompt and reference notes |
| `output/kingkazmax-20-characters.zip` | Portable collection, prompt and manifest |
| `IMAGE_PROMPT.md` | Earlier image direction |
| `docs/ASSET_INVENTORY.md` | File sizes and SHA-256 fingerprints |
| `docs/ITERATIONS.md` | Iteration history and retained sources |

The prompt files document the generation intent and reference process. Image generation is probabilistic: identical prompts do not guarantee identical outputs. The committed PNGs are the authoritative assets for this release.

## Run locally

No build step or package installation is required. From the repository directory:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. Serving over HTTP is recommended for Canvas image export; local `file://` restrictions vary by browser. Google Fonts is the only external presentation dependency and system fonts provide a fallback.

## Deployment

GitHub Pages publishes the **root of the `main` branch** using branch-based publishing. `.nojekyll` keeps the files static. `.github/pages.yml.disabled` is a historical inactive workflow, not the deployment mechanism.

1. Commit the website, generated assets, prompt changes and iteration notes together.
2. Push `main` to this repository.
3. Check Settings → Pages / the Pages build status until publication finishes.
4. Open the public URL. A language-specific share link can include `?lang=en`.

No API keys, backend service, or environment configuration are needed. Keep private reference uploads and credentials out of the repository. Generated project assets and retained iterations are versioned in Git; source references are documented in prompt files.

## Figma design archive

[Open all 14 editable UI revisions](https://www.figma.com/design/e8ksDgxKC3OfMErZsjPpIO). The archive includes 78 current/historical character image assets and reusable header/footer components. See [version links and synchronization workflow](docs/FIGMA_SYNC.md). Future UI and asset deliveries must synchronize GitHub and this Figma file, as recorded in [AGENTS.md](AGENTS.md).

## V12 layout and frontal study

The gallery restores the regular V10 layout with white portrait surfaces and preserves the current character dossiers. A new front-facing transparent PNG is displayed as a single approval sample in Artworks. [Fixed prompt](output/review-v2/prompt.md), [style analysis](output/review-v2/style-analysis.md), and [font setup](docs/FONTS.md) document the iteration. Additional new faces await approval of this direction.


## Controlled portrait review

The facial-tension parent study was approved by the user. The next direction locks facial features, expression and head/neck proportions. Four conservative hair/collar variations are held for review in `output/review-tension-variants/`; exact prompts are preserved in `prompts.md`. These review assets are archived separately and do not replace homepage artwork until the set is approved. See `docs/figma-sync-manifest.json` for confirmed asset archive links and status.


### Frontal character review 02

The four same-face recolors were rejected as a direction and are retained as history. `output/review-front-02/` returns to the original collection rendering, with a new high-ponytail silhouette, a front view and an exaggerated tense expression. The PNG and exact prompt are archived for review; homepage artwork remains unchanged.


## V13 — Approved frontal portrait

The user approved the new high-ponytail character. Its transparent PNG is now published under Artworks as `assets/characters/frontal-ponytail-02.png`, with English and Traditional Chinese copy and a direct download. The prior approval samples remain in the iteration archive. See `output/review-front-02/prompt.md` for the approved drawing direction.


## Natural anime portrait batch 02 — published in V14

Twenty new frontal review portraits are archived in `output/review-front-batch-02/`, using natural anime hairstyles, varied expressions, colored eyes, collars and restrained accessories. Ten male and ten female character briefs are presented as one unified collection. The user approved the entire set. Its twenty transparent PNGs are published in V14; the ZIP, exact prompts and numbered Figma Assets board preserve the generation and review record.

The preceding unfinished sculptural-hair batch was stopped after the user rejected its hairstyle direction and remains in `output/review-front-batch-01/` as rejected history.


## V14 — Twenty approved frontal portraits

All twenty natural anime portraits are approved and published in the existing homepage collection. Production files live in `assets/characters/natural-anime-02/`, mapped by portrait number to dossier IDs 01–20. Gallery cards, dossier images/downloads and Portrait Lab sources use the same image resolver. Existing names, lore and stats are preserved. Source PNGs, the fixed prompts, review board and generation history remain in `output/review-front-batch-02/`. The new editable UI revision is archived in Figma for desktop/mobile EN/繁中; confirmed links are in `docs/figma-sync-manifest.json`.


## V15 — Original and frontal portraits together

The homepage now retains the original 20 portraits and dossiers as IDs 01–20 and appends all 20 approved natural anime portraits as IDs 21–40. The new studies have their own source paths, downloads and lab entries. No earlier portrait is replaced. All forty appear together without gender categories, on the existing white gallery backgrounds. The red-cap hero and standalone ponytail study remain. Generation prompts and review history are unchanged in `output/review-front-batch-02/`. V14 remains a historical substitution experiment; V15 restores the original images.

## V16 — Ten transparent overhead portraits

The approved overhead series is published additively as dossiers 41–50 in the unified fifty-character homepage gallery, with EN/繁中 copy, transparent PNG downloads and Portrait Lab sources. Production PNGs are in `assets/characters/overhead-02/`; exact generation/edit prompts and alpha verification remain in `output/azuki-overhead-batch-02-transparent/`. All earlier portraits and the red-cap hero are retained.

## V17 — Journey West portraits published

Forty-eight approved youthful human Journey to the West portraits are added to the unified collection as IDs 51–98, retaining earlier dossiers 01–50. EN/繁中 copy, shareable dossiers, transparent PNG downloads and Portrait Lab use the same production images in `assets/characters/journey-west-48/`. Source assets, prompts and alpha validation are preserved in the two Journey West output directories. Figma publication sync is separately tracked in the manifest; do not infer Figma completion from deployment.
