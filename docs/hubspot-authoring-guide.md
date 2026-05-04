# Guía de edición en HubSpot

## Qué puede editar marketing sin tocar código

### Hero control

- eyebrow
- título
- descripción
- textos de CTA

### Hero campaign

- título
- bullets
- imagen hero
- textos de CTA
- oferta de prueba opcional

### Promo strip

- eyebrow
- mensaje principal

### Problema

- título y subtítulo
- cards de problema
  - icono
  - título
  - descripción

### Cómo funciona

- título y subtítulo
- 3 pasos
  - número
  - imagen
  - título
  - descripción
- logos de integraciones

### Planes

- copy de cabecera
- CTA
- nota de precios
- cintillo de tokens adicionales
- contenido completo de cada plan:
  - nombre
  - badge
  - precio
  - resumen
  - métricas
  - detalle expandible

### Beneficios

- título y subtítulo
- métricas
- icono por beneficio
- copy de beneficio

### Testimonio

- título de sección
- cita
- autor
- cargo
- iniciales
- logo de cliente

### Captación

- eyebrow
- título
- descripción
- helper
- formulario HubSpot seleccionado

### Footer

- labels legales

## Qué no debe tocar marketing

- estructura del template
- orden de secciones
- CSS del theme
- JS del theme
- slugs si ya hay URLs indexadas
- convenciones de nombres de templates y módulos

## Cómo cambiar el formulario

1. Abre la landing
2. Selecciona el módulo `Lead Capture Section`
3. En el selector de formulario, elige el formulario compartido correcto
4. Publica cambios

Recomendación:

- no crear un formulario nuevo por landing salvo necesidad real de reporting o automatización distinta

## Cómo actualizar SEO

Para cada página, desde los settings de HubSpot:

- cambia el page title
- actualiza la meta description
- revisa canonical
- reemplaza imagen social si aplica
- confirma robots

No editar estos campos desde código para cambios cotidianos.

## Cómo actualizar imágenes

### Hero de campaña

- sustituye la imagen del módulo `hero_campaign`

### Cards de problema

- sustituye la imagen de cada card

### Pasos de cómo funciona

- sustituye la imagen del paso correspondiente

### Testimonio

- sustituye el logo del cliente

## Reglas editoriales recomendadas

- no usar títulos excesivamente largos en planes
- mantener 3 pasos en `Cómo funciona`
- mantener 3 planes salvo cambio de producto real
- no romper el patrón de una sola conversión principal por landing
- revisar móvil antes de publicar cambios fuertes de copy

## Flujo recomendado de cambios

1. editar en sandbox
2. revisar en preview desktop
3. revisar en preview móvil
4. validar formulario
5. publicar

## Cuándo pedir soporte de código

- cuando haya que añadir o quitar una sección
- cuando cambie la estructura de un plan
- cuando haya que cambiar el comportamiento del formulario
- cuando se necesiten nuevos campos editables
- cuando la página se rompa visualmente en un breakpoint
