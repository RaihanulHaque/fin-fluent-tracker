
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

const LandingCTAEng: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Join millions of users who trust Hishab to manage their money smarter. 
          Start your journey to financial freedom today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Start Free Trial
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-6 text-emerald-100">
          <div className="flex items-center">
            <span className="text-2xl mr-2">✓</span>
            <span>Free to start</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">✓</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">✓</span>
            <span>14-day trial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCTAEng;
