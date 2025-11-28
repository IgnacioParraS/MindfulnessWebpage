import { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const AboutSection = ({ config }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="bg-white section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`grid lg:grid-cols-5 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Imagen */}
          <div className="lg:col-span-2 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-sage-200 to-lavender-200 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-peach-200 to-sage-200 -z-10" />
            <img
              src={config.author.image}
              alt={config.author.name}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Contenido */}
          <div className="lg:col-span-3 space-y-6">
            <span className="inline-block px-4 py-1 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium">
              Sobre la autora
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-display text-stone-800">
              Un poco de mi historia...
            </h2>

            <div className="space-y-4 text-stone-500 leading-relaxed">
              <p>
                Soy <span className="font-semibold text-stone-800">Erika</span>, Ingeniero, Coach Ejecutivo y de Vida, 
                y Mentora de Mindfulness. Acompaño a personas que buscan reconectar consigo mismas en medio del ritmo 
                acelerado de la vida.
              </p>
              <p>
                Durante más de 15 años trabajé como Ingeniero Civil Industrial liderando equipos en empresas 
                multinacionales. Fue en ese mundo exigente donde descubrí que algo esencial me faltaba:{' '}
                <span className="font-semibold text-sage-600">pausa, presencia, sentido</span>.
              </p>
              <p>
                Cuando conocí el Mindfulness en 2019, mi primer pensamiento fue:{' '}
                <span className="italic text-sage-600 font-medium">
                  "¿Por qué nadie me enseñó esto antes? ¡Esto lo debería conocer todo el mundo!"
                </span>
              </p>
              <p>
                Hoy, una de mis misiones es compartir esta transformadora práctica para que llegue a más personas.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100">
              <p className="text-sm text-stone-400 italic mb-2">Autora del Manual:</p>
              <p className="font-display text-xl text-sage-600">
                {config.book.title}: {config.book.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;