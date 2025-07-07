
import React from 'react';
import { MessageSquare, Shield, Zap, Users, TrendingUp, Bell } from 'lucide-react';

const LandingFeaturesEng: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Prompt-Based Tracking',
      description: 'Simply tell Prompt what you spent. Our AI understands natural language and categorizes expenses automatically.'
    },
    {
      icon: Zap,
      title: 'Instant Insights',
      description: 'Get real-time financial insights and personalized recommendations powered by advanced AI algorithms.'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your financial data is protected with military-grade encryption and zero-knowledge architecture.'
    },
    {
      icon: TrendingUp,
      title: 'Smart Analytics',
      description: 'Beautiful visualizations and predictive analytics help you understand spending patterns and plan better.'
    },
    {
      icon: Users,
      title: 'Family Sharing',
      description: 'Share budgets seamlessly with family members while maintaining individual privacy and control.'
    },
    {
      icon: Bell,
      title: 'Intelligent Alerts',
      description: 'Receive smart notifications about spending limits, savings opportunities, and financial goals.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {" "}Prompt?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience the future of personal finance management with AI-powered simplicity and intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900 dark:hover:to-teal-900 transition-all duration-500 hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800">
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

export default LandingFeaturesEng;
