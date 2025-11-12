# Supabase Cron Job Setup - Waitlist Cleanup

## Overview

This cron job automatically deletes unconfirmed waitlist entries that are older than 7 days, ensuring GDPR compliance and keeping the database clean.

## Setup Instructions

### 1. Enable pg_cron Extension

In the Supabase Dashboard:
1. Go to **Database** → **Extensions**
2. Search for `pg_cron`
3. Enable the extension

### 2. Run the SQL Script

In the Supabase SQL Editor:
1. Go to **SQL Editor**
2. Copy the contents of `supabase/cleanup_cron_job.sql`
3. Execute the script

This will:
- Create the cleanup function `cleanup_unconfirmed_waitlist()`
- Schedule a daily cron job at 2:00 AM UTC

## Cron Schedule

```
0 2 * * *  (Daily at 2:00 AM UTC)
```

## What Gets Deleted

The job deletes entries from the `waitlist` table where:
- `confirmed = false`
- `created_at < NOW() - INTERVAL '7 days'`

## Manual Testing

To manually trigger the cleanup (for testing):

```sql
SELECT public.cleanup_unconfirmed_waitlist();
```

## Verify the Job

Check if the cron job is scheduled:

```sql
SELECT * FROM cron.job WHERE jobname = 'cleanup-unconfirmed-waitlist';
```

## Unschedule the Job

If you need to remove the cron job:

```sql
SELECT cron.unschedule('cleanup-unconfirmed-waitlist');
```

## Monitoring

To see cron job execution history:

```sql
SELECT * FROM cron.job_run_details 
WHERE jobid = (SELECT jobid FROM cron.job WHERE jobname = 'cleanup-unconfirmed-waitlist')
ORDER BY start_time DESC
LIMIT 10;
```

## GDPR Compliance

This automated cleanup ensures compliance with GDPR storage limitation principles:
- Unconfirmed emails are deleted after 7 days
- No manual intervention required
- Automatic and consistent enforcement

## Notes

- The job runs with `SECURITY DEFINER`, meaning it executes with the privileges of the function owner
- The cleanup is permanent and cannot be undone
- Consider backing up data before initial setup if needed
