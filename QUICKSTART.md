# Quick Start Guide

## 🚀 In 5 Minuten live

### 1. Dependencies installieren
```bash
npm install
```

### 2. Supabase einrichten

1. Gehe zu [app.supabase.com](https://app.supabase.com)
2. Erstelle ein neues Projekt
3. Öffne den **SQL Editor**
4. Kopiere & führe aus: `supabase-setup.sql`

### 3. Environment Variables

Erstelle `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...
```

Keys findest du unter: **Settings** → **API**

### 4. Starten

```bash
npm run dev
```

→ Öffne [http://localhost:3000](http://localhost:3000)

### 5. Testen

1. Gib eine Email ein
2. Klicke "Get early access"
3. Prüfe in Supabase: **Table Editor** → `newsletter_subscribers`

## ✅ Fertig!

Für Details siehe:
- `SUPABASE_SETUP.md` - Ausführliche Supabase-Anleitung
- `README.md` - Vollständige Dokumentation
