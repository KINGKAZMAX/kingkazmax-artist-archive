# KINGKAZMAX — Artist Archive

[Visit the website](https://kingkazmax.github.io/kingkazmax-artist-archive/) · [English](https://kingkazmax.github.io/kingkazmax-artist-archive/?lang=en) · [繁體中文](https://kingkazmax.github.io/kingkazmax-artist-archive/?lang=zh-Hant)

An English-first artist archive with 20 original generated character portraits, an expandable fictional setting, a red-cap hero and a browser-based portrait remix studio. Every character has a shareable dossier route (`?character=01`) with original lore, equipment, a signature relic, an ability and six fictional attributes.

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

[Open all 12 editable UI revisions](https://www.figma.com/design/e8ksDgxKC3OfMErZsjPpIO). The archive includes 36 current/historical image assets and reusable header/footer components. See [version links and synchronization workflow](docs/FIGMA_SYNC.md). Future UI and asset deliveries must synchronize GitHub and this Figma file, as recorded in [AGENTS.md](AGENTS.md).

## V12 layout and frontal study

The gallery restores the regular V10 layout with white portrait surfaces and preserves the current character dossiers. A new front-facing transparent PNG is displayed as a single approval sample in Artworks. [Fixed prompt](output/review-v2/prompt.md), [style analysis](output/review-v2/style-analysis.md), and [font setup](docs/FONTS.md) document the iteration. Additional new faces await approval of this direction.
