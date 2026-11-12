// ============================================================
//  CONTENIDO DE LA LANDING DE HEALTHCODE
//  Edita aquí los textos: los componentes solo leen este archivo.
//  - Lo marcado con "EJEMPLO" es de relleno: reemplázalo con datos
//    reales antes de publicar, o deja el arreglo vacío ([]) para
//    ocultar esa sección.
//  - `highlight` es la parte del título que se pinta en verde; debe
//    aparecer escrita igual dentro de `title`.
//  - Los textos son propios de HealthCode: no copies frases de otros
//    sitios (Saludtools, Factus, etc.).
// ============================================================

export const site = {
  name: 'HealthCode',
  legalName: 'HealthCode', // EJEMPLO: razón social para el pie de página (el brief de marca menciona "Alejandro Colmenares y Compañía")
  tagline: 'Software de salud con factura electrónica, RIPS, RDA y nómina',
  description:
    'HealthCode conecta agenda, historia clínica, facturación electrónica DIAN, RIPS, RDA y nómina electrónica en una plataforma web para consultorios, clínicas e IPS de Colombia.',
  email: 'comercial@healthcode.com.co', // EJEMPLO
  phone: '+57 300 000 0000', // EJEMPLO
  whatsapp: '573000000000', // EJEMPLO: indicativo + número, sin "+" ni espacios
  whatsappMessage: 'Hola, quiero conocer HealthCode.',
  city: 'Bogotá, Colombia', // EJEMPLO
  loginUrl: '#', // EJEMPLO: enlace a la aplicación (p. ej. https://app.healthcode.com.co)
};

/** Enlace de WhatsApp con un mensaje ya escrito. */
export const whatsappUrl = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

/** Textos cortos de la interfaz que se repiten en varias secciones. */
export const ui = {
  login: 'Ingresar',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
  mainNav: 'Principal',
  whatsapp: 'Escríbenos por WhatsApp',
  whatsappShort: 'WhatsApp',
};

/** Barra superior. Pon `null` para ocultarla. */
export const announcement: { label: string; text: string; cta: string; href: string } | null = {
  label: 'Nuevo',
  text: 'Ya puedes enviar el RDA al Ministerio de Salud desde la historia clínica.',
  cta: 'Mira cómo',
  href: '#rda',
};

