import React, { useEffect } from 'react';
import { CircularMenu } from './CircularMenu';
import { useMenu } from '../context/MenuContext';

const DraggableMenu: React.FC = () => {
  const { menuPosition, setMenuPosition, isDragging, setIsDragging, menuRef, isMenuOpen, setIsMenuOpen } = useMenu();

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging && menuRef.current) {
        const rect = menuRef.current.getBoundingClientRect();
        let clientX, clientY;

        if (e instanceof MouseEvent) {
          clientX = e.clientX;
          clientY = e.clientY;
        } else {
          // Touch event
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        }

        const x = clientX - rect.width / 2;
        const y = clientY - rect.height / 2;
        setMenuPosition({ x, y });
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, setMenuPosition, setIsDragging, menuRef]);

  return (
    <>
      {/* Blur overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Menu button */}
      <div
        ref={menuRef}
        style={{
          position: 'fixed',
          left: `${menuPosition.x}px`,
          top: `${menuPosition.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab',
          zIndex: 50,
          touchAction: 'none', // Prevent default touch actions
        }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <button
          className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-lg shadow-lg hover:bg-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </div>

      {/* Centered Circular Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <CircularMenu
            isVisible={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            currentPath={window.location.pathname}
            customPositionRef={menuRef as React.RefObject<HTMLDivElement>}
          />
        </div>
      )}
    </>
  );
};

export default DraggableMenu; 