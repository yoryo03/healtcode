// ============================================================
//  CONTENIDO DE LA LANDING DE HEALTHCODE
//  Edita aquí los textos: los componentes solo leen este archivo.
//  Lo marcado con "EJEMPLO" es de relleno. Reemplázalo con datos
//  reales antes de publicar, o deja el arreglo vacío ([]) para
//  ocultar esa sección.
// ============================================================

export const site = {
  name: 'HealthCode',
  legalName: 'HealthCode', // EJEMPLO: razón social para el pie de página (el brief de marca menciona "Alejandro Colmenares y Compañía")
  tagline: 'Software médico para consultorios, clínicas e IPS en Colombia',
  description:
    'Gestión de turnos, historia clínica, facturación electrónica DIAN y nómina electrónica en una sola plataforma en la nube, hecha para la norma colombiana.',
  email: 'comercial@healthcode.com.co', // EJEMPLO
  phone: '+57 300 000 0000', // EJEMPLO
  whatsapp: '573000000000', // EJEMPLO: indicativo + número, sin "+" ni espacios
  city: 'Bogotá, Colombia', // EJEMPLO
  loginUrl: '#', // EJEMPLO: enlace a la aplicación (p. ej. https://app.healthcode.com.co)
};

/** Barra superior. Pon `null` para ocultarla. */
export const announcement: { text: string; cta: string; href: string } | null = {
  text: 'Nuevo: nómina electrónica ya disponible en HealthCode',
  cta: 'Conoce más',
  href: '#funcionalidades',
};

export const nav = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Planes', href: '#planes' },
  { label: 'Normativa', href: '#normativa' },
  { label: 'Preguntas', href: '#faq' },
];

export const hero = {
  eyebrow: 'Hecho para la norma colombiana · DIAN y Ministerio de Salud',
  title: 'Software médico para consultorios, clínicas e IPS en Colombia',
  subtitle:
    'Gestión de turnos, historia clínica, facturación electrónica y nómina electrónica en una sola plataforma. Funciona en la nube, sin instalar nada.',
  primaryCta: { label: 'Agendar demostración', href: '#demo' },
  secondaryCta: { label: 'Ver planes', href: '#planes' },
  highlightsTitle: 'Lo que incluye',
  highlights: [
    'Agenda y gestión de turnos',
    'Factura electrónica validada por la DIAN',
    'Nómina electrónica de tu equipo',
    'RIPS y reportes para el Ministerio',
  ],
  // EJEMPLO: cifras del hero
  proof: ['Más de 150 consultorios e IPS', 'Desde $89.000 al mes por profesional'],
};

/** Datos del mockup de producto que se muestra en el hero (solo ilustrativos). */
export const mockup = {
  sede: 'app.healthcode.co · Sede principal',
  fecha: 'Agenda · Jueves 15 oct',
  turnos: [
    { hora: '8:30', paciente: 'Ana María Gómez', servicio: 'Control', profesional: 'Dra. Méndez', estado: 'Confirmado' },
    { hora: '9:00', paciente: 'Carlos Ortiz', servicio: 'Primera vez', profesional: 'Dr. Rojas', estado: 'En sala' },
    { hora: '9:30', paciente: 'Lucía Herrera', servicio: 'Control', profesional: 'Dra. Méndez', estado: 'Pendiente' },
    { hora: '10:00', paciente: 'Jorge Salazar', servicio: 'Fisioterapia', profesional: 'Ft. Pardo', estado: 'Confirmado' },
  ],
  factura: { numero: 'FE-1048', detalle: 'Consulta de control · EPS', total: '$120.000', estado: 'Aceptada por la DIAN · CUFE' },
  nomina: { periodo: 'Nómina · Octubre 2026', detalle: '12 colaboradores · $38.450.000', estado: 'Transmitida · CUNE generado' },
  resumen: '12 turnos hoy · 1 en sala',
  whatsapp: { titulo: 'Turno confirmado por WhatsApp', detalle: 'Ana María Gómez · 8:30 a. m.' },
};

// EJEMPLO: cifras de confianza
export const stats = [
  { value: '+150', label: 'consultorios, clínicas e IPS' },
  { value: '+40.000', label: 'turnos gestionados al mes' },
  { value: '99,9 %', label: 'de disponibilidad' },
  { value: '< 2 h', label: 'tiempo de respuesta del soporte' },
];

