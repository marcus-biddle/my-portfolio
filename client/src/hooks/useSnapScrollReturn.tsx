import { useEffect, useRef, type RefObject } from 'react';

type UseHalfwaySnapScrollReturn = {
  refs: RefObject<HTMLElement | null>[];
};

const useHalfwaySnapScroll = (sectionCount: number): UseHalfwaySnapScrollReturn => {
  const refs: RefObject<HTMLElement | null>[] = Array.from({ length: sectionCount }, () => useRef<HTMLElement | null>(null));
  const isScrolling = useRef(false);

  useEffect(() => {
    if (!refs.length) return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrolling.current) return; // prevent triggering during ongoing scroll animation

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bounding = entry.target.getBoundingClientRect();
          if (bounding.top !== 0) { 
            isScrolling.current = true;
            entry.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
              // allow scrolling after animation completes (~500ms)
              isScrolling.current = false;
            }, 600);
          }
        }
      });
    }, options);

    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs]);

  return { refs };
};

export default useHalfwaySnapScroll;
