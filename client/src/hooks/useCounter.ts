// hooks/useCounter.js
import { useEffect, useState } from 'react';

export const useCounter = () => {
  const [counts, setCounts] = useState({ views: 0, buttons: {} });

  useEffect(() => {
    // Track unique view
    const trackView = async () => {
      if (!localStorage.getItem('portfolio-viewed')) {
        try {
          const response = await fetch('/api/counter?type=view', {
            method: 'POST',
          });
          const data = await response.json();
          setCounts(data);
          localStorage.setItem('portfolio-viewed', 'true');
        } catch (error) {
          console.error('Error tracking view:', error);
        }
      } else {
        // Just get current counts if already viewed
        fetch('/api/counter')
          .then(res => res.json())
          .then(setCounts)
          .catch(console.error);
      }
    };

    trackView();
  }, []);

  const trackClick = async (buttonName: string) => {
    const storageKey = `portfolio-clicked-${buttonName}`;
    
    if (!localStorage.getItem(storageKey)) {
      try {
        const response = await fetch(`/api/counter?type=click&button=${buttonName}`, {
          method: 'POST',
        });
        const data = await response.json();
        setCounts(data);
        localStorage.setItem(storageKey, 'true');
      } catch (error) {
        console.error('Error tracking click:', error);
      }
    }
  };

  return { counts, trackClick };
};
