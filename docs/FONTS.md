# Website and Figma fonts

V12 uses **Arimo** for the main sans-serif typography, **Lora** for the serif wordmark, **DM Sans** for controls, and **Space Mono** for labels. All four families loaded successfully through the Figma Plugin API; V12 Desktop / EN and Mobile / EN have no missing-font flags.

Historical captures used Arial and Georgia. These exist on many Macs, but the current Figma cloud execution environment cannot load them. V12 uses Arimo and Lora as close, editable alternatives and applies the same families to the website. Historical pages retain their original font records.

The following font files were installed in this Mac's `~/Library/Fonts`: Arimo variable, Lora variable, DM Sans upright/italic variables, and Space Mono Regular/Bold/Italic/Bold Italic. They were retrieved from the official [Google Fonts repository](https://github.com/google/fonts). Font files are not duplicated in the website repository. The website loads the web fonts through Google Fonts and retains system fallbacks.

Figma cloud can use these families directly. A browser Figma editor using local-only historical Arial/Georgia may also require Figma's [official local font installer](https://help.figma.com/hc/en-us/articles/360039956894-Add-a-font-to-Figma); installing a font on this Mac does not upload it to a Figma organization.
