import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VersionHistorySection from '../components/VersionHistorySection';
import RoadmapSection from '../components/RoadmapSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function LandingPage() {
  const siteUrl = 'https://myweathr.io';
  const title = 'myweathr.io — Smart Weather & Echelon Analysis for Cyclists';
  const description = 'The intelligent weather app for cyclists and outdoor athletes. Route-specific forecasts, Echelon Analysis for pro-style wind tactics, Tailwind Score, Strava & Komoot integration. iOS and Web.';
  const ogImage = `${siteUrl}/frame1.png`;

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'myweathr.io',
    operatingSystem: 'iOS, Web',
    applicationCategory: 'HealthApplication',
    description,
    url: siteUrl,
    downloadUrl: 'https://apps.apple.com/app/myweathr-io/id6755927323',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR'
    },
    aggregateRating: undefined
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="cycling weather, route weather, wind forecast cycling, echelon analysis, tailwind score, Strava weather, Komoot weather, pro cycling tactics, crosswind, bike weather app" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" type="image/png" href="/logo-app.png" />
        <link rel="apple-touch-icon" href="/logo-app.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="myweathr.io" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="myweathr.io app screenshot — route-specific weather and wind analysis for cyclists" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured data: SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </Head>

      <main className="min-h-[100dvh] bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <VersionHistorySection />
        <RoadmapSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
