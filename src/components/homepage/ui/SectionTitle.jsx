import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const SectionTitle = ({ children, subtitle, light = false, center = true }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`${center ? 'text-center' : ''} mb-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight mb-6 ${
        light ? 'text-white' : 'text-stone-800'
      }`}>
        {children}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl ${center ? 'mx-auto' : ''} ${
          light ? 'text-white/80' : 'text-stone-500'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;