export const valueProps = [
  {
    icon: 'link',
    title: 'Todo conectado',
    description: 'Lo que registras en la consulta alimenta el turno, la factura, el RIPS y la nómina. Nada se digita dos veces.',
  },
  {
    icon: 'shield',
    title: 'Hecho para la norma',
    description: 'Factura electrónica validada por la DIAN, RIPS para el Ministerio y nómina electrónica. Cuando cambia la norma, actualizamos sin costo.',
  },
  {
    icon: 'cloud',
    title: 'En la nube',
    description: 'Entras desde el navegador en cualquier sede. Sin servidores, con respaldos automáticos y datos cifrados.',
  },
  {
    icon: 'headset',
    title: 'Soporte en Colombia',
    description: 'Un equipo que conoce el sector salud te acompaña en la implementación y en el día a día, por WhatsApp.',
  },
];

export type Feature = { icon: string; title: string; description: string; bullets: string[]; badge?: string };

export const features: Feature[] = [
  {
    icon: 'calendar',
    title: 'Gestión de turnos y agenda',
    description: 'Agenda por profesional, sede y consultorio, con confirmación automática y llamado de turnos en sala.',
    bullets: [
      'Turnos por día, semana o mes, con bloqueos y citas recurrentes',
      'Confirmación y recordatorios por WhatsApp',
      'Agendamiento en línea desde tu enlace o redes',
      'Sala de espera y llamado de turnos en pantalla',
    ],
  },
  {
    icon: 'file-check',
    title: 'Facturación electrónica',
    description: 'Factura desde la atención a particulares, prepagadas y EPS, con validación previa de la DIAN.',
    bullets: [
      'CUFE y representación gráfica en PDF enviados al pagador',
      'Notas crédito y débito',
      'Facturación masiva de atenciones con su RIPS',
      'Reportes de cartera y recaudo',
    ],
  },
  {
    icon: 'banknote',
    title: 'Nómina electrónica',
    badge: 'Nuevo',
    description: 'Liquida y transmite a la DIAN la nómina electrónica de tu equipo desde la misma plataforma.',
    bullets: [
      'Documento soporte de pago de nómina con CUNE',
      'Notas de ajuste',
      'Devengados, deducciones, horas extra e incapacidades',
      'Historial por colaborador y exportación contable',
    ],
  },
  {
    icon: 'clipboard',
    title: 'Historia clínica electrónica',
    description: 'Formatos por especialidad, evoluciones, órdenes y consentimientos con firma digital.',
    bullets: [
      'Plantillas por especialidad y signos vitales',
      'Órdenes, fórmulas e incapacidades',
      'Consentimiento informado con firma en pantalla',
      'Adjuntos y resultados de laboratorio',
    ],
  },
  {
    icon: 'chart',
    title: 'RIPS y reportes',
    description: 'Genera y valida los RIPS ante el Ministerio y sigue los indicadores de tu institución en tiempo real.',
    bullets: [
      'RIPS en JSON con su CUV',
      'Indicadores de atención, facturación y recaudo',
      'Exportación a Excel y a tu contabilidad',
      'Trazabilidad por usuario y sede',
    ],
  },
  {
    icon: 'users',
    title: 'Portal del paciente',
    description: 'Tus pacientes agendan, confirman y consultan sus documentos en línea, sin llamar a recepción.',
    bullets: [
      'Agendamiento en línea las 24 horas',
      'Confirmación de turnos por WhatsApp',
      'Descarga de facturas, órdenes e historial',
      'Encuestas de satisfacción',
    ],
  },
];

export const audiences = [
  {
    icon: 'stethoscope',
    title: 'Consultorios',
    description: 'Para el profesional independiente que quiere agenda, historia y factura en un solo lugar, sin complicarse.',
    bullets: ['Un usuario por profesional; recepción sin costo', 'Factura electrónica desde el primer día', 'Listo en menos de una semana'],
  },
  {
    icon: 'building',
    title: 'Clínicas',
    description: 'Para clínicas con varios profesionales, especialidades y sedes que necesitan orden y control.',
    bullets: ['Agenda por sede y especialidad', 'Nómina electrónica de todo el equipo', 'Indicadores por profesional y sede'],
  },
  {
    icon: 'hospital',
    title: 'IPS',
    description: 'Para IPS y redes con alto volumen, contratos con EPS y obligaciones de reporte ante el Ministerio.',
    bullets: ['RIPS validados y facturación masiva a EPS', 'Soporte para habilitación e interoperabilidad', 'Implementación y capacitación en sitio'],
  },
];

