import React from "react";
import Header from "@/components/discarded/components/Header";
import LandingHeroEng from "@/components/discarded/components/LandingHeroEng";
import LandingFeaturesEng from "@/components/discarded/components/LandingFeaturesEng";
import LandingStatsEng from "@/components/discarded/components/LandingStatsEng";
import LandingTestimonialsEng from "@/components/discarded/components/LandingTestimonialsEng";
import LandingPricingEng from "@/components/discarded/components/LandingPricingEng";
import LandingFAQEng from "@/components/discarded/components/LandingFAQEng";
import LandingCTAEng from "@/components/discarded/components/LandingCTAEng";
import LandingFooterEng from "@/components/discarded/components/LandingFooterEng";
import AccountDeletionEng from "@/components/discarded/components/AccountDeletionEng";

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
