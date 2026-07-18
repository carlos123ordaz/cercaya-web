import type { APIRoute } from 'astro';
import { SITE } from '../consts';

// Generado en build para que la URL del sitemap siga a SITE.url automáticamente.
const body = `User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', SITE.url).href}
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
