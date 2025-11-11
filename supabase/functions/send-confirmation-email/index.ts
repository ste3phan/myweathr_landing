// Supabase Edge Function: Send Confirmation Email via SMTP (Uberspace)
// Deploy: supabase functions deploy send-confirmation-email

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts"

const SMTP_HOST = Deno.env.get("SMTP_HOST")! // elara.uberspace.de
const SMTP_PORT = parseInt(Deno.env.get("SMTP_PORT") || "465")
const SMTP_USER = Deno.env.get("SMTP_USER")! // no-reply@myweathr.io
const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD")!
const SITE_URL = Deno.env.get("SITE_URL") || "https://myweathr.io"

serve(async (req) => {
  try {
    const { email, token } = await req.json()

    if (!email || !token) {
      return new Response(
        JSON.stringify({ error: "Missing email or token" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    const confirmationLink = `${SITE_URL}/confirm?token=${token}`

    // Configure SMTP client for Uberspace (SSL/TLS on port 465)
    const client = new SMTPClient({
      connection: {
        hostname: SMTP_HOST,
        port: SMTP_PORT,
        tls: true, // Direct TLS for port 465
        auth: {
          username: SMTP_USER,
          password: SMTP_PASSWORD,
        },
      },
    })

    // Send email via SMTP
    await client.send({
      from: "MyWeathr <no-reply@myweathr.io>",
      to: email,
      subject: "Confirm your MyWeathr waitlist signup",
      html: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #334155; max-width: 600px; margin: 0 auto; padding: 20px;">
<div style="text-align: center; margin-bottom: 30px;">
<h1 style="color: #0ea5e9; margin: 0;">MyWeathr</h1>
<p style="color: #64748b; margin: 5px 0;">Smart weather. Better timing.</p>
</div>
<div style="background: #f8fafc; border-radius: 12px; padding: 30px; margin-bottom: 20px;">
<h2 style="margin-top: 0; color: #1e293b;">Hey 👋</h2>
<p>Thanks for signing up for the MyWeathr waitlist!</p>
<p>We're building the ultimate weather app for cyclists and outdoor athletes, and we can't wait to share it with you.</p>
<p><strong>Please confirm your email address by clicking the button below:</strong></p>
<div style="text-align: center; margin: 30px 0;">
<a href="${confirmationLink}" style="display: inline-block; background: #0ea5e9; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600;">Confirm Email</a>
</div>
<p style="font-size: 14px; color: #64748b;">Or copy and paste this link into your browser:<br><a href="${confirmationLink}" style="color: #0ea5e9; word-break: break-all;">${confirmationLink}</a></p>
</div>
<div style="text-align: center; font-size: 12px; color: #94a3b8;">
<p>This link will expire in 7 days.</p>
<p>If you didn't sign up for MyWeathr, you can safely ignore this email.</p>
<p style="margin-top: 20px;">${new Date().getFullYear()} myweathr.io</p>
</div>
</body>
</html>`,
    })

    await client.close()

    console.log("Email sent successfully to:", email)

    return new Response(
      JSON.stringify({ success: true, email }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error("Error in send-confirmation-email:", error)
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
})
