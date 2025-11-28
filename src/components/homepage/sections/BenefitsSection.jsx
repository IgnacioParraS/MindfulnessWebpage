import { useState, useEffect, useRef } from 'react';

// Componente individual para cada beneficio
const BenefitItem = ({ benefit, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Contenedor del beneficio */}
      <div className="flex items-start gap-6 group">
        {/* Número decorativo */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center text-white font-display text-lg font-medium shadow-lg shadow-sage-300/50 z-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            {benefit.id}
          </div>
          {/* Línea vertical entre nodos */}
          {index < 2 && (
            <div className="w-1 h-16 bg-gradient-to-b from-sage-300/60 to-sage-200/40 mt-4 rounded-full" />
          )}
        </div>

        {/* Contenido del beneficio */}
        <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-500 border border-sage-100/50 hover:border-sage-300/50 group-hover:translate-x-2 mb-4">
          <h3 className="text-2xl font-display text-stone-800 mb-4 group-hover:text-sage-700 transition-colors duration-300">
            {benefit.title}
          </h3>
          <p className="text-stone-600 leading-relaxed text-lg">
            {benefit.description}
          </p>

          {/* Acento decorativo */}
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-sage-400 to-lavender-400 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
};

// Contenido completo de los beneficios
const BENEFITS_CONTENT = [
  {
    id: 1,
    title: 'Empiezas a escucharte de verdad',
    description: 'En medio del ruido diario, esta guía te invita a hacer una pausa. A reconocer lo que sientes sin juzgar, como si por fin alguien te dijera: "está bien sentir todo eso". Y desde ahí, algo dentro de ti empieza a calmarse.'
  },
  {
    id: 2,
    title: 'Aprendas a respirar con propósito',
    description: 'No se trata de grandes cambios. Solo de volver a lo más simple: una respiración, una intención al despertar, un instante de presencia. Es increíble cómo algo tan pequeño puede sostenerte cuando todo parece moverse demasiado rápido.'
  },
  {
    id: 3,
    title: 'Vuelvas a casa: tu interior',
    description: 'Este manual no promete perfección, sino algo mucho más real: reconectar contigo. Volver al cuerpo, al ahora, a ese lugar silencioso donde no necesitas hacer nada, solo estar. Y eso, a veces, es lo que más cura.'
  }
];

const BenefitsSection = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const titleRef = useRef(null);
  const sparkleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  // Efecto sparkling aleatorio
  useEffect(() => {
    if (!sparkleRef.current || !imageLoaded) return;

    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle-particle';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 2 + 's';
      sparkleRef.current.appendChild(sparkle);

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 2000);
    };

    const interval = setInterval(createSparkle, 300);
    return () => clearInterval(interval);
  }, [imageLoaded]);

  return (
    <section id="beneficios" className="relative bg-gradient-to-br from-cream-50 via-white to-sage-50/50 overflow-hidden section-spacing">
      {/* Fondos decorativos sutiles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-lavender-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título de la sección */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight mb-6 text-stone-800">
            Por qué este manual{' '}
            <span className="text-sage-600 relative">
              es para ti
              <div className="absolute bottom-2 left-0 w-full h-3 bg-sage-200/40 -z-10 transform -rotate-1"></div>
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Un camino suave hacia tu bienestar interior, paso a paso
          </p>
        </div>

        {/* Layout: Texto a la izquierda, Imagen super grande a la derecha */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Columna izquierda: Beneficios */}
          <div className="space-y-8 lg:space-y-10">
            {BENEFITS_CONTENT.map((benefit, index) => (
              <BenefitItem key={benefit.id} benefit={benefit} index={index} />
            ))}
          </div>

          {/* Columna derecha: Imagen SUPER GRANDE con efecto sparkling */}
          <div className="relative flex justify-center lg:justify-end items-start mt-8 lg:mt-0">
            <div className="relative w-full">
              {/* Contenedor de la imagen */}
              <div className="relative rounded-[2rem] lg:rounded-[4rem] overflow-hidden transform transition-transform duration-700 hover:scale-105">
                {/* Efectos de fondo gradiente */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-100/40 via-lavender-100/30 to-cream-100/50 rounded-[4rem]"></div>
                
                {/* Imagen principal - MUY GRANDE */}
                <img 
                  src="meditate5.png" 
                  alt="Meditación y serenidad" 
                  className="w-full h-auto object-cover relative z-10"
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  style={{ 
                    filter: 'drop-shadow(0 30px 60px rgba(93, 114, 96, 0.2))'
                  }}
                />
                
                {/* Contenedor para partículas sparkling */}
                <div 
                  ref={sparkleRef}
                  className="absolute inset-0 z-20 pointer-events-none"
                ></div>

                {/* Efecto de brillo suave */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-lavender-100/5 mix-blend-soft-light rounded-[4rem]"></div>
              </div>

              {/* Elementos decorativos flotantes */}
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-24 h-24 lg:w-48 lg:h-48 bg-gradient-to-br from-lavender-300/30 to-transparent rounded-full blur-xl lg:blur-2xl -z-10 animate-pulse-soft"></div>
              <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-8 w-20 h-20 lg:w-40 lg:h-40 bg-gradient-to-tr from-sage-300/30 to-transparent rounded-full blur-xl lg:blur-2xl -z-10 animate-pulse-soft" style={{animationDelay: '1s'}}></div>
              
              {/* Círculos decorativos pequeños */}
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-lavender-400/20 rounded-full animate-float"></div>
              <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-sage-400/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;