import { FOTOS } from './fotos';
import type { Foto } from './fotos';

export type Ambiente = { nombre: string; foto: Foto; detalles: [string, string][] };
export type Habitacion = {
  slug: string;
  nombre: string;
  datos: string;
  texto: string;
  foto: Foto; // foto de la tarjeta
  ambientes: [Ambiente, Ambiente];
};

export const HABITACIONES: Habitacion[] = [
  {
    slug: 'doble',
    nombre: 'Habitación doble con vista al mar',
    datos: '2 personas · 18 m² · cama matrimonial',
    texto: 'Ventanal al mar y sillón para leer. Hay tres iguales en el primer piso.',
    foto: FOTOS.dobleCuarto,
    ambientes: [
      {
        nombre: 'Dormitorio',
        foto: FOTOS.dobleCuarto,
        detalles: [['Cama matrimonial', '1,60 x 1,90 m'], ['Sillón y mesa auxiliar', 'Junto al ventanal'], ['Baño privado', 'Con ducha']],
      },
      {
        nombre: 'Vista',
        foto: FOTOS.dobleVista,
        detalles: [['Ventanal al mar', 'Orientación este'], ['Piso', 'Primero, al frente'], ['Cortinas', 'Blackout y voile']],
      },
    ],
  },
  {
    slug: 'familiar',
    nombre: 'Habitación familiar',
    datos: '4 personas · 26 m² · matrimonial y cucheta',
    texto: 'Dos cuartos unidos por una puerta corrediza: uno para los adultos y otro para los chicos. Hay tres.',
    foto: FOTOS.familiarAdultos,
    ambientes: [
      {
        nombre: 'Cuarto de adultos',
        foto: FOTOS.familiarAdultos,
        detalles: [['Cama matrimonial', '1,60 x 1,90 m'], ['Placard y mesas de luz', 'Incluidos'], ['Baño privado', 'Con ducha']],
      },
      {
        nombre: 'Cuarto de chicos',
        foto: FOTOS.familiarChicos,
        detalles: [['Cucheta de madera', '2 camas de 0,90 m'], ['Puerta corrediza', 'Al cuarto de adultos'], ['Cuna', 'Sin cargo, a pedido']],
      },
    ],
  },
  {
    slug: 'suite',
    nombre: 'Suite con balcón al mar',
    datos: '2 personas · 30 m² · balcón al mar',
    texto: 'En el último piso, con balcón y dos sillas frente a la playa. Hay dos.',
    foto: FOTOS.suiteCuarto,
    ambientes: [
      {
        nombre: 'Dormitorio y balcón',
        foto: FOTOS.suiteCuarto,
        detalles: [['Cama king', '1,80 x 2,00 m'], ['Balcón al mar', '6 m², dos sillas y mesa'], ['Piso', 'Tercero, el último']],
      },
      {
        nombre: 'Baño',
        foto: FOTOS.suiteBano,
        detalles: [['Bacha de piedra', 'Con espejo y luz cálida'], ['Ducha amplia', 'Con mampara'], ['Amenities', 'Bata y pantuflas']],
      },
    ],
  },
];
