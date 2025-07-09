import React from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Download,
  Smartphone,
  Shield,
  TrendingUp,
  Star,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const LeftContent = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {t("hero.rating")}
          </span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          {t("hero.title")}
          <br />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            {t("hero.titleHighlight")}
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {t("hero.subtitle")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <Download className="w-5 h-5 mr-2" />
          {t("hero.startTracking")}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900 px-8 py-6 text-lg font-semibold rounded-xl"
        >
          <Smartphone className="w-5 h-5 mr-2" />
          {t("hero.liveDemo")}
        </Button>
      </div>

      <div className="flex items-center space-x-8 pt-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            500K+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t("hero.stats.activeUsers")}
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            4.9★
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t("hero.stats.userRating")}
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            AI
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t("hero.stats.aiPowered")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
