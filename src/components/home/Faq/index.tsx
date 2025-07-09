import React from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const LandingFAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = React.useState<number[]>([0]);

  // Get FAQs from translation
  const faqs = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible
              key={index}
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
            >
              <CollapsibleTrigger className="w-full bg-white dark:bg-gray-900 rounded-xl p-6 text-left flex items-center justify-between hover:bg-teal-50 dark:hover:bg-teal-900 transition-colors">
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
            {t("faq.moreQuestions")}
          </p>
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900"
          >
            {t("faq.contactUs")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
