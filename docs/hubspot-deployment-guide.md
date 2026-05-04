# Guía de despliegue en HubSpot

## 1. Requisitos previos

- Node.js `20+`
- npm `10+`
- acceso al portal HubSpot
- acceso al sandbox o entorno previo
- permisos para:
  - Design Manager / developer files
  - Landing pages
  - Forms
  - Files

## 2. Instalar la CLI

Referencia oficial:

- https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/install-the-cli

Comandos:

```bash
npm install -g @hubspot/cli
hs account auth
```

Durante la autenticación:

1. abre el flujo de autorización
2. genera o autoriza la clave/personal access key
3. guarda el perfil del portal

Verificación:

```bash
hs --version
hs account list
```

## 3. Preparar el repo

Instala dependencias locales:

```bash
npm install
```

Compila el CSS de la theme:

```bash
npm run hubspot:css:build
```

Esto genera:

- `hubspot/d27-docs-theme/css/main.css`

## 4. Trabajo iterativo local

### Terminal A

```bash
npm run hubspot:css:watch
```

### Terminal B

```bash
npm run hubspot:watch
```

Notas:

- `hubspot:css:watch` recompila estilos al cambiar templates o módulos
- `hubspot:watch` sube automáticamente cambios a la theme en HubSpot
- si cambias assets, conviene revisar que el watcher los haya sincronizado
- en HubSpot CLI `8.x`, estos scripts usan `hs cms watch` en lugar del comando legacy

## 5. Primera subida al sandbox

Comando:

```bash
npm run hubspot:upload
```

Nota:

- En HubSpot CLI `8.x`, este script usa `hs cms upload`.

Sube la theme local:

- origen local: `hubspot/d27-docs-theme`
- destino remoto: `d27-docs-theme`

Después de la subida:

1. entra en `Content > Design Manager`
2. verifica que exista la carpeta `d27-docs-theme`
3. revisa:
   - `templates/landing-control.html`
   - `templates/landing-campaign.html`
   - `modules/*`
   - `css/main.css`

## 6. Crear las páginas en HubSpot

### Landing control

1. Ve a `Content > Landing Pages`
2. `Create`
3. Selecciona la theme `D27 Docs Landing Theme`
4. Elige template `D27 Docs · Landing Control`
5. Crea la página con slug:
   - `/docs`

### Landings campaign

Repite el proceso con template `D27 Docs · Landing Campaign` para:

- `/docs/supervisar`
- `/docs/reduce-trabajo-contable`
- `/docs/automatiza-contabilidad`
- `/docs/prueba-gratis`

## 7. Cargar contenido

Usa `docs/hubspot-content-matrix.md` como fuente de carga.

Orden recomendado:

1. hero
2. promo strip
3. problema
4. cómo funciona
5. planes
6. beneficios
7. testimonial
8. lead capture
9. SEO

## 8. Configurar el formulario compartido

Referencia:

- https://knowledge.hubspot.com/forms/set-up-and-style-forms-on-hubspot-pages

Pasos:

1. Crea o identifica el formulario compartido en `Marketing > Forms`
2. En el módulo `lead_capture_section`, selecciona ese formulario
3. Mantén `response_type` en inline salvo que negocio pida otra cosa
4. Valida el envío de prueba con un email de testing

Recomendación:

- añadir un campo oculto o propiedad auxiliar de atribución si marketing necesita segmentar por landing más allá de la URL de origen

## 9. Configurar SEO por página

No usar `index.html` ni `useSeo()` como fuente de producción.

En cada landing HubSpot configura:

- page title
- meta description
- canonical URL
- social image
- robots

Usa la matriz de contenido para mantener equivalencia con el sitio actual.

## 10. Checklist de QA antes de publicar

### Visual

- hero correcto
- promo strip visible
- spacing correcto entre secciones
- cards de planes alineadas
- logos e imágenes cargando
- footer correcto

### Funcional

- CTA principal hace scroll a `#demo-form`
- CTA secundaria hace scroll a `#solution`
- acordeón de planes abre y cierra
- formulario envía correctamente
- navbar sticky responde al scroll
- counters y animaciones no rompen en móvil

### SEO

- title correcto
- description correcta
- canonical correcta
- social image correcta
- favicon correcto
- slug correcto

## 11. Paso de sandbox a producción

Recomendación operativa:

1. congelar cambios de contenido
2. recompilar CSS
3. subir theme final a producción
4. recrear o clonar las páginas
5. revisar SEO y formularios
6. publicar

## 12. Rollback

Si algo falla:

1. despublica la landing afectada
2. vuelve a la versión previa del template o página en HubSpot si existe
3. si el problema es de código, corrígelo en local
4. recompila CSS
5. vuelve a subir la theme
6. repite QA mínimo en sandbox antes de tocar producción
