
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/landing');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-600 to-emerald-400 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-md"></div>
      </div>

      {/* Main content */}
      <div className="text-center z-10">
        {/* Logo animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-scale-in">
            <span className="text-emerald-600 font-bold text-4xl">H</span>
          </div>
          
          {/* Pulse rings */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-3xl border-2 border-white opacity-30 animate-ping"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-3xl border border-white opacity-20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* App name with animation */}
        <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Hishab
        </h1>
        
        {/* Tagline */}
        <p className="text-xl text-emerald-100 mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          Your Smart Money Manager
        </p>

        {/* Features with staggered animation */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="flex items-center justify-center text-white">
            <CheckCircle className="w-6 h-6 mr-3 text-emerald-200" />
            <span className="text-lg">Track expenses effortlessly</span>
          </div>
          <div className="flex items-center justify-center text-white">
            <CheckCircle className="w-6 h-6 mr-3 text-emerald-200" />
            <span className="text-lg">Smart budget planning</span>
          </div>
          <div className="flex items-center justify-center text-white">
            <CheckCircle className="w-6 h-6 mr-3 text-emerald-200" />
            <span className="text-lg">Secure & private</span>
          </div>
        </div>
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
