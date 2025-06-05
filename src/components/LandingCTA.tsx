
import React from 'react';
import { Download, ArrowRight, Star } from 'lucide-react';
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
            <span className="ml-2 text-white/90">Loved by thousands of users</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to take control of your finances?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their financial habits with Hishab.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            <Download className="w-5 h-5 mr-2" />
            Download for Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
            View Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-emerald-100">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">4.8</div>
            <div className="text-emerald-100">App Store Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">₹1M+</div>
            <div className="text-emerald-100">Money Tracked</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCTA;
