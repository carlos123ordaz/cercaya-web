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
    a: 'El seguimiento durante el viaje ocurre dentro de tu teléfono: la distancia al destino se calcula localmente y tu recorrido no se envía a ningún servidor. Solo al buscar un destino o trazar la ruta se consultan las APIs de Google Maps con tu posición. No tenemos servidores propios, ni cuentas, ni analítica, y no vendemos datos. El detalle está en nuestra Política de privacidad.',
  },
  {
    q: '¿La búsqueda por voz envía mi audio a algún servidor?',
    a: 'No. La transcripción ocurre íntegramente dentro de tu iPhone: la grabación no llega a nuestros servidores, ni a los de Apple, ni a los de Google. Como consecuencia, el dictado también funciona sin cobertura. Si tu iPhone no tiene descargado el modelo de voz sin conexión, el botón de micrófono no aparece: preferimos ocultar la función antes que transcribir en un servidor.',
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
