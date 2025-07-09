import React from "react";
import { useTranslation } from "react-i18next";
import {
  MessageSquare,
  Globe,
  Zap,
  Users,
  TrendingUp,
  Bell,
} from "lucide-react";

const LandingFeatures: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: MessageSquare,
      title: t("features.items.promptTracking.title"),
      description: t("features.items.promptTracking.description"),
    },
    {
      icon: Zap,
      title: t("features.items.instantInsights.title"),
      description: t("features.items.instantInsights.description"),
    },
    {
      icon: Globe,
      title: t("features.items.bengaliLanguage.title"),
      description: t("features.items.bengaliLanguage.description"),
    },
    {
      icon: TrendingUp,
      title: t("features.items.smartAnalytics.title"),
      description: t("features.items.smartAnalytics.description"),
    },
    {
      icon: Users,
      title: t("features.items.familySharing.title"),
      description: t("features.items.familySharing.description"),
    },
    {
      icon: Bell,
      title: t("features.items.intelligentAlerts.title"),
      description: t("features.items.intelligentAlerts.description"),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("features.title")}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              {t("features.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900 dark:hover:to-teal-900 transition-all duration-500 hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
