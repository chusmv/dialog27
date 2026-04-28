# ADR 0003: CTA externa sin backend ni formulario en v1

## Estado

Aprobado

## Decisión

Las CTAs de la landing redirigen a URLs externas de Dialog27 y no se implementa formulario local ni integración CRM en esta versión.

## Motivos

- Reduce tiempo de puesta en marcha.
- Evita introducir backend, validación y tratamiento de datos personales antes de validar la landing.
- Se alinea con el objetivo local-first.

## Consecuencias

- La conversión se delega al flujo ya existente en Dialog27.
- El tracking queda preparado, pero desacoplado del proveedor.
- La evolución futura a formulario o CRM puede hacerse sin rehacer la estructura base.
