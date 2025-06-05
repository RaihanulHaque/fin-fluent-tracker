
import React from 'react';
import { Brain, Shield, Smartphone, Users, TrendingUp, Bell } from 'lucide-react';

const LandingFeaturesEng: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get personalized financial advice and spending pattern analysis powered by advanced AI algorithms.'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your financial data is protected with end-to-end encryption and industry-leading security measures.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Sync',
      description: 'Access your expenses seamlessly across iOS, Android, and web platforms with real-time synchronization.'
    },
    {
      icon: Users,
      title: 'Family Sharing',
      description: 'Share budgets and track family expenses together while maintaining individual privacy controls.'
    },
    {
      icon: TrendingUp,
      title: 'Smart Analytics',
      description: 'Visualize your spending trends with interactive charts and receive actionable financial insights.'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Get timely alerts for budget limits, bill reminders, and unusual spending patterns.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {" "}Smart Money Management
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to take control of your finances, make smarter decisions, and achieve your financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900 transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                <feature.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
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

export default LandingFeaturesEng;
