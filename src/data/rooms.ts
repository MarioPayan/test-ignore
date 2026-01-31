/**
 * Datos de las habitaciones de La Casa del Poeta
 * 
 * Este archivo contiene toda la información de las habitaciones.
 * Para editar los textos o agregar/quitar habitaciones, simplemente
 * modifica este archivo siguiendo la estructura existente.
 */

import { images } from './images';

export interface Room {
  id: string;
  name: string;
  description: string;
  features: string[];
  images: string[];
  videos?: string[];
}

export const rooms: Room[] = [
  {
    id: 'habitacion-1',
    name: 'Habitación 1',
    description: 'Acogedora habitación con ambiente tranquilo y cálido. Perfecta para estancias largas, cuenta con todo lo necesario para sentirte como en casa.',
    features: [
      'Espacio amplio',
      'Baño privado',
      'Escritorio de trabajo',
      'Ventanas con luz natural',
    ],
    images: images.habitaciones.habitacion1,
  },
  {
    id: 'habitacion-2',
    name: 'Habitación 2',
    description: 'Habitación con encanto colonial, ideal para quienes buscan una experiencia auténtica en el corazón de San Antonio.',
    features: [
      'Decoración colonial',
      'Ambiente fresco',
      'Iluminación natural',
      'Espacio cómodo',
    ],
    videos: images.habitaciones.habitacion2.videos,
    images: [],
  },
  {
    id: 'habitacion-4',
    name: 'Habitación 4',
    description: 'Espacio luminoso y ventilado, perfecto para relajarse después de un día explorando Cali.',
    features: [
      'Muy iluminada',
      'Ventilación natural',
      'Mobiliario cómodo',
      'Vista agradable',
    ],
    videos: images.habitaciones.habitacion4.videos,
    images: [],
  },
  {
    id: 'habitacion-5',
    name: 'Habitación 5',
    description: 'Habitación acogedora con todos los servicios incluidos. Ideal para estancias de corta o larga duración.',
    features: [
      'Completamente equipada',
      'Espacio funcional',
      'Ambiente tranquilo',
      'Buena ubicación dentro de la casa',
    ],
    images: images.habitaciones.habitacion5,
  },
  {
    id: 'habitacion-6',
    name: 'Habitación 6',
    description: 'Una de nuestras habitaciones más amplias, con excelente iluminación y espacio para vivir cómodamente.',
    features: [
      'Muy espaciosa',
      'Mucha luz natural',
      'Ideal para estancias largas',
      'Todos los servicios incluidos',
    ],
    images: images.habitaciones.habitacion6,
  },
  {
    id: 'habitacion-7',
    name: 'Habitación 7',
    description: 'Habitación confortable con excelente distribución del espacio. Perfecta para quienes valoran la funcionalidad.',
    features: [
      'Bien distribuida',
      'Confortable',
      'Ventanas amplias',
      'Decoración acogedora',
    ],
    images: images.habitaciones.habitacion7,
  },
  {
    id: 'habitacion-8',
    name: 'Habitación 8',
    description: 'Habitación íntima y acogedora, ideal para quienes buscan un espacio personal tranquilo.',
    features: [
      'Espacio personal',
      'Muy tranquila',
      'Bien equipada',
      'Ambiente acogedor',
    ],
    images: images.habitaciones.habitacion8,
  },
];

/**
 * Testimonios de huéspedes anteriores
 * Para agregar más testimonios, añade objetos a este array
 */
export interface Testimonial {
  name: string;
  text: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Huésped',
    text: 'Súper ubicado para recorrer el centro histórico de la ciudad. Rossana, la anfitriona, muy atenta y cordial. Muy amplia y cómoda la habitación. La casa está llena de vida, de colores y de unas plantas increíbles. Los encuentros todas las semanas nos enriquecen mucho.',
  },
  {
    name: 'Huésped',
    text: 'Un gran parche. Súper ubicación, ambiente cultural, y lo más valioso tener el espacio propio de cada uno pero también convivir en los eventos del lugar.',
  },
  {
    name: 'Huésped',
    text: 'Increíble la atención de Nacho, un lugar mágico donde puedes estar tranquilo y así mismo visitar el centro de la ciudad caminando o tomando un taxi.',
  },
  {
    name: 'Huésped',
    text: 'Casa muy acogedora. Habitaciones cómodas y muy limpias. Buena relación calidad-precio. Muy bien ubicada para visitar Cali.',
  },
];

/**
 * Eventos culturales
 * Información sobre las actividades culturales de la casa
 */

import { images as imgConfig } from './images';

export interface CulturalEvent {
  title: string;
  description: string;
  frequency: string;
  image?: string;
}

export const culturalEvents: CulturalEvent[] = [
  {
    title: 'Cineforos Semanales',
    description: 'Cada semana nos reunimos para ver y discutir películas que nos hacen reflexionar sobre la cultura, el arte y la vida. Un espacio de diálogo y aprendizaje colectivo.',
    frequency: 'Todas las semanas',
    image: imgConfig.eventosCulturales[0],
  },
  {
    title: 'Encuentros Culturales',
    description: 'Actividades variadas que conectan a los huéspedes con la cultura local de Cali. Desde música hasta conversatorios, cada evento es una oportunidad de conocer y compartir.',
    frequency: 'Regular',
    image: imgConfig.eventosCulturales[1],
  },
];

/**
 * Información de servicios incluidos
 */
export const includedServices = [
  {
    icon: '📶',
    name: 'WiFi',
    description: 'Internet de alta velocidad',
  },
  {
    icon: '💡',
    name: 'Servicios Públicos',
    description: 'Agua, luz, gas incluidos',
  },
  {
    icon: '🚿',
    name: 'Agua Caliente',
    description: 'Disponible 24/7',
  },
  {
    icon: '🧹',
    name: 'Servicio de Aseo',
    description: 'Limpieza regular',
  },
  {
    icon: '🎬',
    name: 'Eventos Culturales',
    description: 'Cineforos y más',
  },
  {
    icon: '🏛️',
    name: 'Ubicación Patrimonial',
    description: 'Corazón de San Antonio',
  },
];
