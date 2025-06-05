
import React from 'react';
import { Star, Quote } from 'lucide-react';

const LandingTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'আহমেদ করিম',
      role: 'ব্যবসায়ী, ঢাকা',
      content: 'হিসাব অ্যাপটি আমার আর্থিক ব্যবস্থাপনা সম্পূর্ণভাবে বদলে দিয়েছে। বাংলায় খরচের হিসাব রাখা এত সহজ হয়ে গেছে।',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'ফাতিমা রহমান',
      role: 'গৃহিণী, চট্টগ্রাম',
      content: 'পারিবারিক বাজেট নিয়ন্ত্রণে এই অ্যাপটি অসাধারণ। AI-এর সাহায্যে আমি এখন আগের চেয়ে ভালো সিদ্ধান্ত নিতে পারি।',
      rating: 5,
      avatar: '👩‍🏫'
    },
    {
      name: 'মোহাম্মদ হাসান',
      role: 'ছাত্র, সিলেট',
      content: 'ছাত্রজীবনে টাকার হিসাব রাখা কঠিন ছিল। হিসাব অ্যাপ দিয়ে এখন খুব সহজেই আমার খরচ ট্র্যাক করতে পারি।',
      rating: 5,
      avatar: '👨‍🎓'
    },
    {
      name: 'রিনা আক্তার',
      role: 'ডাক্তার, রাজশাহী',
      content: 'Professional হিসেবে আমার আয়-ব্যয়ের হিসাব জটিল। এই অ্যাপের রিপোর্ট ফিচার আমার কাজকে অনেক সহজ করেছে।',
      rating: 5,
      avatar: '👩‍⚕️'
    },
    {
      name: 'সাকিব আল হাসান',
      role: 'সফটওয়্যার ইঞ্জিনিয়ার',
      content: 'বাংলা ভাষায় এত advanced একটা finance app পেয়ে অবাক! UI/UX অসাধারণ, features গুলো practical।',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'নাজিয়া সুলতানা',
      role: 'শিক্ষিকা, বরিশাল',
      content: 'Family sharing feature টা দারুণ। পুরো পরিবারের সবাই একসাথে বাজেট ম্যানেজ করতে পারি এখন।',
      rating: 5,
      avatar: '👩‍🏫'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            আমাদের ব্যবহারকারীরা কী বলেন
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            হাজারো ব্যবহারকারী তাদের আর্থিক জীবন পরিবর্তন করেছেন হিসাব দিয়ে
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 relative">
              <Quote className="w-8 h-8 text-emerald-500 mb-4 opacity-60" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonials;
