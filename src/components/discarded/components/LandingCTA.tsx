
import React from 'react';
import { Download, ArrowRight, Star, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="mb-8">
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-white/90">৫০,০০০+ খুশি ব্যবহারকারী</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            আজই শুরু করুন আপনার আর্থিক যাত্রা
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            লাখো মানুষ ইতিমধ্যে হিসাব দিয়ে তাদের আর্থিক অভ্যাস পরিবর্তন করেছেন। আপনিও আজই যোগ দিন।
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            <Smartphone className="w-5 h-5 mr-2" />
            Android Download
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            <Smartphone className="w-5 h-5 mr-2" />
            iOS Download
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">৫০,০০০+</div>
            <div className="text-emerald-100">সক্রিয় ব্যবহারকারী</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">৪.৮/৫</div>
            <div className="text-emerald-100">অ্যাপ স্টোর রেটিং</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">৫ কোটি+</div>
            <div className="text-emerald-100">টাকা ট্র্যাক করা হয়েছে</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCTA;
