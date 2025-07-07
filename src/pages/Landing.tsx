
import React from 'react';
import Header from '@/components/Header';
import LandingHero from '@/components/LandingHero';
import LandingFeatures from '@/components/LandingFeatures';
import LandingStats from '@/components/LandingStats';
import LandingTestimonials from '@/components/LandingTestimonials';
import LandingPricing from '@/components/LandingPricing';
import LandingFAQ from '@/components/LandingFAQ';
import LandingCTA from '@/components/LandingCTA';
import LandingFooter from '@/components/LandingFooter';
import AccountDeletion from '@/components/AccountDeletion';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LandingHero />
      <LandingFeatures />
      <LandingStats />
      <LandingTestimonials />
      <LandingPricing />
      <LandingFAQ />
      <LandingCTA />
      
      {/* Account Deletion Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-4">
          <AccountDeletion />
        </div>
      </section>
      
      <LandingFooter />
    </div>
  );
};

export default Landing;
