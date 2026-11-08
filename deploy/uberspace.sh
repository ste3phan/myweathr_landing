#!/usr/bin/env bash
# Runs ON the Uberspace host. Builds the static landing page and publishes it to
# the document root of myweathr.io ONLY. No secrets needed.
#
#   cd ~/myweathr_landing_static && ./deploy/uberspace.sh [branch]
#
# The web app (app.myweathr.io) lives in ~/html/app.myweathr.io on the same
# account. This script refuses to write anywhere near it.
set -euo pipefail

BRANCH="${1:-main}"
DOMAIN="myweathr.io"
VHOSTS="/var/www/virtual/${USER}"
DOCROOT="${VHOSTS}/${DOMAIN}"

fail() { echo "ABBRUCH: $*" >&2; exit 1; }

# --- Safety: only ever write into a real, dedicated folder for myweathr.io ---
[ -L "$DOCROOT" ] && fail "$DOCROOT ist ein Symlink ($(readlink "$DOCROOT")). rsync --delete würde dessen Ziel leeren."
case "$DOCROOT" in
  "$VHOSTS/html"* | "$HOME/html"* | *app.myweathr.io*) fail "$DOCROOT gehört zur Web-App bzw. html/." ;;
esac
if [ -d "$DOCROOT" ] && [ -n "$(ls -A "$DOCROOT")" ] && [ ! -f "$DOCROOT/llms.txt" ] && [ ! -f "$DOCROOT/en/index.html" ]; then
  fail "$DOCROOT ist nicht leer und enthält keine Landingpage – bitte ansehen, bevor etwas gelöscht wird."
fi

# --- Build in this checkout (not in the folder the old Node server runs from) ---
cd "$(dirname "$0")/.."
git fetch origin
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

npm ci
npm run build

test -f out/en/index.html || fail "Build-Ausgabe fehlt – Live-Seite unverändert."

mkdir -p "$DOCROOT"
rsync -a --delete out/ "$DOCROOT/"
echo "Veröffentlicht: $(git rev-parse --short HEAD) ($BRANCH) → $DOCROOT"
