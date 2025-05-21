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

  const sections = ['/', '/about', '/projects', '/skills', '/contact'];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = Math.max(0, Math.min(sections.length - 1, currentSectionRef.current + direction));
      
      if (newIndex !== currentSectionRef.current) {
        currentSectionRef.current = newIndex;
        navigate(sections[newIndex]);
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
      className="h-screen overflow-y-auto snap-y snap-mandatory"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="h-screen snap-start">
        <Hero />
      </div>
      <div className="h-screen snap-start">
        <About />
      </div>
      <div className="h-screen snap-start">
        <Projects />
      </div>
      <div className="h-screen snap-start">
        <Skills />
      </div>
      <div className="h-screen snap-start">
        <Contact />
      </div>
    </div>
  );
};

export default FullPageScrollWrapper;
