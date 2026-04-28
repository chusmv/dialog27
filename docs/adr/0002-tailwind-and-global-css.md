# ADR 0002: Tailwind CSS más capa visual global

## Estado

Aprobado

## Decisión

Se usa Tailwind CSS para layout/utilidades y `src/index.css` para la capa visual propia.

## Motivos

- El draft original dependía de muchas clases utility-first.
- Había efectos visuales específicos que no conviene expresar solo con utilidades.
- La mezcla reduce duplicación y mantiene el look original con mejor mantenibilidad.

## Consecuencias

- Layout y responsive son rápidos de iterar.
- Gradientes, glassmorphism y animaciones viven en una única hoja global.
- No se introduce una librería adicional de estilos o motion.
