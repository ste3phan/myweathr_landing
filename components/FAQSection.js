import React, { useState } from 'react';
import Head from 'next/head';

export const faqItems = [
  {
    q: "What makes myweathr.io different from Windy or AccuWeather?",
    a: "myweathr.io is built for cyclists and outdoor athletes, not for general weather lookups. Instead of a single point forecast, you get a route-specific forecast along every kilometer of your ride, with wind broken down into tailwind, headwind, and crosswind sections. The Echelon Analysis even shows where the peloton would split — something no generic weather app does."
  },
  {
    q: "What is Echelon Analysis?",
    a: "Echelon Analysis is a Premium feature that applies pro-cycling tactics to your own routes. It evaluates each route sector for crosswind risk using surface-aware physics and land use data (CORINE/OSM), so you can see where the wind would force a peloton into echelons. Useful for race prep, training plans, and group rides."
  },
  {
    q: "Do I need an iPhone, or can I use myweathr.io in a browser?",
    a: "Both work. There is an iOS app on the App Store and a full Web App at app.myweathr.io. You can sign in with Google or Apple on any platform, and Premium works on both iOS (via in-app purchase) and Web (via Stripe). Android is on the roadmap."
  },
  {
    q: "Is there a free version?",
    a: "Yes. The core route-specific weather forecast, wind analysis, and Strava/Komoot import are free. Premium unlocks Echelon Analysis, the Tailwind Score, coffee stop planning, dynamic weather points along the route, and unlimited weather updates."
  },
  {
    q: "Which weather sources does myweathr.io use?",
    a: "We combine Apple WeatherKit, the German Weather Service (DWD), and Open-Meteo, and pick the most reliable source per region. Wind is corrected from the standard 10 m measurement height down to cyclist level (1.5 m), and gust values come directly from the providers — no synthetic estimates."
  },
  {
    q: "Can I import my routes from Strava or Komoot?",
    a: "Yes. Connect your Strava account to import existing routes and activities; Komoot routes are supported via GPX. Imported routes get the full weather analysis, Wind Flow Map, and (for Premium) Echelon Analysis."
  },
  {
    q: "Is myweathr.io only for road cycling?",
    a: "No. While road cyclists get the most out of features like Echelon Analysis, the route-specific weather and wind forecasts are equally useful for gravel, MTB, triathlon, trail running, and any outdoor sport where wind and rain along a route matter."
  },
  {
    q: "How accurate are the forecasts?",
    a: "Accuracy depends on the underlying providers, but myweathr.io adds a few important corrections: terrain-aware wind, 10 m → 1.5 m height correction, multi-source fallback per region, and precipitation integrated over time rather than summed as rates. The goal is a forecast that reflects what you actually feel on the bike."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a
      }
    }))
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you wanted to know about myweathr.io.</p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">{item.q}</h3>
                    <svg
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="px-6 pb-5 text-slate-600 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
