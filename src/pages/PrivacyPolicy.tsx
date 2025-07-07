
import React from 'react';
import Header from '@/components/Header';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: January 2024</p>
          
          <div className="prose prose-lg dark:prose-dark max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                At Hishab, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our financial tracking application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Personal Information</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, and financial transaction data.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Usage Information</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We collect information about how you use our app, including features accessed, time spent, and interaction patterns to improve our services.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Provide customer service and support</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Detect, investigate, and prevent fraudulent or illegal activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We implement industry-standard security measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                <li>End-to-end encryption for sensitive financial data</li>
                <li>Secure data transmission using SSL/TLS protocols</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information Sharing</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in operating our app</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Access, update, or delete your personal information</li>
                <li>Request a copy of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-900 dark:text-white font-medium">Email: privacy@hishab.app</p>
                <p className="text-gray-900 dark:text-white font-medium">Address: San Francisco, CA</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
