import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../pages/Hero';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

const FullPageScrollWrapper: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const currentSectionRef = useRef<number>(0);
  const isThrottledRef = useRef(false); // Prevent rapid scrolls

  const sections = ['/', '/about', '/projects', '/skills', '/contact'];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;

      // Check if target is inside a scrollable container (like Skills)
      const isInsideScrollable = target.closest('.scrollable-content');

      if (isInsideScrollable) return; // Don't trigger full-page scroll

      e.preventDefault();

      if (isThrottledRef.current) return;

      const direction = e.deltaY > 30 ? 1 : e.deltaY < -30 ? -1 : 0;
      if (direction === 0) return;

      const newIndex = Math.max(
        0,
        Math.min(sections.length - 1, currentSectionRef.current + direction)
      );

      if (newIndex !== currentSectionRef.current) {
        isThrottledRef.current = true;
        currentSectionRef.current = newIndex;
        navigate(sections[newIndex]);

        // Throttle scroll for 800ms
        setTimeout(() => {
          isThrottledRef.current = false;
        }, 800);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [navigate]);

  useEffect(() => {
    const index = sections.indexOf(location.pathname);
    if (index !== -1) {
      currentSectionRef.current = index;
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: index * window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [location.pathname]);

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-auto"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="h-screen">
        <Hero />
      </div>
      <div className="h-screen">
        <About />
      </div>
      <div className="h-screen">
        <Projects />
      </div>
      <div className="h-screen">
        {/* 👇 Add scrollable-content class to allow scrolling within */}
        <div className="scrollable-content h-full overflow-y-auto">
          <Skills />
        </div>
      </div>
      <div className="h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default FullPageScrollWrapper;
