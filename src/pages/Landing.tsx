
import React from 'react';
import Header from '@/components/Header';
import LandingHero from '@/components/LandingHero';
import LandingFeatures from '@/components/LandingFeatures';
import LandingCTA from '@/components/LandingCTA';
import LandingFooter from '@/components/LandingFooter';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LandingHero />
      <LandingFeatures />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
};

export default Landing;
