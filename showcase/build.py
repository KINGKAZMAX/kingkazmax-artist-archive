from pathlib import Path
import json
root=Path(__file__).resolve().parent
data=json.loads((root/'portfolio-data.json').read_text())
# This is the already curated V2 data. Never merge inventories or old entries.
assert len(data['items'])==122
payload=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
html=(root/'showcase-v2.template.html').read_text().replace('/*__DATA__*/',payload)
(root/'index.html').write_text(html)
(root/'v2.html').write_text(html)
print('Built 122 curated works')
