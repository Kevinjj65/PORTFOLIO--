import React, { useState } from 'react';
import KoiFish, { type FishDirection } from '../components/KoiFish';

//const retroFont = "font-['Press_Start_2P']"; // You can use another retro font if you prefer

const FISH_DIRECTIONS: FishDirection[] = [0, 45, 90, 135, 180, 225, 270, 315];

const FISH_COLORS = [
  '#FF914D', // N
  '#FF4D6D', // NE
  '#4DFFB8', // E
  '#4D9BFF', // SE
  '#FFD24D', // S
  '#B84DFF', // SW
  '#4DFFEC', // W
  '#FF4DDB', // NW
];

const Hero: React.FC = () => {
  const [fishArray, setFishArray] = useState<number[]>([]);
  const imageCenterRef = React.useRef<HTMLDivElement>(null);

  const handleOClick = () => {
    setFishArray(FISH_DIRECTIONS.map((_, i) => i));
  };

  const handleFishDone = (idx: number) => {
    setFishArray((prev) => prev.filter((d) => d !== idx));
  };

  // Helper to render spaced letters
  const renderSpaced = (word: string, specialO?: boolean) => (
    <span className={`inline-flex relative tracking-widest`}>
      {word.split('').map((char, idx) =>
        specialO && char === 'o' ? (
          <span
            key={idx}
            className="inline-block cursor-pointer mx-1"
            onClick={handleOClick}
          >
            o
          </span>
        ) : (
          <span key={idx} className="inline-block mx-1">
            {char}
          </span>
        )
      )}
    </span>
  );

  return (
    <div className="h-screen flex">
      {/* Left Section - Name and Designation (White Background) */}
      <div className="w-1/2 bg-white flex items-center justify-center relative">
        <div className="text-center relative z-10">
          <h1 className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-800 flex flex-wrap justify-center items-center gap-2 `}>
            {renderSpaced('Kevin')}
            &nbsp;
            {renderSpaced('Johns', true)}
            &nbsp;
            {renderSpaced('Jolly')}
          </h1>
          <p className={`text-xl md:text-3xl text-gray-500 font-medium `}>
            Web Developer & Machine Learning Enthusiast
          </p>
        </div>
        {fishArray.map((idx) => (
          <KoiFish
            key={FISH_DIRECTIONS[idx]}
            direction={FISH_DIRECTIONS[idx]}
            color={FISH_COLORS[idx]}
            onAnimationComplete={() => handleFishDone(idx)}
          />
        ))}
      </div>

      {/* Right Section - Koi Pond Background */}
      <div className="w-1/2 relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(assets/koi-bg.png)' }}
        ></div>
        <div ref={imageCenterRef} className="z-10">
          {/* Initial position reference for the draggable menu */}
        </div>
      </div>
    </div>
  );
};

export default Hero; 