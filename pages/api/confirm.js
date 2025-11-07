// API Route: Email Confirmation Endpoint
// pages/api/confirm.js

import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ error: "Missing confirmation token" });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  try {
    // Update waitlist entry
    const { data, error } = await supabase
      .from("waitlist")
      .update({ 
        confirmed: true, 
        confirmed_at: new Date().toISOString() 
      })
      .eq("confirmation_token", token)
      .eq("confirmed", false)
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Database error" });
    }

    if (!data || data.length === 0) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // Redirect to success page
    return res.redirect(302, "/confirmed");
  } catch (error) {
    console.error("Confirmation error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
