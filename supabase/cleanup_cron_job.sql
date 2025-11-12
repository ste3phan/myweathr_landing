-- Supabase Cron Job: Daily Cleanup of Unconfirmed Waitlist Entries
-- This job runs once per day and deletes entries older than 7 days with confirmed = false

-- 1. Enable pg_cron extension (if not already enabled)
-- Note: This is usually already enabled in Supabase projects
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- 2. Create the cleanup function
CREATE OR REPLACE FUNCTION public.cleanup_unconfirmed_waitlist()
RETURNS void AS $$
BEGIN
  DELETE FROM public.waitlist
  WHERE confirmed = false
    AND created_at < NOW() - INTERVAL '7 days';
  
  -- Log the cleanup (optional)
  RAISE NOTICE 'Cleaned up unconfirmed waitlist entries older than 7 days';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Schedule the cron job to run daily at 2:00 AM UTC
-- Note: Supabase uses pg_cron which requires cron.schedule
SELECT cron.schedule(
  'cleanup-unconfirmed-waitlist',  -- Job name
  '0 2 * * *',                      -- Cron expression: Daily at 2:00 AM UTC
  $$SELECT public.cleanup_unconfirmed_waitlist()$$
);

-- 4. Verify the job was created (optional - for testing)
-- SELECT * FROM cron.job WHERE jobname = 'cleanup-unconfirmed-waitlist';

-- 5. To manually run the cleanup (for testing):
-- SELECT public.cleanup_unconfirmed_waitlist();

-- 6. To unschedule the job (if needed):
-- SELECT cron.unschedule('cleanup-unconfirmed-waitlist');
