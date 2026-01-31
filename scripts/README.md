# 🚀 Scripts de Optimización - La Casa del Poeta

Este directorio contiene scripts automatizados para optimizar las imágenes y videos del sitio web.

## 📦 Scripts Disponibles

### 1. `optimize-images.sh` - Optimización de Imágenes JPG/PNG

Comprime y optimiza todas las imágenes JPG y PNG del sitio.

**Características:**
- Reduce el tamaño de archivos sin pérdida visible de calidad
- Crea Progressive JPEG para carga gradual
- Mantiene respaldo automático de originales
- Calidad optimizada: 85%

**Uso:**
```bash
./scripts/optimize-images.sh
```

**Resultado esperado:**
- Reducción de 10-30% en tamaño de archivos
- Mejor rendimiento en Core Web Vitals
- Progressive loading para mejor UX

---

### 2. `convert-to-webp.sh` - Conversión a Formato WebP

Crea versiones WebP de todas las imágenes (mucho más eficientes).

**Características:**
- Formato moderno con mejor compresión
- Reducción de 30-50% vs JPG optimizado
- Mantiene imágenes originales como fallback
- Compatible con navegadores modernos

**Uso:**
```bash
./scripts/convert-to-webp.sh
```

**Resultado esperado:**
- Archivos WebP 30-40% más pequeños que JPG
- Los navegadores modernos los usarán automáticamente
- Fallback a JPG en navegadores antiguos

---

### 3. `optimize-videos.sh` - Optimización de Videos MP4

Comprime videos manteniendo calidad visual aceptable.

**Características:**
- Codec: H.264 (compatibilidad universal)
- CRF 28 (balance calidad/tamaño)
- Audio: AAC 128kbps
- Fast start habilitado

**Requisitos:**
```bash
# Instalar ffmpeg primero
sudo apt install ffmpeg  # Linux
brew install ffmpeg      # macOS
```

**Uso:**
```bash
./scripts/optimize-videos.sh
```

**Resultado esperado:**
- Reducción de 40-70% en tamaño de videos
- Mantiene calidad visual razonable
- Streaming optimizado

---

## 📊 Proceso Completo de Optimización

Ejecuta los scripts en este orden para optimización máxima:

```bash
# 1. Optimizar imágenes JPG/PNG
./scripts/optimize-images.sh

# 2. Crear versiones WebP
./scripts/convert-to-webp.sh

# 3. Optimizar videos (opcional, requiere ffmpeg)
./scripts/optimize-videos.sh

# 4. Reconstruir el sitio
npm run build
```

---

## 🔧 Configuración

### Ajustar Calidad de Imágenes

Para cambiar la calidad de compresión JPG, edita `optimize-images.sh`:

```bash
# Línea ~47: cambiar --quality 85 a tu valor deseado (50-100)
npx sharp-cli -i "$img" -o "..." --quality 85
```

### Ajustar Calidad de WebP

Para cambiar la calidad WebP, edita `convert-to-webp.sh`:

```bash
# Línea ~42: cambiar --quality 85 a tu valor deseado (60-95)
npx sharp-cli -i "$img" -o "$output_path" -f webp --quality 85
```

### Ajustar Compresión de Videos

Para cambiar la compresión de video, edita `optimize-videos.sh`:

```bash
# Línea ~89: cambiar -crf 28 (18 = mejor calidad, 32 = menor tamaño)
ffmpeg -i "$video" -c:v libx264 -crf 28 ...
```

---

## 📁 Backups

Los scripts crean automáticamente backups:

- **Imágenes originales**: `public/images_backup/`
- **Videos originales**: `public/videos_backup/`

### Restaurar desde Backup

Si no estás satisfecho con los resultados:

```bash
# Restaurar imágenes
rm -rf public/images
mv public/images_backup public/images

# Restaurar videos
rm -rf public/images/*/*.mp4
cp public/videos_backup/* public/images/*/
```

### Eliminar Backups

Una vez satisfecho con los resultados:

```bash
rm -rf public/images_backup
rm -rf public/videos_backup
```

---

## 📈 Métricas de Rendimiento

### Antes de Optimización:
- Tamaño total: **348MB**
- Tiempo de carga: ~8-12s (conexión 3G)
- LCP (Largest Contentful Paint): ~5-7s

### Después de Optimización:
- Tamaño total: **~150-180MB** (reducción de 50%)
- Tiempo de carga: ~3-5s (conexión 3G)
- LCP (Largest Contentful Paint): <2.5s ✅

---

## 🛠️ Mantenimiento

### Al Agregar Nuevas Imágenes

1. Agrega la imagen a `public/images/`
2. Ejecuta los scripts de optimización
3. Reconstruye el sitio

### Al Actualizar Imágenes Existentes

1. Reemplaza el archivo en `public/images/`
2. Ejecuta `optimize-images.sh` y `convert-to-webp.sh`
3. Reconstruye el sitio

---

## 🐛 Troubleshooting

### Error: "npx: command not found"

Instala Node.js y npm:
```bash
# Ubuntu/Debian
sudo apt install nodejs npm

# macOS
brew install node
```

### Error: "sharp-cli not found"

Reinstala sharp-cli:
```bash
npm install -D sharp-cli
```

### Error: "ffmpeg: command not found"

Instala ffmpeg:
```bash
# Ubuntu/Debian
sudo apt install ffmpeg

# macOS
brew install ffmpeg
```

### Las imágenes no se ven después de optimizar

Verifica que los archivos WebP se crearon:
```bash
find public/images -name "*.webp" | wc -l
```

Si no hay archivos WebP, ejecuta `convert-to-webp.sh` nuevamente.

---

## 💡 Tips Adicionales

1. **Usa formatos modernos**: WebP es mejor que JPG/PNG
2. **Optimiza regularmente**: Cada vez que agregues contenido
3. **Monitorea métricas**: Usa Google PageSpeed Insights
4. **Considera CDN**: Para sitios con mucho tráfico
5. **Videos en último lugar**: Son los archivos más pesados

---

## 📚 Referencias

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [WebP Format](https://developers.google.com/speed/webp)
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [Web Performance Best Practices](https://web.dev/fast/)

---

**Última actualización**: Enero 2026
