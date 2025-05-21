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

const KoiFish: React.FC<KoiFishProps> = ({ direction, color, onAnimationComplete }) => {
  const motionTarget = angleToMotion(direction);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 z-50 pointer-events-none"
      initial={{ x: '-50%', y: '-50%' }}
      animate={motionTarget}
      transition={{ duration: 2.5, ease: 'easeInOut' }}
      onAnimationComplete={onAnimationComplete}
    >
      <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="90" cy="40" rx="50" ry="20" fill={color} />
        <polygon points="10,40 40,30 40,50" fill={color} />
        <polygon points="170,40 140,30 140,50" fill={color} />
        <circle cx="130" cy="40" r="4" fill="#222" />
      </svg>
    </motion.div>
  );
};

export default KoiFish;
