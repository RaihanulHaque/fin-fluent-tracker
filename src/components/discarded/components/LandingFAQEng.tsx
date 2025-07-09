
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

const LandingFAQEng: React.FC = () => {
  const [openItems, setOpenItems] = React.useState<number[]>([0]);

  const faqs = [
    {
      question: 'Is Hishab completely free to use?',
      answer: 'Yes! Our core features are completely free to use. The Pro version offers advanced features like AI insights, unlimited transactions, and family sharing for users who need more functionality.'
    },
    {
      question: 'How secure is my financial data?',
      answer: 'We use bank-grade security with end-to-end encryption. Your data is protected with industry-leading security standards, and we never share your banking information with third parties. Our servers comply with all international security regulations.'
    },
    {
      question: 'Which devices can I use Hishab on?',
      answer: 'Hishab is available on Android, iOS, and web platforms. You can seamlessly sync your data across all devices in real-time.'
    },
    {
      question: 'How do AI insights work?',
      answer: 'Our AI analyzes your spending patterns and provides personalized recommendations. It helps with budget planning, identifies saving opportunities, and assists in achieving your financial goals.'
    },
    {
      question: 'How does family sharing work?',
      answer: 'With family sharing, you can track budgets and expenses with family members. Everyone has their individual account, but you can manage family budgets together with proper privacy controls.'
    },
    {
      question: 'Is connecting my bank account safe?',
      answer: 'We use read-only access, meaning we can only view your transaction history, not move any money. All connections are made through bank-approved APIs that are completely secure.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about Hishab
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible key={index} open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
              <CollapsibleTrigger className="w-full bg-white dark:bg-gray-900 rounded-xl p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <Minus className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-white dark:bg-gray-900 rounded-xl px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Have more questions?
          </p>
          <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQEng;
