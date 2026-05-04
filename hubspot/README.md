# HubSpot workspace

Este directorio contiene la base de trabajo para migrar las landings de D27 Docs al CMS de HubSpot sin romper el entorno actual de `Vite + React`.

## Estructura

- `d27-docs-theme/`: theme clásica de HubSpot con templates, módulos, CSS, JS e imágenes.
- `src/theme.css`: punto de entrada de Tailwind para compilar la hoja de estilos de la theme usando el look actual como referencia.

## Flujo local previsto

1. `npm install`
2. `npm install -g @hubspot/cli`
3. `hs account auth`
4. `npm run hubspot:css:build`
5. `npm run hubspot:upload`

Para trabajo iterativo:

1. Terminal A: `npm run hubspot:css:watch`
2. Terminal B: `npm run hubspot:watch`

## Decisión técnica

- El runtime productivo en HubSpot será `HubL + módulos + JS ligero`.
- El React actual se conserva como referencia visual y de contenido mientras se completa la migración.
- Las páginas productivas se crearán desde los templates `landing-control` y `landing-campaign`.