export const nav: { label: string; href: string; badge?: string }[] = [
  { label: 'Módulos', href: '#modulos' },
  { label: 'RDA', href: '#rda', badge: 'Nuevo' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Planes', href: '#planes' },
  { label: 'Normativa', href: '#normativa' },
  { label: 'Preguntas', href: '#faq' },
];

export const hero = {
  eyebrow: 'Al día con la DIAN y el Ministerio de Salud',
  // El título se arma así: cada línea fija + la frase que se va escribiendo sola.
  titleLines: ['Tú atiendes,', 'HealthCode'],
  rotating: ['factura', 'reporta los RIPS', 'envía el RDA', 'liquida la nómina', 'agenda tus citas'],
  // Versión completa del título para lectores de pantalla y buscadores.
  srTitle: 'Tú atiendes, HealthCode factura, reporta los RIPS, envía el RDA, liquida la nómina y agenda tus citas.',
  subtitle:
    'Registra la atención una sola vez. HealthCode arma la factura electrónica, los RIPS y el RDA, los envía a la DIAN y al Ministerio de Salud, y te avisa si falta algo.',
  primaryCta: { label: 'Quiero una demo', href: '#demo' },
  whatsappLabel: 'Escríbenos',
  secondaryCta: { label: 'Ver planes', href: '#planes' },
  tagline: 'Para consultorios, clínicas e IPS que se cansaron de digitar lo mismo tres veces.',
  // EJEMPLO: cifra de confianza. Pon `null` para ocultarla.
  proof: { value: '+150', text: 'instituciones de salud ya trabajan con HealthCode' } as { value: string; text: string } | null,
};

/** Datos del mockup de producto que se muestra en el hero (solo ilustrativos). */
export const mockup = {
  url: 'app.healthcode.co',
  sede: 'Sede principal',
  fecha: 'Agenda · Martes 17 nov',
  citasLabel: 'citas',
  turnos: [
    { hora: '8:30', paciente: 'Mariana Duarte', servicio: 'Control', profesional: 'Dra. Celis', estado: 'Confirmada' },
    { hora: '9:00', paciente: 'Felipe Arango', servicio: 'Primera vez', profesional: 'Dr. Vargas', estado: 'En sala' },
    { hora: '9:30', paciente: 'Sofía Cárdenas', servicio: 'Control', profesional: 'Dra. Celis', estado: 'Pendiente' },
    { hora: '10:00', paciente: 'Tomás Quintero', servicio: 'Fisioterapia', profesional: 'Ft. Rincón', estado: 'Confirmada' },
  ],
  resumen: '18 citas hoy · 2 en sala',
  verAgenda: 'Ver agenda',
  factura: {
    label: 'Factura electrónica',
    numero: 'FE-2318',
    detalle: 'Consulta de control · EPS',
    total: '$135.000',
    estado: 'Validada por la DIAN',
  },
  rda: {
    label: 'RDA',
    badge: 'Nuevo',
    titulo: 'Resumen Digital de Atención',
    detalle: 'Mariana Duarte · Control',
    pasos: ['Datos', 'Validado', 'Enviado'],
    estado: 'Recibido por MinSalud',
  },
  chipNomina: { titulo: 'Nómina transmitida a la DIAN', detalle: '14 colaboradores · CUNE generado' },
  chipWhatsapp: { titulo: 'Cita confirmada por WhatsApp', detalle: 'Mariana Duarte · 8:30 a. m.' },
};

// EJEMPLO: cifras de confianza. Deja el arreglo vacío ([]) para ocultarlas.
export const statsLabel = 'HealthCode en cifras';
export const stats = [
  { value: '+150', label: 'instituciones de salud' },
  { value: '+40.000', label: 'citas agendadas al mes' },
  { value: '99,9 %', label: 'de disponibilidad' },
  { value: '< 2 h', label: 'de respuesta en soporte' },
];

/** Bloque destacado del RDA (Resumen Digital de Atención). */
export const rda = {
  badge: 'Nuevo módulo',
  title: 'El RDA, listo en cada atención',
  highlight: 'listo en cada atención',
  subtitle:
    'La interoperabilidad de la historia clínica ya llegó a Colombia. HealthCode arma el Resumen Digital de Atención (RDA) con lo que el profesional registró en la consulta y lo envía al Ministerio de Salud, sin pasos adicionales.',
  bullets: [
    'Se genera solo al cerrar la atención',
    'Revisa los datos obligatorios antes de enviar',
    'Estado de cada envío, en tiempo real',
  ],
  primaryCta: { label: 'Ver el RDA en una demo', href: '#demo' },
  whatsappLabel: 'Preguntar por WhatsApp',
  whatsappMessage: 'Hola, quiero saber cómo HealthCode envía el RDA.',
  // Ilustración del documento (solo visual).
  doc: {
    titulo: 'Resumen Digital de Atención',
    codigo: 'RDA · 2026-11-17 · 0042',
    paciente: 'Mariana Duarte · Consulta de control',
    items: ['Datos del paciente', 'Diagnósticos de la consulta', 'Procedimientos y medicamentos', 'Profesional que atendió'],
    validado: 'Datos completos y validados',
    hora: 'Hoy, 9:12 a. m.',
    estado: 'Enviado al Ministerio de Salud',
  },
};

export const benefits = {
  eyebrow: 'Beneficios',
  title: 'Menos papeleo, más consulta',
  highlight: 'más consulta',
  subtitle: 'Lo que cambia en tu institución cuando todo vive en el mismo lugar.',
  items: [
    {
      icon: 'link',
      title: 'Registras una sola vez',
      description: 'La atención alimenta la factura, los RIPS, el RDA y los indicadores. Se acabó copiar datos de un sistema a otro.',
    },
    {
      icon: 'shield',
      title: 'Siempre al día con la norma',
      description: 'Cuando la DIAN o el Ministerio cambian las reglas, ajustamos la plataforma sin cobrarte nada extra.',
    },
    {
      icon: 'cloud',
      title: 'Desde cualquier sede',
      description: 'Funciona en el navegador del computador, la tablet o el celular, con copias de seguridad automáticas y datos cifrados.',
    },
    {
      icon: 'headset',
      title: 'Gente que te acompaña',
      description: 'Un equipo que conoce el sector salud te ayuda a arrancar y te responde por WhatsApp cuando lo necesitas.',
    },
  ],
};

export type Module = {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  badge?: string;
  /** Tarjeta resaltada con fondo de color. */
  featured?: boolean;
};

export const modules = {
  eyebrow: 'Módulos',
  title: 'Módulos que trabajan en equipo',
  highlight: 'en equipo',
  subtitle: 'Todos comparten la información del paciente, así que nada se digita dos veces.',
  cta: { label: 'Verlo en la demo', href: '#demo' },
  items: [
    {
      icon: 'calendar',
      title: 'Agenda y citas',
      description: 'Agenda por profesional, sede y consultorio, con recordatorios automáticos y sala de espera digital.',
      bullets: [
        'Vista por día, semana o mes, con bloqueos y citas en serie',
        'Confirmación y recordatorios por WhatsApp',
        'Reservas en línea desde tu página o tus redes',
        'Llamado de pacientes en pantalla',
      ],
    },
    {
      icon: 'clipboard',
      title: 'Historia clínica electrónica',
      description: 'Plantillas por especialidad para registrar la consulta rápido y sin que se escape nada.',
      bullets: [
        'Formatos configurables y signos vitales con alertas',
        'Órdenes, fórmulas médicas e incapacidades',
        'Consentimientos firmados en pantalla',
        'Adjuntos, imágenes y resultados de laboratorio',
      ],
    },
    {
      icon: 'file-check',
      title: 'Facturación electrónica',
      description: 'Factura a particulares, prepagadas y EPS desde la misma atención, con validación previa de la DIAN.',
      bullets: [
        'CUFE, XML y PDF enviados al pagador',
        'Notas crédito y débito en un clic',
        'Facturación por lotes con sus RIPS',
        'Cartera y recaudo bajo control',
      ],
    },
    {
      icon: 'file-code',
      title: 'RIPS',
      description: 'Los RIPS salen de cada factura en el formato que pide el Ministerio y se validan para obtener su CUV.',
      bullets: [
        'RIPS en JSON, sin armar archivos a mano',
        'Seguimiento del CUV de cada factura',
        'Alertas de inconsistencias antes de enviar',
        'Descargas e historial por periodo',
      ],
    },
    {
      icon: 'share',
      title: 'RDA e interoperabilidad',
      badge: 'Nuevo',
      featured: true,
      description: 'El Resumen Digital de Atención se arma con la historia clínica y viaja al Ministerio de Salud.',
      bullets: [
        'Se genera al cerrar cada atención',
        'Validación de los datos obligatorios',
        'Estado de cada envío en tiempo real',
        'Lista para compartir la historia clínica entre prestadores',
      ],
    },
    {
      icon: 'banknote',
      title: 'Nómina electrónica',
      description: 'Liquida y transmite a la DIAN la nómina electrónica de todo tu equipo sin salir de HealthCode.',
      bullets: [
        'Documento soporte de nómina con su CUNE',
        'Notas de ajuste cuando hay correcciones',
        'Horas extra, novedades, incapacidades y deducciones',
        'Desprendibles y exportación contable',
      ],
    },
    {
      icon: 'users',
      title: 'Portal del paciente',
      description: 'Tus pacientes reservan, confirman y descargan sus documentos sin llamar a recepción.',
      bullets: [
        'Reservas en línea las 24 horas',
        'Confirmaciones y recordatorios por WhatsApp',
        'Descarga de facturas, órdenes y fórmulas',
        'Encuestas de satisfacción después de la cita',
      ],
    },
    {
      icon: 'chart',
      title: 'Reportes e indicadores',
      description: 'Tableros con lo que pasa en tu institución: citas, facturación, recaudo y productividad.',
      bullets: [
        'Indicadores por sede, profesional y servicio',
        'Exportación a Excel y a tu contabilidad',
        'Trazabilidad de cada acción por usuario',
        'Alertas de citas perdidas y cartera vencida',
      ],
    },
  ] as Module[],
};

/** Diagrama de conexiones. Máximo 6 nodos (3 a cada lado del logo). */
export const ecosystem = {
  eyebrow: 'Todo conectado',
  title: 'Tú dejas de ser el mensajero',
  highlight: 'el mensajero',
  subtitle:
    'HealthCode se conecta con la DIAN, el Ministerio de Salud, las EPS, tus pacientes y tu contabilidad para que la información llegue sola a donde tiene que llegar.',
  primaryCta: { label: 'Quiero verlo funcionando', href: '#demo' },
  secondaryCta: { label: 'Ver cómo funciona', href: '#como-funciona' },
  nodes: [
    { icon: 'landmark', title: 'DIAN', detail: 'Factura y nómina electrónica' },
    { icon: 'shield', title: 'Ministerio de Salud', detail: 'RIPS y RDA' },
    { icon: 'hospital', title: 'EPS', detail: 'Facturas con soportes' },
    { icon: 'users', title: 'Pacientes', detail: 'Citas y recordatorios' },
    { icon: 'stethoscope', title: 'Profesionales', detail: 'Agenda e historia clínica' },
    { icon: 'calculator', title: 'Contabilidad', detail: 'Exportación contable' },
  ],
};

export const audiences = {
  eyebrow: 'Para quién es',
  title: 'Crece contigo, de un consultorio a una red',
  highlight: 'a una red',
  subtitle: 'Empiezas con lo esencial y sumas sedes, profesionales y módulos cuando los necesites.',
  items: [
    {
      icon: 'stethoscope',
      title: 'Consultorios',
      description: 'Para el profesional independiente que quiere atender, facturar y reportar sin volverse experto en normas.',
      bullets: ['Recepción y secretaría sin costo adicional', 'Facturando desde la primera semana', 'Acompañamiento uno a uno al arrancar'],
      cta: { label: 'Ver plan Consultorio', href: '#planes' },
    },
    {
      icon: 'building',
      title: 'Clínicas',
      description: 'Para equipos con varias especialidades y sedes que necesitan orden en la agenda y en las finanzas.',
      bullets: ['Agenda por sede, consultorio y especialidad', 'Nómina electrónica de todo el personal', 'Productividad por profesional y sede'],
      cta: { label: 'Ver plan Clínica', href: '#planes' },
    },
    {
      icon: 'hospital',
      title: 'IPS',
      description: 'Para IPS y redes con alto volumen, contratos con EPS y reportes obligatorios ante el Ministerio.',
      bullets: ['Facturación por lotes con RIPS y RDA', 'Acompañamiento en habilitación e interoperabilidad', 'Implementación y capacitación en sitio'],
      cta: { label: 'Ver plan IPS', href: '#planes' },
    },
  ],
};

/** Recuadros de contacto por WhatsApp que aparecen entre secciones. */
export const ctaBoxes = {
  plans: {
    title: '¿No sabes qué plan le sirve a tu institución?',
    subtitle: 'Cuéntanos cuántos profesionales y sedes tienes y te recomendamos el plan por WhatsApp.',
    label: 'Consultar por WhatsApp',
    message: 'Hola, quiero saber qué plan de HealthCode me sirve.',
  },
  flow: {
    title: '¿Quieres ver este recorrido con tus datos?',
    subtitle: 'En una demo te mostramos cómo quedaría tu institución funcionando con HealthCode.',
    label: 'Escríbenos por WhatsApp',
    message: 'Hola, quiero una demo de HealthCode con los datos de mi institución.',
  },
};

export const howItWorks = {
  eyebrow: 'Cómo funciona',
  title: 'Así trabaja HealthCode por ti',
  highlight: 'por ti',
  subtitle: 'Desde que el paciente reserva hasta que la DIAN y el Ministerio reciben sus documentos.',
  steps: [
    {
      icon: 'calendar',
      title: 'El paciente reserva',
      description: 'Agenda en línea o por WhatsApp y recibe recordatorios automáticos. La cita aparece en la agenda del profesional.',
    },
    {
      icon: 'clipboard',
      title: 'Atiendes y registras',
      description: 'El profesional diligencia la historia clínica con las plantillas de su especialidad. Lo que escribe queda listo para facturar.',
    },
    {
      icon: 'file-check',
      title: 'Facturamos y validamos',
      description: 'HealthCode genera la factura electrónica, la valida con la DIAN y arma los RIPS para obtener su CUV.',
    },
    {
      icon: 'send',
      title: 'Reportamos por ti',
      description: 'El RDA viaja al Ministerio de Salud y la factura llega al paciente o a la EPS con su PDF y su XML.',
    },
  ],
  diagram: {
    title: 'El recorrido de cada atención',
    subtitle: 'Lo que pasa detrás de cámaras cada vez que cierras una consulta.',
    // icon: 'logo' muestra el isotipo de HealthCode.
    actors: [
      { id: 'ips', label: 'Tu institución', icon: 'building' },
      { id: 'hc', label: 'HealthCode', icon: 'logo' },
      { id: 'dian', label: 'DIAN', icon: 'landmark' },
      { id: 'minsalud', label: 'Ministerio de Salud', icon: 'shield' },
      { id: 'pagador', label: 'Paciente o EPS', icon: 'users' },
    ],
    messages: [
      { from: 'ips', to: 'hc', title: 'Atención registrada', detail: 'Historia clínica y servicios' },
      { from: 'hc', to: 'dian', title: 'Factura electrónica', detail: 'XML para validación previa' },
      { from: 'dian', to: 'hc', title: 'Factura validada', detail: 'Con su CUFE' },
      { from: 'hc', to: 'minsalud', title: 'RIPS y RDA', detail: 'Para validar y registrar' },
      { from: 'minsalud', to: 'hc', title: 'CUV y recibido', detail: 'Soportes listos' },
      { from: 'hc', to: 'pagador', title: 'Factura entregada', detail: 'PDF y XML por correo' },
    ],
    note: 'Y en tu tablero ves el estado de cada documento en tiempo real.',
  },
};

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
  eyebrow: 'Planes',
  title: 'Precios claros, sin letra pequeña',
  highlight: 'sin letra pequeña',
  subtitle: 'Pagas por profesional que atiende, con IVA incluido. Sin cláusula de permanencia y con 15 días para probar.',
  featuredLabel: 'El más elegido',
  note: 'Recepción, secretaría y facturación no pagan usuario. Si pagas el año completo, te damos 10 % de descuento.',
  plans: [
    {
      name: 'Consultorio',
      price: '$89.000',
      period: 'al mes por profesional',
      description: 'Para profesionales independientes.',
      features: [
        'Agenda y recordatorios',
        'Historia clínica electrónica',
        'Hasta 100 facturas electrónicas al mes',
        'RIPS y RDA incluidos',
        'Soporte por WhatsApp',
      ],
      cta: { label: 'Probar 15 días gratis', href: '#demo' },
    },
    {
      name: 'Clínica',
      price: '$149.000',
      period: 'al mes por profesional',
      description: 'Para clínicas con varios profesionales y sedes.',
      featured: true,
      features: [
        'Todo lo del plan Consultorio',
        'Facturas electrónicas ilimitadas',
        'Nómina electrónica',
        'Reservas en línea y portal del paciente',
        'Hasta 10 sedes',
        'Tableros e indicadores',
      ],
      cta: { label: 'Probar 15 días gratis', href: '#demo' },
    },
    {
      name: 'IPS',
      price: 'A tu medida',
      period: 'según sedes y volumen',
      description: 'Para IPS y redes con alto volumen.',
      features: [
        'Todo lo del plan Clínica',
        'Sedes y usuarios ilimitados',
        'Facturación por lotes a EPS',
        'Interoperabilidad y acompañamiento en habilitación',
        'Implementación y capacitación en sitio',
        'Gerente de cuenta dedicado',
      ],
      cta: { label: 'Hablar con un asesor', href: '#demo' },
    },
  ] as Plan[],
};

