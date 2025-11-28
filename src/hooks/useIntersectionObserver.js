import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenVisible) {
        setIsVisible(true);
        setHasBeenVisible(true);
      }
    }, { 
      threshold: 0.1,
      rootMargin: '0px',
      ...options 
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasBeenVisible, options.threshold, options.rootMargin]);

  return [ref, isVisible, hasBeenVisible];
};

export default useIntersectionObserver;