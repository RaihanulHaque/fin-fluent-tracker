
import React from 'react';
import Header from '@/components/Header';
import LandingHeroEng from '@/components/LandingHeroEng';
import LandingFeaturesEng from '@/components/LandingFeaturesEng';
import LandingStatsEng from '@/components/LandingStatsEng';
import LandingTestimonialsEng from '@/components/LandingTestimonialsEng';
import LandingPricingEng from '@/components/LandingPricingEng';
import LandingFAQEng from '@/components/LandingFAQEng';
import LandingCTAEng from '@/components/LandingCTAEng';
import LandingFooterEng from '@/components/LandingFooterEng';
import AccountDeletionEng from '@/components/AccountDeletionEng';

const LandingEng: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LandingHeroEng />
      <LandingFeaturesEng />
      <LandingStatsEng />
      <LandingTestimonialsEng />
      <LandingPricingEng />
      <LandingFAQEng />
      <LandingCTAEng />
      
      {/* Account Deletion Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-4">
          <AccountDeletionEng />
        </div>
      </section>
      
      <LandingFooterEng />
    </div>
  );
};

export default LandingEng;