export const compliance = {
  eyebrow: 'Normativa',
  title: 'Cumplir la norma ya no es tu problema',
  highlight: 'ya no es tu problema',
  subtitle:
    'Seguimos cada resolución que aplica a los prestadores de salud en Colombia y la llevamos a la plataforma sin costo adicional.',
  promo: {
    title: 'Actualizaciones normativas incluidas',
    description: 'Cuando cambia una resolución, actualizamos HealthCode y te contamos qué cambió. Tú no tienes que hacer nada.',
  },
  // Verifica estas referencias con tu equipo contable y jurídico antes de publicar.
  items: [
    {
      authority: 'DIAN',
      title: 'Factura electrónica',
      reference: 'Resolución 000165 de 2023',
      description: 'Validación previa, CUFE y representación gráfica de cada factura.',
    },
    {
      authority: 'DIAN',
      title: 'Nómina electrónica',
      reference: 'Resolución 000013 de 2021',
      description: 'Documento soporte de pago de nómina con su CUNE y notas de ajuste.',
    },
    {
      authority: 'Ministerio de Salud',
      title: 'RIPS',
      reference: 'Resolución 948 de 2026',
      description: 'Los RIPS acompañan cada factura en salud y se validan para obtener el CUV.',
    },
    {
      authority: 'Ministerio de Salud',
      title: 'RDA e interoperabilidad',
      reference: 'Resolución 1888 de 2025',
      badge: 'Nuevo',
      description: 'Resumen Digital de Atención con los datos clínicos de cada consulta, enviado al Ministerio.',
    },
    {
      authority: 'Ministerio de Salud',
      title: 'Historia clínica',
      reference: 'Res. 1995 de 1999 · Ley 2015 de 2020',
      description: 'Registro, custodia y conservación de la historia clínica electrónica.',
    },
    {
      authority: 'Ministerio de Salud',
      title: 'Habilitación',
      reference: 'Resolución 3100 de 2019',
      description: 'Soportes documentales para habilitar tu consultorio, clínica o IPS.',
    },
    {
      authority: 'SIC',
      title: 'Datos personales',
      reference: 'Ley 1581 de 2012',
      description: 'Tratamiento de datos sensibles de salud con consentimiento y trazabilidad.',
    },
  ] as { authority: string; title: string; reference: string; description: string; badge?: string }[],
};

