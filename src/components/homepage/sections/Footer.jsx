import { useState, useEffect, useRef } from 'react';

const Footer = ({ config }) => {
  return (
    <footer className="relative overflow-hidden section-spacing">
      {/* Fondo con imagen */}
      <div className="absolute inset-0">
        <img 
          src="meditate4.png" 
          alt="Fondo meditación" 
          className="w-full h-full object-cover"
        />
        {/* Overlay sutil para mejorar contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-800/40 to-stone-900/50" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Título principal con mejor contraste */}
          <h2 className="text-4xl lg:text-5xl font-display font-light mb-12 text-white drop-shadow-lg">
            Hacia una vida más{' '}
            <span className="italic text-cream-100">plena</span>
          </h2>
          
          {/* Información de contacto con jerarquía clara */}
          <div className="space-y-3 mb-12">
            <p className="text-2xl font-display text-white font-medium drop-shadow">
              {config.author.name}
            </p>
            <p className="text-lg text-cream-200 font-light drop-shadow">
              {config.author.title}
            </p>
            <p className="text-cream-300 font-medium drop-shadow">
              @{config.author.instagram.replace('@', '')}
            </p>
          </div>

          {/* Instagram con mejor diseño */}
          <div className="flex justify-center mb-16">
            <a 
              href="https://www.instagram.com/es.coachingymindfulness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg"
            >
              <span className="sr-only">Instagram</span>
              <img 
                src="instagram.png" 
                alt="Instagram" 
                className="w-7 h-7 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </a>
          </div>

          {/* Footer inferior con mejor separación */}
          <div className="pt-8 border-t border-white/30 space-y-4">
            <p className="text-cream-100 text-sm font-light flex items-center justify-center gap-2 drop-shadow">
              Creado con{' '}
              <span className="heart-icon text-lg">💜</span>{' '}
              en Chile
            </p>
            <a 
              href="/MindfulnessWebpage/#/privacidad"
              className="inline-block text-cream-200 hover:text-white transition-all duration-300 text-sm font-medium hover:underline underline-offset-4"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;