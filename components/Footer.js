import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo-app.png" 
                alt="MyWeathr Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">myweathr.io</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              The intelligent weather app designed specifically for cyclists and outdoor athletes.
              Get precise route-specific forecasts and make better decisions.
            </p>
            <a
              href="https://apps.apple.com/app/myweathr-io/id6755927323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors"
            >
              Download on App Store
            </a>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#version-history" className="text-slate-400 hover:text-white transition-colors">
                  Version History
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-slate-400 hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal Links - IMPORTANT: These must be preserved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/imprint" className="text-slate-400 hover:text-white transition-colors">
                  Imprint
                </a>
              </li>
              <li>
                <a href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} myweathr.io · All rights reserved
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://stephan-lindauer.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 text-sm"
            >
              built by Stephan Lindauer
            </a>
            <a
              href="https://www.paypal.com/paypalme/StephanLindauerDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 text-sm flex items-center"
            >
              <span className="mr-1">☕</span> Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
