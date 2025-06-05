
import React from 'react';
import { ArrowRight, Download, Smartphone, Shield, TrendingUp, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingHero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Rated 4.8/5 by 10,000+ users</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              হিসাব রাখুন
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                সহজেই
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Bangladesh's first AI-powered Bengali expense tracker. Track your money, understand your spending, and build better financial habits with intelligent insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-900">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Bengali First</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Bank-Grade Security</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Insights</p>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image/Illustration */}
        <div className="relative">
          <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-2xl">
            <div className="text-white text-center space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-2xl">হি</span>
              </div>
              <h3 className="text-2xl font-bold">Hishab</h3>
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-left">
                  <p className="text-sm opacity-90">মোট ব্যালেন্স</p>
                  <p className="text-2xl font-bold">৳ 45,250</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-lg p-3 text-left">
                    <p className="text-xs opacity-80">আয়</p>
                    <p className="font-semibold">৳ 50,000</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-left">
                    <p className="text-xs opacity-80">খরচ</p>
                    <p className="font-semibold">৳ 4,750</p>
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
