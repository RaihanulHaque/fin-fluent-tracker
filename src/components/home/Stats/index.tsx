import React from "react";
import { useTranslation } from "react-i18next";
import { TrendingUp, Users, DollarSign, Star } from "lucide-react";

const LandingStatsEng: React.FC = () => {
  const { t } = useTranslation();

  // Get stats from translation with icons and colors
  const statsData = t("stats.items", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  const icons = [Users, DollarSign, TrendingUp, Star];
  const colors = [
    "text-emerald-600",
    "text-blue-600",
    "text-purple-600",
    "text-orange-600",
  ];

  const stats = statsData.map((stat, index) => ({
    ...stat,
    icon: icons[index],
    color: colors[index],
  }));

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("stats.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("stats.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingStatsEng;
