#!/usr/bin/env bash
# Runs ON the Uberspace host. Builds the static site and publishes it to the
# document root of myweathr.io. No secrets needed.
#
#   cd ~/myweathr_landing && ./deploy/uberspace.sh [branch]
set -euo pipefail

BRANCH="${1:-main}"
DOMAIN="myweathr.io"
DOCROOT="/var/www/virtual/${USER}/${DOMAIN}"

cd "$(dirname "$0")/.."
git fetch origin
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

npm ci
npm run build

test -f out/en/index.html || { echo "Build output missing – aborting, live site unchanged."; exit 1; }

mkdir -p "$DOCROOT"
rsync -a --delete out/ "$DOCROOT/"
echo "Published $(git rev-parse --short HEAD) ($BRANCH) to $DOCROOT"
