import React, { useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-white">
      <div className="relative w-[200px] h-[500px]">
        {/* Background glow */}
        <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full animate-pulse"></div>
        
        {/* Lightning bolt */}
        <div className="absolute inset-0 animate-lightning-main">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-blue-600"
          >
            <path
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
              fill="currentColor"
              className="drop-shadow-[0_0_20px_rgba(37,99,235,0.8)]"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen; 