import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - myweathr.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/" className="text-sky-600 hover:text-sky-700 mb-8 inline-block">
            ← Back to home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-700 mb-4">
                By signing up for early access to myweathr.io, you agree to these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-slate-700 mb-4">
                myweathr.io is a weather application designed for cyclists and outdoor athletes. The service is currently in development and early access is subject to availability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
              <p className="text-slate-700 mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-slate-700 mb-4">
                <li>Provide accurate information when signing up</li>
                <li>Use the service in accordance with applicable laws</li>
                <li>Not misuse or attempt to disrupt the service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
              <p className="text-slate-700 mb-4">
                Weather information is provided for informational purposes only. Always use your own judgment when planning outdoor activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
              <p className="text-slate-700 mb-4">
                We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
              <p className="text-slate-700">
                For questions about these Terms, contact us at support@myweathr.io
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
