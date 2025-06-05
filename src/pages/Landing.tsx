
import React from 'react';
import Header from '@/components/Header';
import LandingHero from '@/components/LandingHero';
import LandingFeatures from '@/components/LandingFeatures';
import LandingTestimonials from '@/components/LandingTestimonials';
import LandingPricing from '@/components/LandingPricing';
import LandingFAQ from '@/components/LandingFAQ';
import LandingCTA from '@/components/LandingCTA';
import LandingFooter from '@/components/LandingFooter';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LandingHero />
      <LandingFeatures />
      <LandingTestimonials />
      <LandingPricing />
      <LandingFAQ />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
};

export default Landing;
