import { useState, useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const TestimonialsSection = ({ testimonials }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="bg-gradient-to-br from-cream-50 to-sage-50/70 section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Algunos testimonios de quienes comenzaron este camino">
          Voces que inspiran{' '}
          <span className="text-sage-600">cambio real</span>
        </SectionTitle>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative p-6 lg:p-8 bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-soft hover:shadow-elevated transition-all duration-700 hover:-translate-y-2 border border-sage-100/50 mb-6 last:mb-0 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Comillas decorativas más sutiles */}
              <div className="absolute top-6 right-6 text-sage-200/60 font-display text-5xl leading-none">"</div>

              <p className="text-stone-600 leading-relaxed mb-8 text-lg relative z-10 italic">
                {testimonial.text}
              </p>

              <div className="border-t border-sage-100/50 pt-6">
                <div>
                  <p className="font-semibold text-stone-800 text-lg">{testimonial.author}</p>
                  <p className="text-sm text-stone-500 mt-1">{testimonial.role}</p>
                </div>
              </div>

              {/* Acento decorativo sutil en la parte inferior */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-sage-300 to-lavender-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Nota al pie sutil */}
        <div className="text-center mt-16">
          <p className="text-stone-500 text-sm">
            Transformaciones reales de personas que aplicaron las prácticas día a día
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;