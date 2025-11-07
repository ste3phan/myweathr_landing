// pages/api/newsletter.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Please provide a valid email address" });
  }

  try {
    // Initialize Supabase client with service role key for server-side operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Check if email already exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('email', email.toLowerCase())
      .single()

    if (existingSubscriber) {
      return res.status(400).json({ 
        message: "This email is already subscribed!" 
      });
    }

    // Insert new subscriber
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        { 
          email: email.toLowerCase(),
          subscribed_at: new Date().toISOString(),
          status: 'pending' // For double opt-in
        }
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Failed to subscribe. Please try again.");
    }

    console.log("Newsletter signup:", email);

    return res.status(200).json({ 
      message: "Thanks! You're now on the waitlist for early access." 
    });
  } catch (error) {
    console.error("Newsletter error:", error);
    return res.status(500).json({ 
      message: error.message || "Something went wrong. Please try again." 
    });
  }
}
