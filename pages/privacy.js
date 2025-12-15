import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - myweathr.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo-app.png" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/" className="text-sky-600 hover:text-sky-700 mb-8 inline-block font-medium">
            ← Back to home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy for myweathr.io</h1>
          <p className="text-slate-600 mb-8">Last Updated: December 2025</p>
          
          <div className="prose prose-slate max-w-none space-y-8">

            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-slate-700 leading-relaxed">
                Welcome to myweathr.io ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-2 mt-4">2.1 Account Information</h3>
              <p className="text-slate-700 leading-relaxed">
                When you create an account, we collect your <strong>email address</strong> for authentication and communication.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">2.2 Authentication Data</h3>
              <p className="text-slate-700 leading-relaxed">We support the following sign-in methods:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li><strong>Apple Sign-In</strong>: We receive your Apple ID email (or relay email)</li>
                <li><strong>Email/Password</strong>: We store your email and encrypted password</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">2.3 Route and Activity Data</h3>
              <p className="text-slate-700 leading-relaxed">When you use our Service, we collect:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li><strong>GPX route data</strong> (uploaded routes with GPS coordinates)</li>
                <li><strong>Strava activities</strong> (if you connect your Strava account)</li>
                <li><strong>Komoot routes</strong> (if you import from Komoot)</li>
                <li><strong>Route metadata</strong> (name, distance, elevation, activity type, sport type)</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">2.4 User Preferences</h3>
              <p className="text-slate-700 leading-relaxed">We store your preferences including:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li><strong>Language settings</strong> (German/English)</li>
                <li><strong>Unit system</strong> (metric/imperial)</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">2.5 Bike Profiles</h3>
              <p className="text-slate-700 leading-relaxed">We store your bike profiles including:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Bike name and type</li>
                <li>Bike weight (optional)</li>
                <li>Tire width (optional)</li>
                <li>Default bike selection</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">2.6 Coffee Stops</h3>
              <p className="text-slate-700 leading-relaxed">For premium users, we store coffee stop data:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Location coordinates (latitude/longitude)</li>
                <li>Distance along route</li>
                <li>Pause duration</li>
                <li>Optional name</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">2.7 Subscription Data</h3>
              <p className="text-slate-700 leading-relaxed">For premium subscriptions, we process:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Subscription status (active, expired, cancelled)</li>
                <li>Subscription tier (monthly, yearly)</li>
                <li>Expiration date</li>
                <li>RevenueCat user ID (for subscription management)</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-3">
                <strong>Note:</strong> We do not store payment card details. All payments are processed securely by Apple (App Store) or Stripe.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">2.8 Weather Data Requests</h3>
              <p className="text-slate-700 leading-relaxed">We log weather data requests for rate limiting purposes:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Timestamp of request</li>
                <li>Route ID associated with request</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">2.9 Technical Data</h3>
              <p className="text-slate-700 leading-relaxed">We may collect:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Device type and operating system</li>
                <li>App version</li>
                <li>Error logs (for debugging purposes)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p className="text-slate-700 leading-relaxed">We use the collected information to:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li><strong>Provide the Service</strong>: Display weather forecasts for your cycling routes</li>
                <li><strong>Authenticate users</strong>: Manage your account and sessions</li>
                <li><strong>Process subscriptions</strong>: Manage premium features and billing</li>
                <li><strong>Improve the Service</strong>: Analyze usage patterns and fix bugs</li>
                <li><strong>Communicate</strong>: Send important updates about your account or the Service</li>
                <li><strong>Enforce limits</strong>: Apply rate limits for free users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
              <p className="text-slate-700 leading-relaxed mb-4">We integrate with the following third-party services:</p>

              <h3 className="text-xl font-medium mb-2">4.1 Supabase (Database & Authentication)</h3>
              <p className="text-slate-700 leading-relaxed">
                Hosts our database and handles authentication.<br />
                Privacy Policy: <a href="https://supabase.com/privacy" className="text-sky-600 hover:text-sky-700 underline">https://supabase.com/privacy</a>
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">4.2 RevenueCat (Subscription Management)</h3>
              <p className="text-slate-700 leading-relaxed">
                Manages in-app purchases and subscriptions.<br />
                Privacy Policy: <a href="https://www.revenuecat.com/privacy" className="text-sky-600 hover:text-sky-700 underline">https://www.revenuecat.com/privacy</a>
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">4.3 Apple (App Store & Sign-In)</h3>
              <p className="text-slate-700 leading-relaxed">
                Processes iOS app purchases and provides Sign in with Apple.<br />
                Privacy Policy: <a href="https://www.apple.com/legal/privacy/" className="text-sky-600 hover:text-sky-700 underline">https://www.apple.com/legal/privacy/</a>
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">4.4 Strava (Optional Integration)</h3>
              <p className="text-slate-700 leading-relaxed">
                If connected, we access your public activities. You can disconnect at any time in Settings.<br />
                Privacy Policy: <a href="https://www.strava.com/legal/privacy" className="text-sky-600 hover:text-sky-700 underline">https://www.strava.com/legal/privacy</a>
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">4.5 Weather Data Providers</h3>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li><strong>Open-Meteo</strong>: Provides weather forecasts for international routes (no personal data shared)</li>
                <li><strong>Brightsky / DWD (Deutscher Wetterdienst)</strong>: Provides weather data for routes in Germany (no personal data shared)</li>
                <li><strong>Apple WeatherKit</strong>: Provides weather data as fallback (no personal data shared)</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">4.6 Sunrise-Sunset.org</h3>
              <p className="text-slate-700 leading-relaxed">
                Provides sunrise/sunset times based on coordinates (no personal data shared).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Storage and Security</h2>
              
              <h3 className="text-xl font-medium mb-2">5.1 Data Location</h3>
              <p className="text-slate-700 leading-relaxed">
                Your data is stored on servers provided by Supabase, located in the European Union.
              </p>

              <h3 className="text-xl font-medium mb-2 mt-4">5.2 Security Measures</h3>
              <p className="text-slate-700 leading-relaxed">We implement appropriate security measures including:</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li>Encrypted data transmission (HTTPS/TLS)</li>
                <li>Secure password hashing</li>
                <li>Row-level security in our database</li>
                <li>Regular security updates</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4">5.3 Data Retention</h3>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li><strong>Account data</strong>: Retained until you delete your account</li>
                <li><strong>Route data</strong>: Retained until you delete the route or your account</li>
                <li><strong>Weather cache</strong>: Automatically expires after 1 hour</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
              <p className="text-slate-700 leading-relaxed">You have the right to:</p>

              <h3 className="text-xl font-medium mb-2 mt-4">6.1 Access Your Data</h3>
              <p className="text-slate-700 leading-relaxed">View your profile and routes in the app.</p>

              <h3 className="text-xl font-medium mb-2 mt-4">6.2 Correct Your Data</h3>
              <p className="text-slate-700 leading-relaxed">Update your profile information in Settings.</p>

              <h3 className="text-xl font-medium mb-2 mt-4">6.3 Delete Your Data</h3>
              <p className="text-slate-700 leading-relaxed">Delete individual routes or your entire account in Settings. Account deletion permanently removes all your data.</p>

              <h3 className="text-xl font-medium mb-2 mt-4">6.4 Export Your Data</h3>
              <p className="text-slate-700 leading-relaxed">Contact us to request a copy of your data.</p>

              <h3 className="text-xl font-medium mb-2 mt-4">6.5 Disconnect Third-Party Services</h3>
              <p className="text-slate-700 leading-relaxed">Revoke Strava access at any time in Settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Children's Privacy</h2>
              <p className="text-slate-700 leading-relaxed">
                Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. International Data Transfers</h2>
              <p className="text-slate-700 leading-relaxed">
                If you access the Service from outside the European Union, your data may be transferred to and processed in the EU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
              <p className="text-slate-700 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:<br /><br />
                <strong>Email:</strong> <a href="mailto:hello@myweathr.io" className="text-sky-600 hover:text-sky-700 underline">hello@myweathr.io</a><br />
                <strong>Website:</strong> <a href="https://myweathr.io" className="text-sky-600 hover:text-sky-700 underline">https://myweathr.io</a>
              </p>
            </section>

            <section className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-semibold mb-3">Summary of Data Collection</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-slate-700">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 font-semibold">Data Type</th>
                      <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                      <th className="text-left py-2 font-semibold">Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="py-2 pr-4">Email</td><td className="py-2 pr-4">Authentication</td><td className="py-2">Until account deletion</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4">Routes (GPX)</td><td className="py-2 pr-4">Core functionality</td><td className="py-2">Until deletion</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4">Bike profiles</td><td className="py-2 pr-4">Speed calculation</td><td className="py-2">Until account deletion</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4">Coffee stops</td><td className="py-2 pr-4">Route planning (Premium)</td><td className="py-2">Until deletion</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4">Strava connection</td><td className="py-2 pr-4">Route import</td><td className="py-2">Until disconnection</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4">Preferences</td><td className="py-2 pr-4">Personalization</td><td className="py-2">Until account deletion</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4">Subscription status</td><td className="py-2 pr-4">Premium features</td><td className="py-2">Until account deletion</td></tr>
                    <tr><td className="py-2 pr-4">Weather requests</td><td className="py-2 pr-4">Rate limiting</td><td className="py-2">1 week</td></tr>
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
