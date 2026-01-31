/**
 * Configuración centralizada de imágenes de La Casa del Poeta
 * 
 * Este archivo contiene todas las rutas de imágenes del sitio.
 * Para actualizar o cambiar imágenes, simplemente modifica las rutas aquí.
 */

// Helper para agregar base path
const base = import.meta.env.BASE_URL || '';
const img = (path: string) => `${base}${path}`;

export const images = {
  // Imágenes principales
  hero: img('/images/espacios_comunes/imagen_1.jpg'),
  
  // Espacios comunes
  espaciosComunes: [
    img('/images/espacios_comunes/imagen_1.jpg'),
  ],

  // Eventos culturales
  eventosCulturales: [
    img('/images/eventos_culturales/imagen_1.jpg'),
    img('/images/eventos_culturales/imagen_2.jpg'),
    img('/images/eventos_culturales/imagen_3.jpg'),
  ],

  // Habitaciones - Imágenes centralizadas por habitación
  habitaciones: {
    habitacion1: [
      img('/images/habitacion_1/imagen_1.jpg'),
      img('/images/habitacion_1/imagen_2.jpg'),
      img('/images/habitacion_1/imagen_3.jpg'),
      img('/images/habitacion_1/imagen_4.jpg'),
      img('/images/habitacion_1/imagen_5.jpg'),
      img('/images/habitacion_1/imagen_6.jpg'),
      img('/images/habitacion_1/imagen_7.jpg'),
      img('/images/habitacion_1/imagen_8.jpg'),
    ],
    habitacion2: {
      videos: [
        img('/images/habitacion_2/video_1.mp4'),
        img('/images/habitacion_2/video_2.mp4'),
        img('/images/habitacion_2/video_3.mp4'),
      ],
    },
    habitacion4: {
      videos: [img('/images/habitacion_4/video_1.mp4')],
    },
    habitacion5: [
      img('/images/habitacion_5/imagen_1.jpg'),
      img('/images/habitacion_5/imagen_2.jpg'),
      img('/images/habitacion_5/imagen_3.jpg'),
      img('/images/habitacion_5/imagen_4.jpg'),
    ],
    habitacion6: [
      img('/images/habitacion_6/imagen_1.jpg'),
      img('/images/habitacion_6/imagen_2.jpg'),
      img('/images/habitacion_6/imagen_3.jpg'),
      img('/images/habitacion_6/imagen_4.jpg'),
      img('/images/habitacion_6/imagen_5.jpg'),
      img('/images/habitacion_6/imagen_6.jpg'),
      img('/images/habitacion_6/imagen_7.jpg'),
      img('/images/habitacion_6/imagen_8.jpg'),
      img('/images/habitacion_6/imagen_9.jpg'),
      img('/images/habitacion_6/imagen_10.jpg'),
    ],
    habitacion7: [
      img('/images/habitacion_7/imagen_1.jpg'),
      img('/images/habitacion_7/imagen_2.jpg'),
      img('/images/habitacion_7/imagen_3.jpg'),
    ],
    habitacion8: [
      img('/images/habitacion_8/imagen_1.jpg'),
      img('/images/habitacion_8/imagen_2.jpg'),
      img('/images/habitacion_8/imagen_3.jpg'),
    ],
  },

  // Baño comunal
  banoComunal: [
    img('/images/bano_comunal/imagen_1.jpg'),
  ],
};