export const testimonials = {
  eyebrow: 'Testimonios',
  title: 'Instituciones que ya trabajan tranquilas',
  highlight: 'tranquilas',
  ratingLabel: '5 de 5 estrellas',
  // EJEMPLO: testimonios de relleno. Reemplázalos por reales o deja `items: []` para ocultar la sección.
  items: [
    {
      quote:
        'Teníamos la agenda en un programa, la factura en otro y los RIPS en Excel. Hoy todo sale del mismo lugar y radicar a las EPS dejó de ser una pesadilla.',
      name: 'Dra. Carolina Pinzón',
      role: 'Gerente · Centro Médico Los Andes',
    },
    {
      quote: 'Los recordatorios por WhatsApp bajaron las citas perdidas casi a la mitad. Y la nómina del equipo la cerramos en una tarde.',
      name: 'Mauricio Lozano',
      role: 'Coordinador administrativo · IPS Salud Integral',
    },
    {
      quote: 'Me daba miedo la facturación electrónica. Me acompañaron paso a paso y a la semana ya estaba facturando desde mi consultorio.',
      name: 'Dra. Natalia Ospina',
      role: 'Medicina interna · Consultorio particular',
    },
  ],
};

export const demo = {
  eyebrow: 'Demo personalizada',
  title: 'Mira HealthCode con el caso de tu institución',
  highlight: 'tu institución',
  subtitle:
    'Un asesor te muestra en vivo la agenda, la historia clínica, la factura, los RIPS y el RDA con los procesos que ya manejas.',
  bullets: [
    'Adaptada a tu especialidad o a tu IPS',
    'Resolvemos tus dudas de planes y precios',
    'Te contamos cómo traemos tu información actual',
  ],
  formTitle: 'Agenda tu demo',
  formSubtitle: 'Déjanos tus datos y te escribimos en menos de un día hábil.',
  fields: {
    name: 'Nombre',
    institution: 'Institución',
    email: 'Correo',
    phone: 'Celular / WhatsApp',
    type: 'Tipo de institución',
    message: '¿Qué te gustaría ver en la demo?',
  },
  institutionTypes: ['Consultorio', 'Clínica', 'IPS', 'Otro'],
  submitLabel: 'Quiero mi demo',
  privacyNote: 'Al enviar aceptas nuestra política de tratamiento de datos personales.',
  mailSubject: 'Solicitud de demo',
};

