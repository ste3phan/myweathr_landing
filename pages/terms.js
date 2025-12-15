import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use - myweathr.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo-app.png" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/" className="text-sky-600 hover:text-sky-700 mb-8 inline-block font-medium">
            ← Back to home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms of Use for myweathr.io</h1>
          <p className="text-slate-600 mb-8">Last Updated: December 2025</p>
          
          <div className="prose prose-slate max-w-none space-y-8">

            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                By downloading, installing, or using the myweathr.io mobile application ("App") and related services ("Service"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Description of Service</h2>
              <p className="text-slate-700 leading-relaxed">
                myweathr.io is a weather forecasting application designed for cyclists. The Service provides:
              </p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Weather forecasts along cycling routes</li>
                <li>Route import from GPX files, Strava, and Komoot</li>
                <li>Optimal riding time recommendations (Premium)</li>
                <li>Coffee stop planning (Premium)</li>
                <li>Higher resolution weather data (Premium)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
              
              <h3 className="text-xl font-medium mb-2 mt-4">3.1 Account Creation</h3>
              <p className="text-slate-700 leading-relaxed">
                To use the Service, you must create an account using Apple Sign-In or Email and password. You must provide accurate information and keep your account credentials secure.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">3.2 Account Responsibilities</h3>
              <p className="text-slate-700 leading-relaxed">You are responsible for:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>All activity under your account</li>
                <li>Maintaining the confidentiality of your password</li>
                <li>Notifying us of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">3.3 Account Termination</h3>
              <p className="text-slate-700 leading-relaxed">
                You may delete your account at any time through the Settings menu. We may suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Subscription Terms</h2>
              
              <h3 className="text-xl font-medium mb-2 mt-4">4.1 Premium Subscription</h3>
              <p className="text-slate-700 leading-relaxed">myweathr.io offers premium subscriptions with additional features:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li><strong>Monthly subscription</strong>: Billed monthly</li>
                <li><strong>Yearly subscription</strong>: Billed annually (with discount)</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">4.2 Billing</h3>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Subscriptions are billed through Apple App Store (iOS) or Stripe (Web)</li>
                <li>Payment is charged at confirmation of purchase</li>
                <li>Subscriptions automatically renew unless cancelled</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">4.3 Cancellation</h3>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>You may cancel your subscription at any time</li>
                <li>iOS: Cancel through your Apple ID subscription settings</li>
                <li>Web: Cancel through your account settings</li>
                <li>Cancellation takes effect at the end of the current billing period</li>
                <li>No refunds for partial billing periods</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">4.4 Price Changes</h3>
              <p className="text-slate-700 leading-relaxed">
                We may change subscription prices. Price changes will be communicated in advance and will apply to the next billing cycle after notice.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">4.5 Free Trial</h3>
              <p className="text-slate-700 leading-relaxed">
                If offered, free trials automatically convert to paid subscriptions unless cancelled before the trial ends.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Acceptable Use</h2>
              <p className="text-slate-700 leading-relaxed">You agree NOT to:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Use the Service for any illegal purpose</li>
                <li>Upload malicious content or malware</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Scrape or harvest data from the Service</li>
                <li>Resell or redistribute the Service</li>
                <li>Impersonate others or provide false information</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. User Content</h2>
              
              <h3 className="text-xl font-medium mb-2 mt-4">6.1 Your Content</h3>
              <p className="text-slate-700 leading-relaxed">
                You retain ownership of routes and data you upload ("User Content"). By uploading content, you grant us a license to store, process, and display it as necessary to provide the Service.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">6.2 Content Restrictions</h3>
              <p className="text-slate-700 leading-relaxed">You must not upload content that:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Infringes intellectual property rights</li>
                <li>Contains personal data of others without consent</li>
                <li>Is illegal, harmful, or offensive</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">6.3 Content Removal</h3>
              <p className="text-slate-700 leading-relaxed">
                We may remove content that violates these Terms without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Third-Party Services</h2>
              
              <h3 className="text-xl font-medium mb-2 mt-4">7.1 Strava Integration</h3>
              <p className="text-slate-700 leading-relaxed">
                If you connect your Strava account, we access your public activities. You can disconnect at any time. Strava's terms of service also apply.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">7.2 Komoot Integration</h3>
              <p className="text-slate-700 leading-relaxed">
                If you import from Komoot, you must have rights to the routes you import. Komoot's terms of service also apply.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">7.3 Weather Data</h3>
              <p className="text-slate-700 leading-relaxed">
                Weather data is provided by third-party services (Open-Meteo, DWD/Brightsky, Apple WeatherKit). We do not guarantee the accuracy of weather forecasts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Intellectual Property</h2>
              
              <h3 className="text-xl font-medium mb-2 mt-4">8.1 Our Property</h3>
              <p className="text-slate-700 leading-relaxed">
                The Service, including its design, features, and content (excluding User Content), is owned by myweathr.io and protected by intellectual property laws.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">8.2 License to Use</h3>
              <p className="text-slate-700 leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">8.3 Restrictions</h3>
              <p className="text-slate-700 leading-relaxed">You may not:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Copy, modify, or distribute the App</li>
                <li>Reverse engineer or decompile the App</li>
                <li>Remove any proprietary notices</li>
                <li>Use our trademarks without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Disclaimers</h2>
              
              <h3 className="text-xl font-medium mb-2 mt-4">9.1 Weather Accuracy</h3>
              <p className="text-slate-700 leading-relaxed font-semibold">
                WEATHER FORECASTS ARE PROVIDED "AS IS" WITHOUT WARRANTY. We do not guarantee the accuracy of weather data. Always use your own judgment when planning outdoor activities.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">9.2 Service Availability</h3>
              <p className="text-slate-700 leading-relaxed">
                We do not guarantee uninterrupted access to the Service. The Service may be unavailable due to maintenance, updates, or technical issues.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">9.3 No Professional Advice</h3>
              <p className="text-slate-700 leading-relaxed">
                The Service does not provide professional meteorological, safety, or fitness advice. Consult appropriate professionals for such guidance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Limitation of Liability</h2>
              <p className="text-slate-700 leading-relaxed">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>We are not liable for any indirect, incidental, special, or consequential damages</li>
                <li>Our total liability is limited to the amount you paid for the Service in the 12 months preceding the claim</li>
                <li>We are not liable for damages resulting from inaccurate weather forecasts, service interruptions, loss of data, third-party actions, or your reliance on the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">11. Indemnification</h2>
              <p className="text-slate-700 leading-relaxed">
                You agree to indemnify and hold harmless myweathr.io from any claims, damages, or expenses arising from your use of the Service, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">12. Changes to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                We may modify these Terms at any time. Changes will be posted in the App and on our website. Continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">13. Governing Law</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms are governed by the laws of Germany. Any disputes shall be resolved in the courts of Germany.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">14. Severability</h2>
              <p className="text-slate-700 leading-relaxed">
                If any provision of these Terms is found unenforceable, the remaining provisions remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">15. Entire Agreement</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms, together with our{" "}
                <Link href="/privacy" className="text-sky-600 hover:text-sky-700 underline">
                  Privacy Policy
                </Link>, constitute the entire agreement between you and myweathr.io regarding the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">16. Contact</h2>
              <p className="text-slate-700 leading-relaxed">
                For questions about these Terms, contact us at:<br /><br />
                <strong>Email:</strong> <a href="mailto:hello@myweathr.io" className="text-sky-600 hover:text-sky-700 underline">hello@myweathr.io</a><br />
                <strong>Website:</strong> <a href="https://myweathr.io" className="text-sky-600 hover:text-sky-700 underline">https://myweathr.io</a>
              </p>
            </section>

            <section className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-semibold mb-3">Summary</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-slate-700">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 font-semibold">Topic</th>
                      <th className="text-left py-2 font-semibold">Key Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Account</td><td className="py-2">You are responsible for your account security</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Subscriptions</td><td className="py-2">Auto-renew; cancel anytime; no partial refunds</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Weather Data</td><td className="py-2">Provided "as is"; no accuracy guarantee</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Your Content</td><td className="py-2">You own it; we can store/display it</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Liability</td><td className="py-2">Limited; use at your own risk</td></tr>
                    <tr><td className="py-2 pr-4 font-medium">Termination</td><td className="py-2">You can delete anytime; we can suspend for violations</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
