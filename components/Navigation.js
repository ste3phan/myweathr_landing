import React from 'react';

export default function Navigation() {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo-app.png"
            alt="MyWeathr Logo"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <span className="text-xl sm:text-2xl font-bold text-slate-900">myweathr.io</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="#features" 
            className="hidden sm:block text-slate-600 hover:text-sky-600 transition-colors"
          >
            Features
          </a>
          <a 
            href="#version-history" 
            className="hidden sm:block text-slate-600 hover:text-sky-600 transition-colors"
          >
            Version History
          </a>
          <a 
            href="#roadmap" 
            className="hidden sm:block text-slate-600 hover:text-sky-600 transition-colors"
          >
            Roadmap
          </a>
          <a
            href="https://apps.apple.com/app/myweathr-io/id6755927323"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.0441 12.7984C17.0195 9.71693 19.5441 8.30459 19.6511 8.24561C18.2195 6.16134 16.0045 5.90053 15.2045 5.88336C13.3895 5.66336 11.6345 6.91296 10.7095 6.91296C9.76454 6.91296 8.35954 5.90053 6.82954 5.93487C4.86954 5.96921 3.04454 7.09619 2.04454 8.83487C-0.0554585 12.3641 1.54454 17.5812 3.55954 20.6283C4.55954 22.1235 5.72954 23.8106 7.27454 23.7419C8.77454 23.6731 9.36954 22.7984 11.1895 22.7984C12.9895 22.7984 13.5445 23.7419 15.1195 23.7075C16.7445 23.6731 17.7445 22.1922 18.7095 20.6798C19.8795 18.9755 20.3445 17.3147 20.3695 17.2288C20.3195 17.2116 17.0745 15.9106 17.0441 12.7984Z" />
              <path d="M13.8645 3.85067C14.6645 2.86391 15.1895 1.53067 15.0395 0.180664C13.8895 0.230664 12.4645 0.973781 11.6145 1.93067C10.8645 2.78635 10.2145 4.16391 10.3895 5.46391C11.6895 5.56391 13.0395 4.82067 13.8645 3.85067Z" />
            </svg>
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
