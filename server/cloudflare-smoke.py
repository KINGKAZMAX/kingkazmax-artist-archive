"""Explicit operator test of Workers AI. Never runs from the website/Worker.

Uses the operator's Wrangler OAuth credential only in memory. No key is copied
to the project. Run with --run and optionally --reference (two images maximum).
Pillow is needed only to verify images and resize the reference to 500 px.
"""
import argparse
import base64
import hashlib
import io
import json
import os
import sys
from pathlib import Path
import time
import tomllib
import urllib.error
import urllib.request
import uuid
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument('--run', action='store_true')
parser.add_argument('--reference', action='store_true')
args = parser.parse_args()
if not args.run:
    parser.error('No generation requested. Pass --run to explicitly run this usage-consuming integration test.')
account = os.environ['CLOUDFLARE_ACCOUNT_ID']
config = Path(os.environ.get('WRANGLER_CONFIG_PATH', str(Path.home() / 'Library/Preferences/.wrangler/config/default.toml')))
token = tomllib.loads(config.read_text())['oauth_token']
model = '@cf/black-forest-labs/flux-2-klein-4b'
url = f'https://api.cloudflare.com/client/v4/accounts/{account}/ai/run/{model}'
directory = Path(os.environ.get('PORTRAIT_SMOKE_OUTPUT', 'output/ai-portrait-lab-r02'))
directory.mkdir(parents=True, exist_ok=True)
report = {'testedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': model, 'realProvider': True, 'transport': 'Cloudflare official REST API using operator OAuth', 'publicDeploymentVerified': False, 'requests': []}

def run(kind, prompt, reference=None):
    boundary = 'portrait-' + uuid.uuid4().hex
    chunks = []
    for name, value in [('prompt', prompt), ('width', '1024'), ('height', '1024')]:
        chunks.append(f'--{boundary}\r\nContent-Disposition: form-data; name="{name}"\r\n\r\n{value}\r\n'.encode())
    if reference:
        image = Image.open(reference).convert('RGB')
        image.thumbnail((500, 500))
        buffer = io.BytesIO()
        image.save(buffer, format='PNG')
        chunks.extend([f'--{boundary}\r\nContent-Disposition: form-data; name="input_image_0"; filename="reference.png"\r\nContent-Type: image/png\r\n\r\n'.encode(), buffer.getvalue(), b'\r\n'])
    chunks.append(f'--{boundary}--\r\n'.encode())
    request = urllib.request.Request(url, data=b''.join(chunks), headers={'Authorization': 'Bearer ' + token, 'Content-Type': 'multipart/form-data; boundary=' + boundary}, method='POST')
    start = time.monotonic()
    try:
        response = urllib.request.urlopen(request, timeout=210)
    except urllib.error.HTTPError as error:
        response = error
    with response:
        body = json.load(response)
        record = {'kind': kind, 'prompt': prompt, 'httpStatus': response.status, 'durationSeconds': round(time.monotonic() - start, 2)}
        result = body.get('result') or {}
        output = None
        if body.get('success') and result.get('image'):
            binary = base64.b64decode(result['image'], validate=True)
            picture = Image.open(io.BytesIO(binary))
            extension = 'jpg' if picture.format == 'JPEG' else 'png' if picture.format == 'PNG' else 'webp'
            record.update({'dimensions': list(picture.size), 'format': picture.format, 'bytes': len(binary), 'sha256': hashlib.sha256(binary).hexdigest()})
            picture.verify()
            output = directory / f'live-{kind}-flux-klein-4b.{extension}'
            output.write_bytes(binary)
            record['output'] = output.name
        else:
            record['errorCodes'] = [e.get('code') for e in body.get('errors', [])]
            # Only classify provider messages; never print their raw contents.
            message = ' '.join(str(e.get('message', '')) for e in body.get('errors', [])).lower()
            record['errorCategory'] = 'quota' if any(w in message for w in ['quota', 'neurons', 'daily limit', 'budget']) else 'permission' if any(w in message for w in ['permission', 'unauthorized', 'authentication']) else 'provider'
        report['requests'].append(record)
        (directory / 'cloudflare-integration.json').write_text(json.dumps(report, indent=2) + '\n')
        print(json.dumps(record), flush=True)
        return output

first = run('text', 'Create one original adult anime character portrait. Clean tapering black ink outlines, flat cel colours, hard angular two-tone shadows. A confident adult navigator with short black bob hair, warm brown eyes, a vermilion jacket and a cream high collar. Head and upper shoulders, front-facing, generous space around the hair, square composition, plain light neutral background. No lettering, watermark, logos or extra people.')
if not first:
    sys.exit(1)
if first and args.reference:
    second = run('reference', 'Keep the same adult character identity and black bob hairstyle from the reference image. Change the jacket to deep indigo with a cream high collar and add small silver earrings. Give the character a subtle warm smile. Warm editorial illustration with restrained colours and soft painterly shadows. Front-facing head and shoulders, full hair visible, generous clearance and plain light background. No text or logos.', first)
    if not second:
        sys.exit(1)
