# ADR 0001: Proyecto standalone con Vite y React

## Estado

Aprobado

## Decisión

La landing de D27 Docs se implementa como proyecto standalone con `Vite + React`.

## Motivos

- El repo partía vacío.
- La prioridad es correr la landing localmente sin fricción.
- El material de origen ya venía como componente React.
- Permite futuras migraciones o integración en otro stack sin bloquear el arranque.

## Consecuencias

- No hay router ni backend en v1.
- El build es estático y fácil de desplegar.
- La complejidad inicial queda contenida.
