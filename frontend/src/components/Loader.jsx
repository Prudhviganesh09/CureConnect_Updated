import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        {/* Main Spinner */}
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        
        {/* Inner Ring */}
        <div className="absolute inset-2 w-12 h-12 border-4 border-primary/10 border-b-primary rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        
        {/* Center Dot */}
        <div className="absolute inset-6 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
        
        {/* Loading Text */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 font-medium">Loading...</p>
          <div className="flex justify-center mt-2 space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
