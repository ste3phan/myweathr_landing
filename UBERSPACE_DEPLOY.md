# Deploy auf Uberspace (statisch)

Die Seite ist ein statischer Export (`out/`). Apache auf Uberspace liefert die Dateien direkt aus –
kein Node-Prozess, kein Port, kein supervisord mehr.

## Einmalige Umstellung (vom alten Node-Setup)

Bisher lief `npm start` als supervisord-Service `myweathr` hinter einem Web-Backend auf Port 3000.

```bash
ssh <user>@<host>.uberspace.de

# 1. Neuen Stand holen und bauen (Repo liegt schon in ~/myweathr_landing)
cd ~/myweathr_landing
./deploy/uberspace.sh main          # oder: ./deploy/uberspace.sh feat/redesign-2026 zum Testen
#   → baut und kopiert nach /var/www/virtual/$USER/myweathr.io/

# 2. www-Domain auf denselben Ordner zeigen lassen (.htaccess leitet www → ohne www um)
ln -s /var/www/virtual/$USER/myweathr.io /var/www/virtual/$USER/www.myweathr.io

# 3. Web-Backend von Node (Port 3000) auf Apache zurückstellen – erst ab hier ist die neue Seite live
uberspace web backend del myweathr.io
uberspace web backend del www.myweathr.io
uberspace web backend list          # myweathr.io darf hier nicht mehr auftauchen

# 4. Alten Node-Service stoppen und entfernen
supervisorctl stop myweathr
rm ~/etc/services.d/myweathr.ini
supervisorctl reread && supervisorctl update
```

Andere Domains auf dem Account (z. B. stephan-lindauer.de) sind nicht betroffen: Uberspace nimmt für eine Domain
den Ordner `/var/www/virtual/$USER/<domain>/`, wenn es ihn gibt, sonst `html/`.

### Prüfen

```bash
curl -sI https://myweathr.io/            # 200, Weiterleitungsseite
curl -sI https://myweathr.io/en/         # 200
curl -sI https://www.myweathr.io/en/     # 301 → https://myweathr.io/en/
curl -s  https://myweathr.io/llms.txt | head -3
curl -sI https://myweathr.io/privacy     # 301 → /privacy/ (App-Store-Link bleibt gültig)
```

### Zurück zum alten Stand (falls nötig)

```bash
uberspace web backend set myweathr.io --http --port 3000
uberspace web backend set www.myweathr.io --http --port 3000
# Service-Datei wiederherstellen (Inhalt siehe Git-History dieser Datei) und starten
```

## Updates

```bash
ssh <user>@<host>.uberspace.de
cd ~/myweathr_landing && ./deploy/uberspace.sh main
```

Das Skript bricht ab, bevor es etwas kopiert, wenn der Build fehlschlägt – die Live-Seite bleibt dann unverändert.

## Nach dem Livegang

- Google Search Console: Sitemap `https://myweathr.io/sitemap.xml` neu einreichen.
- Die alten Startseiten-Anker (`/#features`, `/#faq`) landen über die Weiterleitung auf `/en/` bzw. `/de/`.
