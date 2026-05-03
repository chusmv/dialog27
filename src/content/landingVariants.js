import { baseLandingContent } from './landingContent'
import { siteConfig } from '../config/siteConfig'

function buildCanonical(slug) {
  return slug ? `${siteConfig.seo.canonicalBase}/${slug}` : siteConfig.seo.canonicalBase
}

function buildTracking(key, slug, pageType = 'campaign-landing') {
  return {
    variant: key,
    slug,
    pageType,
  }
}

function buildHeroLine(...segments) {
  return segments
}

function buildBullet(type, ...segments) {
  return {
    type,
    segments,
  }
}

export const landingVariants = {
  default: {
    key: 'default',
    slug: '',
    kind: 'control',
    seo: siteConfig.seo,
    tracking: buildTracking('default', '', 'control-landing'),
  },
  supervisar: {
    key: 'supervisar',
    slug: 'supervisar',
    kind: 'campaign',
    seo: {
      title: 'Deja de procesar, empieza a supervisar | D27 Docs',
      description:
        'Tus clientes envían documentos por WhatsApp o email. D27 Docs los recibe, extrae la información y contabiliza en tu ERP para que tú solo valides.',
      canonical: buildCanonical('supervisar'),
      robots: 'index,follow',
      ogType: 'website',
      socialImagePath: '/og-d27-docs-supervisar.svg',
      twitterCard: 'summary_large_image',
    },
    tracking: buildTracking('supervisar', 'supervisar'),
    hero: {
      titleLines: [
        buildHeroLine(
          { text: 'Deja de procesar, empieza a ' },
          { text: 'supervisar', tone: 'accent' },
          { text: ' con ' },
          { text: 'D27 Docs', tone: 'accent' },
        ),
      ],
      bullets: [
        buildBullet(
          'dot',
          { text: 'Tus clientes envían documentos' },
          { text: 'WhatsApp', tone: 'badge-whatsapp' },
          { text: 'Email', tone: 'badge-mail' },
        ),
        buildBullet(
          'dot',
          { text: 'El sistema los recibe y extrae la información automáticamente.' },
        ),
        buildBullet(
          'dot',
          { text: 'Tú solo validas.', tone: 'accent' },
          { text: ' Nada de picar datos.' },
        ),
        buildBullet(
          'dot',
          { text: 'Y además, contabiliza automáticamente en tu ERP.' },
        ),
      ],
      primaryCta: 'SOLICITAR DEMO',
      secondaryCta: 'VER CÓMO FUNCIONA',
      art: {
        type: 'erp-card',
      },
    },
    finalCta: {
      eyebrow: 'Empieza a supervisar',
      title: ['Deja de procesar documentos.', 'Empieza a supervisar con D27 Docs.'],
      description:
        'Automatiza la recepción, extracción y contabilización de tickets y facturas sin cambiar cómo trabajan tus clientes.',
      primaryLabel: 'Solicitar demo',
      secondaryLabel: 'Ver D27 Docs',
      helper: 'Tu equipo valida. D27 Docs se encarga del resto.',
    },
  },
  'reduce-trabajo-contable': {
    key: 'reduce-trabajo-contable',
    slug: 'reduce-trabajo-contable',
    kind: 'campaign',
    seo: {
      title: 'Reduce un 80% el trabajo contable | D27 Docs',
      description:
        'Reduce el trabajo contable manual con D27 Docs: tu cliente sube el documento, la IA extrae la información y el sistema la envía a tu ERP.',
      canonical: buildCanonical('reduce-trabajo-contable'),
      robots: 'index,follow',
      ogType: 'website',
      socialImagePath: '/og-d27-docs-reduce-trabajo-contable.svg',
      twitterCard: 'summary_large_image',
    },
    tracking: buildTracking('reduce-trabajo-contable', 'reduce-trabajo-contable'),
    hero: {
      titleLines: [
        buildHeroLine(
          { text: 'Reduce un ' },
          { text: '80%', tone: 'accent' },
          { text: ' el trabajo contable con ' },
          { text: 'D27 Docs', tone: 'accent' },
        ),
      ],
      bullets: [
        buildBullet('check', { text: 'Tu cliente sube el documento' }),
        buildBullet(
          'check',
          { text: 'El sistema lo recibe y extrae la información automáticamente.' },
        ),
        buildBullet(
          'check',
          { text: 'Tú solo validas. Nada de picar datos.' },
        ),
        buildBullet('check', { text: 'Y manda la información a tu ERP' }),
      ],
      primaryCta: 'SOLICITAR DEMO GRATIS',
      secondaryCta: 'VER CÓMO FUNCIONA',
      art: {
        type: 'image',
        src: '/reduce-trabajo-contable-hero.png',
        alt: 'Ilustración de una persona trabajando con un sello de automatizado con IA.',
      },
    },
    finalCta: {
      eyebrow: 'Menos trabajo manual',
      title: ['Reduce el trabajo contable.', 'Mantén el control del despacho.'],
      description:
        'El cliente sube el documento, D27 Docs extrae los datos y tu ERP recibe la información lista para validar.',
      primaryLabel: 'Solicitar demo gratis',
      secondaryLabel: 'Ver D27 Docs',
      helper: 'Orientado a asesorías y gestorías que quieren crecer sin más tecleo.',
    },
  },
  'automatiza-contabilidad': {
    key: 'automatiza-contabilidad',
    slug: 'automatiza-contabilidad',
    kind: 'campaign',
    seo: {
      title: 'Automatiza tu contabilidad sin esfuerzo | D27 Docs',
      description:
        'D27 Docs automatiza la recepción, extracción y contabilización de documentos para que tu equipo deje de picar datos y se centre en validar.',
      canonical: buildCanonical('automatiza-contabilidad'),
      robots: 'index,follow',
      ogType: 'website',
      socialImagePath: '/og-d27-docs-automatiza-contabilidad.svg',
      twitterCard: 'summary_large_image',
    },
    tracking: buildTracking('automatiza-contabilidad', 'automatiza-contabilidad'),
    hero: {
      titleLines: [
        buildHeroLine(
          { text: 'D27 Docs', tone: 'accent' },
          { text: ' Automatiza tu contabilidad sin esfuerzo' },
        ),
      ],
      bullets: [
        buildBullet('check', { text: 'Tu cliente sube el documento' }),
        buildBullet(
          'check',
          { text: 'El sistema lo recibe y extrae la información automáticamente.' },
        ),
        buildBullet('check', { text: 'Tú solo validas. Nada de picar datos.' }),
        buildBullet('check', { text: 'Y manda la información a tu ERP' }),
      ],
      primaryCta: 'SOLICITAR DEMO',
      secondaryCta: 'VER CÓMO FUNCIONA',
      art: {
        type: 'image',
        src: '/automatiza-contabilidad-hero.png',
        alt: 'Ilustración de una persona fotografiando un ticket con el mensaje EN 2 CLICKS.',
      },
    },
    finalCta: {
      eyebrow: 'Automatiza sin fricción',
      title: ['Automatiza la contabilidad.', 'Sin esfuerzo para tu equipo.'],
      description:
        'De la foto o factura recibida a la contabilización preparada en tu ERP con un flujo claro, rápido y supervisable.',
      primaryLabel: 'Solicitar demo',
      secondaryLabel: 'Ver D27 Docs',
      helper: 'Menos trabajo repetitivo. Más tiempo para validar y asesorar.',
    },
  },
  'prueba-gratis': {
    key: 'prueba-gratis',
    slug: 'prueba-gratis',
    kind: 'campaign',
    seo: {
      title: 'Prueba D27 Docs 1 mes gratis | Automatización contable',
      description:
        'Descubre lo que D27 Docs puede hacer por tu asesoría: tus clientes suben documentos, el sistema los reconoce y tú solo validas.',
      canonical: buildCanonical('prueba-gratis'),
      robots: 'index,follow',
      ogType: 'website',
      socialImagePath: '/og-d27-docs-prueba-gratis.svg',
      twitterCard: 'summary_large_image',
    },
    tracking: buildTracking('prueba-gratis', 'prueba-gratis'),
    hero: {
      titleLines: [
        buildHeroLine(
          { text: 'Descubre AHORA lo que ' },
          { text: 'D27 Docs', tone: 'accent' },
          { text: ' puede hacer por ti.' },
        ),
      ],
      bullets: [
        buildBullet('dot', { text: 'Tus clientes suben documentos.' }),
        buildBullet(
          'dot',
          { text: 'D27 Docs los reconoce y los contabiliza en tu ERP.' },
        ),
        buildBullet('dot', { text: 'Tú solo validas.' }),
      ],
      primaryCta: 'SOLICITAR DEMO',
      secondaryCta: 'VER CÓMO FUNCIONA >',
      trialOffer: {
        title: 'Pruébalo 1 mes GRATIS',
        description: 'Sin compromiso ni permanencia',
      },
      art: {
        type: 'trial-offer',
      },
    },
    finalCta: {
      eyebrow: 'Empieza hoy',
      title: ['Prueba D27 Docs.', 'Comprueba el cambio en tu equipo.'],
      description:
        'Evalúa en tu propio flujo cómo desaparece la introducción manual de datos y cuánto tiempo recupera tu despacho.',
      primaryLabel: 'Solicitar demo',
      secondaryLabel: 'Ver D27 Docs',
      helper: 'Activa una prueba, valida el flujo y mide el ahorro operativo.',
    },
  },
}

export function getLandingVariant(variantKey = 'default') {
  return landingVariants[variantKey] ?? landingVariants.default
}

export function getLandingPageContent(variantKey = 'default') {
  const variant = getLandingVariant(variantKey)

  return {
    baseLandingContent,
    variantOverrides: {
      hero: variant.hero ?? null,
      finalCta: variant.finalCta ?? null,
      seo: variant.seo,
      tracking: variant.tracking,
    },
  }
}
