# La Casa del Poeta - Sitio Web

Sitio web oficial de **La Casa del Poeta**, casa de largas estadías en el corazón patrimonial de Cali.

## 🏠 Sobre el Proyecto

Este es un sitio web moderno construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com). El diseño refleja la identidad colonial y cultural de La Casa del Poeta, con colores cálidos inspirados en el barrio San Antonio.

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos Previos
- Node.js (versión 18 o superior)
- npm (viene con Node.js)

### Comandos Disponibles

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

El sitio estará disponible en `http://localhost:4321` cuando ejecutes `npm run dev`.

## 📁 Estructura del Proyecto

```
la_casa_del_poeta/
├── public/               # Archivos públicos (imágenes, videos)
│   └── images/          # Todas las imágenes del sitio
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.astro        # Navegación principal
│   │   ├── Footer.astro        # Pie de página
│   │   ├── RoomCard.astro      # Tarjeta de habitación
│   │   ├── TestimonialCard.astro  # Tarjeta de testimonio
│   │   ├── ServiceCard.astro   # Tarjeta de servicio
│   │   └── ImageGallery.astro  # Galería de imágenes
│   ├── layouts/         # Plantillas de página
│   │   └── Layout.astro        # Layout principal
│   ├── pages/           # Páginas del sitio
│   │   ├── index.astro         # Página de inicio
│   │   ├── habitaciones.astro  # Todas las habitaciones
│   │   ├── nosotros.astro      # Sobre nosotros
│   │   ├── eventos.astro       # Eventos culturales
│   │   ├── ubicacion.astro     # Ubicación y cómo llegar
│   │   └── contacto.astro      # Formulario de contacto
│   ├── data/            # Datos del sitio
│   │   └── rooms.ts            # Información de habitaciones
│   └── styles/          # Estilos globales
│       └── global.css          # CSS global y variables
├── tailwind.config.mjs  # Configuración de Tailwind
└── astro.config.mjs     # Configuración de Astro
```

## ✏️ Cómo Editar el Contenido (Sin Experiencia en Código)

### 1. Editar Información de Habitaciones

Abre el archivo `src/data/rooms.ts`. Aquí encontrarás toda la información de las habitaciones:

```typescript
{
  id: 'habitacion-1',
  name: 'Habitación 1',
  description: 'Tu descripción aquí...',
  features: [
    'Característica 1',
    'Característica 2',
  ],
  images: ['/images/habitacion_1/foto.jpg'],
  available: true,  // Cambia a false si no está disponible
}
```

**Para agregar una habitación nueva:**
1. Copia un bloque completo de habitación existente
2. Cambia el `id`, `name`, `description` y demás campos
3. Guarda el archivo

### 2. Editar Textos de las Páginas

Cada página está en la carpeta `src/pages/`. Abre el archivo `.astro` de la página que quieres editar:

- **Inicio**: `src/pages/index.astro`
- **Habitaciones**: `src/pages/habitaciones.astro`
- **Sobre Nosotros**: `src/pages/nosotros.astro`
- **Eventos**: `src/pages/eventos.astro`
- **Ubicación**: `src/pages/ubicacion.astro`
- **Contacto**: `src/pages/contacto.astro`

Busca el texto que quieres cambiar dentro del archivo. Los textos están entre comillas o entre etiquetas HTML como `<p>...</p>` o `<h2>...</h2>`.

### 3. Cambiar Información de Contacto

Abre `src/components/Footer.astro` y `src/components/Header.astro` para editar:
- Número de teléfono/WhatsApp
- Instagram
- Enlaces de redes sociales

**Busca y reemplaza:**
- `573012712450` - Número de WhatsApp
- `@casadelpoetacali` - Usuario de Instagram

### 4. Agregar o Cambiar Imágenes

1. Coloca tus nuevas imágenes en la carpeta `public/images/`
2. Organízalas en subcarpetas (ej: `public/images/habitacion_1/`)
3. Actualiza las rutas en `src/data/rooms.ts`

**Ejemplo de ruta de imagen:**
```
/images/habitacion_1/mi_foto.jpg
```
(No incluyas "public" en la ruta)

### 5. Cambiar Colores del Sitio

Abre `tailwind.config.mjs`. Los colores están definidos aquí:

```javascript
colors: {
  terracota: { 500: '#e8633d' },  // Color principal
  oliva: { 600: '#6b7a56' },      // Color secundario
  // ...
}
```

Cambia los valores hexadecimales (ej: `#e8633d`) por los colores que desees.

### 6. Editar Menú de Navegación

Abre `src/components/Header.astro` y busca el array `navLinks`:

```javascript
const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/habitaciones', label: 'Habitaciones' },
  // Agrega más enlaces aquí
];
```

## 🎨 Paleta de Colores

El sitio usa una paleta inspirada en la identidad de La Casa del Poeta:

- **Terracota** (#e8633d): Color principal, cálido y acogedor
- **Oliva** (#6b7a56): Verde colonial, tranquilo
- **Ocre** (#eaaa08): Amarillo tierra
- **Poeta Purple** (#8B5CF6): Morado cultural
- **Verde Vida** (#10B981): Verde vibrante de Cali

## 📱 Responsive Design

El sitio está optimizado para verse bien en:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1280px+)

## 🔧 Tecnologías Usadas

- **Astro 5.x**: Framework web moderno
- **Tailwind CSS 4**: Framework de CSS utility-first
- **TypeScript**: Para types seguros en datos
- **Sharp**: Optimización automática de imágenes

## 📝 Notas Importantes

### Videos
Los videos se cargan directamente desde `public/images/`. Para mejor rendimiento, considera:
- Comprimir videos antes de subirlos
- Usar formatos modernos como WebM cuando sea posible
- Mantener tamaño de archivos bajo 10MB

### SEO
Cada página tiene metadata configurada en el componente `Layout.astro`. Para mejorar SEO:
1. Agrega descripciones únicas a cada página
2. Usa imágenes con buenos `alt` texts
3. Mantén URLs limpias y descriptivas

### Formulario de Contacto
El formulario en `/contacto` necesita configuración adicional:
1. Crea cuenta en [Formspree](https://formspree.io) (gratis)
2. Obtén tu Form ID
3. Reemplaza `YOUR_FORM_ID` en `src/pages/contacto.astro`

## 🆘 Solución de Problemas

### El servidor no inicia
```bash
# Borra node_modules e instala de nuevo
rm -rf node_modules
npm install
npm run dev
```

### Los cambios no se ven
1. Guarda el archivo
2. Espera a que el servidor recargue (aparece en la terminal)
3. Refresca el navegador con Ctrl+R (Cmd+R en Mac)

### Error de imágenes
Verifica que:
- La ruta empiece con `/images/`
- El archivo existe en `public/images/`
- El nombre del archivo coincide exactamente (mayúsculas/minúsculas)

## 📞 Soporte

Si necesitas ayuda con el sitio web, consulta:
- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind](https://tailwindcss.com/docs)

## 📄 Licencia

© 2026 La Casa del Poeta. Todos los derechos reservados.
