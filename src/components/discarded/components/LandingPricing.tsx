
import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingPricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '৳ 0',
      period: 'Forever',
      description: 'Perfect for getting started with expense tracking',
      features: [
        'Track up to 100 transactions/month',
        'Basic expense categories',
        'Simple reports',
        'Bengali language support',
        'Data export'
      ],
      buttonText: 'Download Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '৳ 299',
      period: 'per month',
      description: 'Advanced features for serious money management',
      features: [
        'Unlimited transactions',
        'AI-powered insights & predictions',
        'Advanced analytics & reports',
        'Custom categories & tags',
        'Family sharing (up to 5 members)',
        'Priority support',
        'Data backup & sync',
        'Budget planning tools'
      ],
      buttonText: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Family',
      price: '৳ 499',
      period: 'per month',
      description: 'Complete financial management for the whole family',
      features: [
        'Everything in Pro',
        'Unlimited family members',
        'Shared budgets & goals',
        'Individual & family insights',
        'Advanced security controls',
        'Dedicated account manager',
        'Custom integrations',
        'Business expense tracking'
      ],
      buttonText: 'Choose Family',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start free and upgrade when you need more features. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-emerald-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">/ {plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'border border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900'}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPricing;
