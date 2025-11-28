import { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const FormSection = ({ formRef }) => {
  const [formData, setFormData] = useState({ nombre: '', email: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ref, isVisible] = useIntersectionObserver();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Por favor ingresa tu nombre';
    if (!formData.email.trim()) newErrors.email = 'Por favor ingresa tu email';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  return (
    <section 
      ref={formRef}
      className="bg-gradient-to-br from-stone-900 via-stone-800 to-sage-900 section-spacing"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-4">
              Descarga tu guía <span className="text-sage-400">gratuita</span>
            </h2>
            <p className="text-stone-400">
              Comienza hoy tu camino hacia una vida más consciente y en calma
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-sage-500/20 border border-sage-500/50 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-display text-white mb-2">¡Listo!</h3>
              <p className="text-stone-300">Revisa tu correo para descargar la guía</p>
            </div>
          ) : (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
              <div className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-white/10 border rounded-xl text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all ${
                      errors.nombre ? 'border-red-400' : 'border-white/20'
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-sm mt-2">{errors.nombre}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-white/10 border rounded-xl text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all ${
                      errors.email ? 'border-red-400' : 'border-white/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                  )}
                </div>

                <Button 
                  size="lg" 
                  onClick={handleSubmit}
                  className={`w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Quiero mi guía gratuita'
                  )}
                </Button>

                <p className="text-xs text-stone-500 text-center">
                  Al suscribirte aceptas nuestra{' '}
                 <a 
                    href="/MindfulnessWebpage/#/privacidad"
                    className="underline hover:text-stone-400 transition-colors duration-300"
                  >
                    política de privacidad
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormSection;