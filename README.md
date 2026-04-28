# D27 Docs Landing

Landing local de performance para Dialog27 y su producto D27 Docs, construida con `Vite + React + Tailwind CSS` y preparada para evolucionar hacia despliegue estático.

## Requisitos

- Node.js `20.x`
- npm `10.x` o superior

## Arranque local

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://127.0.0.1:5173/` si arrancas con `npm run dev -- --host 127.0.0.1`, o en el host que te asigne Vite por defecto.

## Scripts

- `npm run dev`: servidor local con HMR
- `npm run build`: build de producción en `dist/`
- `npm run preview`: sirve localmente el build generado
- `npm run lint`: valida el código con ESLint
- `npm run test`: ejecuta el smoke test con Vitest

## Estructura

```text
src/
  app/                Shell principal
  components/
    common/           Utilidades de UI compartidas
    icons/            SVGs inline y helpers visuales
    sections/         Secciones desacopladas de la landing
  config/             siteConfig con URLs, SEO y tracking
  content/            landingContent con copy y datos estructurados
  hooks/              SEO e in-view
  lib/                Adaptadores como analytics
  test/               Setup de Vitest
docs/
  adr/                Decisiones de arquitectura
  architecture.md     Documento principal de arquitectura
```

## Contenido y configuración

- Todo el copy de la landing vive en `src/content/landingContent.js`.
- Las URLs corporativas, metadatos SEO y flags de tracking viven en `src/config/siteConfig.js`.
- El punto de entrada de analítica es `src/lib/analytics.js` mediante `trackEvent(name, payload)`.

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
