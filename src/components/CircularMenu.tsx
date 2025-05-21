import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenu } from '../context/MenuContext';

interface MenuItem {
  id: number;
  title: string;
  angle: number;
  route: string;
}

interface CircularMenuProps {
  isVisible: boolean;
  onClose?: () => void;
  currentPath?: string;
  customPositionRef?: React.RefObject<HTMLDivElement>;
}

const allMenuItems: MenuItem[] = [
  { id: 0, title: 'Home', angle: 45, route: '/' },
  { id: 1, title: 'About', angle: 135, route: '/about' },
  { id: 2, title: 'Projects', angle: 225, route: '/projects' },
  { id: 3, title: 'Skills', angle: 315, route: '/skills' },
  { id: 4, title: 'Contact', angle: 405, route: '/contact' }
];

const getMenuItemsForPath = (currentPath: string) => {
  // Remove the current page from the menu
  // Home is only shown if not on home
  return allMenuItems.filter(item => item.route !== currentPath && (item.route !== '/' || currentPath !== '/'));
};

const getAngles = (count: number) => {
  // Evenly distribute angles around the circle
  return Array.from({ length: count }, (_, i) => (360 / count) * i);
};

const CircularMenu: React.FC<CircularMenuProps> = ({ 
  isVisible, 
  onClose, 
  currentPath = '/',
  customPositionRef
}) => {
  const [hoveredText, setHoveredText] = useState<number | null>(null);
  const navigate = useNavigate();
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItems = getMenuItemsForPath(currentPath);
  const angles = getAngles(menuItems.length);

  const [menuPos, setMenuPos] = useState<{ x: number; y: number }>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  React.useEffect(() => {
    if (customPositionRef?.current) {
      const rect = customPositionRef.current.getBoundingClientRect();
      setMenuPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, [customPositionRef?.current]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  if (!isVisible) return null;

  const menuStyle = {
    position: 'fixed' as const,
    left: `${menuPos.x}px`,
    top: `${menuPos.y}px`,
    transform: `translate(-50%, -50%)`
  };

  // For diagonal lines
  const lines = menuItems.map((item, idx) => {
    const angle = item.angle;
    return (
      <div
        key={`line-${item.id}`}
        className="absolute left-1/2 top-1/2 w-[2px] h-[80px] bg-gray-300/50"
        style={{
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
          transformOrigin: 'center',
          zIndex: 2
        }}
      />
    );
  });

  // For quadrant lighting
  const quadrants = menuItems.map((item, idx) => {
    const angle = item.angle;
    const isHovered = hoveredText === idx;
    return (
      <div
        key={`quadrant-${item.id}`}
        className={`absolute left-1/2 top-1/2 w-[200px] h-[200px] transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(-50%, -50%) rotate(${angle - 45}deg)`,
          transformOrigin: 'center',
          zIndex: 1,
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)'
        }}
      />
    );
  });

  const handleMenuItemClick = (route: string) => {
    navigate(route);
    if (onClose) onClose();
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div 
        ref={menuRef}
        className="relative w-[400px] h-[400px] rounded-full bg-gray-800/50 backdrop-blur-md border-2 border-blue-400/20 transition-transform duration-100 z-20 animate-fadeIn"
        style={menuStyle}
      >
        {/* Quadrant lighting */}
        {quadrants}
        {/* Diagonal lines */}
        {lines}
        {/* Center Menu Button */}
        <button
          className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-600 flex items-center justify-center z-20 shadow-lg focus:outline-none"
          onClick={onClose}
        >
          <span className="text-white text-lg font-medium">Menu</span>
        </button>
        {/* Menu Items (text only, displayed around the menu) */}
        {menuItems.map((item, idx) => {
          const angleRad = (angles[idx] * Math.PI) / 180;
          const textRadius = 130;
          const x = Math.cos(angleRad) * textRadius;
          const y = Math.sin(angleRad) * textRadius;
          return (
            <div
              key={item.id}
              className={`absolute left-1/2 top-1/2 select-none cursor-pointer text-xl font-semibold transition-all duration-200 z-3 origin-center ${hoveredText === idx ? 'scale-110 text-blue-200' : 'text-white'}`}
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
              }}
              onMouseEnter={() => setHoveredText(idx)}
              onMouseLeave={() => setHoveredText(null)}
              onClick={() => handleMenuItemClick(item.route)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CircularMenu };

/* Add this to your CSS or Tailwind config:
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 0.4s ease;
}
@keyframes fish-swim {
  0% {
    left: -2em;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    left: 1.5em;
    opacity: 0;
  }
}
.animate-fish-swim {
  animation: fish-swim 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
*/ 