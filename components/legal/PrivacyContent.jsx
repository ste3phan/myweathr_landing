// Legal text (English). Moved from pages/privacy.js; only styling was changed.
export default function PrivacyContent({ lang }) {
  return (
    <>
    <h1 className="h1-page mb-4 !text-[clamp(34px,4.6vw,56px)]">Privacy Policy for myweathr.io</h1>
    <p className="text-muted mb-8">Last Updated: June 2026</p>
    
    <div className="legal max-w-none space-y-8">

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">1. Introduction</h2>
        <p className="text-fg-2 leading-relaxed">
          Welcome to myweathr.io ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").
        </p>
        <p className="text-fg-2 leading-relaxed mt-3">
          By using the Service, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">2. Information We Collect</h2>
        
        <h3 className="text-xl font-medium mb-2 mt-4">2.1 Account Information</h3>
        <p className="text-fg-2 leading-relaxed">
          When you create an account, we collect your <strong>email address</strong> for authentication and communication.
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">2.2 Authentication Data</h3>
        <p className="text-fg-2 leading-relaxed">We support the following sign-in methods:</p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li><strong>Apple Sign-In</strong>: We receive your Apple ID email (or relay email)</li>
          <li><strong>Google Sign-In</strong>: We receive your Google account email and basic profile information (name, profile picture, where provided)</li>
          <li><strong>Email/Password</strong>: We store your email and encrypted password</li>
        </ul>

        <h3 className="text-xl font-medium mb-2 mt-4">2.3 Route Data</h3>
        <p className="text-fg-2 leading-relaxed">When you use our Service, we collect:</p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li><strong>GPX route data</strong> (uploaded routes with GPS coordinates)</li>
          <li><strong>Strava routes</strong> (planned routes if you connect your Strava account)</li>
          <li><strong>Komoot routes</strong> (if you import from Komoot)</li>
          <li><strong>Route metadata</strong> (name, distance, elevation, activity type, sport type)</li>
        </ul>

        <h3 className="text-xl font-medium mb-2 mt-4">2.4 User Preferences</h3>
        <p className="text-fg-2 leading-relaxed">We store your preferences including:</p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li><strong>Language settings</strong> (German/English)</li>
          <li><strong>Unit system</strong> (metric/imperial)</li>
        </ul>

        <h3 className="text-xl font-medium mb-2 mt-4">2.5 Bike Profiles</h3>
        <p className="text-fg-2 leading-relaxed">We store your bike profiles including:</p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li>Bike name and type</li>
          <li>Bike weight (optional)</li>
          <li>Tire width (optional)</li>
          <li>Default bike selection</li>
        </ul>

        <h3 className="text-xl font-medium mb-2 mt-4">2.6 Coffee Stops</h3>
        <p className="text-fg-2 leading-relaxed">For premium users, we store coffee stop data:</p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li>Location coordinates (latitude/longitude)</li>
          <li>Distance along route</li>
          <li>Pause duration</li>
          <li>Optional name</li>
        </ul>

        <h3 className="text-xl font-medium mb-2 mt-4">2.7 Subscription Data</h3>
        <p className="text-fg-2 leading-relaxed">For premium subscriptions, we process:</p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li>Subscription status (active, expired, cancelled)</li>
          <li>Subscription tier (monthly, yearly)</li>
          <li>Expiration date</li>
          <li>RevenueCat user ID (for subscription management)</li>
        </ul>
        <p className="text-fg-2 leading-relaxed mt-3">
          <strong>Note:</strong> We do not store payment card details. iOS in-app purchases are processed by Apple via the App Store. Web subscriptions are processed by Stripe Payments Europe Ltd. through RevenueCat Web Billing. We only receive subscription status and identifiers from these processors.
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">2.8 Weather Data Requests</h3>
        <p className="text-fg-2 leading-relaxed">We log weather data requests for rate limiting purposes:</p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li>Timestamp of request</li>
          <li>Route ID associated with request</li>
        </ul>

        <h3 className="text-xl font-medium mb-2 mt-4">2.9 Technical Data</h3>
        <p className="text-fg-2 leading-relaxed">We may collect:</p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li>Device type and operating system</li>
          <li>App version</li>
          <li>Error logs (for debugging purposes)</li>
        </ul>

        <h3 className="text-xl font-medium mb-2 mt-4">2.10 Tour Plans &amp; Email Reminders</h3>
        <p className="text-fg-2 leading-relaxed">
          If you save a planned ride (a "Tour Plan"), we store:
        </p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li>The route reference, planned date, start time, average speed, and direction (forward/reversed)</li>
          <li>Your per-tour reminder preference (whether a reminder is enabled for that specific tour)</li>
          <li>Your master reminder preference on your profile and the timestamp of your consent, kept as proof of opt-in under GDPR</li>
          <li>A unique unsubscribe token tied to your profile so you can opt out without signing in</li>
          <li>The timestamp when a reminder for a given tour was sent, used to prevent duplicate emails</li>
        </ul>
        <p className="text-fg-2 leading-relaxed mt-3">
          <strong>Reminder emails are strictly opt-in</strong> and sent only the evening before a planned ride. Each email contains a short weather summary for the route start, a deep link back into the app, and a one-click unsubscribe link. Legal basis: your consent (Art. 6(1)(a) GDPR), which you can withdraw at any time.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">3. How We Use Your Information</h2>
        <p className="text-fg-2 leading-relaxed">We use the collected information to:</p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li><strong>Provide the Service</strong>: Display weather forecasts for your cycling routes</li>
          <li><strong>Authenticate users</strong>: Manage your account and sessions</li>
          <li><strong>Process subscriptions</strong>: Manage premium features and billing</li>
          <li><strong>Improve the Service</strong>: Analyze usage patterns and fix bugs</li>
          <li><strong>Communicate</strong>: Send important updates about your account or the Service</li>
          <li><strong>Send tour reminders</strong>: If you opt in, email you the evening before a planned ride with the weather forecast for your route</li>
          <li><strong>Enforce limits</strong>: Apply rate limits for free users</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">4. Third-Party Services</h2>
        <p className="text-fg-2 leading-relaxed mb-4">We integrate with the following third-party services:</p>

        <h3 className="text-xl font-medium mb-2">4.1 Supabase (Database & Authentication)</h3>
        <p className="text-fg-2 leading-relaxed">
          Hosts our database and handles authentication.<br />
          Privacy Policy: <a href="https://supabase.com/privacy" className="link underline">https://supabase.com/privacy</a>
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">4.2 RevenueCat (Subscription Management)</h3>
        <p className="text-fg-2 leading-relaxed">
          Manages in-app purchases (iOS) and web subscriptions through RevenueCat Web Billing.<br />
          Privacy Policy: <a href="https://www.revenuecat.com/privacy" className="link underline">https://www.revenuecat.com/privacy</a>
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">4.3 Apple (App Store &amp; Sign-In)</h3>
        <p className="text-fg-2 leading-relaxed">
          Processes iOS app purchases and provides Sign in with Apple.<br />
          Privacy Policy: <a href="https://www.apple.com/legal/privacy/" className="link underline">https://www.apple.com/legal/privacy/</a>
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">4.4 Google (Sign-In)</h3>
        <p className="text-fg-2 leading-relaxed">
          Provides Sign in with Google. If you choose this method, Google shares your email and basic profile information with us.<br />
          Privacy Policy: <a href="https://policies.google.com/privacy" className="link underline">https://policies.google.com/privacy</a>
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">4.5 Stripe (Web Payments)</h3>
        <p className="text-fg-2 leading-relaxed">
          Processes web subscription payments via RevenueCat Web Billing. We never see or store your payment card details.<br />
          Privacy Policy: <a href="https://stripe.com/privacy" className="link underline">https://stripe.com/privacy</a>
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">4.6 Strava (Optional Integration)</h3>
        <p className="text-fg-2 leading-relaxed">
          If connected, we access your planned routes (not activities). You can disconnect at any time in Settings.<br />
          Privacy Policy: <a href="https://www.strava.com/legal/privacy" className="link underline">https://www.strava.com/legal/privacy</a>
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">4.7 Uberspace (Hosting &amp; Email Delivery)</h3>
        <p className="text-fg-2 leading-relaxed">
          Uberspace GmbH (Germany) hosts our marketing website and delivers transactional reminder emails via its SMTP server. For email delivery, Uberspace processes only the recipient address and the email content for the purpose of sending the message.<br />
          Privacy Policy: <a href="https://uberspace.de/en/about/privacy/" className="link underline">https://uberspace.de/en/about/privacy/</a>
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">4.8 Weather Data Providers</h3>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li><strong>Apple WeatherKit</strong>: Primary weather data provider (no personal data shared)</li>
          <li><strong>Brightsky / DWD (Deutscher Wetterdienst)</strong>: Provides weather data for routes in Germany (no personal data shared)</li>
          <li><strong>Open-Meteo</strong>: Fallback weather data provider, also used to fetch the short forecast included in reminder emails (no personal data shared)</li>
        </ul>

        <h3 className="text-xl font-medium mb-2 mt-4">4.9 OpenStreetMap / Overpass</h3>
        <p className="text-fg-2 leading-relaxed">
          We query OpenStreetMap data via the Overpass API to estimate road surface roughness along your route. Only anonymous bounding-box coordinates are sent — no account or personal data.<br />
          Privacy Policy: <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" className="link underline">https://wiki.osmfoundation.org/wiki/Privacy_Policy</a>
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">4.10 Sunrise-Sunset.org</h3>
        <p className="text-fg-2 leading-relaxed">
          Provides sunrise/sunset times based on coordinates (no personal data shared).
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">5. Data Storage and Security</h2>
        
        <h3 className="text-xl font-medium mb-2">5.1 Data Location</h3>
        <p className="text-fg-2 leading-relaxed">
          Your data is stored on servers provided by Supabase, located in the European Union.
        </p>

        <h3 className="text-xl font-medium mb-2 mt-4">5.2 Security Measures</h3>
        <p className="text-fg-2 leading-relaxed">We implement appropriate security measures including:</p>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li>Encrypted data transmission (HTTPS/TLS)</li>
          <li>Secure password hashing</li>
          <li>Row-level security in our database</li>
          <li>Regular security updates</li>
        </ul>

        <h3 className="text-xl font-medium mb-2 mt-4">5.3 Data Retention</h3>
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li><strong>Account data</strong>: Retained until you delete your account</li>
          <li><strong>Route data</strong>: Retained until you delete the route or your account</li>
          <li><strong>Tour plans</strong>: Retained until you delete the tour or your account</li>
          <li><strong>Reminder consent timestamp</strong>: Retained as long as your reminder opt-in is active, plus a limited period after withdrawal as proof of valid consent</li>
          <li><strong>Weather cache</strong>: Automatically expires after 1 hour</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">6. Your Rights</h2>
        <p className="text-fg-2 leading-relaxed">You have the right to:</p>

        <h3 className="text-xl font-medium mb-2 mt-4">6.1 Access Your Data</h3>
        <p className="text-fg-2 leading-relaxed">View your profile and routes in the app.</p>

        <h3 className="text-xl font-medium mb-2 mt-4">6.2 Correct Your Data</h3>
        <p className="text-fg-2 leading-relaxed">Update your profile information in Settings.</p>

        <h3 className="text-xl font-medium mb-2 mt-4">6.3 Delete Your Data</h3>
        <p className="text-fg-2 leading-relaxed">Delete individual routes or your entire account in Settings. Account deletion permanently removes all your data.</p>

        <h3 className="text-xl font-medium mb-2 mt-4">6.4 Export Your Data</h3>
        <p className="text-fg-2 leading-relaxed">Contact us to request a copy of your data.</p>

        <h3 className="text-xl font-medium mb-2 mt-4">6.5 Disconnect Third-Party Services</h3>
        <p className="text-fg-2 leading-relaxed">Revoke Strava access at any time in Settings.</p>

        <h3 className="text-xl font-medium mb-2 mt-4">6.6 Withdraw Reminder Consent</h3>
        <p className="text-fg-2 leading-relaxed">
          You can disable tour reminder emails at any time via the master toggle in Settings, the per-tour checkbox when saving a tour, or the one-click unsubscribe link in any reminder email. Withdrawal takes effect immediately and does not affect the lawfulness of processing based on consent before its withdrawal.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">7. Children's Privacy</h2>
        <p className="text-fg-2 leading-relaxed">
          Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">8. International Data Transfers</h2>
        <p className="text-fg-2 leading-relaxed">
          If you access the Service from outside the European Union, your data may be transferred to and processed in the EU.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">9. Changes to This Policy</h2>
        <p className="text-fg-2 leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the "Last Updated" date.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">10. Contact Us</h2>
        <p className="text-fg-2 leading-relaxed">
          If you have questions about this Privacy Policy, please contact us at:<br /><br />
          <strong>Email:</strong> <a href="mailto:hello@myweathr.io" className="link underline">hello@myweathr.io</a><br />
          <strong>Website:</strong> <a href="https://myweathr.io" className="link underline">https://myweathr.io</a>
        </p>
      </section>

      <section className="border-t pt-8 mt-8">
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">Summary of Data Collection</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-fg-2">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-2 pr-4 font-semibold">Data Type</th>
                <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                <th className="text-left py-2 font-semibold">Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line"><td className="py-2 pr-4">Email</td><td className="py-2 pr-4">Authentication</td><td className="py-2">Until account deletion</td></tr>
              <tr className="border-b border-line"><td className="py-2 pr-4">Routes (GPX)</td><td className="py-2 pr-4">Core functionality</td><td className="py-2">Until deletion</td></tr>
              <tr className="border-b border-line"><td className="py-2 pr-4">Bike profiles</td><td className="py-2 pr-4">Speed calculation</td><td className="py-2">Until account deletion</td></tr>
              <tr className="border-b border-line"><td className="py-2 pr-4">Coffee stops</td><td className="py-2 pr-4">Route planning (Premium)</td><td className="py-2">Until deletion</td></tr>
              <tr className="border-b border-line"><td className="py-2 pr-4">Strava connection</td><td className="py-2 pr-4">Route import</td><td className="py-2">Until disconnection</td></tr>
              <tr className="border-b border-line"><td className="py-2 pr-4">Preferences</td><td className="py-2 pr-4">Personalization</td><td className="py-2">Until account deletion</td></tr>
              <tr className="border-b border-line"><td className="py-2 pr-4">Subscription status</td><td className="py-2 pr-4">Premium features</td><td className="py-2">Until account deletion</td></tr>
              <tr className="border-b border-line"><td className="py-2 pr-4">Tour plans &amp; reminder consent</td><td className="py-2 pr-4">Email reminders the evening before a ride</td><td className="py-2">Until deletion / opt-out</td></tr>
              <tr><td className="py-2 pr-4">Weather requests</td><td className="py-2 pr-4">Rate limiting</td><td className="py-2">1 week</td></tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
    </>
  )
}
