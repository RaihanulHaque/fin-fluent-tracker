import React from "react";
import Header from "@/components/Shared/Header";
import LandingFeatures from "@/components/home/Features";
import LandingStats from "@/components/home/Stats";
import LandingTestimonials from "@/components/home/Testimonial";
import LandingPricing from "@/components/home/pricing";
import LandingFAQ from "@/components/home/Faq";
import LandingCTA from "@/components/home/CTA";
import AccountDeletion from "@/components/Shared/AccountDeletion";
import Hero from "@/components/home/Hero";
import Footer from "@/components/Shared/Footer";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LandingFeatures />
      <LandingStats />
      <LandingTestimonials />
      <LandingPricing />
      <LandingFAQ />
      <LandingCTA />

      {/* Account Deletion Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-2xl mx-auto px-4">
          <AccountDeletion />
        </div>
      </section>

    <Footer/>
    </div>
  );
};

export default Landing;
