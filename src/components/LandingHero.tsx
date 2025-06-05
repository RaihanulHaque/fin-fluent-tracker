
import React from 'react';
import { ArrowRight, Download, Smartphone, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingHero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Smart Money
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              হিসাব (Hishab) brings intelligent Bengali finance tracking to your fingertips. 
              Manage expenses, track income, and gain insights with our AI-powered app.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download App
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900">
              Learn More
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile First</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Secure</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Insights</p>
            </div>
          </div>
        </div>

        {/* Right Content - App Preview */}
        <div className="relative">
          <div className="relative mx-auto w-80 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
              {/* Phone Screen Content */}
              <div className="h-full bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white relative">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">হি</span>
                  </div>
                  <h3 className="text-xl font-semibold">Hishab</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-sm opacity-90">Available Balance</p>
                    <p className="text-2xl font-bold">৳ 25,450</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-xs opacity-80">Income</p>
                      <p className="font-semibold">৳ 30,000</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="text-xs opacity-80">Expenses</p>
                      <p className="font-semibold">৳ 4,550</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-teal-200 dark:bg-teal-800 rounded-full opacity-40 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
