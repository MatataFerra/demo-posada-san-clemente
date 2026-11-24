# Posada La Ría — sitio de demostración

Sitio demo de portfolio: una posada **ficticia** frente al mar en San Clemente del Tuyú (Partido de La Costa, Buenos Aires). Sirve para mostrarles a comercios locales y negocios de turismo cómo puede verse su web.

> El negocio, las habitaciones, los horarios y el número de WhatsApp son inventados. Las atracciones mencionadas (Mundo Marino, Punta Rasa, Termas Marinas) son reales y solo se citan como contexto turístico; no hay relación con ellas.

## Stack

- [Astro](https://astro.build) 7, salida estática.
- Sistema de diseño en `public/assets/` (tokens, grilla, botones, nav, micro-interacciones).
- Tailwind CSS 4 solo como utilidades con prefijo `tw:` (sin preflight), mapeadas a los tokens del sistema.
- Tipografías auto-hospedadas: Zilla Slab (títulos) y Rethink Sans (texto).

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Hero, ubicación y recepción, habitaciones, desayuno |
| `/habitaciones` | Los 3 tipos de habitación con su botón de WhatsApp, qué incluye la estadía |
| `/la-zona` | Playa y médanos, lugares cercanos, cómo llegar y preguntas frecuentes |
| `/creditos` | Autores y licencias de las fotos |

## WhatsApp

Todo sale de `src/config/site.ts`:

- `WHATSAPP_NUMERO`: número de **prueba** (`5490000000000`). Cambialo y se actualizan todos los botones.
- `MENSAJES`: textos precargados según la página o la habitación (con `__` para fechas y personas).
- `DISENADOR`: contacto de la franja "Sitio de demostración" del pie.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Fotos

Todas son de licencia libre (Wikimedia Commons). Ver [CREDITS.md](CREDITS.md). Son de reemplazo: un cliente real las cambia por las propias en `public/assets/img/` y `src/data/fotos.ts`.
