import React, { useState } from 'react';
import KoiFish, { type FishDirection } from '../components/KoiFish';

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

// Add custom animation keyframes
const scrollingTextStyle = `
@keyframes scrollText {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
`;

const Hero: React.FC = () => {
  const [fishArray, setFishArray] = useState<number[]>([]);
  //const imageCenterRef = React.useRef<HTMLDivElement>(null);

  const handleOClick = () => {
    setFishArray(FISH_DIRECTIONS.map((_, i) => i));
  };

  const handleFishDone = (idx: number) => {
    setFishArray((prev) => prev.filter((d) => d !== idx));
  };

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
    <div
      className="h-dvh bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url(/assets/koi-bg.jpg)" }}
    >
      {/* Inject custom animation style */}
      <style>{scrollingTextStyle}</style>

      <div className="bg-white bg-opacity-90 rounded-3xl shadow-lg p-6 md:p-12 w-full max-w-6xl text-center relative z-10 min-h-[75vh] flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug text-gray-800 flex flex-wrap justify-center items-center gap-2">
          {renderSpaced("Kevin")}
          &nbsp;
          {renderSpaced("Johns", true)}
          &nbsp;
          {renderSpaced("Jolly")}
        </h1>

        {/* Scrolling text */}
        <div className="overflow-hidden mt-4 md:mt-6">
          <div
            className="whitespace-nowrap inline-block text-lg md:text-2xl text-gray-600 font-medium"
            style={{
              animation: 'scrollText 20s linear infinite',
            }}
          >
            Web Developer & Machine Learning Enthusiast
          </div>
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
    </div>
  );
};

export default Hero;
