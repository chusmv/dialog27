export const baseLandingContent = {
  navLinks: [
    { href: '#solution', label: 'Cómo funciona' },
    { href: '#plans', label: 'Planes' },
    { href: '#benefits', label: 'Beneficios' },
    { href: '#proof', label: 'Clientes' },
  ],
  hero: {
    eyebrow: 'Automatización contable completa',
    title: ['Del documento de tu cliente', 'a la contabilidad,', 'automáticamente.'],
    description:
      'Tus clientes suben documentos. D27 Docs los procesa y los contabiliza en tu ERP. Tú solo validas.',
    flowTitle: 'Del documento de tu cliente a la contabilidad en solo 2 clicks.',
    primaryCta: 'Pedir demo',
    secondaryCta: 'Ver cómo funciona',
    flowNodes: [
      {
        label: 'Cliente',
        sublabel: 'WhatsApp / Email',
        icon: { kind: 'single', src: '/icons/hero-flow/svg/17-usuario.svg' },
        motionClass: 'float-1',
      },
      {
        label: 'Documento',
        sublabel: 'Factura / Ticket / PDF',
        icon: { kind: 'single', src: '/icons/hero-flow/svg/01-documento.svg' },
        motionClass: 'float-2',
      },
      {
        label: 'D27 Docs',
        supportingText: 'IA extrae información',
        sublabel: 'Click 1: Tú validas',
        icon: {
          kind: 'stack',
          baseSrc: '/icons/hero-flow/svg/14-ia.svg',
          overlaySrc: '/icons/hero-flow/svg/17-usuario.svg',
        },
        badgeLabel: 'Click 1',
        motionClass: 'float-3',
        featured: true,
      },
      {
        label: 'ERP',
        sublabel: 'Click 2: envías al ERP',
        icon: { kind: 'single', src: '/icons/hero-flow/svg/19-integracion.svg' },
        badgeLabel: 'Click 2',
        motionClass: 'float-1',
      },
      {
        label: 'Contabilizado',
        sublabel: 'Asiento listo',
        icon: { kind: 'single', src: '/icons/hero-flow/svg/20-hecho.svg' },
        motionClass: 'float-2',
      },
    ],
  },
  heroPromo: {
    eyebrow: 'Promoción por tiempo limitado',
    title: 'Pruébalo 1 mes gratis',
  },
  plansSection: {
    eyebrow: 'Planes',
    title: 'Elige el plan que encaja con tu actividad.',
    description: 'Tres paquetes pensados para crecer contigo.',
    pricingNote: 'Precios mensuales, sin impuestos incluidos.',
    cta: {
      label: 'Solicitar demo',
    },
    footnote:
      'Desde cualquier plan puedes contratar bolsas de tokens adicionales. Los tokens adicionales se consumen solo cuando se agotan los tokens mensuales del plan contratado.',
    packages: [
      {
        name: 'BASIC',
        price: '24,90 €',
        note: 'al mes, sin impuestos incluidos',
        summaryFeatures: [
          'Unificación de canales (WhatsApp y correo)',
          'Tres modelos de IA disponibles',
          'Extracción automática de información de documentos con IA',
        ],
        summaryCapacity: [
          { label: 'Documentos/mes', value: 'Hasta 500' },
          { label: 'CLIENTES', value: 'Hasta 50' },
        ],
        includedTitle: 'El plan Basic incluye:',
        includedItems: [
          'Unificación de canales (WhatsApp y correo)',
          'Tres modelos de IA disponibles',
          'Extracción automática de información de documentos con IA',
        ],
        capacityTitle: 'Límites del plan:',
        capacityItems: [
          '4.000 tokens/mes incluidos (hasta 500 documentos)',
          '120 días de almacenamiento',
          '50 clientes/usuarios simultáneos',
          '2 proyectos simultáneos',
          'Exportación simultánea de hasta 50 documentos',
        ],
      },
      {
        name: 'PLUS',
        price: '99,90 €',
        note: 'al mes, sin impuestos incluidos',
        badgeLabel: 'MAS COMPRADO',
        featured: true,
        summaryFeatures: [
          'Todo lo del BASIC y, además:',
          'Extracción complementada con OCR',
          'Recordatorios automáticos',
          'Exportaciones personalizadas',
        ],
        summaryCapacity: [
          { label: 'Documentos/mes', value: 'Hasta 5.000' },
          { label: 'CLIENTES', value: 'Hasta 200' },
        ],
        includedTitle: 'Todo lo incluido en Basic y, además:',
        includedItems: [
          'Extracción complementada con OCR',
          'Recordatorios',
          'Exportaciones personalizadas',
        ],
        capacityTitle: 'Mayor capacidad:',
        capacityItems: [
          '40.000 tokens/mes incluidos (hasta 5.000 documentos)',
          '400 días de almacenamiento',
          '200 clientes/usuarios simultáneos',
          '5 proyectos simultáneos',
          'Exportación simultánea de hasta 400 documentos',
        ],
      },
      {
        name: 'CORPORATE',
        price: '199,90 €',
        note: 'al mes, sin impuestos incluidos',
        summaryFeatures: [
          'Todo lo del PLUS y, además:',
          'Recordatorios personalizables',
          'Exportaciones avanzadas',
          'Integraciones vía APIs',
        ],
        summaryCapacity: [
          { label: 'Documentos/mes', value: 'Hasta 12.500' },
          { label: 'CLIENTES', value: 'Hasta 1.000' },
        ],
        includedTitle: 'Todo lo incluido en Plus y, además:',
        includedItems: [
          'Recordatorios personalizables',
          'Exportaciones avanzadas',
          'Trazabilidad y auditoría avanzada',
          'Integraciones vía APIs',
        ],
        capacityTitle: 'Mayor capacidad:',
        capacityItems: [
          '100.000 tokens/mes incluidos (hasta 12.500 documentos)',
          '2.000 días de almacenamiento',
          '1.000 clientes/usuarios simultáneos',
          'Proyectos simultáneos ilimitados',
          'Exportación simultánea de hasta 1.000 documentos',
        ],
      },
    ],
  },
  problems: [
    {
      iconSrc: '/problem-icons/cajafacturas.png',
      title: 'El caos de las facturas',
      description:
        'Te envían las facturas a última hora, te las dan en una caja, tienes que buscarlas enterradas en hilos de emails de muchos clientes distintos.',
    },
    {
      iconSrc: '/problem-icons/contabilidadmanual.png',
      title: 'Introducción manual',
      description: 'Te pasas horas tecleando importes, fechas y NIF a mano. Cada. Maldito. Día.',
    },
    {
      iconSrc: '/problem-icons/escalar.png',
      title: 'Ni idea del estado real',
      description: 'Como no recibes las facturas poco a poco sino casi siempre al final, no tienes actualizado el estado en el que está la empresa.',
    },
    {
      iconSrc: '/problem-icons/errores.png',
      title: 'Errores de conciliación',
      description: 'Al ser un trabajo tan manual y hacerlo con poco tiempo para el cierre, es normal equivocarse. Cierres de mes que duran días porque nada cuadra a la primera.',
    },
  ],
  steps: [
    {
      number: '01',
      icon: 'upload',
      imageSrc: '/solution-steps/cliente-d27.jpeg',
      imageAlt: 'Cliente enviando un documento a D27 Docs desde el móvil',
      title: 'Tus clientes envían los documentos.',
      description: 'Desde el móvil, cuando pueden. Por WhatsApp o email. Sin instalar nada, sin portales, sin formularios. La experiencia es natural e inmediata.',
      accent: '#0796A3',
      overlayFrom: 'rgba(7, 150, 163, 0.22)',
      overlayTo: 'rgba(7, 150, 163, 0.06)',
    },
    {
      number: '02',
      icon: 'ai',
      imageSrc: '/solution-steps/d27docs.jpeg',
      imageAlt: 'Pantalla de D27 Docs procesando y extrayendo datos de documentos',
      title: 'D27 Docs procesa y extrae la información.',
      description: 'La IA recibe el documento, verifica calidad, extrae los datos clave (importes, fechas, emisor) y detecta errores o datos incompletos. Todo automático y añadiendo información de otras fuentes como el BORME.',
      highlightTerms: ['BORME'],
      accent: '#C49200',
      overlayFrom: 'rgba(196, 146, 0, 0.2)',
      overlayTo: 'rgba(196, 146, 0, 0.06)',
    },
    {
      number: '03',
      icon: 'erp',
      imageSrc: '/solution-steps/gestor.jpeg',
      imageAlt: 'Gestor validando la información antes de enviarla al ERP',
      title: 'Tú validas y envías al ERP.',
      description: 'Recibes un resumen claro, organizado y trazable. Información extraída, lista para revisar y contabilizar. Sin buscar, sin descargar, sin reorganizar. Integración nativa con a3ERP, Holded y Odoo. Envía la información directamente, sin teclear nada, sin exportar nada manualmente.',
      accent: '#C0392B',
      overlayFrom: 'rgba(192, 57, 43, 0.22)',
      overlayTo: 'rgba(192, 57, 43, 0.06)',
    },
  ],
  connectorLabels: ['El cliente envía el documento', 'La IA procesa y extrae', 'La información entra en tu ERP'],
  benefits: [
    {
      metric: 80,
      suffix: '%',
      label: 'Menos tiempo en introducción de datos',
      description:
        'Libera a tu equipo de tareas repetitivas y redirige ese tiempo a asesoramiento de alto valor.',
      icon: '⚡',
    },
    {
      metric: 99,
      suffix: '%',
      label: 'Precisión en los datos',
      description:
        'La extracción por IA elimina los errores tipográficos y de transposición del trabajo manual.',
      icon: '🎯',
    },
    {
      metric: 3,
      suffix: '×',
      label: 'Más clientes, mismo equipo',
      description: 'Escala tu despacho sin aumentar plantilla. Crecimiento sin contrataciones.',
      icon: '📈',
    },
  ],
  erpLogos: [
    { name: 'Odoo', src: '/integrations/odoo.png', alt: 'Logo de Odoo' },
    { name: 'a3ERP', src: '/integrations/a3erp.png', alt: 'Logo de a3ERP' },
    { name: 'Holded', src: '/integrations/holded.png', alt: 'Logo de Holded' },
    { name: 'BORME', src: '/integrations/borme.svg', alt: 'Logo de BORME' },
  ],
  proofLogos: ['Naumanni SL', 'Gestoría Mas', 'Altagama', 'Asesoría Norte', 'Despacho 21'],
  testimonials: [
    {
      quote:
        'En el despacho gestionamos cientos de facturas y recibos cada trimestre, y D27 Docs nos ha simplificado el trabajo de una forma brutal. Nuestros clientes solo van enviando la documentación por WhatsApp a lo largo del trimestre, y el sistema se encarga de clasificarla, comprobar si es válida y extraer la información clave. Hemos reducido muchísimo el tiempo dedicado a tareas manuales. Ahora podemos centrarnos en asesorar mejor a nuestros clientes y no en perseguir papeles.',
      author: 'Manuel Pérez',
      role: 'Asesoría fiscal, contable y laboral · Naumanni SL',
      initials: 'MP',
      company: 'Naumanni SL',
    },
  ],
  cta: {
    eyebrow: 'Empieza ahora',
    title: ['Deja de hacer contabilidad manual.', 'Empieza a supervisar.'],
    description:
      'Únete a las asesorías y gestorías que ya han automatizado su flujo documental. La puesta en marcha lleva días, no meses.',
    primaryLabel: 'Pedir demo',
    secondaryLabel: 'Ver D27 Docs',
    helper: 'Sin tarjeta de crédito · Alta en 48h · Cancela cuando quieras',
  },
}

export const landingContent = baseLandingContent
