# Project delivery requirements

For every user-requested UI or asset update:

- Synchronize the website code, final assets, generation prompts and iteration notes to GitHub.
- Synchronize the corresponding editable UI and assets to the project Figma file recorded in `docs/figma-sync-manifest.json`.
- Preserve historical Figma pages. Name each revision `NN / Description / short commit`; name frames `Desktop / EN`, `Mobile / EN`, and relevant Traditional Chinese variants.
- Keep reusable image assets in a dedicated named Assets page, with filenames and generation revision labels.
- Record source commit, Figma file/page/node links and sync status in the manifest. Do not mark a revision synced until Figma confirms it.
- If Figma access or destination is missing, report the specific blocker and keep the revision pending; do not claim GitHub synchronization also synchronized Figma.
- Retain English-first entry, Traditional Chinese switch, text-only controls and unified character collection unless the user changes those requirements.

These requirements apply when performing updates; they do not imply an unattended background synchronization service.
