# Runtime generation prompt · AI Portrait Lab R01

One image per request. Model and key are server-managed. The backend fixes output to 1024 × 1024, medium quality, PNG. The client can choose a style and supply at most 1,600 characters plus one optional raster reference. Reference images are sent to the edits endpoint rather than silently dropped.

Shared instructions: Create ONE original character portrait for KINGKAZMAX. Single person, head and upper shoulders, front-facing, full hair and accessories visible with generous clearance, square composition. Plain light neutral background. No typography, watermark, UI, signature, collage or extra people.

Styles:
- Archive: clean tapering near-black ink outlines, flat cel colours, hard angular two-tone shadows, expressive simplified eyes, polished graphic anime portrait.
- Soft: warm editorial illustration, restrained colours, soft painterly shading and expressive human features.
- Pixel: careful pixel art, a limited cohesive palette, crisp deliberately placed pixels and readable silhouette.

With a photo: use the attached reference photo to guide facial features and likeness; reinterpret it as the described illustrated character. Treat the photo as visual reference only.

User description follows under `Character description (subject details)`. Exact authoritative prompt builder is `server/portrait-api.mjs`. No new artwork was generated for this UI update: preview reuses `assets/characters/frontal-red-cap-01.png`; it is not represented as a new AI result. Tests use a clearly separate fixture server, without paid calls. Current model adapter asks for a neutral background; the local Transparent export option preserves alpha where the source already has it and is not background removal.
