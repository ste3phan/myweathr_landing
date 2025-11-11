// pages/index.js
import { useState } from "react";
import Head from "next/head";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const json = await res.json();
    setLoading(false);

    if (res.ok) {
      setStatus({ type: "success", message: json.message });
      setEmail("");
    } else {
      setStatus({ type: "error", message: json.message || "Something went wrong" });
    }
  }

  return (
    <>
      <Head>
        <title>myweathr.io - Smart Weather for Cyclists</title>
        <meta name="description" content="The smart weather companion for cyclists and outdoor athletes. Precise wind insights, ride forecasts, and intelligent planning." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo-app.png" />
        <link rel="apple-touch-icon" href="/logo-app.png" />
      </Head>

      <main className="min-h-[100dvh] bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[100dvh] py-12">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Logo & Brand */}
              <div className="flex items-center gap-4">
                <img
                  src="/logo-app.png"
                  alt="MyWeathr Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
                <span className="text-2xl sm:text-3xl font-bold text-slate-900">myweathr.io</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Smart weather.
                  <br />
                  <span className="text-sky-600">Better timing.</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                  The weather app for cyclists and outdoor athletes.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {[
                  'Route-specific weather forecasts',
                  'Wind analysis for your direction',
                  'Connect Strava',
                  'Plan your perfect ride'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Email Signup */}
              <div className="space-y-4">
                {status?.type === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-green-800">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="font-medium">{status.message}</p>
                    </div>
                    <p className="text-sm text-green-700 pl-7">
                      Please check your inbox (and spam folder) to confirm your signup.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        required
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-base"
                      />
                      <button
                        type="submit"
                        disabled={loading || !consentChecked}
                        className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center gap-2 justify-center"
                      >
                        {loading ? "Joining..." : "Join Waitlist"}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* DSGVO Consent Checkbox */}
                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                        className="mt-1 w-4 h-4 text-sky-600 border-slate-300 rounded focus:ring-sky-500 focus:ring-2 cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                        I have read the{" "}
                        <a 
                          href="/privacy" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:text-sky-700 underline"
                        >
                          Privacy Policy
                        </a>
                        {" "}and agree to be notified once by email as soon as <strong>myweathr.io</strong> goes live. Consent can be withdrawn at any time.
                      </label>
                    </div>

                    {status?.type === "error" && (
                      <p className="text-red-600 text-sm">{status.message}</p>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* Right Column - iPhone Mockup */}
            <div className="relative lg:flex hidden items-center justify-center">
              <div className="relative">
                {/* Glow effect behind iPhone */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-400/20 blur-3xl rounded-full scale-110" />
                
                {/* iPhone - Much larger now */}
                <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="/iphone-mockup.png"
                    alt="MyWeathr App"
                    className="w-full max-w-lg mx-auto"
                    style={{
                      filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.3))'
                    }}
                  />
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute top-20 -right-12 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
              <div className="absolute bottom-20 -left-12 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 sm:mt-20 py-8 sm:py-10 text-center text-xs sm:text-sm text-slate-500 px-4">
          © {new Date().getFullYear()} myweathr.io · built by{" "}
          <a href="https://stephan-lindauer.de" className="hover:text-sky-600 transition-colors">
            Stephan Lindauer
          </a>{" "}
          ·{" "}
          <a href="/imprint" className="underline hover:text-sky-600">
            Imprint
          </a>{" "}
          ·{" "}
          <a href="/terms" className="underline hover:text-sky-600">
            Terms
          </a>{" "}
          ·{" "}
          <a href="/privacy" className="underline hover:text-sky-600">
            Privacy
          </a>
        </footer>
      </main>
    </>
  );
}