export const faq = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Lo que más nos preguntan',
  highlight: 'nos preguntan',
  subtitle: '¿No ves tu pregunta? Escríbenos y te responde una persona del equipo.',
  panelCta: '¿Te quedó alguna duda? Te respondemos por WhatsApp.',
  whatsappLabel: 'Pregúntanos por WhatsApp',
  whatsappMessage: 'Hola, tengo una pregunta sobre HealthCode.',
  items: [
    {
      q: '¿Qué puedo hacer con HealthCode?',
      a: 'Llevar la agenda, la historia clínica, la facturación electrónica, los RIPS, el RDA y la nómina electrónica de tu institución desde un solo lugar. Cada atención se registra una vez y esa información alimenta todo lo demás.',
    },
    {
      q: '¿Qué es el RDA y HealthCode lo envía por mí?',
      a: 'El RDA (Resumen Digital de Atención) reúne los datos clínicos clave de cada atención para que la historia clínica se pueda consultar entre prestadores. HealthCode lo arma con lo que ya registraste en la consulta, lo envía al Ministerio de Salud y te muestra el estado de cada envío.',
    },
    {
      q: '¿Tengo que instalar programas o comprar un servidor?',
      a: 'No. HealthCode es una plataforma web: entras desde el navegador con tu usuario y contraseña. Los servidores, las actualizaciones y las copias de seguridad corren por nuestra cuenta.',
    },
    {
      q: '¿Mis facturas quedan validadas por la DIAN?',
      a: 'Sí. Cada factura pasa por la validación previa de la DIAN antes de llegarle al paciente o a la EPS, con su CUFE, su XML y su PDF. Desde ahí mismo emites notas crédito y débito.',
    },
    {
      q: '¿Cómo se generan los RIPS?',
      a: 'Salen de la misma atención y de la factura, en el formato JSON que pide el Ministerio de Salud. HealthCode los valida para obtener el CUV y te avisa si algún dato está incompleto antes de enviarlos.',
    },
    {
      q: '¿Me sirve si trabajo como profesional independiente?',
      a: 'Sí. Hay un plan pensado para consultorios y otros para clínicas e IPS con varias sedes. Puedes empezar pequeño y crecer sin cambiar de sistema.',
    },
    {
      q: '¿Qué pasa con la información de mi sistema actual?',
      a: 'Nosotros la traemos. La migración de pacientes, agenda e historia clínica está incluida en todos los planes.',
    },
    {
      q: '¿Firmo un contrato de permanencia?',
      a: 'No. Puedes cambiar de plan o cancelar cuando quieras, y tienes 15 días para probar HealthCode sin tarjeta de crédito.',
    },
  ],
};

