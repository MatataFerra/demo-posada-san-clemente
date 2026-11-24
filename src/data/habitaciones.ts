import { FOTOS } from './fotos';

export const HABITACIONES = [
  {
    slug: 'doble',
    nombre: 'Habitación doble con vista al mar',
    datos: '2 personas · 18 m² · cama matrimonial',
    texto: 'Ventana al mar y escritorio chico. Hay tres iguales en el primer piso.',
    foto: FOTOS.almohada,
  },
  {
    slug: 'familiar',
    nombre: 'Habitación familiar',
    datos: '4 personas · 26 m² · matrimonial y 2 simples',
    texto: 'Dos ambientes con puerta corrediza, para que los chicos duerman aparte. Hay tres.',
    foto: FOTOS.sabanas,
  },
  {
    slug: 'suite',
    nombre: 'Suite con balcón al mar',
    datos: '2 personas · 30 m² · balcón al mar',
    texto: 'Balcón con dos sillas y vista a la playa, en el último piso. Hay dos.',
    foto: FOTOS.suite,
  },
];
