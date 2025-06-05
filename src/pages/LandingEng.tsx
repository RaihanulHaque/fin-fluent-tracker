
import React from 'react';
import Header from '@/components/Header';
import LandingHeroEng from '@/components/LandingHeroEng';
import LandingFeaturesEng from '@/components/LandingFeaturesEng';
import LandingTestimonialsEng from '@/components/LandingTestimonialsEng';
import LandingPricingEng from '@/components/LandingPricingEng';
import LandingFAQEng from '@/components/LandingFAQEng';
import LandingCTAEng from '@/components/LandingCTAEng';
import LandingFooterEng from '@/components/LandingFooterEng';

const LandingEng: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LandingHeroEng />
      <LandingFeaturesEng />
      <LandingTestimonialsEng />
      <LandingPricingEng />
      <LandingFAQEng />
      <LandingCTAEng />
      <LandingFooterEng />
    </div>
  );
};

export default LandingEng;
