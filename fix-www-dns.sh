#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "Set CLOUDFLARE_API_TOKEN first."
  echo "Required permission: Zone DNS Edit for resetpoints.com."
  exit 1
fi

ZONE_ID="271c3be0b26fd8476c967394e585cbf9"

curl -sS -X POST "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records" \
  -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "CNAME",
    "name": "www",
    "content": "resetpoints-com.pages.dev",
    "ttl": 1,
    "proxied": true
  }'

echo
echo "Waiting for DNS..."
for i in {1..12}; do
  if dig +short www.resetpoints.com CNAME | grep -q . || dig +short www.resetpoints.com A | grep -q .; then
    dig +short www.resetpoints.com CNAME
    dig +short www.resetpoints.com A
    curl -LsS -o /dev/null -w 'www HTTP: %{http_code} %{url_effective}\n' https://www.resetpoints.com/
    exit 0
  fi
  sleep 5
done

echo "DNS did not resolve yet. Cloudflare may still be propagating the record."
