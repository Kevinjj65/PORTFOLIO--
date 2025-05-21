import React, { createContext, useContext, useState, useRef } from 'react';

interface MenuContextType {
  menuPosition: { x: number; y: number };
  setMenuPosition: (position: { x: number; y: number }) => void;
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Calculate initial position to be in the center of the right half of the screen
  const initialX = window.innerWidth * 0.75; // 75% of screen width (center of right half)
  const initialY = window.innerHeight / 2 - 48; // Center vertically, offset by half button height

  const [menuPosition, setMenuPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <MenuContext.Provider
      value={{
        menuPosition,
        setMenuPosition,
        isDragging,
        setIsDragging,
        menuRef,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}; 