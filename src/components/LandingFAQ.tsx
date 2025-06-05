import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

const LandingFAQ: React.FC = () => {
  const [openItems, setOpenItems] = React.useState<number[]>([0]);

  const faqs = [
    {
      question: 'হিসাব অ্যাপ কি সম্পূর্ণ বিনামূল্যে?',
      answer: 'হ্যাঁ! আমাদের মূল ফিচারগুলো সম্পূর্ণ বিনামূল্যে ব্যবহার করতে পারবেন। প্রো ভার্শনে আরও উন্নত ফিচার রয়েছে যেমন AI insights, unlimited transactions, এবং family sharing।'
    },
    {
      question: 'আমার আর্থিক তথ্য কতটা নিরাপদ?',
      answer: 'আমরা bank-grade security ব্যবহার করি। আপনার সকল তথ্য end-to-end encrypted এবং আমরা কখনো আপনার ব্যাংক তথ্য অন্য কারো সাথে শেয়ার করি না। আমাদের servers সব ধরনের আন্তর্জাতিক নিরাপত্তা মান মেনে চলে।'
    },
    {
      question: 'কোন ডিভাইসে হিসাব ব্যবহার করতে পারব?',
      answer: 'হিসাব Android এবং iOS দুই প্ল্যাটফর্মেই পাওয়া যায়। এছাড়াও আমাদের web version রয়েছে যা যেকোনো ব্রাউজারে ব্যবহার করতে পারবেন।'
    },
    {
      question: 'AI insights কীভাবে কাজ করে?',
      answer: 'আমাদের AI আপনার খরচের প্যাটার্ন বিশ্লেষণ করে এবং ব্যক্তিগতকৃত পরামর্শ দেয়। এটি আপনাকে বাজেট পরিকল্পনা, সঞ্চয়ের সুযোগ, এবং আর্থিক লক্ষ্য অর্জনে সাহায্য করে।'
    },
    {
      question: 'Family sharing কীভাবে কাজ করে?',
      answer: 'Family sharing দিয়ে আপনি পরিবারের সদস্যদের সাথে বাজেট এবং খরচ ট্র্যাক করতে পারেন। প্রত্যেকের আলাদা অ্যাকাউন্ট থাকবে কিন্তু পারিবারিক বাজেট একসাথে ম্যানেজ করতে পারবেন।'
    },
    {
      question: 'ব্যাংক অ্যাকাউন্ট সংযোগ করা কি নিরাপদ?',
      answer: 'আমরা read-only access ব্যবহার করি যার মানে আমরা শুধু আপনার transaction history দেখতে পারি, কোনো টাকা লেনদেন করতে পারি না। সব connection bank-approved API দিয়ে হয় যা সম্পূর্ণ নিরাপদ।'
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
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            প্রায়ই জিজ্ঞাসিত প্রশ্ন
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            হিসাব সম্পর্কে আপনার যা জানা প্রয়োজন
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
            আরও প্রশ্ন আছে?
          </p>
          <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900">
            যোগাযোগ করুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