export const steps = [
  {
    title: 'Configura tu institución',
    description: 'Cargas sedes, profesionales, servicios y tarifas. Migramos la información de tu software actual sin costo.',
  },
  {
    title: 'Agenda y atiende',
    description: 'Tus pacientes agendan en línea o por WhatsApp; el turno llega a la agenda y el profesional registra la atención.',
  },
  {
    title: 'Factura y valida',
    description: 'Desde la atención se genera la factura electrónica, se valida ante la DIAN y el RIPS queda listo con su CUV.',
  },
  {
    title: 'Liquida la nómina',
    description: 'Al cierre de mes liquidas y transmites a la DIAN la nómina electrónica de tu equipo desde el mismo sistema.',
  },
];

export type Plan = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

// EJEMPLO: planes y precios
export const pricing = {
  title: 'Planes y precios',
  subtitle: 'Precios por profesional, IVA incluido. Sin permanencia y con 15 días de prueba gratis.',
  note: 'Cada profesional que atiende tiene su usuario; los usuarios de recepción y secretaría no tienen costo. El pago anual tiene 10 % de descuento.',
  plans: [
    {
      name: 'Consultorio',
      price: '$89.000',
      period: '/ mes por profesional',
      description: 'Para profesionales independientes.',
      features: [
        'Agenda y gestión de turnos',
        'Historia clínica electrónica',
        'Factura electrónica (hasta 100 al mes)',
        'RIPS con su CUV',
        'Soporte por WhatsApp',
      ],
      cta: { label: 'Empezar prueba gratis', href: '#demo' },
    },
    {
      name: 'Clínica',
      price: '$149.000',
      period: '/ mes por profesional',
      description: 'Para clínicas con varios profesionales y sedes.',
      featured: true,
      features: [
        'Todo lo del plan Consultorio',
        'Factura electrónica sin límite',
        'Nómina electrónica',
        'Agendamiento en línea y recordatorios por WhatsApp',
        'Hasta 10 sedes',
        'Reportes e indicadores',
      ],
      cta: { label: 'Empezar prueba gratis', href: '#demo' },
    },
    {
      name: 'IPS',
      price: 'A tu medida',
      period: 'según sedes y volumen',
      description: 'Para IPS y redes con alto volumen.',
      features: [
        'Todo lo del plan Clínica',
        'Sedes y usuarios ilimitados',
        'Contratos y facturación masiva a EPS',
        'Interoperabilidad y habilitación',
        'Implementación y capacitación en sitio',
        'Gerente de cuenta',
      ],
      cta: { label: 'Hablar con un asesor', href: '#demo' },
    },
  ] as Plan[],
};

// Verifica estas referencias con tu equipo contable y jurídico antes de publicar.
export const compliance = [
  {
    title: 'Factura electrónica',
    authority: 'DIAN',
    reference: 'Resolución 000165 de 2023',
    description: 'Validación previa, CUFE y representación gráfica según los requisitos de la DIAN.',
  },
  {
    title: 'Nómina electrónica',
    authority: 'DIAN',
    reference: 'Resolución 000013 de 2021',
    description: 'Documento soporte de pago de nómina electrónica con CUNE y notas de ajuste.',
  },
  {
    title: 'RIPS',
    authority: 'Ministerio de Salud',
    reference: 'Resolución 948 de 2026',
    description: 'RIPS como soporte de la factura electrónica en salud, validados con su CUV.',
  },
  {
    title: 'Historia clínica',
    authority: 'Ministerio de Salud',
    reference: 'Res. 1995 de 1999 · Ley 2015 de 2020',
    description: 'Diligenciamiento, custodia y conservación de la historia clínica e interoperabilidad.',
  },
  {
    title: 'Protección de datos',
    authority: 'SIC',
    reference: 'Ley 1581 de 2012',
    description: 'Tratamiento de datos personales y datos sensibles de salud, con consentimiento y trazabilidad.',
  },
  {
    title: 'Habilitación',
    authority: 'Ministerio de Salud',
    reference: 'Resolución 3100 de 2019',
    description: 'Soporte documental para la habilitación de tu consultorio, clínica o IPS.',
  },
];

