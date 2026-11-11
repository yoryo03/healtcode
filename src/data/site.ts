// Edita aquí el contenido de la landing. Los componentes leen de este archivo.

export const site = {
  name: 'Tu Empresa',
  description: 'Soluciones digitales que hacen crecer tu negocio.',
  email: 'contacto@tuempresa.com',
  phone: '+57 300 000 0000',
  whatsapp: '573000000000',
};

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export const hero = {
  eyebrow: 'Nuevo · Lanzamiento 2026',
  title: 'Haz crecer tu negocio con una presencia digital que vende',
  subtitle:
    'Diseñamos, construimos y optimizamos tu marca en línea para que atraigas más clientes sin complicaciones.',
  primaryCta: { label: 'Agenda una llamada', href: '#contacto' },
  secondaryCta: { label: 'Ver servicios', href: '#servicios' },
};

export const services = [
  {
    icon: '🎨',
    title: 'Diseño de marca',
    description: 'Identidad visual coherente que transmite confianza y te diferencia de la competencia.',
  },
  {
    icon: '⚡',
    title: 'Desarrollo web',
    description: 'Sitios rápidos, seguros y fáciles de administrar, pensados para convertir visitas en clientes.',
  },
  {
    icon: '📈',
    title: 'Marketing digital',
    description: 'Estrategias en redes y buscadores para llegar a las personas correctas en el momento correcto.',
  },
];

export const stats = [
  { value: '+120', label: 'Clientes atendidos' },
  { value: '98%', label: 'Satisfacción' },
  { value: '8 años', label: 'De experiencia' },
];

export const testimonials = [
  {
    quote: 'Desde que lanzamos el nuevo sitio, nuestras solicitudes de cotización se duplicaron.',
    name: 'María Gómez',
    role: 'Gerente, Café Andino',
  },
  {
    quote: 'Un equipo cercano, puntual y con muy buen criterio. Lo recomiendo sin dudarlo.',
    name: 'Carlos Ruiz',
    role: 'Fundador, Ruiz Logística',
  },
];
