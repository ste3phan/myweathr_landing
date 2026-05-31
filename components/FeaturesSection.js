import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Echelon Analysis (Pro)',
      description: 'Pro-style wind tactics: sector-by-sector crosswind risk along your route, surface-aware physics, and a clear picture of where the peloton would split.',
      badge: 'Pro',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8L11 17l-4-4-6 6" />
      )
    },
    {
      title: 'Apparent Wind & Tailwind Score',
      description: 'See the wind you actually feel on the bike — terrain-aware Scheinwind correction plus a single 0–100 Tailwind Score that summarizes your route at a glance.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      )
    },
    {
      title: 'Route-Specific Weather',
      description: 'Precise forecasts along your entire route, not just at your starting point — with a clickable Wind Flow Map for tailwind, headwind, and crosswind sections.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      )
    },
    {
      title: 'Multi-Source Forecasting',
      description: 'Combines Apple WeatherKit, DWD, and Open-Meteo for accurate predictions — with realistic peak gusts and terrain-aware precipitation probability.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      )
    },
    {
      title: 'Strava & Komoot',
      description: 'Import your routes from Strava and Komoot, plan coffee stops, and find the optimal time window for your ride.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      )
    },
    {
      title: 'Available Everywhere',
      description: 'Use myweathr.io on iOS or right in your browser at app.myweathr.io. Sign in with Google or Apple, dark mode included, Android coming soon.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
      )
    },
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">myweathr.io combines precise weather data with intelligent route analysis to give you the perfect cycling experience.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-slate-100 relative">
            {feature.badge && (
              <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                {feature.badge}
              </span>
            )}
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {feature.icon}
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
            <p className="text-slate-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
