import React from 'react';
import { motion } from 'framer-motion';

interface FishProps {
  initialX: number;
  initialY: number;
}

export const Fish: React.FC<FishProps> = ({ initialX, initialY }) => {
  const duration = 15 + Math.random() * 10; // Random duration between 15-25 seconds
  const endX = Math.random() * window.innerWidth;
  const endY = Math.random() * window.innerHeight;

  return (
    <motion.div
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={{
        x: endX,
        y: endY,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        times: [0, 0.1, 0.9, 1],
        ease: "linear",
      }}
      className="absolute pointer-events-none"
    >
      <svg
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform -scale-x-100"
      >
        <path
          d="M35 10C35 15.5228 30.5228 20 25 20C19.4772 20 15 15.5228 15 10C15 4.47715 19.4772 0 25 0C30.5228 0 35 4.47715 35 10Z"
          fill="rgba(255, 255, 255, 0.3)"
        />
        <path
          d="M25 15C27.7614 15 30 12.7614 30 10C30 7.23858 27.7614 5 25 5C22.2386 5 20 7.23858 20 10C20 12.7614 22.2386 15 25 15Z"
          fill="rgba(255, 255, 255, 0.5)"
        />
        <path
          d="M15 10L5 5V15L15 10Z"
          fill="rgba(255, 255, 255, 0.3)"
        />
      </svg>
    </motion.div>
  );
}; 