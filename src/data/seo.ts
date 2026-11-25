/**
 * Datos estructurados (schema.org, JSON-LD). El negocio es ficticio: el sitio va con noindex,
 * pero los datos quedan completos para mostrar cómo se arman en un sitio real.
 */
import { NEGOCIO } from '../config/site';
import type { Habitacion } from './habitaciones';

export const SITIO = 'https://demo-posada-san-clemente.vercel.app';
const abs = (p: string) => new URL(p, SITIO).href;
const ID_POSADA = abs('/#posada');

export const posadaLD = {
  '@context': 'https://schema.org',
  '@type': 'BedAndBreakfast',
  '@id': ID_POSADA,
  name: NEGOCIO.nombre,
  description: 'Posada de 8 habitaciones a 80 metros de la playa en San Clemente del Tuyú, con desayuno casero incluido.',
  url: abs('/'),
  image: abs('/og/inicio.jpg'),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Clemente del Tuyú',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  numberOfRooms: 8,
  checkinTime: '14:00',
  checkoutTime: '10:00',
  petsAllowed: false,
  amenityFeature: [
    'Desayuno casero incluido',
    'Sombrilla y reposeras',
    'Wi-Fi en toda la posada',
    'Cochera cubierta',
  ].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
};

export const sitioLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: NEGOCIO.nombre,
  url: abs('/'),
  inLanguage: 'es-AR',
  publisher: { '@id': ID_POSADA },
};

export function migasLD(items: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
  };
}

export function habitacionLD(h: Habitacion) {
  const camas = h.ficha.find(([k]) => k === 'Camas')?.[1];
  const superficie = Number(h.datos.match(/(\d+) m²/)?.[1]);
  return {
    '@context': 'https://schema.org',
    '@type': h.slug === 'suite' ? 'Suite' : 'HotelRoom',
    name: h.nombre,
    description: h.texto,
    url: abs(`/habitaciones/${h.slug}`),
    image: abs(`/og/hab-${h.slug}.jpg`),
    occupancy: { '@type': 'QuantitativeValue', maxValue: h.capacidad, unitText: 'personas' },
    floorSize: superficie ? { '@type': 'QuantitativeValue', value: superficie, unitCode: 'MTK' } : undefined,
    bed: camas,
    amenityFeature: h.equipamiento.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    containedInPlace: { '@id': ID_POSADA },
  };
}

export function faqLD(preguntas: { p: string; r: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: preguntas.map(({ p, r }) => ({ '@type': 'Question', name: p, acceptedAnswer: { '@type': 'Answer', text: r } })),
  };
}
