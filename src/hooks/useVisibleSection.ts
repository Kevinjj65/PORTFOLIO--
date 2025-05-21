import { useEffect, useState } from 'react';

export const useVisibleSection = (sectionIds: string[]) => {
  const [visibleSection, setVisibleSection] = useState<string>('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setVisibleSection(visible.target.id);
        }
      },
      {
        threshold: 0.6, // adjust sensitivity
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return visibleSection;
}; 