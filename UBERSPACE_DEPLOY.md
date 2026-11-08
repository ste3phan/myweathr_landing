# Deploy auf Uberspace (statisch)

Die Landingpage ist ein statischer Export (`out/`). Apache auf Uberspace liefert die Dateien direkt aus –
kein Node-Prozess, kein Port, kein supervisord mehr.

## Was auf dem Account liegt – und was NICHT angefasst wird

Account `acidalia@elara.uberspace.de` hostet auch die **Web-App** `app.myweathr.io`:
Dateien in `~/html/app.myweathr.io/`, Symlink `/var/www/virtual/acidalia/app.myweathr.io → html/app.myweathr.io`,
eigenes Web-Backend (`apache`). Diese drei Dinge bleiben unverändert.

Die Landingpage bekommt einen **eigenen** Ordner `/var/www/virtual/acidalia/myweathr.io/` (kein Symlink, nicht in `html/`).
Apache nimmt pro Domain den gleichnamigen Ordner – `app.myweathr.io` sieht weiter nur seinen Ordner.
`deploy/uberspace.sh` bricht ab, wenn das Ziel ein Symlink ist, in `html/` liegt oder fremde Dateien enthält.

Gebaut wird in einem **separaten Clone** `~/myweathr_landing_static`. Der alte Clone `~/myweathr_landing`, aus dem
der Node-Server läuft, bleibt bis zum Schluss unberührt – so läuft die alte Seite während des Builds weiter und
der Rückweg ist trivial.

## Einmalige Umstellung

### 0. Ist-Zustand ansehen (nur lesen)

```bash
ssh acidalia@elara.uberspace.de
uberspace web domain list
uberspace web backend list
ls -la /var/www/virtual/$USER/
supervisorctl status
node --version
```

### 1. Neue Seite bauen (alte bleibt live)

```bash
git clone https://github.com/ste3phan/myweathr_landing.git ~/myweathr_landing_static
cd ~/myweathr_landing_static
./deploy/uberspace.sh main
```

Noch nicht öffentlich: myweathr.io zeigt weiterhin auf den Node-Server (Port 3000).

### 2. www mitnehmen

```bash
cd /var/www/virtual/$USER && ln -s myweathr.io www.myweathr.io
```

### 3. Umschalten – ab hier ist die neue Seite live

```bash
uberspace web backend del myweathr.io
uberspace web backend del www.myweathr.io
uberspace web backend list     # app.myweathr.io muss unverändert dastehen
```

### 4. Prüfen

```bash
curl -sI https://myweathr.io/en/ | head -1          # 200
curl -sI https://www.myweathr.io/en/ | grep -i loc  # → https://myweathr.io/en/
curl -sI https://myweathr.io/privacy | head -1       # 301 → /privacy/
curl -sI https://app.myweathr.io/ | head -1          # 200 – Web-App unverändert
```

### 5. Alten Node-Service abschalten (erst wenn 4. passt)

```bash
supervisorctl stop myweathr
mv ~/etc/services.d/myweathr.ini ~/myweathr.ini.bak
supervisorctl reread && supervisorctl update
```

### Zurück zum alten Stand

```bash
uberspace web backend set myweathr.io --http --port 3000
uberspace web backend set www.myweathr.io --http --port 3000
# falls Schritt 5 schon gelaufen ist:
mv ~/myweathr.ini.bak ~/etc/services.d/myweathr.ini && supervisorctl reread && supervisorctl update
```

## Updates

```bash
ssh acidalia@elara.uberspace.de
cd ~/myweathr_landing_static && ./deploy/uberspace.sh main
```

Schlägt der Build fehl, wird nichts kopiert – die Live-Seite bleibt unverändert.

## Nach dem Livegang

- Google Search Console: Sitemap `https://myweathr.io/sitemap.xml` neu einreichen.
- Wenn alles läuft: alten Clone `~/myweathr_landing` und `~/myweathr.ini.bak` löschen.
