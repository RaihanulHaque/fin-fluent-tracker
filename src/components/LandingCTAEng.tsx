
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, MessageSquare } from 'lucide-react';

const LandingCTAEng: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/7646c7b0-a017-4c5a-b29a-40cab7e09e7b.png" 
            alt="Prompt Logo" 
            className="w-16 h-16 mx-auto mb-6"
          />
        </div>
        
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Ready to Prompt Your
          <br />
          <span className="text-emerald-100">Financial Success?</span>
        </h2>
        
        <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of users who've simplified their financial lives with Prompt. 
          Start your journey to smarter money management today – it's free to begin.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-6 h-6 mr-3" />
            Start Prompting
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-3 border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-6 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <Download className="w-6 h-6 mr-3" />
            Download App
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-emerald-100 max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">✨</div>
            <span className="font-semibold">AI-Powered</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">🔒</div>
            <span className="font-semibold">Secure & Private</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-2">🚀</div>
            <span className="font-semibold">Free to Start</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCTAEng;
