import React from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Shared/Header";
import { Shield, FileText, Scale, Building2 } from "lucide-react";
import Footer from "@/components/Shared/Footer";

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[100vh] bg-white dark:bg-gray-900">
      <Header />

      {/* Formal Header Section */}
      <section className="pt-24 pb-12 px-4 bg-slate-50 dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-slate-100 dark:bg-gray-700 rounded-lg">
              <Scale className="w-8 h-8 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
                {t("privacyPolicy.title")}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                {t("privacyPolicy.lastUpdated")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 shadow-sm">
          {/* Formal Introduction */}
          <div className="p-8 border-b border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-justify">
                {t("privacyPolicy.introduction")}
              </p>
              <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded">
                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                  <strong>Legal Agreement:</strong>{" "}
                  {t("privacyPolicy.agreementNote")}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Section 1: Information Collection */}
            <article className="mb-12 pb-8 border-b border-slate-200 dark:border-gray-700">
              <header className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                  {t("privacyPolicy.sections.whatWeCollect.title")}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("privacyPolicy.sections.whatWeCollect.description")}
                </p>
              </header>

              <div className="space-y-4 mb-6">
                <div className="border border-slate-200 dark:border-gray-600 rounded p-5">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">
                    {t(
                      "privacyPolicy.sections.whatWeCollect.items.accountInfo.title"
                    )}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t(
                      "privacyPolicy.sections.whatWeCollect.items.accountInfo.description"
                    )}
                  </p>
                </div>

                <div className="border border-slate-200 dark:border-gray-600 rounded p-5">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">
                    {t(
                      "privacyPolicy.sections.whatWeCollect.items.financialEntries.title"
                    )}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t(
                      "privacyPolicy.sections.whatWeCollect.items.financialEntries.description"
                    )}
                  </p>
                </div>

                <div className="border border-slate-200 dark:border-gray-600 rounded p-5">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">
                    {t(
                      "privacyPolicy.sections.whatWeCollect.items.appUsageData.title"
                    )}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t(
                      "privacyPolicy.sections.whatWeCollect.items.appUsageData.description"
                    )}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-500">
                <p className="text-emerald-800 dark:text-emerald-200 font-medium">
                  <strong>Important Notice:</strong>{" "}
                  {t("privacyPolicy.sections.whatWeCollect.note")}
                </p>
              </div>
            </article>

            {/* Section 2: Data Usage */}
            <article className="mb-12 pb-8 border-b border-slate-200 dark:border-gray-700">
              <header className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                  {t("privacyPolicy.sections.howWeUseData.title")}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("privacyPolicy.sections.howWeUseData.description")}
                </p>
              </header>

              <ol className="space-y-3 mb-6 list-decimal list-inside">
                {(
                  t("privacyPolicy.sections.howWeUseData.items", {
                    returnObjects: true,
                  }) as string[]
                ).map((item, index) => (
                  <li
                    key={index}
                    className="text-slate-600 dark:text-slate-300 leading-relaxed pl-2"
                  >
                    {item}
                  </li>
                ))}
              </ol>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  <strong>Data Protection Commitment:</strong>{" "}
                  {t("privacyPolicy.sections.howWeUseData.note")}
                </p>
              </div>
            </article>

            {/* Section 3: Security Measures */}
            <article className="mb-12 pb-8 border-b border-slate-200 dark:border-gray-700">
              <header className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                  {t("privacyPolicy.sections.dataStorageSecurity.title")}
                </h2>
              </header>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {t("privacyPolicy.sections.dataStorageSecurity.description")}
              </p>

              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
                <p className="text-purple-800 dark:text-purple-200 font-medium">
                  <strong>Access Control:</strong>{" "}
                  {t("privacyPolicy.sections.dataStorageSecurity.note")}
                </p>
              </div>
            </article>

            {/* Section 4: User Rights */}
            <article className="mb-12 pb-8 border-b border-slate-200 dark:border-gray-700">
              <header className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                  {t("privacyPolicy.sections.accountDeletionRights.title")}
                </h2>
              </header>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {t("privacyPolicy.sections.accountDeletionRights.description")}
              </p>

              <ul className="space-y-3">
                {(
                  t("privacyPolicy.sections.accountDeletionRights.items", {
                    returnObjects: true,
                  }) as string[]
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Section 5: Third-Party Services */}
            <article className="mb-12 pb-8 border-b border-slate-200 dark:border-gray-700">
              <header className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                  {t("privacyPolicy.sections.thirdPartyServices.title")}
                </h2>
              </header>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {t("privacyPolicy.sections.thirdPartyServices.description")}
              </p>
            </article>

            {/* Section 6: Children's Privacy */}
            <article className="mb-12 pb-8 border-b border-slate-200 dark:border-gray-700">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                {t("privacyPolicy.sections.childrensPrivacy.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {t("privacyPolicy.sections.childrensPrivacy.description")}
              </p>
            </article>

            {/* Section 7: Policy Changes */}
            <article className="mb-12 pb-8 border-b border-slate-200 dark:border-gray-700">
              <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                {t("privacyPolicy.sections.policyChanges.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {t("privacyPolicy.sections.policyChanges.description")}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {t("privacyPolicy.sections.policyChanges.note")}
              </p>
            </article>

            {/* Contact Information */}
            <article className="mb-8">
              <header className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                  {t("privacyPolicy.sections.contactUs.title")}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {t("privacyPolicy.sections.contactUs.description")}
                </p>
              </header>

              <div className="border border-slate-200 dark:border-gray-600 rounded p-6 bg-slate-50 dark:bg-gray-800">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {t("privacyPolicy.sections.contactUs.email")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {t("privacyPolicy.sections.contactUs.website")}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Formal Footer */}
          <footer className="p-8 bg-slate-50 dark:bg-gray-800 border-t border-slate-200 dark:border-gray-700">
            <div className="text-center">
              <div className="flex justify-center items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-slate-500" />
                <span className="text-lg font-serif font-semibold text-slate-900 dark:text-white">
                  Hishab
                </span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                {t("privacyPolicy.closingMessage.title")}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {t("privacyPolicy.closingMessage.subtitle")}
              </p>
            </div>
          </footer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
