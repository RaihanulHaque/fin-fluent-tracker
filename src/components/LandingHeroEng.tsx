
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Smartphone } from 'lucide-react';

const LandingHeroEng: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">
                  #1 Expense Tracking App
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Take Control of Your
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}Finances
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                Smart expense tracking with AI insights. Manage your money effortlessly and achieve your financial goals with Hishab.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">1M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">4.8★</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">App Store</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Reviews</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-emerald-600 flex items-center justify-center">
                    <div className="text-white text-sm font-medium">Hishab Dashboard</div>
                  </div>
                  
                  {/* App Content Preview */}
                  <div className="pt-12 px-6 space-y-4">
                    <div className="bg-emerald-50 rounded-xl p-4">
                      <div className="text-emerald-700 text-sm font-medium">Monthly Budget</div>
                      <div className="text-2xl font-bold text-emerald-900">$2,450</div>
                      <div className="text-emerald-600 text-sm">$580 remaining</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-red-100 rounded-full"></div>
                          <div>
                            <div className="font-medium text-sm">Groceries</div>
                            <div className="text-xs text-gray-500">Today</div>
                          </div>
                        </div>
                        <div className="text-red-600 font-medium">-$45</div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                          <div>
                            <div className="font-medium text-sm">Gas</div>
                            <div className="text-xs text-gray-500">Yesterday</div>
                          </div>
                        </div>
                        <div className="text-red-600 font-medium">-$32</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">$</span>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">📊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeroEng;
