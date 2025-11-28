import { useState, useEffect } from 'react';
import FloatingOrb from '../ui/FloatingOrb';
import Button from '../ui/Button';

const HeroSection = ({ onScrollToForm, config }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-sage-50 section-spacing">
      {/* Elementos decorativos de fondo */}
      <FloatingOrb className="w-96 h-96 bg-sage-300 -top-48 -left-48" delay={0} />
      <FloatingOrb className="w-64 h-64 bg-lavender-300 top-1/4 right-0" delay={2} />
      <FloatingOrb className="w-80 h-80 bg-peach-200 bottom-0 left-1/3" delay={4} />
      
      {/* Patrón de puntos sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contenido izquierdo */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/80 backdrop-blur-sm rounded-full border border-sage-200/50">
              <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse" />
              <span className="text-sm text-sage-700 font-medium">Guía gratuita disponible</span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-light text-primary leading-[1.1]">
              Descubre cómo{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-sage-600">cultivar</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="3" fill="none" className="text-sage-300" />
                </svg>
              </span>
              {' '}tu calma interior
            </h1>

            {/* Subtítulo */}
            <p className="text-xl text-secondary leading-relaxed max-w-xl">
              Comienza a reducir el estrés y reconectar con tus emociones en solo 
              <span className="font-semibold text-stone-700"> 10 minutos al día</span>, 
              sin necesidad de experiencia previa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" onClick={onScrollToForm}>
                Descargar gratis
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conocer más
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-6">
              <p className="text-base text-stone-500">
                <span className="font-semibold text-lavender-600">+100</span>
                {' '}personas ya lo descargaron
              </p>
            </div>
          </div>

          {/* Imagen del libro */}
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Círculo decorativo detrás */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] aspect-square rounded-full bg-gradient-to-br from-sage-100 to-lavender-100 animate-spin-slow" />
            </div>
            
            {/* Imagen del libro */}
            <div className="relative z-10 flex justify-center">
              <img 
                src={config.book.image}
                alt={config.book.title}
                className="w-full max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating badge - 5 ideas */}
            <div className="absolute top-6 -left-2 lg:top-10 lg:-left-4 xl:left-0 animate-float hidden sm:block">
              <div className="relative">
                {/* Sparkles/Brillos */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-sage-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                <div className="absolute -top-3 right-4 w-2 h-2 bg-sage-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-sage-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-4 -left-3 w-2 h-2 bg-sage-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                
                {/* Imagen principal */}
                <div className="relative w-32 h-32 rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl p-3 border-2 border-sage-100/50">
                  <img 
                    src="5ideas.png" 
                    alt="5 ideas prácticas" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge - 10 minutos */}
            <div className="absolute bottom-16 -right-2 lg:bottom-20 lg:-right-4 xl:right-0 animate-float hidden sm:block" style={{ animationDelay: '2s' }}>
              <div className="relative">
                {/* Sparkles/Brillos */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-lavender-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                <div className="absolute -top-3 left-4 w-2 h-2 bg-lavender-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-lavender-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-4 -right-3 w-2 h-2 bg-lavender-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                
                {/* Imagen principal */}
                <div className="relative w-32 h-32 rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl p-3 border-2 border-lavender-100/50">
                  <img 
                    src="10minutes.png" 
                    alt="10 minutos por día" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;