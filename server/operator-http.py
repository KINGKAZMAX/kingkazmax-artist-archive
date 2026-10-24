"""Pipe-only HTTPS transport for explicit local integration tests.

Used on machines whose Node network route is unavailable. Never imported or
deployed by the Worker. No credentials or request data are written to disk.
The caller consumes stdout privately; it is not a user-facing log.
"""
import base64
import json
import sys
import urllib.error
import urllib.request

payload = json.load(sys.stdin)
request = urllib.request.Request(payload["url"], data=base64.b64decode(payload["body"]), headers=payload["headers"], method=payload["method"])
try:
    response = urllib.request.urlopen(request, timeout=210)
except urllib.error.HTTPError as error:
    response = error
with response:
    body = response.read(24 * 1024 * 1024 + 1)
    if len(body) > 24 * 1024 * 1024:
        sys.exit(1)
    json.dump({"status": response.status, "contentType": response.headers.get("Content-Type"), "retryAfter": response.headers.get("Retry-After"), "body": base64.b64encode(body).decode()}, sys.stdout)
