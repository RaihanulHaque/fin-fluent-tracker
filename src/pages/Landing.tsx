import React from "react";
import Header from "@/components/Shared/Header";
import LandingFeatures from "@/components/home/Features";
import LandingStats from "@/components/home/Stats";
import LandingTestimonials from "@/components/home/Testimonial";
import LandingPricing from "@/components/home/pricing";
import LandingFAQ from "@/components/home/Faq";
import LandingCTA from "@/components/home/CTA";
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

      <Footer />
    </div>
  );
};

export default Landing;
