import React from 'react';

export default function RoadmapSection() {
  const upcomingFeatures = [
    {
      title: "Interactive Wind Analysis",
      description: "Click on wind categories (tailwind, headwind, crosswind) to visualize affected sections on a topographic map, showing exactly where wind impacts your ride.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5" />
      )
    },
    {
      title: "Time Impact Calculation",
      description: "Calculate time bonuses or penalties based on wind strength relative to elevation gain, helping you understand how conditions will affect your ride time.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    },
    {
      title: "Rider Profiles & Bike Types",
      description: "Choose your bike type and riding style to get even more accurate forecasts tailored to your specific equipment and preferences.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      )
    },
    {
      title: "Android App",
      description: "MyWeathr is coming to Android! Get all the same great features on your Android device soon.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      )
    }
  ];

  return (
    <section id="roadmap" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Coming Soon</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">We're constantly improving myweathr.io with new features and enhancements</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingFeatures.map((feature, index) => (
          <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-100">
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
