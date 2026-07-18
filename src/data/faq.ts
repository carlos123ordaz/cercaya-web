/**
 * Fuente única de las FAQ: se renderizan en la landing y en /soporte,
 * y alimentan el JSON-LD de tipo FAQPage (rich results de Google).
 */
export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: '¿Funciona si no tengo internet en el viaje?',
    a: 'Sí. CercaYa usa el GPS del teléfono, que no necesita datos móviles. Solo necesitas internet al buscar el destino; después puedes viajar sin señal.',
  },
  {
    q: '¿Suena aunque el teléfono esté en silencio?',
    a: 'La alarma está pensada para despertarte: reproduce sonido en primer plano y vibra de forma continua hasta que la detengas. Ten en cuenta que iOS puede limitar el volumen si el interruptor de silencio está activado, así que te recomendamos dejar el timbre encendido durante el viaje.',
  },
  {
    q: '¿Gasta mucha batería el seguimiento?',
    a: 'El seguimiento en segundo plano está optimizado: la app reduce la frecuencia del GPS cuando estás lejos del destino y la aumenta al acercarte.',
  },
  {
    q: '¿Qué pasa con mis datos de ubicación?',
    a: 'Tu ubicación se procesa solo en tu teléfono para calcular la distancia al destino. No la almacenamos en servidores, no la vendemos ni la compartimos. Puedes leer el detalle en nuestra Política de privacidad.',
  },
  {
    q: '¿Por qué la app pide permiso de ubicación "Siempre"?',
    a: 'Para avisarte mientras duermes, la app necesita medir tu distancia al destino con la pantalla apagada o con otra app abierta. Sin el permiso "Siempre", iOS detiene el seguimiento y la alarma no se dispara.',
  },
  {
    q: '¿Es gratis?',
    a: 'Sí, descargar y usar CercaYa es gratis, con viajes y alarmas ilimitados.',
  },
];
