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
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
        {/* Background glow */}
        <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full animate-pulse"></div>

        {/* Cute GIF animation */}
        <img
          src="/assets/sqrtle.gif"
          alt="Splash character"
          className="relative z-10 w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
