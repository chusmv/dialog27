export const baseLandingContent = {
  navLinks: [
    { href: '#solution', label: 'Cómo funciona' },
    { href: '#plans', label: 'Planes' },
    { href: '#benefits', label: 'Beneficios' },
  ],
  hero: {
    eyebrow: 'Automatización contable completa',
    title: ['Del documento de tu cliente', 'a la contabilidad,', 'automáticamente.'],
    description:
      'Tus clientes suben documentos. D27 Docs los procesa y los contabiliza en tu ERP. Tú solo validas.',
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
  plansSection: {
    eyebrow: 'Planes',
    title: 'Elige el plan que encaja con tu actividad.',
    description: 'Tres paquetes pensados para crecer contigo.',
    cta: {
      label: 'Solicitar demo',
    },
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
        badgeLabel: 'EL MÁS COMPRADO',
        featured: true,
        summaryFeatures: [
          'Todo lo del BASIC y, además:',
          'Extracción complementada con OCR',
          'Recordatorios',
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
      description: 'Ni tu cliente ni tu sabéis el estado en el que está la empresa hasta el final del mes o del trimestre.',
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
      title: 'El cliente sube el documento',
      description: 'Facilitamos esta tarea para tu cliente. Puede mandarte las facturas por WhatsApp, email o subiéndolas al portal. Sin apps, sin registros, sin fricción.',
      accent: '#f97316',
      overlayClass: 'from-orange-500/20 to-amber-500/10',
    },
    {
      number: '02',
      icon: 'ai',
      title: 'La IA identifica y extrae',
      description: 'Factura, ticket o recibo identificado en segundos, con extracción de la información de la factura y añadiendo información de otras fuentes como el BORME.',
      accent: '#3b82f6',
      overlayClass: 'from-blue-500/20 to-cyan-500/10',
    },
    {
      number: '03',
      icon: 'erp',
      title: 'Se conecta a tu ERP',
      description: 'Integración nativa con a3ERP, Holded y Odoo. Envía la información directamente, sin teclear nada, sin exportar nada manualmente.',
      accent: '#8b5cf6',
      overlayClass: 'from-violet-500/20 to-purple-500/10',
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
    {
      metric: 0,
      suffix: '',
      label: 'Sorpresas en la conciliación',
      description:
        'Cada asiento cuadra porque el sistema nunca interpreta dos veces un documento de forma distinta.',
      icon: '✅',
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
        'Nuestros clientes simplemente mandan las facturas por WhatsApp. D27 Docs las clasifica, las valida y extrae todos los campos. Hemos reducido el trabajo manual de forma brutal.',
      author: 'Manuel Pérez',
      role: 'Naumanni SL — Asesoría fiscal y contable',
      initials: 'MP',
    },
    {
      quote:
        'Cada trimestre nos ahogábamos en PDFs. Ahora los documentos entran solos y los asientos están listos para revisar. Cerramos dos días antes cada mes.',
      author: 'Laura Gómez',
      role: 'CFO, Distribuidora Altagama',
      initials: 'LG',
    },
    {
      quote:
        'La integración con el ERP fue el cambio definitivo. Sin exportaciones, sin importaciones. El asiento está cuando abro Odoo por la mañana.',
      author: 'Jordi Mas',
      role: 'Socio, Gestoría Mas & Associats',
      initials: 'JM',
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
