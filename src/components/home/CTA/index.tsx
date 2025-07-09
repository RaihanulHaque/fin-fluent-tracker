import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Smartphone, ArrowRight } from "lucide-react";

const LandingCTA: React.FC = () => {
  const { t } = useTranslation();

  // Get features from translation
  const features = t("cta.features", { returnObjects: true }) as string[];
  const featureIcons = ["✨", "🔒", "🚀"];

  return (
    <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative">
        <div className="mb-8">
          <img
            src="/lovable-uploads/7646c7b0-a017-4c5a-b29a-40cab7e09e7b.png"
            alt="Hishab Logo"
            className="w-16 h-16 mx-auto mb-6"
          />
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          {t("cta.title")}
          <br />
          <span className="text-emerald-100">{t("cta.titleHighlight")}</span>
        </h2>

        <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t("cta.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            {t("cta.androidDownload")}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            {t("cta.iosDownload")}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-emerald-100 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl mb-2">{featureIcons[index]}</div>
              <span className="font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingCTA;
