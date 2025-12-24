import React from 'react';

export default function VersionHistorySection() {
  const versions = [
    {
      version: "1.1.0",
      date: "December 2025",
      features: [
        "Initial App Store release",
        "Route-specific weather forecasts",
        "Wind analysis for your direction",
        "Strava and Komoot integration",
        "Coffee stop planning with weather impact analysis",
        "Premium subscription with advanced features",
        "Multi-Source Forecasting technology"
      ]
    }
  ];

  return (
    <section id="version-history" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Version History</h2>
          <p className="text-lg text-slate-600">Our journey to create the best weather app for cyclists</p>
        </div>

        <div className="space-y-12">
          {versions.map((version, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12">
              <div className="absolute left-0 top-1 sm:top-2 h-full w-0.5 bg-sky-200"></div>
              <div className="absolute left-0 top-1 sm:top-2 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-sky-600 flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-semibold">{version.version.split('.').slice(0, 2).join('.')}</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Version {version.version}</h3>
                <p className="text-slate-500 text-sm">{version.date}</p>
                <div className="space-y-2">
                  {version.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
