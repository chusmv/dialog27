# Arquitectura de la landing D27 Docs

## Resumen

La landing se implementa como un sitio estático `multi-page` con `Vite + React`. No existe backend, router cliente ni persistencia local. El objetivo es servir una landing control y 4 landings de campaña con URLs limpias, SEO propio y una sola app compartida.

## Entorno local

- El servidor de desarrollo queda fijado en `http://localhost:5174/`.
- `vite.config.js` usa `strictPort` para evitar que Vite cambie de puerto sin avisar.
- Variantes locales disponibles:
  - `/`
  - `/supervisar/`
  - `/reduce-trabajo-contable/`
  - `/automatiza-contabilidad/`
  - `/prueba-gratis/`

## Estructura funcional

- `src/app/App.jsx` compone la shell global, aplica SEO y decide si renderiza la landing control o una variante de campaña.
- `src/components/sections/*` encapsula cada bloque visible:
  - navegación
  - hero control
  - hero de campaña
  - problema
  - solución
  - beneficios
  - prueba social
  - CTA final control
  - CTA final de campaña
  - footer
- `src/components/common/*` contiene piezas reutilizables pequeñas como `Counter` y `SectionIntro`.
- Cada carpeta de raíz (`supervisar/`, `reduce-trabajo-contable/`, etc.) contiene un `index.html` propio con metadata estática y una marca `data-landing-variant`.

## Gestión de contenido y configuración

- `src/content/landingContent.js` desacopla el contenido común de negocio del layout:
  - pasos
  - problemas
  - beneficios
  - testimonios
  - CTAs
- `src/content/landingVariants.js` define el catálogo de campañas:
  - `key`
  - `slug`
  - `seo`
  - `hero`
  - `finalCta`
  - `tracking`
- `src/config/siteConfig.js` centraliza:
  - branding
  - URLs corporativas
  - metadatos SEO base
  - flags de tracking

Esta separación permite ajustar copy, metadata o tracking por variante sin duplicar la app.

## Estilos y sistema visual

- Tailwind CSS se usa para layout, spacing, responsive behavior y utilidades rápidas.
- `src/index.css` concentra la capa visual propia:
  - tipografías
  - glassmorphism
  - gradientes
  - animaciones
  - mesh/noise background
  - foco visible
  - helpers como `fade-up`, `btn-primary`, `btn-ghost` y estilos de banner de campaña

La estrategia mantiene el look original de la landing control y añade un segundo lenguaje visual azul/naranja para los heroes de campañas.

## Interacción y comportamiento

- `useInView` activa animaciones de entrada por sección con fallback seguro si `IntersectionObserver` no está disponible.
- `Counter` anima métricas con `requestAnimationFrame` y respeta `prefers-reduced-motion`.
- `trackEvent(name, payload)` es el único contrato de analítica.
- `withTrackingContext(context, payload)` añade `variant`, `slug` y `pageType` a navbar, hero y CTA final sin cambiar el contrato público.

## SEO y metadata

- Cada entrada HTML incluye metadata estática propia para que exista incluso sin hidratar React.
- `useSeo` sincroniza en runtime:
  - `title`
  - `description`
  - `canonical`
  - Open Graph
  - Twitter Card

- La landing control mantiene la canonical `https://www.dialog27.com/docs`.
- Las campañas usan canonicals propias:
  - `https://www.dialog27.com/docs/supervisar`
  - `https://www.dialog27.com/docs/reduce-trabajo-contable`
  - `https://www.dialog27.com/docs/automatiza-contabilidad`
  - `https://www.dialog27.com/docs/prueba-gratis`
- Cada campaña tiene `og:image` y `twitter:image` propios servidos desde `public/`.

## Performance

- Bundle pequeño, sin router y sin librerías de motion adicionales.
- SVGs inline para iconografía crítica.
- Fondo decorativo generado con CSS, sin imágenes pesadas.
- Social cards servidas como SVGs estáticos desde `public/`.

## Testing

- `Vitest + Testing Library` cubre smoke tests de la landing control y de las 4 campañas.
- El test valida:
  - hero control visible
  - hero variante visible
  - canonical por campaña
  - CTAs resolviendo URLs desde `siteConfig`

## Camino a despliegue estático

El proyecto ya es compatible con despliegue estático directo:

- `npm run build` genera `dist/`
- `dist/` incluye 5 entradas HTML listas para publicar
- `npm run preview` permite validar el bundle localmente
- Vercel, Netlify o CDN corporativa pueden servir el artefacto sin cambios estructurales

Para una fase posterior solo habría que añadir:

- assets fuente definitivos de campaña
- proveedor real de analítica
- formularios o integración CRM
