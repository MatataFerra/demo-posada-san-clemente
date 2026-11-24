import { FOTOS } from './fotos';
import type { Foto } from './fotos';

export type Ambiente = { nombre: string; foto: Foto; detalles: [string, string][] };
export type Habitacion = {
  slug: string;
  nombre: string;
  titulo: string; // h1 de la página propia: qué es y dónde, 40 caracteres máx.
  datos: string; // línea corta para tarjetas
  texto: string; // una o dos frases para tarjetas
  bajada: string; // hero de la página propia (80 caracteres máx.)
  foto: Foto; // foto principal
  ambientesTitulo: string;
  ambientes: [Ambiente, Ambiente];
  galeria: [Foto, Foto, Foto]; // fotos de detalle: grande, mediana, chica
  vista: { titulo: string; texto: string; fotos: [Foto, Foto] };
  ficha: [string, string][]; // la ficha completa
  equipamiento: string[];
};

export const HABITACIONES: Habitacion[] = [
  {
    slug: 'doble',
    nombre: 'Habitación doble con vista al mar',
    titulo: 'Habitación doble al mar en San Clemente',
    datos: '2 personas · 18 m² · cama matrimonial',
    texto: 'Ventanal al mar y sillón para leer. Hay tres iguales en el primer piso.',
    bajada: 'Para 2 personas, 18 m² en el primer piso. Desayuno de 8 a 11 incluido.',
    foto: FOTOS.dobleCuarto,
    ambientesTitulo: 'Dormitorio con vista al mar',
    ambientes: [
      { nombre: 'Dormitorio', foto: FOTOS.dobleCuarto, detalles: [['Cama matrimonial', '1,60 x 1,90 m'], ['Sillón y mesa auxiliar', 'Junto al ventanal'], ['Baño privado', 'Con ducha']] },
      { nombre: 'Vista', foto: FOTOS.dobleVista, detalles: [['Ventanal al mar', 'Orientación este'], ['Piso', 'Primero, al frente'], ['Cortinas', 'Blackout y voile']] },
    ],
    galeria: [FOTOS.almohada, FOTOS.lampara, FOTOS.granola],
    vista: {
      titulo: 'Vista al mar desde la cama',
      texto: 'El ventanal mira al este: el sol sale del mar frente a la cama. La playa queda a 80 metros, cruzando la costanera.',
      fotos: [FOTOS.amanecer, FOTOS.playa],
    },
    ficha: [
      ['Capacidad', '2 personas'], ['Superficie', '18 m²'], ['Camas', '1 matrimonial de 1,60 m'],
      ['Baño', 'Privado, con ducha'], ['Piso', 'Primero, al frente'], ['Vista', 'Al mar']
    ],
    equipamiento: ['Calefacción y ventilador de techo', 'Smart TV de 32"', 'Wi-Fi', 'Frigobar', 'Secador de pelo', 'Caja de seguridad'],
  },
  {
    slug: 'familiar',
    nombre: 'Habitación familiar',
    titulo: 'Habitación familiar a 80 m del mar',
    datos: '4 personas · 26 m² · matrimonial y cucheta',
    texto: 'Dos cuartos unidos por una puerta corrediza: uno para los adultos y otro para los chicos. Hay tres.',
    bajada: 'Dos cuartos para 4 personas: matrimonial para adultos y cucheta para chicos.',
    foto: FOTOS.familiarAdultos,
    ambientesTitulo: 'Cuarto de adultos y cuarto de chicos',
    ambientes: [
      { nombre: 'Cuarto de adultos', foto: FOTOS.familiarAdultos, detalles: [['Cama matrimonial', '1,60 x 1,90 m'], ['Placard y mesas de luz', 'Incluidos'], ['Baño privado', 'Con ducha']] },
      { nombre: 'Cuarto de chicos', foto: FOTOS.familiarChicos, detalles: [['Cucheta de madera', '2 camas de 0,90 m'], ['Puerta corrediza', 'Al cuarto de adultos'], ['Cuna', 'Sin cargo, a pedido']] },
    ],
    galeria: [FOTOS.mantas, FOTOS.sabanas, FOTOS.pan],
    vista: {
      titulo: 'A una cuadra de la playa',
      texto: 'La familiar está en planta baja, sobre el jardín: se sale directo a la costanera. Sombrilla y reposeras se piden en recepción.',
      fotos: [FOTOS.playa, FOTOS.dunas],
    },
    ficha: [
      ['Capacidad', '4 personas'], ['Superficie', '26 m² en dos cuartos'], ['Camas', '1 matrimonial y 1 cucheta'],
      ['Baño', 'Privado, con ducha'], ['Piso', 'Planta baja, al jardín'], ['Vista', 'Al jardín']
    ],
    equipamiento: ['Calefacción en los dos cuartos', 'Smart TV de 32"', 'Wi-Fi', 'Frigobar y pava eléctrica', 'Cuna y silla alta a pedido', 'Juegos de mesa en recepción'],
  },
  {
    slug: 'suite',
    nombre: 'Suite con balcón al mar',
    titulo: 'Suite con balcón al mar en San Clemente',
    datos: '2 personas · 30 m² · balcón al mar',
    texto: 'En el último piso, con balcón y dos sillas frente a la playa. Hay dos.',
    bajada: 'Para 2 personas, 30 m² en el último piso, con balcón de 6 m² al mar.',
    foto: FOTOS.suiteCuarto,
    ambientesTitulo: 'Dormitorio, balcón y baño',
    ambientes: [
      { nombre: 'Dormitorio y balcón', foto: FOTOS.suiteCuarto, detalles: [['Cama king', '1,80 x 2,00 m'], ['Balcón al mar', '6 m², dos sillas y mesa'], ['Piso', 'Tercero, el último']] },
      { nombre: 'Baño', foto: FOTOS.suiteBano, detalles: [['Bacha de piedra', 'Con espejo y luz cálida'], ['Ducha amplia', 'Con mampara'], ['Amenities', 'Bata y pantuflas']] },
    ],
    galeria: [FOTOS.ventana, FOTOS.suite, FOTOS.dobleVista],
    vista: {
      titulo: 'Balcón sobre la playa',
      texto: 'Desde el tercer piso se ve toda la playa y, en días claros, la punta de Punta Rasa hacia el norte.',
      fotos: [FOTOS.tamariscos, FOTOS.puntaRasa],
    },
    ficha: [
      ['Capacidad', '2 personas'], ['Superficie', '30 m² y balcón de 6 m²'], ['Camas', '1 king de 1,80 m'],
      ['Baño', 'Privado, ducha amplia'], ['Piso', 'Tercero, el último'], ['Vista', 'Al mar, con balcón']
    ],
    equipamiento: ['Aire acondicionado frío y calor', 'Smart TV de 43"', 'Wi-Fi', 'Frigobar y cafetera de cápsulas', 'Bata, pantuflas y amenities', 'Caja de seguridad'],
  },
];

export const CONDICIONES: [string, string][] = [
  ['Check-in', 'Desde las 14'],
  ['Check-out', 'Hasta las 10'],
  ['Desayuno', 'De 8 a 11, incluido'],
  ['Mascotas', 'No se aceptan'],
  ['Seña', '30%, transferencia'],
  ['Cancelación', 'Gratis 7 días antes'],
];
