from pathlib import Path
import json
root=Path(__file__).resolve().parent
data=json.loads((root/'portfolio-data.json').read_text())
# This is the already curated V2 data. Never merge inventories or old entries.
selection=json.loads((root/'figma-v2-selection.json').read_text())
assert len(data['items'])==sum(len(section['cards']) for section in selection['sections'][1:4])
assert len({item['id'] for item in data['items']})==len(data['items'])
payload=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
html=(root/'showcase-v2.template.html').read_text().replace('/*__DATA__*/',payload)
(root/'index.html').write_text(html)
(root/'v2.html').write_text(html)
print(f"Built {len(data['items'])} curated works")
