import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - myweathr.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo-app.png" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/" className="text-sky-600 hover:text-sky-700 mb-8 inline-block font-medium">
            ← Back to home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms of Service – myweathr.io Waitlist</h1>
          <p className="text-slate-600 mb-8">Last updated: 9.11.2025</p>
          
          <div className="prose prose-slate max-w-none space-y-8">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                By signing up for the waitlist for <strong>myweathr.io</strong>, you agree to these Terms of Service (ToS) regarding your participation in the waitlist.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Waitlist Service Description</h2>
              <p className="text-slate-700 leading-relaxed">
                <strong>myweathr.io</strong> is a weather application currently under development. The waitlist serves the exclusive purpose of gauging market interest and allowing us to send you a single, non-commercial email notification once the product officially launches (the "Go-Live Notification"). Participation in the waitlist does not constitute a contract for the final service.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Eligibility and User Obligations</h2>
              <p className="text-slate-700 leading-relaxed">
                You agree to provide accurate and current information, specifically a valid email address, for the purpose of receiving the Go-Live Notification. You confirm that you are not misusing the signup process.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Disclaimer and Limitation of Liability</h2>
              <p className="text-slate-700 leading-relaxed">
                We make no guarantee regarding the eventual launch date, availability, or features of the <strong>myweathr.io</strong> application. We reserve the right to discontinue the waitlist service at any time without prior notice. Any liability for damages resulting from your participation in the waitlist is excluded.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Protection</h2>
              <p className="text-slate-700 leading-relaxed">
                The collection and processing of your personal data (including your email address and IP addresses) is exclusively governed by our{" "}
                <Link href="/privacy-waitlist" className="text-sky-600 hover:text-sky-700 underline">
                  Privacy Policy (Waitlist)
                </Link>.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Changes to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Any changes will be published on this page. Your continued presence on the waitlist constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Contact Information</h2>
              <p className="text-slate-700 leading-relaxed">
                For any questions regarding these Terms of Service, please contact us at{" "}
                <a href="mailto:hello@myweathr.io" className="text-sky-600 hover:text-sky-700 underline">
                  hello@myweathr.io
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
