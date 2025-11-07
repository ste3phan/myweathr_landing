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
    const { data: existingSubscriber } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email.toLowerCase())
      .single()

    if (existingSubscriber) {
      return res.status(400).json({ 
        message: "This email is already on the waitlist!" 
      });
    }

    // Insert new subscriber
    // Note: Database trigger will automatically send confirmation email via pg_net
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email: email.toLowerCase() }])
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Failed to subscribe. Please try again.");
    }

    console.log("Newsletter signup:", email);

    return res.status(200).json({ 
      message: "Thanks! Please check your email to confirm your signup." 
    });
  } catch (error) {
    console.error("Newsletter error:", error);
    return res.status(500).json({ 
      message: error.message || "Something went wrong. Please try again." 
    });
  }
}
