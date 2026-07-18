# Web de CercaYa

Sitio de marketing, soporte y textos legales de la app iOS CercaYa. Hecho con
[Astro](https://astro.build) — salida 100% estática, sin backend.

## Comandos

| Comando           | Qué hace                                       |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Instala dependencias                           |
| `npm run dev`     | Servidor local en `localhost:4321`             |
| `npm run build`   | Genera el sitio estático en `./dist/`          |
| `npm run preview` | Sirve `./dist/` como quedará en producción     |
| `npx astro check` | Revisa tipos de TypeScript en `.astro` y `.ts` |

## URLs para App Store Connect

| Campo en App Store Connect        | URL                                      |
| --------------------------------- | ---------------------------------------- |
| **URL de marketing**              | `https://cerca-ya.vercel.app`            |
| **URL de soporte**                | `https://cerca-ya.vercel.app/soporte`    |
| **URL de política de privacidad** | `https://cerca-ya.vercel.app/privacidad` |
| Términos (EULA propio)            | `https://cerca-ya.vercel.app/terminos`   |

## Configuración

Casi todo lo editable vive en **`src/consts.ts`**: dominio, textos SEO por defecto,
correos de contacto y dos interruptores pendientes:

- `FORMSPREE_ENDPOINT` — mientras sea `null`, `/soporte` muestra solo el contacto por
  correo. Al pegar tu endpoint de [Formspree](https://formspree.io), aparece el formulario.
- `APP_STORE_URL` — mientras sea `null`, los botones dicen «Muy pronto en el App Store».
  Al pegar la URL de la ficha, se vuelven enlaces reales.

Cambiar `SITE.url` actualiza a la vez canonical, Open Graph, `sitemap-index.xml` y
`robots.txt`. No hay ninguna URL escrita a mano en las páginas.

## SEO incluido

- `<title>`, meta description y **canonical** por página (sin `.html` duplicado).
- Open Graph + Twitter Card con imagen `public/og.png` (1200×630).
- **JSON-LD**: `MobileApplication`, `FAQPage` y `Organization` en la portada;
  `ContactPage` en soporte.
- `sitemap-index.xml` con prioridades por página y `robots.txt`, ambos generados en build.
- Fuente Nunito auto-alojada (`@fontsource-variable/nunito`): sin peticiones a
  Google Fonts, mejor LCP y sin fuga de IPs de visitantes.
- `404.astro` marcada `noindex`.

### Regenerar la imagen de Open Graph

`public/og.png` se genera con Pillow a partir del icono real de la app:

```bash
python3 scripts/make-og.py   # escribe scripts/og.png; muévelo a public/
```

## Despliegue (Vercel)

El repo incluye `vercel.json` con `cleanUrls`, cabeceras de seguridad y caché
inmutable para `/_astro/*`. Vercel detecta Astro solo:

- Framework preset: **Astro**
- Build command: `npm run build`
- Output directory: `dist`

## Accesibilidad y movimiento

Todas las animaciones se desactivan bajo `prefers-reduced-motion: reduce`. Las
animaciones CSS vía `global.css`; la animación SMIL del mapa se pausa con el script
inline de `PhoneMockup.astro` (SMIL no se puede detener desde CSS).

> Nota: el punto que recorre la ruta usa `<animateTransform>` (SMIL) y no una
> animación CSS. Una animación CSS de `transform` sobre un `<g>` puede promoverse
> a capa compositada y dejar de pintarse; SMIL es determinista aquí.

## Pendientes antes de publicar

1. Crear los buzones `soporte@`, `privacidad@` y `legal@` del dominio que uses, o
   cambiarlos en `src/consts.ts` por correos que sí recibas. **Apple rechaza fichas
   cuyo contacto de soporte no responde.**
2. Pegar `FORMSPREE_ENDPOINT` y `APP_STORE_URL` en `src/consts.ts`.
3. Revisar los textos legales con alguien con criterio legal: son una base sólida,
   no asesoramiento jurídico.
