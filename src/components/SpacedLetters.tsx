import React from 'react';
import { motion } from 'framer-motion';

interface SpacedLettersProps {
  text: string;
}

export const SpacedLetters: React.FC<SpacedLettersProps> = ({ text }) => {
  return (
    <span className="inline-flex">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
          }}
          className="inline-block mx-1"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}; 