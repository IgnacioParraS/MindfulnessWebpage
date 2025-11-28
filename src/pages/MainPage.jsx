import { useRef, useEffect } from 'react';

// Importar secciones
import HeroSection from '../components/homepage/sections/HeroSection';
import BenefitsSection from '../components/homepage/sections/BenefitsSection';
import CTABanner from '../components/homepage/sections/CTABanner';
import PainPointsSection from '../components/homepage/sections/PainPointsSection';
import TestimonialsSection from '../components/homepage/sections/TestimonialsSection';
import AboutSection from '../components/homepage/sections/AboutSection';
import FormSection from '../components/homepage/sections/FormSection';
import Footer from '../components/homepage/sections/Footer';

// ============================================
// CONFIGURACIÓN Y DATOS
// ============================================
const CONFIG = {
  author: {
    name: 'Erika Spaerer',
    title: 'Mindfulness Mentor & Life Coach',
    instagram: '@escoachingymindfulness',
    image: 'erika.png'
  },
  book: {
    title: 'Despierta tu Calma Interior',
    subtitle: '5 claves para cultivar tu calma mental en un mundo acelerado',
    image: 'book.png'
  }
};


const PAIN_POINTS = [
  {
    id: 1,
    title: 'Tu mente va de un pensamiento a otro sin descanso',
    description: 'Es porque estás atrapado en la rumiación, ese ciclo incesante de pensamientos repetitivos. En esta guía aprenderás a anclarte en el presente usando tus sentidos.',
    image: 'meditate1.png'
  },
  {
    id: 2,
    title: 'Reaccionas de forma desproporcionada y no sabes por qué',
    description: 'Has perdido conexión con tus emociones en el momento en que aparecen. Este material te acompaña a reconocer lo que sientes sin juzgarte.',
    image: 'meditate2.png'
  },
  {
    id: 3,
    title: 'Vives en piloto automático y se te escapa el presente',
    description: 'La prisa y la distracción han tomado el control. Esta guía te invita a despertar con intención y volver a ti a través de prácticas simples.',
    image: 'meditate3.png'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    text: 'Por fin encontré una guía que entiende la ansiedad moderna. Las prácticas son tan simples que las incorporé naturalmente a mi rutina.',
    author: 'Ignacio P.',
    role: 'Ingeniero de Software'
  },
  {
    id: 2,
    text: 'Llevaba años buscando calma mental. Esta guía me dio herramientas concretas que realmente funcionan en el día a día.',
    author: 'María G.',
    role: 'Diseñadora UX'
  },
  {
    id: 3,
    text: 'Como profesional bajo estrés constante, estas prácticas me han ayudado a mantener el equilibrio sin complicaciones.',
    author: 'Carlos L.',
    role: 'Gerente de Proyectos'
  }
];

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
function MainPage() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    // Fix para navegación entre páginas
    const timer = setTimeout(() => {
      document.body.style.opacity = '1';
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection onScrollToForm={scrollToForm} config={CONFIG} />
      <BenefitsSection />
      <CTABanner onScrollToForm={scrollToForm} />
      <PainPointsSection painPoints={PAIN_POINTS} />
      <TestimonialsSection testimonials={TESTIMONIALS} />
      <AboutSection config={CONFIG} />
      <FormSection formRef={formRef} />
      <Footer config={CONFIG} />
    </div>
  );
}

export default MainPage;