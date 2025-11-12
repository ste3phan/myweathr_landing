// Confirmation Success Page
import Head from "next/head";
import Link from "next/link";

export default function ConfirmedPage() {
  return (
    <>
      <Head>
        <title>Email Confirmed - myweathr.io</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            You're on the list! 🎉
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Thanks for confirming your email. We'll notify you as soon as myweathr launches.
          </p>

          {/* CTA */}
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg transition-colors"
          >
            Back to Home
          </Link>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <h2 className="font-semibold text-slate-900 mb-2">What's next?</h2>
            <ul className="text-sm text-slate-600 space-y-2 text-left">
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-0.5">→</span>
                <span>We're working hard to build the best weather app for cyclists</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-0.5">→</span>
                <span>You'll be among the first to get early access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-0.5">→</span>
                <span>No spam, just the single launch notification</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
