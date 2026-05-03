export const baseLandingContent = {
  navLinks: [
    { href: '#solution', label: 'Cómo funciona' },
    { href: '#benefits', label: 'Beneficios' },
    { href: '#proof', label: 'Clientes' },
  ],
  hero: {
    eyebrow: 'Automatización contable completa',
    title: ['Del documento de tu cliente', 'a la contabilidad,', 'automáticamente.'],
    description:
      'Tus clientes suben documentos. D27 Docs los procesa y los contabiliza en tu ERP. Tú solo validas.',
    primaryCta: 'Pedir demo',
    secondaryCta: 'Ver cómo funciona',
    flowNodes: [
      { label: 'Cliente', sublabel: 'WhatsApp / Email', icon: 'user', motionClass: 'float-1' },
      { label: 'Documento', sublabel: 'Factura / Ticket / PDF', icon: 'document', motionClass: 'float-2' },
      {
        label: 'D27 Docs IA',
        sublabel: 'Extrae y valida',
        icon: 'ai-flow',
        motionClass: 'float-3',
        featured: true,
      },
      { label: 'ERP', sublabel: 'Odoo y otros', icon: 'integration', motionClass: 'float-1' },
      { label: 'Contabilizado', sublabel: 'Tú validas', icon: 'done', motionClass: 'float-2' },
    ],
  },
  problems: [
    {
      emoji: '📧',
      title: 'El caos del correo',
      description: 'Buscando facturas enterradas en hilos de email de 12 clientes distintos.',
    },
    {
      emoji: '⌨️',
      title: 'Introducción manual',
      description: 'Tecleando importes, fechas y NIF a mano. Cada. Maldito. Día.',
    },
    {
      emoji: '📊',
      title: 'El infierno del Excel',
      description: 'Controlando documentos en hojas que nadie se fía y todo el mundo toca.',
    },
    {
      emoji: '🔀',
      title: 'Errores de conciliación',
      description: 'Cierres de mes que duran días porque nada cuadra a la primera.',
    },
  ],
  steps: [
    {
      number: '01',
      icon: 'upload',
      title: 'El cliente sube el documento',
      description: 'Por WhatsApp, email o portal. Sin apps, sin registros, sin fricción.',
      accent: '#f97316',
      overlayClass: 'from-orange-500/20 to-amber-500/10',
    },
    {
      number: '02',
      icon: 'ai',
      title: 'La IA identifica y extrae',
      description: 'Factura, ticket o recibo identificado en segundos, con extracción precisa.',
      accent: '#3b82f6',
      overlayClass: 'from-blue-500/20 to-cyan-500/10',
    },
    {
      number: '03',
      icon: 'erp',
      title: 'Se conecta a tu ERP',
      description: 'Integración nativa con Odoo y preparación clara para otros ERPs clave.',
      accent: '#8b5cf6',
      overlayClass: 'from-violet-500/20 to-purple-500/10',
    },
    {
      number: '04',
      icon: 'approval',
      title: 'Asiento creado. Tú validas.',
      description: 'El asiento contable se genera automáticamente. Tu único trabajo: aprobar.',
      accent: '#10b981',
      overlayClass: 'from-emerald-500/20 to-green-500/10',
    },
  ],
  connectorLabels: [
    'El cliente envía el documento',
    'La IA procesa y extrae',
    'Asiento creado en ERP',
    'El contable valida',
  ],
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
  erpLogos: ['Odoo', 'Sage', 'Contasol', 'A3', 'Holded', 'Tu ERP'],
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
