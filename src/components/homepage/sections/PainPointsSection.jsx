import { useState, useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

// Componente individual para cada pain point
const PainPointItem = ({ point, index, isEven }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref} // ✅ ESTA LÍNEA FALTABA - Agregar el ref aquí
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Imagen */}
      <div className={`relative ${isEven ? '' : 'lg:order-2'} order-1 lg:order-none`}>
        <div className={`absolute w-24 h-32 lg:w-32 lg:h-40 rounded-2xl -z-10 ${
          isEven ? '-bottom-4 -left-4 lg:-bottom-6 lg:-left-6' : '-bottom-4 -right-4 lg:-bottom-6 lg:-right-6'
        } ${
          index === 0 ? 'bg-peach-200' : index === 1 ? 'bg-lavender-200' : 'bg-sage-200'
        }`} />
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={point.image}
            alt={point.title}
            className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className={`space-y-6 ${isEven ? '' : 'lg:order-1'} order-2 lg:order-none`}>
        <span className="inline-block px-4 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
          Situación {point.id}
        </span>
        <h3 className="text-2xl lg:text-4xl font-display text-stone-800 leading-tight">
          {point.title}
        </h3>
        <p className="text-lg text-stone-500 leading-relaxed">
          {point.description}
        </p>
      </div>
    </div>
  );
};

// Componente principal
const PainPointsSection = ({ painPoints }) => {
  return (
    <section className="bg-white section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Si alguna de estas situaciones te resulta familiar, este manual fue creado pensando en ti"
        >
          Lo hice especialmente para ti,{' '}
          <span className="text-sage-600">si sientes que...</span>
        </SectionTitle>

        <div className="space-y-24 lg:space-y-32">
          {painPoints.map((point, index) => (
            <PainPointItem 
              key={point.id}
              point={point}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;