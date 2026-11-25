/**
 * Configuración única del sitio.
 * El número de WhatsApp es de PRUEBA: no pertenece a nadie. Cambialo acá y se actualiza
 * en todos los botones del sitio.
 */
export const WHATSAPP_NUMERO = '5490000000000';

/** Contacto del diseñador para la franja "Sitio de demostración" del pie. También de prueba. */
export const DISENADOR = {
  nombre: 'Matías Ferraro',
  whatsapp: '5490000000000',
};

export const NEGOCIO = {
  nombre: 'Posada La Ría',
  zona: 'San Clemente del Tuyú, Partido de La Costa',
  ubicacion: 'Frente al mar',
  mapa: 'https://www.openstreetmap.org/search?query=San%20Clemente%20del%20Tuy%C3%BA',
  recepcion: '8 a 22',
  checkin: 'Check-in desde las 14, check-out hasta las 10',
  temporada: 'De octubre a abril',
  estadiaMinima: '3 noches en enero y febrero',
};

/** Texto del botón principal: el mismo en la barra, el hero, el cierre y la barra del celular. */
export const ACCION_PRINCIPAL = 'Consultar disponibilidad';

export function whatsapp(mensaje: string, numero = WHATSAPP_NUMERO): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

export const MENSAJES = {
  general: 'Hola, quiero consultar disponibilidad en Posada La Ría del __ al __ para __ personas.',
  habitacion: (nombre: string) =>
    `Hola, quiero consultar disponibilidad para la habitación ${nombre} del __ al __ para __ personas.`,
  zona: 'Hola, estoy viendo cómo llegar a Posada La Ría y tengo una consulta: ',
  disenador: 'Hola Matías, vi la demo de Posada La Ría y quiero un sitio para mi negocio.',
};
