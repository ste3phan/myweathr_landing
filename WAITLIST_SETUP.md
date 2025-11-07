# MyWeathr Waitlist Setup Guide

Complete setup for Double Opt-In waitlist with email confirmation.

## 📋 Prerequisites

- Supabase Project: `pcjsyxyytolxyytzsime`
- Uberspace Mail Server (SMTP credentials)
- Domain: `myweathr.io`

## 🚀 Setup Steps

### 1. Run Database Migration

In Supabase SQL Editor, run:

```bash
supabase/migrations/001_waitlist_setup.sql
```

This creates:
- ✅ `waitlist` table with email validation
- ✅ Row Level Security policies
- ✅ Automatic confirmation token generation
- ✅ DSGVO cleanup function
- ✅ Indexes for performance

### 2. Enable pg_cron (Optional but Recommended)

For automatic cleanup of unconfirmed emails after 7 days:

```sql
-- In Supabase SQL Editor
select cron.schedule(
  'delete_unconfirmed_waitlist', 
  '0 3 * * *', 
  'select public.delete_unconfirmed_waitlist()'
);
```

### 3. Deploy Edge Function

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref pcjsyxyytolxyytzsime

# Deploy the edge function
supabase functions deploy send-confirmation-email
```

### 4. Set Environment Variables

#### In Supabase Dashboard → Settings → Edge Functions:

```env
SMTP_HOST=elara.uberspace.de
SMTP_PORT=587
SMTP_USER=no-reply@myweathr.io
SMTP_PASSWORD=your_smtp_password
SITE_URL=https://myweathr.io
```

#### In your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://pcjsyxyytolxyytzsime.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 5. Configure Uberspace Mail

1. **Create mail user on Uberspace:**
   ```bash
   uberspace mail user add no-reply
   ```

2. **Set password:**
   ```bash
   uberspace mail user password no-reply
   ```

3. **SMTP settings for Supabase:**
   - Host: `elara.uberspace.de`
   - Port: `587` (STARTTLS)
   - User: `no-reply@myweathr.io`
   - Password: (the one you just set)

4. **Configure DNS (if not already done):**
   - MX Record pointing to Uberspace
   - SPF, DKIM, DMARC records (Uberspace provides these)

### 6. Test the Flow

1. **Sign up**: Enter email on landing page
2. **Check email**: Confirmation email should arrive
3. **Click link**: Redirects to `/confirmed` page
4. **Verify**: Check Supabase table for `confirmed = true`

## 📊 Database Schema

```sql
waitlist
├── id (uuid, primary key)
├── email (text, unique, validated)
├── confirmed (boolean, default false)
├── confirmation_token (text, unique, auto-generated)
├── created_at (timestamptz)
└── confirmed_at (timestamptz)
```

## 🔒 Security Features

✅ **Row Level Security (RLS)**
- Anyone can insert (signup)
- Only confirmed entries are publicly readable

✅ **Email Validation**
- Regex check on insert
- Unique constraint

✅ **Token Security**
- 32-byte random token
- Unique constraint
- Auto-expires after 7 days

✅ **DSGVO Compliance**
- Automatic deletion of unconfirmed emails after 7 days
- Clear data retention policy

## 📧 Email Flow

```
1. User enters email
   ↓
2. Insert into waitlist table
   ↓
3. Trigger fires → Edge Function
   ↓
4. Send confirmation email via Resend
   ↓
5. User clicks link
   ↓
6. API route confirms email
   ↓
7. Redirect to success page
```

## 🔍 Monitoring & Analytics

### View all signups:
```sql
SELECT * FROM waitlist ORDER BY created_at DESC;
```

### View confirmed only:
```sql
SELECT * FROM confirmed_waitlist;
```

### Get statistics:
```sql
SELECT 
  COUNT(*) as total,
  COUNT(*) FILTER (WHERE confirmed = true) as confirmed,
  COUNT(*) FILTER (WHERE confirmed = false) as pending
FROM waitlist;
```

### Export confirmed emails:
```sql
SELECT email FROM waitlist WHERE confirmed = true;
```

## 🐛 Troubleshooting

### Emails not sending?
- Check SMTP credentials in Edge Function env vars
- Verify mail user exists on Uberspace: `uberspace mail user list`
- Test SMTP connection manually
- Check Edge Function logs in Supabase
- Verify port 587 is accessible (STARTTLS)

### Confirmation not working?
- Check token in URL matches database
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set
- Check API route logs

### Cleanup not running?
- Verify pg_cron is enabled
- Check cron job: `SELECT * FROM cron.job;`
- Run manually: `SELECT delete_unconfirmed_waitlist();`

## 📱 Frontend Integration

The landing page (`pages/index.js`) already includes:
- ✅ Email input with validation
- ✅ Success/error states
- ✅ Integration with `/api/newsletter` endpoint

Update `/api/newsletter.js` to use the new `waitlist` table instead of `newsletter_subscribers`.

## 🚢 Deployment Checklist

- [ ] Run database migration
- [ ] Deploy Edge Function
- [ ] Set environment variables
- [ ] Configure Resend domain
- [ ] Enable pg_cron
- [ ] Test signup flow
- [ ] Test confirmation flow
- [ ] Verify cleanup function

## 📚 Additional Resources

- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Uberspace Mail Documentation](https://manual.uberspace.de/mail-access/)
- [Denomailer SMTP Client](https://deno.land/x/denomailer)
- [pg_cron Documentation](https://github.com/citusdata/pg_cron)

## 🔧 Uberspace SMTP Setup Commands

```bash
# Create mail user
uberspace mail user add no-reply

# Set password
uberspace mail user password no-reply

# List mail users
uberspace mail user list

# Test SMTP (optional)
uberspace mail test no-reply@myweathr.io
```
