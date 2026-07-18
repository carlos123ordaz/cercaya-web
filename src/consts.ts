/**
 * Configuración central del sitio.
 * Cambiar algo aquí actualiza SEO, sitemap, JSON-LD, footers y páginas legales.
 */
export const SITE = {
  url: 'https://cerca-ya.vercel.app',
  name: 'CercaYa',
  /** Se concatena como "<título> | CercaYa" en las páginas internas. */
  titleDefault: 'CercaYa — Alarma de llegada por GPS para tus viajes',
  description:
    'Duérmete en el bus sin miedo a pasarte. CercaYa te despierta con una alarma cuando estás por llegar a tu destino. Funciona con GPS, sin datos móviles. Gratis.',
  lang: 'es',
  locale: 'es_ES',
  /** Imagen de previsualización para redes (1200×630). */
  ogImage: '/og.png',
  themeColor: '#070B16',
} as const;

export const CONTACT = {
  soporte: 'soporte@cercaya.app',
  privacidad: 'privacidad@cercaya.app',
  legal: 'legal@cercaya.app',
} as const;

/**
 * TODO: pega aquí tu endpoint real de Formspree (https://formspree.io → New Form).
 * Mientras esté en null, el formulario de /soporte se oculta y solo se muestra
 * el contacto por correo, para no publicar un formulario que no envía nada.
 */
export const FORMSPREE_ENDPOINT: string | null = null;

/**
 * TODO: pega la URL de la ficha cuando Apple apruebe la app.
 * Mientras sea null, los botones muestran "Próximamente" en vez de un enlace roto.
 */
export const APP_STORE_URL: string | null = null;

/** Fecha de última actualización de los textos legales. */
export const LEGAL_UPDATED = '17 de julio de 2026';