// EJEMPLO: testimonios. Déjalo vacío ([]) para ocultar la sección.
export const testimonials = [
  {
    quote: 'Pasamos de tres programas distintos a uno solo. La facturación a la EPS que antes tomaba una semana ahora sale el mismo día.',
    name: 'Dra. Paula Méndez',
    role: 'Directora médica · Clínica Santa Ana',
  },
  {
    quote: 'La confirmación de turnos por WhatsApp nos bajó las inasistencias a la mitad. Y la nómina electrónica la hacemos en una tarde.',
    name: 'Andrés Rojas',
    role: 'Administrador · IPS Vida Plena',
  },
  {
    quote: 'Soy independiente y no sabía nada de facturación electrónica. Me acompañaron en todo y en una semana estaba facturando.',
    name: 'Dr. Luis Carlos Ruiz',
    role: 'Medicina general · Consultorio particular',
  },
];

export const demo = {
  eyebrow: 'Demostración en vivo',
  title: 'Ve HealthCode en vivo',
  subtitle: 'Un asesor te muestra la agenda, la facturación electrónica y la nómina funcionando con el caso de tu institución.',
  bullets: [
    'Con los flujos de tu especialidad o de tu IPS',
    'Resolvemos tus dudas sobre planes y precios',
    'Te explicamos cómo migrar tu información',
  ],
  formTitle: 'Agenda una demostración',
  formSubtitle: 'Déjanos tus datos y te contactamos en menos de un día hábil.',
  institutionTypes: ['Consultorio', 'Clínica', 'IPS', 'Otro'],
  submitLabel: 'Solicitar demostración',
  privacyNote: 'Al enviar aceptas nuestra política de tratamiento de datos personales.',
};

export const faq = [
  {
    q: '¿Qué es HealthCode y para qué sirve?',
    a: 'Es la plataforma donde llevas la agenda de turnos, la historia clínica, la facturación electrónica, los RIPS y la nómina electrónica de tu institución. Todo está conectado: lo que registras en la consulta alimenta la factura y el RIPS.',
  },
  {
    q: '¿Necesito instalar algo o comprar servidores?',
    a: 'No. HealthCode funciona en la nube: entras desde el navegador, sin instalar nada, y las actualizaciones y los respaldos son automáticos.',
  },
  {
    q: '¿Sirve para un consultorio independiente y para una IPS?',
    a: 'Sí. Lo usan desde profesionales independientes hasta IPS con varias sedes. El plan Clínica permite hasta 10 sedes y el plan IPS, sedes ilimitadas.',
  },
  {
    q: '¿La facturación electrónica cumple con la DIAN?',
    a: 'Sí. Las facturas se validan ante la DIAN antes de entregarse al pagador, con su CUFE, el XML y la representación gráfica en PDF. También emitimos notas crédito y débito.',
  },
  {
    q: '¿Cómo funciona la nómina electrónica?',
    a: 'Registras a tus colaboradores con sus devengados y deducciones, liquidas el periodo y HealthCode genera y transmite a la DIAN el documento soporte de pago de nómina electrónica con su CUNE. Si hay que corregir, emites la nota de ajuste desde el mismo lugar.',
  },
  {
    q: '¿Puedo traer la información de mi software actual?',
    a: 'Sí. La migración de pacientes, agenda e historia clínica viene incluida en todos los planes.',
  },
  {
    q: '¿Hay cláusulas de permanencia?',
    a: 'No. Puedes cambiar o cancelar tu plan cuando quieras.',
  },
  {
    q: '¿Hay prueba gratis?',
    a: 'Sí. Todos los planes tienen 15 días de prueba gratis, sin tarjeta de crédito.',
  },
];

export const finalCta = {
  title: 'Empieza hoy.',
  subtitle: 'Desde $89.000 al mes por profesional, IVA incluido. Sin permanencia.', // EJEMPLO
  primary: { label: 'Agendar demostración', href: '#demo' },
  secondary: { label: 'Hablar por WhatsApp' },
};

export const footer = {
  columns: [
    {
      title: 'Producto',
      links: [
        { label: 'Funcionalidades', href: '#funcionalidades' },
        { label: 'Cómo funciona', href: '#como-funciona' },
        { label: 'Planes y precios', href: '#planes' },
        { label: 'Normativa', href: '#normativa' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Agendar demostración', href: '#demo' },
        { label: 'Preguntas frecuentes', href: '#faq' },
        { label: 'Contacto', href: '#demo' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Términos y condiciones', href: '#' }, // EJEMPLO
        { label: 'Política de tratamiento de datos', href: '#' }, // EJEMPLO
        { label: 'Aviso de privacidad', href: '#' }, // EJEMPLO
      ],
    },
  ],
};
