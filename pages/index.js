import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VersionHistorySection from '../components/VersionHistorySection';
import RoadmapSection from '../components/RoadmapSection';
import Footer from '../components/Footer';

export default function LandingPage() {
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
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <VersionHistorySection />
        <RoadmapSection />
        <Footer />
      </main>
    </>
  );
}
