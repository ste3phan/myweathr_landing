import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - myweathr.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/" className="text-sky-600 hover:text-sky-700 mb-8 inline-block">
            ← Back to home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-slate-700 mb-4">
                When you sign up for early access, we collect your email address to send you updates about myweathr.io.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-700 mb-4">
                We use your email address solely to:
              </p>
              <ul className="list-disc pl-6 text-slate-700 mb-4">
                <li>Send you updates about the app launch</li>
                <li>Provide early access to the app when available</li>
                <li>Communicate important information about the service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
              <p className="text-slate-700 mb-4">
                We take appropriate security measures to protect your personal information. Your email is stored securely and will never be sold or shared with third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
              <p className="text-slate-700 mb-4">
                You can unsubscribe from our mailing list at any time by clicking the unsubscribe link in any email we send you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
              <p className="text-slate-700">
                If you have any questions about this Privacy Policy, please contact us at privacy@myweathr.io
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
