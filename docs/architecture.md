# Arquitectura de la landing D27 Docs

## Resumen

La landing se implementa como una SPA estática de una sola ruta con `Vite + React`. No existe backend, router ni persistencia local. El objetivo es optimizar iteración de diseño/copy, rendimiento inicial y facilidad de despliegue estático.

## Estructura funcional

- `src/app/App.jsx` compone la shell global, aplica SEO y monta las secciones.
- `src/components/sections/*` encapsula cada bloque visible:
  - navegación
  - hero
  - problema
  - solución
  - beneficios
  - prueba social
  - CTA final
  - footer
- `src/components/common/*` contiene piezas reutilizables pequeñas como `Counter` y `SectionIntro`.

## Gestión de contenido y configuración

- `src/content/landingContent.js` desacopla el contenido de negocio del layout:
  - pasos
  - problemas
  - beneficios
  - testimonios
  - CTAs
- `src/config/siteConfig.js` centraliza:
  - branding
  - URLs corporativas
  - metadatos SEO
  - flags de tracking

Esta separación permite ajustar copy, enlaces o metadata sin tocar la composición visual.

## Estilos y sistema visual

- Tailwind CSS se usa para layout, spacing, responsive behavior y utilidades rápidas.
- `src/index.css` concentra la capa visual propia:
  - tipografías
  - glassmorphism
  - gradientes
  - animaciones
  - mesh/noise background
  - foco visible
  - helpers como `fade-up`, `btn-primary` y `btn-ghost`

La estrategia evita dependencias pesadas de animación y mantiene el look original del draft con una base más mantenible.

## Interacción y comportamiento

- `useInView` activa animaciones de entrada por sección con fallback seguro si `IntersectionObserver` no está disponible.
- `Counter` anima métricas con `requestAnimationFrame` y respeta `prefers-reduced-motion`.
- `trackEvent(name, payload)` es el único contrato de analítica. En v1 dispara un `CustomEvent` local y queda listo para conectar `dataLayer`, Plausible u otro proveedor.

## SEO y metadata

- `index.html` incluye metadata base para que exista incluso sin hidratar React.
- `useSeo` sincroniza en runtime:
  - `title`
  - `description`
  - `canonical`
  - Open Graph
  - Twitter Card

La canonical configurada apunta a `https://www.dialog27.com/docs` y los enlaces legales/producto se resuelven desde `siteConfig`.

## Performance

- Bundle pequeño, sin router ni librerías de motion adicionales.
- SVGs inline para iconografía crítica.
- Fondo decorativo generado con CSS, sin imágenes pesadas.
- Social card servida como SVG estático desde `public/`.

## Testing

- `Vitest + Testing Library` cubre un smoke test de render.
- El test valida:
  - hero visible
  - bloque de beneficios visible
  - bloque de prueba social visible
  - CTAs resolviendo URLs desde `siteConfig`

## Camino a despliegue estático

El proyecto ya es compatible con despliegue estático directo:

- `npm run build` genera `dist/`
- `npm run preview` permite validar el bundle localmente
- Vercel, Netlify o CDN corporativa pueden servir el artefacto sin cambios estructurales

Para una fase posterior solo habría que añadir:

- proveedor real de analítica
- formularios o integración CRM
- imágenes finales de marca si se desea sustituir el OG SVG actual
