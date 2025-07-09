
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
                  AI-Powered Finance Tracker
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Smart Way to
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}Track Your Money
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                Experience the future of expense tracking with Hishab. Simply tell us what you spent, and our AI handles the rest. Smart categorization, instant insights, effortless management.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Start Tracking
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900 px-8 py-6 text-lg font-semibold rounded-xl"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">500K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">4.9★</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">AI</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Powered</div>
              </div>
            </div>
          </div>

          {/* Right Column - Clean Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative">
              {/* Modern Phone Mockup */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <img 
                        src="/lovable-uploads/7646c7b0-a017-4c5a-b29a-40cab7e09e7b.png" 
                        alt="Hishab Logo" 
                        className="w-6 h-6"
                      />
                      <div className="text-white text-sm font-medium">Hishab Finance</div>
                    </div>
                  </div>
                  
                  {/* App Content Preview - Cleaner Design */}
                  <div className="pt-16 px-6 space-y-6">
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                      <div className="text-emerald-700 text-sm font-medium mb-2">Monthly Balance</div>
                      <div className="text-3xl font-bold text-emerald-900 mb-1">$3,247</div>
                      <div className="text-emerald-600 text-sm">+12% from last month</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-gray-700 text-sm font-medium mb-3">Recent Transactions</div>
                      
                      <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-red-100 to-red-200 rounded-full flex items-center justify-center">
                            <span className="text-red-600 text-xs">🛒</span>
                          </div>
                          <div>
                            <div className="font-medium text-sm text-gray-900">Grocery Store</div>
                            <div className="text-xs text-gray-500">2 hours ago</div>
                          </div>
                        </div>
                        <div className="text-red-600 font-semibold">-$67</div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-xs">💰</span>
                          </div>
                          <div>
                            <div className="font-medium text-sm text-gray-900">Salary Deposit</div>
                            <div className="text-xs text-gray-500">Yesterday</div>
                          </div>
                        </div>
                        <div className="text-green-600 font-semibold">+$2,500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Cleaner */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-lg">📊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeroEng;
