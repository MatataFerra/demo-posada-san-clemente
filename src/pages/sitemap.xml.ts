import type { APIRoute } from 'astro';
import { HABITACIONES } from '../data/habitaciones';
import { SITIO } from '../data/seo';

/** Sitemap de las páginas públicas, con URLs limpias (sin .html), igual que las sirve Vercel. */
const rutas: { path: string; prioridad: string }[] = [
  { path: '/', prioridad: '1.0' },
  { path: '/habitaciones', prioridad: '0.9' },
  ...HABITACIONES.map((h) => ({ path: `/habitaciones/${h.slug}`, prioridad: '0.8' })),
  { path: '/la-zona', prioridad: '0.7' },
  { path: '/creditos', prioridad: '0.2' },
];

export const GET: APIRoute = () => {
  const hoy = new Date().toISOString().slice(0, 10);
  const urls = rutas
    .map(({ path, prioridad }) => `  <url>\n    <loc>${new URL(path, SITIO).href}</loc>\n    <lastmod>${hoy}</lastmod>\n    <priority>${prioridad}</priority>\n  </url>`)
    .join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
