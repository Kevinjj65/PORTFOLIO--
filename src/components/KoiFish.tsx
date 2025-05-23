import React from 'react';
import { motion } from 'framer-motion';

export type FishDirection = 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315;

interface KoiFishProps {
  direction: FishDirection;
  color: string;
  onAnimationComplete: () => void;
}

// Converts direction angle (degrees) to x/y in vw/vh units (approx.)
const angleToMotion = (angle: FishDirection) => {
  const radians = (angle * Math.PI) / 180;
  const radiusVW = 150; // go far enough to exit the screen
  const radiusVH = 150;

  const x = radiusVW * Math.cos(radians);
  const y = radiusVH * Math.sin(radians);

  return {
    x: `${x}vw`,
    y: `${y}vh`,
  };
};

const KoiFish: React.FC<KoiFishProps> = ({ direction, onAnimationComplete }) => {
  const motionTarget = angleToMotion(direction);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 z-50 pointer-events-none"
      initial={{ x: '-50%', y: '-50%' }}
      animate={motionTarget}
      transition={{ duration: 2.5, ease: 'easeInOut' }}
      onAnimationComplete={onAnimationComplete}
    >
      <img 
        src="/assets/bat.gif" 
        alt="Bat" 
        className="w-24 h-24 object-contain"
      />
    </motion.div>
  );
};

export default KoiFish;
