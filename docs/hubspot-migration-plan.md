# Plan de migración a HubSpot CMS

## Objetivo

Preparar estas landings para producción en HubSpot CMS manteniendo este repo como fuente de verdad, pero cambiando la salida productiva desde `Vite + React` a una **theme clásica de HubSpot** basada en:

- templates HubL
- módulos editables
- CSS compilado localmente
- JS ligero
- formularios nativos de HubSpot

## Estado actual del proyecto

La implementación actual es un sitio multipágina estático con:

- `src/app/App.jsx` como shell compartida
- `src/content/landingContent.js` como contenido base
- `src/content/landingVariants.js` como catálogo de campañas
- `index.html` + 4 entradas HTML de campañas
- SEO en dos capas:
  - meta tags estáticos en cada HTML
  - sincronización runtime mediante `src/hooks/useSeo.js`

Esta arquitectura funciona bien para hosting estático, pero no encaja con el modelo editorial de HubSpot, donde:

- el SEO vive en settings de página
- el contenido debe exponerse como campos editables
- los formularios y la captación viven mejor como módulos nativos
- los templates deben incluir `standard_header_includes` y `standard_footer_includes`

## Decisión técnica

### Qué se conserva

- Este repo sigue siendo la base del desarrollo
- El proyecto Vite actual sigue vivo como referencia visual y funcional
- El contenido actual en `landingContent` y `landingVariants` se usa como **fuente de migración**

### Qué cambia

- La salida productiva pasa a vivir en `hubspot/d27-docs-theme/`
- La publicación deja de depender de `index.html`, `data-landing-variant` y `useSeo()`
- La captación deja de depender de CTAs externas y se centraliza en un bloque de formulario HubSpot inline

## Mapeo de arquitectura

### Templates HubSpot

- `landing-control.html`
  - para la landing principal `/docs`
- `landing-campaign.html`
  - para `/supervisar`
  - para `/reduce-trabajo-contable`
  - para `/automatiza-contabilidad`
  - para `/prueba-gratis`

### Módulos HubSpot

- `hero_control.module`
- `hero_campaign.module`
- `promo_strip.module`
- `problem_section.module`
- `solution_steps.module`
- `plans_section.module`
- `benefits_section.module`
- `testimonial_single.module`
- `lead_capture_section.module`
- `footer_landing.module`

### Parciales compartidos

- `templates/layouts/base.html`
- `templates/partials/nav.html`

## Cambios de código necesarios

### 1. Nuevo workspace HubSpot

Se crea `hubspot/` con:

- theme HubSpot
- CSS de compilación independiente de Vite
- JS ligero para comportamiento no dependiente de React
- assets duplicados dentro de la theme

### 2. CSS desacoplado de Vite

El CSS de la theme se compila con:

- entrada: `hubspot/src/theme.css`
- salida: `hubspot/d27-docs-theme/css/main.css`

Ese punto de entrada:

- importa el estilo actual para reutilizar look and feel
- añade `@source` para escanear templates y módulos HubSpot
- añade reglas específicas para:
  - navbar sticky
  - rich text
  - listas de planes
  - formularios HubSpot

### 3. JS mínimo para HubSpot

Se crea `hubspot/d27-docs-theme/js/landing.js` para cubrir:

- navbar sticky
- scroll suave a anchors
- animaciones `fade-up`
- contadores de métricas
- acordeón de planes

### 4. Sustitución del modelo de contenido

#### Antes

- el contenido vive en JS y se resuelve por variante

#### Después

- el contenido vive en:
  - campos de módulo
  - settings de theme
  - settings de página en HubSpot

### 5. Sustitución del modelo SEO

#### Antes

- meta tags por HTML
- runtime `useSeo()`

#### Después

- title, meta description, canonical, robots e imagen social se gestionan en la propia página HubSpot

### 6. Sustitución del modelo de conversión

#### Antes

- CTA primaria externa a `dialog27.com/docs`

#### Después

- CTA primaria con scroll a `#demo-form`
- formulario HubSpot inline en `lead_capture_section`
- una sola pieza de captación compartida entre las 5 páginas

## Mapa de migración desde el proyecto actual

| Origen actual | Destino HubSpot |
|---|---|
| `src/content/landingContent.js` | defaults de módulos + referencia editorial |
| `src/content/landingVariants.js` | configuración manual por página HubSpot |
| `src/hooks/useSeo.js` | page settings nativos |
| `public/*` | `hubspot/d27-docs-theme/images/*` |
| `src/index.css` | compilación theme vía `hubspot/src/theme.css` |
| `NavBar`, `FooterSection` | partial + módulo footer |
| `HeroSection`, `CampaignHeroSection` | módulos hero |
| `ProblemSection`, `SolutionSection`, `PlansSection`, `BenefitsSection`, `ProofSection` | módulos equivalentes |

## Secuencia de migración recomendada

1. Instalar y autenticar HubSpot CLI.
2. Compilar CSS de theme local.
3. Subir la theme al sandbox.
4. Crear dos templates base en HubSpot desde la theme.
5. Crear las 5 páginas reales en sandbox.
6. Volcar el contenido actual siguiendo la matriz de contenido.
7. Crear y asignar el formulario compartido.
8. Validar visual, funcional y SEO.
9. Repetir la carga en producción o promocionar según el workflow del equipo.

## Riesgos y decisiones ya cerradas

- No se migrará React como runtime productivo.
- No se usarán landing pages abiertas de drag-and-drop.
- No se publicará directamente en producción sin pasar por sandbox.
- Las páginas seguirán siendo autónomas, no acopladas al header/footer global del sitio.
