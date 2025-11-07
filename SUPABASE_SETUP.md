# Supabase Setup für myweathr.io Newsletter

## 1. Supabase Projekt erstellen

1. Gehe zu [https://app.supabase.com](https://app.supabase.com)
2. Erstelle ein neues Projekt
3. Wähle eine Region (z.B. Frankfurt für EU)
4. Notiere dir die Projekt-URL und API Keys

## 2. Datenbank-Tabelle erstellen

1. Öffne den **SQL Editor** in deinem Supabase Dashboard
2. Kopiere den Inhalt von `supabase-setup.sql`
3. Führe das SQL-Script aus
4. Die Tabelle `newsletter_subscribers` wird erstellt

### Tabellen-Schema

```
newsletter_subscribers
├── id (UUID, Primary Key)
├── email (TEXT, UNIQUE, NOT NULL)
├── status (TEXT, 'pending' | 'confirmed' | 'unsubscribed')
├── subscribed_at (TIMESTAMPTZ)
├── confirmed_at (TIMESTAMPTZ)
├── unsubscribed_at (TIMESTAMPTZ)
├── created_at (TIMESTAMPTZ)
└── updated_at (TIMESTAMPTZ)
```

## 3. Environment Variables einrichten

Erstelle eine `.env.local` Datei im Projekt-Root:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Keys finden:

1. Gehe zu **Settings** → **API** in deinem Supabase Dashboard
2. **Project URL**: Kopiere die URL
3. **anon/public key**: Kopiere den `anon` key
4. **service_role key**: Kopiere den `service_role` key (⚠️ Niemals im Frontend verwenden!)

## 4. Testen

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) und teste die Newsletter-Anmeldung.

## 5. Subscribers verwalten

### In Supabase Dashboard

1. Gehe zu **Table Editor**
2. Wähle `newsletter_subscribers`
3. Sieh alle Anmeldungen

### Per SQL

```sql
-- Alle Subscriber anzeigen
SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC;

-- Nur bestätigte Subscriber
SELECT * FROM confirmed_subscribers;

-- Statistiken
SELECT 
  status, 
  COUNT(*) as count 
FROM newsletter_subscribers 
GROUP BY status;
```

## 6. Double Opt-In implementieren (Optional)

Für Double Opt-In kannst du später einen Bestätigungs-Link per Email senden:

1. Bei Anmeldung: Status = 'pending'
2. Email mit Bestätigungs-Link senden
3. Bei Klick: Status auf 'confirmed' setzen und `confirmed_at` timestamp

```sql
-- Subscriber bestätigen
UPDATE newsletter_subscribers 
SET status = 'confirmed', confirmed_at = NOW() 
WHERE id = 'subscriber-uuid';
```

## 7. Export für Email-Kampagnen

```sql
-- Export als CSV
COPY (
  SELECT email 
  FROM newsletter_subscribers 
  WHERE status = 'confirmed'
) TO '/tmp/subscribers.csv' CSV HEADER;
```

## Sicherheit

- ✅ Row Level Security (RLS) ist aktiviert
- ✅ Nur Inserts von außen erlaubt
- ✅ Service Role Key nur server-side verwendet
- ✅ Emails werden lowercase gespeichert
- ✅ Unique Constraint verhindert Duplikate

## Troubleshooting

### "Missing Supabase environment variables"
→ Stelle sicher, dass `.env.local` existiert und alle Keys enthält

### "Failed to subscribe"
→ Prüfe die Supabase Logs im Dashboard unter **Logs** → **API**

### Duplikat-Fehler
→ Email existiert bereits in der Datenbank
