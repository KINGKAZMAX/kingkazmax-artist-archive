# Transparent overhead collection / R02

User requested transparent backgrounds and line/color consistency with the currently published collection. Current source assets were verified in characters/data.js: assets/characters/natural-anime-02/portrait-01.png and portrait-02.png. These exact PNGs were supplied as authoritative style references to every edit, along with the corresponding R01 portrait for identity and pose.

Ten separate built-in imagegen edits with transparent_background=true. Preserved character identities, occupational clothing/props, expressive open eyes and upward sideways gaze, and the accepted overhead perspective. Simplified highlights, interior detail and cel-color shapes toward the live references. Visual review confirms coherent near-black outlines, warm skin, flat colored eyes and hard shadow shapes. This is visual style matching, not a claim of pixel-identical palette or deterministic stroke width.

Validation: all ten are 1254 × 1254 RGBA PNGs, alpha extrema 0–255, all four corner alpha values zero, and fully transparent pixels cover 25–37% of each image. See alpha-validation.json. White review background is only a preview composite; individual PNGs retain alpha. Some props intentionally extend to the frame edge, following R01; preserve this crop when placing assets.

R01 grey-background files and Figma page retained as historical version. R02 is the current delivery. Website production gallery has not been changed; this request refines the ten assets. Figma has separate raster image nodes with editable names/layout; character artwork is not converted to vector layers.
