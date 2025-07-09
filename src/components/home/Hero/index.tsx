import React from "react";
import LeftContent from "./components/LeftContent";
import PhoneMockup from "./components/PhoneMockup";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <LeftContent />
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default Hero;