export const finalCta = {
  title: 'Deja el papeleo en manos de HealthCode',
  highlight: 'HealthCode',
  subtitle: 'Planes desde $89.000 al mes por profesional, IVA incluido y sin permanencia.', // EJEMPLO
  primary: { label: 'Quiero una demo', href: '#demo' },
  whatsappLabel: 'Escríbenos por WhatsApp',
};

export const whatsappFab = {
  title: 'Hablemos por WhatsApp',
  detail: 'Resuelve tus dudas aquí',
  ariaLabel: 'Escríbenos por WhatsApp',
};

export const footer = {
  columns: [
    {
      title: 'Producto',
      links: [
        { label: 'Módulos', href: '#modulos' },
        { label: 'RDA', href: '#rda' },
        { label: 'Cómo funciona', href: '#como-funciona' },
        { label: 'Planes y precios', href: '#planes' },
        { label: 'Normativa', href: '#normativa' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Agenda tu demo', href: '#demo' },
        { label: 'Preguntas frecuentes', href: '#faq' },
        { label: 'WhatsApp', href: whatsappUrl(), external: true },
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
  ] as { title: string; links: { label: string; href: string; external?: boolean }[] }[],
  rights: 'Todos los derechos reservados.',
  madeIn: 'Hecho en Colombia para el sector salud.',
};
