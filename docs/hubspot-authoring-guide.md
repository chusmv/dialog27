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

- eyebrow
- título del vídeo
- ID de YouTube
- título accesible del iframe
- título y subtítulo del bloque de pasos
- 3 pasos
  - número
  - imagen
  - título
  - descripción
- logos de integraciones

### Planes

- copy de cabecera
- promoción temporal global del bloque:
  - activar/desactivar
  - prefijo del banner
  - descuento
  - duración en meses
  - etiqueta de estado
- CTA
- nota de precios
- cintillo de tokens adicionales
- contenido completo de cada plan:
  - nombre
  - badge
  - precio normal
  - precio promocional y ahorro calculados automáticamente
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

### Vídeo de cómo funciona

- actualiza el título del vídeo desde el módulo `solution_steps`
- pega el ID de YouTube del vídeo compartido
- ajusta el título accesible del iframe si cambia el enfoque del vídeo

### Testimonio

- sustituye el logo del cliente

## Reglas editoriales recomendadas

- no usar títulos excesivamente largos en planes
- mantener 3 pasos en `Cómo funciona`
- mantener 3 planes salvo cambio de producto real
- mantener el vídeo de `Cómo funciona` por encima del bloque de pasos
- no romper el patrón de una sola conversión principal por landing
- revisar móvil antes de publicar cambios fuertes de copy

## Flujo recomendado de cambios

1. editar en sandbox
2. revisar en preview desktop
3. revisar en preview móvil
4. comprobar promo activa/inactiva si se ha tocado `Planes`
5. validar formulario
6. publicar

Nota:

- al actualizar módulos `plans_section` ya existentes, revisar que cada plan tenga rellenado `precio normal`, porque el modelo antiguo de `precio entero + decimales` se ha sustituido por un solo campo numérico

## Cuándo pedir soporte de código

- cuando haya que añadir o quitar una sección
- cuando cambie la estructura de un plan
- cuando haya que cambiar el comportamiento del formulario
- cuando se necesiten nuevos campos editables
- cuando la página se rompa visualmente en un breakpoint
