import React from 'react';

export default function RoadmapSection() {
  const upcomingFeatures = [
    {
      title: "Echelon Persistence",
      description: "Save and revisit Echelon analyses across sessions, compare scenarios for the same route, and share them with your team.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      )
    },
    {
      title: "Demo Route for First Run",
      description: "A built-in demo route so you can explore Echelon, Wind Flow Map, and Tailwind Score immediately — without importing anything first.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      )
    },
    {
      title: "Weather Reminders",
      description: "Optional push reminders the morning before a planned ride if conditions shift significantly — so you can adjust timing or route.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      )
    },
    {
      title: "Android App",
      description: "myweathr.io is coming to Android — all the same features on your Android device. Until then, the Web App works great on mobile too.",
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
