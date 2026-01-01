import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/frame1.png",
    "/frame2.png",
    "/frame3.png"
  ];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Smart weather.
              <br />
              <span className="text-sky-600">Better rides.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              The intelligent weather app for cyclists and outdoor athletes.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3">
            {[
              'Route-specific weather forecasts',
              'Wind analysis for your direction',
              'Intelligent Multi-Source Forecasting',
              'Connect Strava & Plan your perfect ride'
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

          {/* App Store Button */}
          <div>
            <a
              href="https://apps.apple.com/app/myweathr-io/id6755927323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-7 h-7 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.0441 12.7984C17.0195 9.71693 19.5441 8.30459 19.6511 8.24561C18.2195 6.16134 16.0045 5.90053 15.2045 5.88336C13.3895 5.66336 11.6345 6.91296 10.7095 6.91296C9.76454 6.91296 8.35954 5.90053 6.82954 5.93487C4.86954 5.96921 3.04454 7.09619 2.04454 8.83487C-0.0554585 12.3641 1.54454 17.5812 3.55954 20.6283C4.55954 22.1235 5.72954 23.8106 7.27454 23.7419C8.77454 23.6731 9.36954 22.7984 11.1895 22.7984C12.9895 22.7984 13.5445 23.7419 15.1195 23.7075C16.7445 23.6731 17.7445 22.1922 18.7095 20.6798C19.8795 18.9755 20.3445 17.3147 20.3695 17.2288C20.3195 17.2116 17.0745 15.9106 17.0441 12.7984Z" />
                <path d="M13.8645 3.85067C14.6645 2.86391 15.1895 1.53067 15.0395 0.180664C13.8895 0.230664 12.4645 0.973781 11.6145 1.93067C10.8645 2.78635 10.2145 4.16391 10.3895 5.46391C11.6895 5.56391 13.0395 4.82067 13.8645 3.85067Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold -mt-1">App Store</div>
              </div>
            </a>
          </div>

          <p className="text-sm text-slate-500">
            Version 1.1.1 now available for iOS
          </p>
        </div>

        {/* Right Column - iPhone Mockup with Screenshots */}
        <div className="relative lg:flex hidden items-center justify-center">
          <div className="relative">
            {/* Glow effect behind iPhone */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-400/20 blur-3xl rounded-full scale-110" />
            
            {/* iPhone Slider */}
            <div className="relative z-10">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Images - Fixed to uniform height */}
                <div className="flex justify-center">
                  {images.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`MyWeathr App - Screen ${index + 1}`}
                      className={`w-auto h-[500px] max-w-full object-contain transition-opacity duration-700 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}
                      style={{
                        filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.3))'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Dot Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-sky-600 w-8' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`View screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute top-20 -right-12 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 -left-12 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
}
