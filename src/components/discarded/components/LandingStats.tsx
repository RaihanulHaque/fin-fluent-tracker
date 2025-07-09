
import React from 'react';
import { TrendingUp, Users, DollarSign, Star } from 'lucide-react';

const LandingStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '৫০,০০০+',
      label: 'সক্রিয় ব্যবহারকারী',
      color: 'text-emerald-600'
    },
    {
      icon: DollarSign,
      value: '৫ কোটি+',
      label: 'টাকা ট্র্যাক করা হয়েছে',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      value: '৮৫%',
      label: 'সঞ্চয় বৃদ্ধি পেয়েছে',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      value: '৪.৮/৫',
      label: 'গড় রেটিং',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            আমাদের সফলতার সংখ্যা
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            হাজার হাজার ব্যবহারকারী ইতিমধ্যে হিসাব দিয়ে তাদের আর্থিক লক্ষ্য অর্জন করেছেন
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

export default LandingStats;
