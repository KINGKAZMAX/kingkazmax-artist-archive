"""Restore generated worlds from the GitHub mirror; verify exact file hashes."""
import argparse, hashlib, json, urllib.request
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--ref',default='main');a=p.parse_args()
base='https://raw.githubusercontent.com/KINGKAZMAX/kingkazmax-artist-archive/'+a.ref+'/virtual-worlds-2026/dist/'
for item in json.loads(Path('world-build-manifest.json').read_text()):
 target=Path('dist')/item['path']
 if target.exists() and hashlib.sha256(target.read_bytes()).hexdigest()==item['sha256']:continue
 data=urllib.request.urlopen(base+urllib.parse.quote(item['path']),timeout=90).read()
 if hashlib.sha256(data).hexdigest()!=item['sha256']:raise ValueError('Version mismatch: '+item['path']+'; pass the matching GitHub commit with --ref')
 target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(data)
print('World build hashes verified.')
