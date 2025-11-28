import { useState, useEffect, useRef } from 'react';
import FloatingOrb from '../ui/FloatingOrb';
import Button from '../ui/Button';
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";


const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return offset;
};

const CTABanner = ({ onScrollToForm }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const parallaxOffset = useParallax(0.2);

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden min-h-[600px] flex items-center section-spacing"
    >
      {/* Fondo único con imagen meditate6.png */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(meditate6.png)',
          transform: `translateY(${parallaxOffset * 0.3}px)`
        }}
      />
      
      {/* Overlay único más translúcido */}
      <div className="absolute inset-0 bg-sage-900/40 backdrop-blur-[0.5px]" />

      {/* Orbes flotantes */}
      <FloatingOrb className="w-64 h-64 bg-white/5 top-1/4 left-10" />
      <FloatingOrb className="w-48 h-48 bg-lavender-400/10 bottom-1/3 right-20" delay={3} />
      <FloatingOrb className="w-32 h-32 bg-cream-300/5 top-1/2 right-1/4" delay={6} />

      {/* CONTENEDOR PRINCIPAL - Centrado fijo */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          
          {/* Quote decorativo */}
          <div className="flex justify-center mb-6">
            <div className="text-white/30 font-display text-7xl">"</div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white leading-tight mb-8">
            El verdadero cambio comienza cuando una idea poderosa te invita a{' '}
            <span className="italic text-cream-100 relative">
              habitar el presente
            </span>
            <span className="block text-2xl md:text-3xl text-white/80 mt-4 font-normal">
              —y desde ahí, cada gesto, cada emoción y cada pensamiento se transforma.
            </span>
          </h2>
          
          {/* Línea decorativa */}
          <div className="w-32 h-0.5 bg-gradient-to-r from-sage-200/50 to-lavender-200/50 rounded-full mx-auto mb-10"></div>

          <div className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-light space-y-4">
            <p>
              Esta guía es el primer paso para cultivar una mente presente y compasiva;
            </p>
            <p className="italic text-cream-100">
              desde ahí, la calma, la claridad y el equilibrio comienzan a florecer, 
              como una nueva forma de habitar tu vida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={onScrollToForm}
              className="bg-white text-sage-700 hover:bg-cream-50 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl font-medium px-8 py-4 text-lg"
            >
              QUIERO RECIBIR LA GUÍA GRATUITA
            </Button>
          </div>

          {/* Texto secundario */}
          <p className="text-white/60 text-sm mt-6">
            Sin compromisos • 100% gratuito • Método paso a paso
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;