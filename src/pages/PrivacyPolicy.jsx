import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const PrivacyPolicy = () => {
  useEffect(() => {
    // Fix para navegación entre páginas
    const timer = setTimeout(() => {
      document.body.style.opacity = '1';
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-sage-50/30">
      {/* Header */}
      <header className="relative py-12 lg:py-24 bg-gradient-to-br from-sage-600 to-sage-700 text-white overflow-hidden">
        <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-20">
          {/* CAMBIAR ESTAS 9 LÍNEAS: */}
          <Link 
            to="/"  // <-- Cambiar href por to
            className="group flex items-center gap-2 text-sage-100 hover:text-white transition-colors duration-300"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-display italic text-sm lg:text-base">Volver al inicio</span>
          </Link>
        </div>
          
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 lg:pt-0">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light mb-4 lg:mb-6 leading-tight">
              Política de{' '}
              <span className="text-cream-200 italic">Privacidad</span>
            </h1>
            <p className="text-lg md:text-xl text-sage-100 max-w-2xl mx-auto leading-relaxed px-4">
              Tu confianza es nuestro compromiso más valioso
            </p>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="py-12 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Encabezado informativo */}
            <div className="text-center mb-12 lg:mb-16 px-4">
              <p className="text-base md:text-lg text-stone-600 mb-4">
                <strong>www.erikaspoerer.com</strong>
              </p>
              <div className="w-20 lg:w-24 h-1 bg-gradient-to-r from-sage-300 to-lavender-300 rounded-full mx-auto mb-4 lg:mb-6"></div>
              <p className="text-stone-500 italic text-sm md:text-base">
                Última actualización: 5 de junio de 2025
              </p>
            </div>

            {/* Secciones de contenido */}
            <div className="space-y-8 lg:space-y-12 px-4 lg:px-0">
              {/* Sección 1 */}
              <section className="bg-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-soft border border-sage-100/50">
                <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center font-display text-sm lg:text-lg font-medium flex-shrink-0">
                    1
                  </div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-display text-stone-800 leading-tight">
                    Qué datos recopilamos
                  </h2>
                </div>
                <div className="text-stone-600 leading-relaxed space-y-3 lg:space-y-4 text-base lg:text-lg">
                  <p>
                    Cuando usas <strong>www.erikaspoerer.com</strong>, podríamos pedirte algunos datos básicos, como:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2 lg:ml-4">
                    <li>Tu nombre y apellido</li>
                    <li>Tu correo electrónico</li>
                    <li>Tu número de teléfono (si lo ingresas)</li>
                    <li>Tu ciudad y país</li>
                    <li>Datos de uso, como qué páginas visitas dentro del sitio y por cuánto tiempo</li>
                  </ul>
                  <p>
                    También usamos <strong>cookies</strong> (archivos pequeños que tu navegador guarda automáticamente) 
                    para entender mejor cómo navegas por nuestro sitio y así mejorar tu experiencia.
                  </p>
                </div>
              </section>

              {/* Sección 2 */}
              <section className="bg-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-soft border border-sage-100/50">
                <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center font-display text-sm lg:text-lg font-medium flex-shrink-0">
                    2
                  </div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-display text-stone-800 leading-tight">
                    Para qué usamos tus datos
                  </h2>
                </div>
                <div className="text-stone-600 leading-relaxed space-y-3 lg:space-y-4 text-base lg:text-lg">
                  <p>
                    Usamos esta información principalmente para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2 lg:ml-4">
                    <li>Mejorar tu experiencia en el sitio</li>
                    <li>Enviarte información útil o relevante si así lo pediste</li>
                    <li>Comunicarnos contigo si nos escribiste antes</li>
                    <li>Analizar cómo se usa el sitio para hacerlo más útil</li>
                    <li>En algunos casos, enviarte novedades u ofertas relacionadas con nuestros contenidos o servicios (pero solo si aceptas recibirlas)</li>
                  </ul>
                  <p className="bg-sage-50/50 p-3 lg:p-4 rounded-xl border border-sage-200/50 italic text-sm lg:text-base">
                    Solo vamos a enviarte correos con información, recursos o promociones si tú nos das el visto bueno. 
                    Si en algún momento ya no quieres recibirlos, puedes darte de baja fácilmente desde cualquier mensaje que te enviemos.
                  </p>
                </div>
              </section>

              {/* Sección 3 */}
              <section className="bg-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-soft border border-sage-100/50">
                <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center font-display text-sm lg:text-lg font-medium flex-shrink-0">
                    3
                  </div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-display text-stone-800 leading-tight">
                    Con quién compartimos tus datos
                  </h2>
                </div>
                <div className="text-stone-600 leading-relaxed space-y-3 lg:space-y-4 text-base lg:text-lg">
                  <p>
                    <strong>No vendemos ni compartimos tu información con terceros</strong>, salvo en estas situaciones:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2 lg:ml-4">
                    <li>Con servicios externos que nos ayudan a mejorar el sitio (por ejemplo, herramientas de estadísticas o plataformas de pago)</li>
                    <li>Si alguna ley nos obliga a hacerlo</li>
                    <li>Si tú nos das tu permiso explícito</li>
                  </ul>
                  <p className="text-stone-500 italic text-sm lg:text-base">
                    Es posible que estos servicios guarden tu información en otros países y tengan sus propias políticas de privacidad. 
                    Te recomendamos revisar esos términos si quieres saber más.
                  </p>
                </div>
              </section>

              {/* Sección 4 */}
              <section className="bg-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-soft border border-sage-100/50">
                <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center font-display text-sm lg:text-lg font-medium flex-shrink-0">
                    4
                  </div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-display text-stone-800 leading-tight">
                    Enlaces a otros sitios web
                  </h2>
                </div>
                <div className="text-stone-600 leading-relaxed text-base lg:text-lg">
                  <p>
                    A veces compartimos enlaces a otros sitios que nos parecen interesantes o útiles. Pero una vez que sales 
                    de <strong>www.erikaspoerer.com</strong>, ya no podemos garantizar cómo se cuida tu información en esas páginas externas. 
                    Te aconsejamos leer sus políticas de privacidad si decides visitarlas.
                  </p>
                </div>
              </section>

              {/* Sección 5 */}
              <section className="bg-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-soft border border-sage-100/50">
                <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center font-display text-sm lg:text-lg font-medium flex-shrink-0">
                    5
                  </div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-display text-stone-800 leading-tight">
                    Tus derechos
                  </h2>
                </div>
                <div className="text-stone-600 leading-relaxed space-y-3 lg:space-y-4 text-base lg:text-lg">
                  <p className="text-lg lg:text-xl font-display text-sage-600 italic">
                    Tú decides sobre tus datos.
                  </p>
                  <p>Puedes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-2 lg:ml-4">
                    <li>Pedir que eliminemos tus datos</li>
                    <li>Modificar la información que nos diste</li>
                    <li>Decidir no recibir más comunicaciones nuestras</li>
                  </ul>
                  <p className="bg-cream-50/50 p-3 lg:p-4 rounded-xl border border-cream-200/50 text-base lg:text-lg">
                    Solo tienes que escribirnos a{' '}
                    <a href="mailto:contacto@erikaspoerer.com" className="text-sage-600 hover:text-sage-700 underline break-all">
                      contacto@erikaspoerer.com
                    </a>{' '}
                    y te ayudaremos lo antes posible.
                  </p>
                </div>
              </section>

              {/* Sección 6 */}
              <section className="bg-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-soft border border-sage-100/50">
                <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center font-display text-sm lg:text-lg font-medium flex-shrink-0">
                    6
                  </div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-display text-stone-800 leading-tight">
                    Cómo protegemos tu información
                  </h2>
                </div>
                <div className="text-stone-600 leading-relaxed text-base lg:text-lg">
                  <p>
                    Nos tomamos en serio la seguridad de tus datos. Por eso, usamos medidas razonables y actualizadas 
                    para mantener tu información protegida, como tecnologías de encriptación y protocolos seguros. 
                    Aunque ningún sistema es infalible, trabajamos con dedicación para minimizar cualquier riesgo.
                  </p>
                </div>
              </section>

              {/* Sección 7 */}
              <section className="bg-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-soft border border-sage-100/50">
                <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center font-display text-sm lg:text-lg font-medium flex-shrink-0">
                    7
                  </div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-display text-stone-800 leading-tight">
                    Uso por menores de edad
                  </h2>
                </div>
                <div className="text-stone-600 leading-relaxed text-base lg:text-lg">
                  <p>
                    Este sitio no está pensado para menores de 18 años. Si eres padre o madre y crees que tu hijo/a 
                    nos ha dado información personal sin consentimiento, por favor contáctanos.
                  </p>
                </div>
              </section>

              {/* Sección 8 */}
              <section className="bg-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-soft border border-sage-100/50">
                <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center font-display text-sm lg:text-lg font-medium flex-shrink-0">
                    8
                  </div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-display text-stone-800 leading-tight">
                    Cambios a esta política
                  </h2>
                </div>
                <div className="text-stone-600 leading-relaxed text-base lg:text-lg">
                  <p>
                    Si cambiamos algo importante de esta política, lo avisaremos en esta misma página. 
                    Te sugerimos visitarla de vez en cuando para estar al tanto.
                  </p>
                </div>
              </section>

              {/* Sección 9 */}
              <section className="bg-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-soft border border-sage-100/50">
                <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center font-display text-sm lg:text-lg font-medium flex-shrink-0">
                    9
                  </div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-display text-stone-800 leading-tight">
                    Cómo contactarnos
                  </h2>
                </div>
                <div className="text-stone-600 leading-relaxed space-y-3 lg:space-y-4 text-base lg:text-lg">
                  <p>
                    ¿Tienes dudas o quieres hacer valer alguno de tus derechos?
                  </p>
                  <div className="bg-sage-50/50 p-4 lg:p-6 rounded-xl border border-sage-200/50 text-center">
                    <p className="text-base lg:text-lg font-medium text-sage-700 mb-2">
                      Escríbenos a:
                    </p>
                    <a 
                      href="mailto:contacto@erikaspoerer.com" 
                      className="text-lg lg:text-xl font-display text-sage-600 hover:text-sage-700 underline decoration-2 decoration-sage-300 break-all"
                    >
                      contacto@erikaspoerer.com
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Nota final */}
            <div className="text-center mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-sage-200/50 px-4 lg:px-0">
              <p className="text-stone-500 italic text-sm lg:text-base">
                Gracias por confiar en nosotros. Tu privacidad es tan importante como tu bienestar.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;