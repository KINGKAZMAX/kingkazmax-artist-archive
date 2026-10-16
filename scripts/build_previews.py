"""Build separate WebP previews; never overwrite source PNGs. Requires Pillow."""
import hashlib
import json
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
sources = json.loads((ROOT / 'output/deployment-v18/source-assets.json').read_text())
rows = []
for source in sources:
    path = ROOT / source
    before = hashlib.sha256(path.read_bytes()).hexdigest()
    original = Image.open(path).convert('RGBA')
    variants = []
    for width in (320, 640, 960):
        dest = ROOT / source.replace('assets/', 'assets/previews/', 1)
        dest = dest.with_name(dest.stem + f'-{width}.webp')
        dest.parent.mkdir(parents=True, exist_ok=True)
        preview = original.copy()
        preview.thumbnail((width, width), Image.Resampling.LANCZOS)
        preview.save(dest, 'WEBP', quality=84, method=6, exact=True)
        check = Image.open(dest)
        assert check.mode == 'RGBA' and check.getchannel('A').getextrema()[0] == 0
        variants.append({'width': width, 'path': str(dest.relative_to(ROOT)), 'bytes': dest.stat().st_size})
    assert hashlib.sha256(path.read_bytes()).hexdigest() == before
    rows.append({'source': source, 'sourceBytes': path.stat().st_size, 'sourceSha256': before, 'variants': variants})
manifest = {'format': 'WebP', 'quality': 84, 'sourcePreserved': True, 'assets': rows}
manifest['totals'] = {'sourceBytes': sum(r['sourceBytes'] for r in rows), **{
    str(w): sum(v['bytes'] for r in rows for v in r['variants'] if v['width'] == w) for w in (320, 640, 960)}}
(ROOT / 'assets/previews/manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(json.dumps({'assets': len(rows), 'totals': manifest['totals']}))
