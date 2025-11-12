# Deployment zu Uberspace - Next.js mit Node.js

## Option 1: Node.js Deployment (Empfohlen - API Routes funktionieren)

### 1. Auf Uberspace einloggen
```bash
ssh <username>@elara.uberspace.de
```

### 2. Node.js Version prüfen/setzen
```bash
uberspace tools version show node
uberspace tools version use node 20  # Next.js benötigt Node 18+
```

### 3. Repository klonen
```bash
cd ~
git clone https://github.com/ste3phan/myweathr_landing.git
cd myweathr_landing
```

### 4. Dependencies installieren
```bash
npm install
```

### 5. Environment Variables setzen
```bash
nano .env.local
```

Füge ein:
```
NEXT_PUBLIC_SUPABASE_URL=https://pcjsyxyytolxyytzsime.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<dein-service-role-key>
```

### 6. Production Build erstellen
```bash
npm run build
```

### 7. Domains hinzufügen
```bash
uberspace web domain add myweathr.io
uberspace web domain add www.myweathr.io
```

### 8. Web Backend konfigurieren
```bash
# Backend für myweathr.io setzen (Node.js auf Port 3000)
uberspace web backend set myweathr.io --http --port 3000
uberspace web backend set www.myweathr.io --http --port 3000
```

**Wichtig:** Gib immer die Domain an, nicht nur `/`, damit andere Domains (z.B. stephan-lindauer.de) nicht betroffen sind!

### 9. Supervisord Service erstellen
```bash
nano ~/etc/services.d/myweathr.ini
```

Inhalt:
```ini
[program:myweathr]
directory=%(ENV_HOME)s/myweathr_landing
command=npm start
autostart=yes
autorestart=yes
startsecs=30
```

### 10. Service starten
```bash
supervisorctl reread
supervisorctl update
supervisorctl status
```

### 11. HTTPS einrichten (automatisch via Let's Encrypt)
Uberspace richtet automatisch HTTPS ein!

---

## Option 2: Static Export (Nur Frontend, API Routes extern)

⚠️ **Warnung:** API Routes funktionieren nicht! Du müsstest die API-Logik zu Supabase Edge Functions migrieren.

### 1. Static Export erstellen
```bash
npm run build
```

### 2. Dateien hochladen
```bash
scp -r out/* <username>@elara.uberspace.de:~/html/
```

### 3. .htaccess für Routing
```bash
nano ~/html/.htaccess
```

Inhalt:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1.html [L]
```

---

## Empfehlung

**Option 1 (Node.js)** ist die beste Wahl, weil:
- ✅ API Routes funktionieren
- ✅ Einfaches Deployment
- ✅ Automatische Updates via Git Pull
- ✅ Supervisord überwacht den Prozess

## Updates deployen

```bash
ssh <username>@elara.uberspace.de
cd ~/myweathr_landing
git pull
npm install
npm run build
supervisorctl restart myweathr
```

## Logs checken

```bash
supervisorctl tail -f myweathr
```
