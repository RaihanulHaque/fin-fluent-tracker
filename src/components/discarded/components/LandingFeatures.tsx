
import React from 'react';
import { Brain, BarChart3, Globe, Zap, Lock, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get intelligent spending analysis and personalized financial recommendations powered by advanced AI.'
  },
  {
    icon: BarChart3,
    title: 'Visual Analytics',
    description: 'Beautiful charts and graphs help you understand your spending patterns and financial trends.'
  },
  {
    icon: Globe,
    title: 'Bengali Language',
    description: 'Native Bengali support makes financial tracking accessible and comfortable for Bengali speakers.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Add transactions in seconds with smart categorization and quick entry features.'
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'Your financial data is protected with enterprise-level encryption and security measures.'
  },
  {
    icon: Users,
    title: 'Family Sharing',
    description: 'Share budgets and track family expenses together with collaborative features.'
  }
];

const LandingFeatures: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to manage money
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hishab combines powerful features with simplicity to give you complete control over your finances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
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
