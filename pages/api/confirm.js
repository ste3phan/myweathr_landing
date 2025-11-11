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

  // Get user's IP address
  const confirmedIp = req.headers['x-forwarded-for']?.split(',')[0] || 
                      req.headers['x-real-ip'] || 
                      req.socket.remoteAddress || 
                      null;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  try {
    // Update waitlist entry with confirmation and IP
    const { data, error } = await supabase
      .from("waitlist")
      .update({ 
        confirmed: true, 
        confirmed_at: new Date().toISOString(),
        confirmed_ip: confirmedIp
      })
      .eq("confirmation_token", token)
      .eq("confirmed", false)
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Database error" });
    }

    if (!data || data.length === 0) {
      return res.status(400).json({ 
        success: false,
        message: "Invalid or expired confirmation link. Please try signing up again." 
      });
    }

    // Return success response
    return res.status(200).json({ 
      success: true,
      message: "Your email has been confirmed! Welcome to the MyWeathr waitlist." 
    });
  } catch (error) {
    console.error("Confirmation error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
