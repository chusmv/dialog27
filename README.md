# D27 Docs Landing

Landing local de performance para Dialog27 y su producto D27 Docs, construida con `Vite + React + Tailwind CSS` y preparada para despliegue estático multipágina.

## Requisitos

- Node.js `20.x`
- npm `10.x` o superior

## Arranque local

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5174/`.

El puerto de desarrollo está fijado en `5174` desde `vite.config.js`. Si ese puerto estuviera ocupado, Vite fallará en lugar de cambiar automáticamente a otro, para mantener una URL local estable.

## Landings disponibles

- Control actual: `http://localhost:5174/`
- Variante `supervisar`: `http://localhost:5174/supervisar/`
- Variante `reduce-trabajo-contable`: `http://localhost:5174/reduce-trabajo-contable/`
- Variante `automatiza-contabilidad`: `http://localhost:5174/automatiza-contabilidad/`
- Variante `prueba-gratis`: `http://localhost:5174/prueba-gratis/`

## Scripts

- `npm run dev`: servidor local con HMR
- `npm run build`: build de producción en `dist/`
- `npm run preview`: sirve localmente el build generado
- `npm run lint`: valida el código con ESLint
- `npm run test`: ejecuta los smoke tests con Vitest

## Estructura

```text
src/
  app/                Shell principal y selección de experiencia
  components/
    common/           Utilidades de UI compartidas
    icons/            SVGs inline y helpers visuales
    sections/         Secciones comunes y heroes/CTAs de campaña
  config/             siteConfig con branding, URLs y SEO base
  content/            Contenido base y catálogo de variantes
  hooks/              SEO e in-view
  lib/                Adaptadores como analytics
  test/               Setup de Vitest
docs/
  adr/                Decisiones de arquitectura
  architecture.md     Documento principal de arquitectura
supervisar/           Entrada HTML estática de la variante
reduce-trabajo-contable/
automatiza-contabilidad/
prueba-gratis/
```

## Contenido y configuración

- El contenido base común vive en `src/content/landingContent.js`.
- Las variantes de campaña viven en `src/content/landingVariants.js`.
- Las URLs corporativas, metadatos SEO base y flags de tracking viven en `src/config/siteConfig.js`.
- El punto de entrada de analítica es `src/lib/analytics.js` mediante `trackEvent(name, payload)`.
- Cada HTML activa su variante con `data-landing-variant` y reutiliza la misma app React.

## Verificación rápida

```bash
npm run lint
npm run test
npm run build
```

## Documentación

- Arquitectura: [docs/architecture.md](./docs/architecture.md)
- ADRs:
  - [0001-standalone-vite-react.md](./docs/adr/0001-standalone-vite-react.md)
  - [0002-tailwind-and-global-css.md](./docs/adr/0002-tailwind-and-global-css.md)
  - [0003-external-cta-without-backend.md](./docs/adr/0003-external-cta-without-backend.md)
  - [0004-local-first-static-ready.md](./docs/adr/0004-local-first-static-ready.md)
