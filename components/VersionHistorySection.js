import React, { useState } from 'react';

export default function VersionHistorySection() {
  // State to track which versions are expanded
  const [expandedVersions, setExpandedVersions] = useState({ '1.1.1': true });

  const versions = [
    {
      version: "1.1.1",
      date: "January 2026",
      features: [
        "Password Reset Feature: Implemented a secure password reset flow with deep link handling, allowing users to easily reset their password directly within the app",
        "Coffee Stop Input Improvements: Enhanced the coffee stop duration input field to provide a better user experience when adding or editing stops",
        "Weather Forecast Clarity: Improved weather information display with clear icons and precise rain forecasts in the optimal time window feature",
        "Mobile Zoom Fix: Resolved an issue where the view remained zoomed in after editing a coffee stop on mobile devices",
        "UI Refinements: Various small improvements to enhance the overall user experience",
        "Strava Route Sync: Improved synchronization order of Strava routes after connecting with the Strava app"
      ]
    },
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

  // Toggle expanded state for a version
  const toggleVersion = (version) => {
    setExpandedVersions(prev => ({
      ...prev,
      [version]: !prev[version]
    }));
  };

  return (
    <section id="version-history" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Version History</h2>
          <p className="text-lg text-slate-600">Our journey to create the best weather app for cyclists</p>
        </div>

        <div className="space-y-8">
          {versions.map((version, idx) => {
            const isExpanded = !!expandedVersions[version.version];
            
            return (
              <div key={idx} className="relative pl-10 sm:pl-14">
                {/* Timeline line */}
                <div className="absolute left-0 top-1 sm:top-2 h-full w-0.5 bg-sky-200"></div>
                
                {/* Version marker - now rectangular */}
                <div className="absolute left-0 top-1 sm:top-2 transform -translate-x-1/2 flex">
                  <div className="w-auto h-6 sm:h-8 px-2 rounded-md bg-sky-600 flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-semibold">{version.version}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {/* Version header - clickable to expand/collapse */}
                  <div 
                    className="flex items-center cursor-pointer group" 
                    onClick={() => toggleVersion(version.version)}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-700">Version {version.version}</h3>
                    <button className="ml-2 text-slate-400 group-hover:text-sky-600">
                      <svg 
                        className={`w-5 h-5 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-slate-500 text-sm">{version.date}</p>
                  
                  {/* Collapsible features list */}
                  <div className={`space-y-2 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {version.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-slate-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Show a "Show more/less" text when collapsed/expanded */}
                  <div 
                    className={`text-sky-600 hover:text-sky-700 text-sm font-medium cursor-pointer ${isExpanded ? 'mt-2' : ''}`}
                    onClick={() => toggleVersion(version.version)}
                  >
                    {isExpanded ? 'Show less' : `Show ${version.features.length} changes`}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
