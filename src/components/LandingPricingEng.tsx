
import React from 'react';
import { Check, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingPricingEng: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        'Track up to 100 transactions',
        'Basic expense categories',
        'Monthly reports',
        'Mobile app access',
        'Email support'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      description: 'Best for individuals and families',
      features: [
        'Unlimited transactions',
        'AI-powered insights',
        'Custom categories',
        'Advanced analytics',
        'Family sharing (up to 5 members)',
        'Bank account sync',
        'Priority support',
        'Export to Excel/PDF'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Business',
      price: '$24.99',
      period: '/month',
      description: 'Designed for small businesses',
      features: [
        'Everything in Pro',
        'Business expense categories',
        'Team collaboration',
        'Advanced reporting',
        'Tax preparation tools',
        'API access',
        'Dedicated account manager',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose the perfect plan for your financial management needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 ${
              plan.popular 
                ? 'bg-gradient-to-b from-emerald-50 to-teal-50 dark:from-emerald-900 dark:to-teal-900 border-2 border-emerald-500 shadow-xl' 
                : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 text-lg font-semibold rounded-xl ${
                  plan.popular
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPricingEng;
