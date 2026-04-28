# ADR 0004: Desarrollo local-first con salida a hosting estático

## Estado

Aprobado

## Decisión

La primera entrega prioriza entorno local completo y deja el proyecto listo para hosting estático posterior.

## Motivos

- El objetivo inmediato es iterar copy, diseño y performance localmente.
- Un sitio estático es suficiente para el alcance actual.
- Permite mover la salida a Vercel, Netlify o infraestructura corporativa sin refactor relevante.

## Consecuencias

- El flujo principal es `npm install`, `npm run dev`, `npm run build`.
- No se incluyen decisiones de infraestructura productiva en esta fase.
- La documentación ya explica el camino de despliegue para la siguiente iteración.
