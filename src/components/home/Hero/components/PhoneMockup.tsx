import React from "react";
import { useTranslation } from "react-i18next";

const PhoneMockup = () => {
  const { t } = useTranslation();

  return (
    <div className="relative lg:h-[600px] flex items-center justify-center">
      <div className="relative">
        {/* Modern Phone Mockup */}
        <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <img
                  src="/lovable-uploads/7646c7b0-a017-4c5a-b29a-40cab7e09e7b.png"
                  alt="Hishab Logo"
                  className="w-6 h-6"
                />
                <div className="text-white text-sm font-medium">
                  {t("hero.app.appName")}
                </div>
              </div>
            </div>

            {/* App Content Preview - Cleaner Design */}
            <div className="pt-16 px-6 space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                <div className="text-emerald-700 text-sm font-medium mb-2">
                  {t("hero.app.monthlyBalance")}
                </div>
                <div className="text-3xl font-bold text-emerald-900 mb-1">
                  $3,247
                </div>
                <div className="text-emerald-600 text-sm">
                  {t("hero.app.balanceChange")}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-gray-700 text-sm font-medium mb-3">
                  {t("hero.app.recentTransactions")}
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-100 to-red-200 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-xs">🛒</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-900">
                        {t("hero.app.transactions.grocery")}
                      </div>
                      <div className="text-xs text-gray-500">
                        {t("hero.app.transactions.timeAgo.hoursAgo")}
                      </div>
                    </div>
                  </div>
                  <div className="text-red-600 font-semibold">-$67</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs">💰</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-gray-900">
                        {t("hero.app.transactions.salary")}
                      </div>
                      <div className="text-xs text-gray-500">
                        {t("hero.app.transactions.timeAgo.yesterday")}
                      </div>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold">+$2,500</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements - Cleaner */}
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
          <span className="text-white font-bold text-xl">AI</span>
        </div>

        <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl">
          <span className="text-white font-bold text-lg">📊</span>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
