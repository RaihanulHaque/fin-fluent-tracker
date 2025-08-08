import React from "react";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import AccountDeletion from "@/components/Shared/AccountDeletion";
import { AlertTriangle, Shield, Clock, Database } from "lucide-react";

const AccountDeletionPage: React.FC = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full">
                <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Account Deletion
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're sorry to see you go. Before you delete your account, please
              review the important information below.
            </p>
          </div>
        </section>

        {/* Important Information Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              What You Need to Know
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Database className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Data Deletion
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All your financial data, transactions, and account information
                  will be permanently deleted and cannot be recovered.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Processing Time
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Account deletion is processed immediately. You will receive a
                  confirmation email once completed.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Security
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For security reasons, you'll need to confirm deletion via
                  email before your account is permanently removed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Account Deletion Form Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Delete Your Account
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Enter your email address below to receive a confirmation link
                for account deletion.
              </p>
            </div>

            <AccountDeletion />
          </div>
        </section>

        {/* Alternative Options Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Looking for Alternatives?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Temporary Break
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Consider logging out instead of deleting your account. Your
                  data will remain safe for when you return.
                </p>
                <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Just Log Out →
                </button>
              </div>

              <div className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Export Your Data
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Download your financial data before deletion. You can export
                  all your transactions and reports.
                </p>
                <button className="text-green-600 dark:text-green-400 hover:underline font-medium">
                  Export Data →
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AccountDeletionPage;
