import Head from "next/head";
import Link from "next/link";

export default function Imprint() {
  return (
    <>
      <Head>
        <title>Imprint - myweathr.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo-app.png" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/" className="text-sky-600 hover:text-sky-700 mb-8 inline-block font-medium">
            ← Back to home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Imprint / Legal Notice</h1>
          
          <div className="prose prose-slate max-w-none space-y-8">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Information pursuant to Section 5 of the German Digital Services Act (DDG)</h2>
              <p className="text-slate-700 leading-relaxed">
                <strong>Responsible for content and Service Provider:</strong><br />
                Stephan Lindauer<br />
                Kremenholler Str. 91a<br />
                42857 Remscheid, Germany
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <p className="text-slate-700 leading-relaxed">
                <strong>Fast electronic and direct communication:</strong><br />
                Phone: <a href="tel:+4915232068012" className="text-sky-600 hover:text-sky-700 underline">+49 15232068012</a><br />
                Email: <a href="mailto:hello@myweathr.io" className="text-sky-600 hover:text-sky-700 underline">hello@myweathr.io</a>
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
