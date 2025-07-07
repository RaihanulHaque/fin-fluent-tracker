
import React from 'react';
import { TrendingUp, Users, DollarSign, Star } from 'lucide-react';

const LandingStatsEng: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Users',
      color: 'text-emerald-600'
    },
    {
      icon: DollarSign,
      value: '$50M+',
      label: 'Money Tracked',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Improved Savings',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      value: '4.8/5',
      label: 'Average Rating',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Success in Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thousands of users have already achieved their financial goals with Hishab
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
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
