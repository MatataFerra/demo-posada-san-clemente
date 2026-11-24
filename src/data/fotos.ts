/**
 * Registro de fotografías. Todas son de licencia libre (ver CREDITS.md).
 * Son fotos de reemplazo: un cliente real las cambia por las propias.
 */
export type Foto = {
  id: string;
  alt: string;
  ancho: number;
  alto: number;
  tamanos: number[]; // anchos disponibles en /assets/img/photo-<id>-<ancho>.webp
  grande?: string; // archivo sin sufijo, el más grande de la biblioteca
  pos?: string; // object-position
  origen: string; // data-source
  tema: string; // data-subject
  autor: string;
  licencia: string;
  licenciaUrl: string;
  pagina: string;
};

const lib = 'library-057';

export const FOTOS = {
  dunas: { id: 'dunas', alt: 'Médanos con vegetación baja frente al mar en San Clemente del Tuyú', ancho: 1600, alto: 1200, tamanos: [500, 720, 960, 1600], pos: '50% 62%', origen: 'commons', tema: 'landscape', autor: 'Azahel', licencia: 'CC BY-SA 3.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/3.0', pagina: 'https://commons.wikimedia.org/wiki/File:Dunas11.jpg' },
  puntaRasa: { id: 'punta-rasa', alt: 'Arena ondulada por el viento en Punta Rasa, con el horizonte bajo', ancho: 1600, alto: 1200, tamanos: [500, 720, 960, 1600], pos: '50% 60%', origen: 'commons', tema: 'landscape', autor: 'Mariano_i_perez', licencia: 'CC BY 2.0', licenciaUrl: 'https://creativecommons.org/licenses/by/2.0', pagina: 'https://commons.wikimedia.org/wiki/File:Punta_Raza_-_San_Clemente_del_Tuyu.jpg' },
  tamariscos: { id: 'tamariscos', alt: 'Tamariscos sobre el médano con la playa y el mar detrás', ancho: 1600, alto: 1200, tamanos: [500, 720, 960, 1600], origen: 'commons', tema: 'landscape', autor: 'Azahel', licencia: 'CC BY-SA 3.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/3.0', pagina: 'https://commons.wikimedia.org/wiki/File:Escondidos.jpg' },
  amanecer: { id: 'amanecer', alt: 'El sol sale del mar entre nubes, con olas bajas en la orilla', ancho: 1600, alto: 1200, tamanos: [500, 720, 960, 1600], origen: 'commons', tema: 'landscape', autor: 'Imaginariodelmundo', licencia: 'CC0', licenciaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', pagina: 'https://commons.wikimedia.org/wiki/File:Salida_del_sol_en_el_horizonte_marino.jpg' },
  playa: { id: 'playa', alt: 'Playa ancha de San Clemente con sombrillas y el muelle al fondo', ancho: 1600, alto: 1200, tamanos: [500, 720, 960, 1600], origen: 'commons', tema: 'landscape', autor: 'Mauret', licencia: 'CC BY 3.0', licenciaUrl: 'https://creativecommons.org/licenses/by/3.0', pagina: 'https://commons.wikimedia.org/wiki/File:Vista_de_da_Playa_de_San_Clemente.jpg' },
  sabanas: { id: 'm61847874', alt: 'Ropa de cama de lino gris sobre una cama, contra una pared de madera blanca', ancho: 1280, alto: 1024, tamanos: [500, 960], grande: 'm61847874', pos: '70% 60%', origen: lib, tema: 'detail', autor: 'Bekah Russom', licencia: 'CC0', licenciaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', pagina: 'https://commons.wikimedia.org/wiki/File:Bekah_Russom_2017-04-02_(Unsplash).jpg' },
  almohada: { id: 'm61856012', alt: 'Almohada a rayas sobre una cama blanca, con lámpara de pared y luz de ventana', ancho: 1280, alto: 853, tamanos: [500, 960], grande: 'm61856012', pos: '65% 55%', origen: lib, tema: 'detail', autor: 'Nik Lanús', licencia: 'CC0', licenciaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', pagina: 'https://commons.wikimedia.org/wiki/File:Buenos_Aires,_Argentina_(Unsplash_YMOHw3F1Hdk).jpg' },
  mantas: { id: 'm61777177', alt: 'Mantas de lana dobladas sobre una mesa de madera, con luz cálida', ancho: 1280, alto: 831, tamanos: [500, 960], grande: 'm61777177', pos: '45% 50%', origen: lib, tema: 'detail', autor: 'Kelly Sikkema', licencia: 'CC0', licenciaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', pagina: 'https://commons.wikimedia.org/wiki/File:Kelly_Sikkema_2016-03-09_(Unsplash).jpg' },
  pan: { id: 'm150619721', alt: 'Pan casero en un bol azul y manteca sobre un plato', ancho: 960, alto: 1477, tamanos: [500, 720, 960], origen: lib, tema: 'breakfast', autor: 'Friedrich Haag', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', pagina: 'https://commons.wikimedia.org/wiki/File:Brot_003_2019_03_22.jpg' },
  granola: { id: 'm61665613', alt: 'Jarrita de leche y bol con fruta y granola junto a una ventana', ancho: 1280, alto: 1910, tamanos: [500, 960], grande: 'm61665613', origen: lib, tema: 'breakfast', autor: 'Carissa Gan', licencia: 'CC0', licenciaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', pagina: 'https://commons.wikimedia.org/wiki/File:Healthy_Breakfast_1_(Unsplash).jpg' },
  lampara: { id: 'd88', alt: 'Lámpara de cerámica crema sobre una mesa de luz, con sol de la tarde en la pared', ancho: 1280, alto: 1753, tamanos: [500, 960], grande: 'd88', origen: lib, tema: 'detail', autor: 'LoMit', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', pagina: 'https://commons.wikimedia.org/wiki/File:Lamp_with_a_lampshade_illuminated_by_sunlight.jpg' },
  ventana: { id: 'm61880133', alt: 'Almohadones en un banco junto a la ventana, con cortina blanca y una lámpara', ancho: 1280, alto: 1939, tamanos: [500, 960], grande: 'm61880133', pos: '50% 45%', origen: lib, tema: 'detail', autor: 'Irene van der Poel', licencia: 'CC0', licenciaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', pagina: 'https://commons.wikimedia.org/wiki/File:Cozy_bed_by_a_windowsill_(Unsplash).jpg' },
  suite: { id: 'm61777357', alt: 'Ventana sobre una cama con ropa de lino a rayas grises', ancho: 1280, alto: 1707, tamanos: [500, 960], grande: 'm61777357', origen: lib, tema: 'detail', autor: 'Viktoria Hall-Waldhauser', licencia: 'CC0', licenciaUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', pagina: 'https://commons.wikimedia.org/wiki/File:Bedroom_window_(Unsplash).jpg' },
} satisfies Record<string, Foto>;

export function srcset(f: Foto): { src: string; srcset: string } {
  const items = f.tamanos.map((w) => `/assets/img/photo-${f.id}-${w}.webp ${w}w`);
  if (f.grande) items.push(`/assets/img/photo-${f.grande}.webp ${f.ancho}w`);
  const src = f.grande ? `/assets/img/photo-${f.grande}.webp` : `/assets/img/photo-${f.id}-${f.tamanos.at(-1)}.webp`;
  return { src, srcset: items.join(', ') };
}
