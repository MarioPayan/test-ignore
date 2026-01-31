# Guía de Optimización de Imágenes - La Casa del Poeta

## ✅ Optimizaciones Implementadas

### 1. **Lazy Loading Inteligente**
- Las primeras 3 imágenes de cada galería cargan inmediatamente (`loading="eager"`)
- El resto usa lazy loading nativo del navegador (`loading="lazy"`)
- La imagen hero usa `fetchpriority="high"` para carga prioritaria

### 2. **Decoding Asíncrono**
- Todas las imágenes usan `decoding="async"` para no bloquear el renderizado
- El navegador puede decodificar imágenes en paralelo

### 3. **Dimensiones Explícitas**
- Todas las imágenes tienen `width` y `height` definidos
- Previene el Cumulative Layout Shift (CLS)
- Mejora el Core Web Vitals

### 4. **DNS Prefetch**
- Pre-conexión a dominios externos (WhatsApp, Google Fonts)
- Reduce la latencia en conexiones externas

### 5. **Configuración de Build Optimizada**
- CSS code splitting habilitado
- Inline de estilos críticos automático
- Separación de chunks de vendor

## 🚀 Recomendaciones Adicionales

### Paso 1: Comprimir Imágenes Existentes

Para comprimir todas las imágenes sin perder calidad, ejecuta:

```bash
# Instalar herramientas de compresión
npm install -D sharp-cli

# Comprimir todas las imágenes JPG (calidad 85%)
npx sharp-cli -i 'public/images/**/*.jpg' -o 'public/images' --quality 85 --progressive

# Comprimir todas las imágenes PNG
npx sharp-cli -i 'public/images/**/*.png' -o 'public/images' --compressionLevel 9
```

### Paso 2: Convertir a Formatos Modernos (Opcional)

Los formatos WebP y AVIF son mucho más eficientes:

```bash
# Convertir JPG a WebP (70-90% más pequeño)
npx sharp-cli -i 'public/images/**/*.jpg' -o 'public/images' -f webp --quality 85

# Para soporte de AVIF (aún mejor compresión)
npx sharp-cli -i 'public/images/**/*.jpg' -o 'public/images' -f avif --quality 75
```

### Paso 3: Optimizar Videos

Los videos son los archivos más pesados. Considera:

```bash
# Instalar ffmpeg si no lo tienes
sudo apt install ffmpeg  # Linux
brew install ffmpeg      # macOS

# Comprimir videos manteniendo calidad razonable
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4
```

### Paso 4: Implementar Progressive JPEG

Las imágenes Progressive JPEG se cargan gradualmente:

```bash
npx sharp-cli -i 'public/images/**/*.jpg' -o 'public/images' --progressive
```

## 📊 Métricas Esperadas

Después de estas optimizaciones, deberías ver:

- **LCP (Largest Contentful Paint)**: < 2.5s ✅
- **FID (First Input Delay)**: < 100ms ✅
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅
- **Reducción de peso**: 50-70% en imágenes
- **Velocidad de carga**: 2-3x más rápido

## 🔍 Herramientas de Medición

1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **WebPageTest**: https://www.webpagetest.org/
3. **Chrome DevTools**: Network tab + Lighthouse

## 💡 Tips Adicionales

### Usar CDN (Opcional pero recomendado)
Si el sitio crece, considera usar Cloudflare o un CDN similar:
- Caching automático
- Compresión Brotli
- HTTP/2 y HTTP/3
- Edge locations cercanas a usuarios

### Lazy Loading para Videos
Los videos en habitación 2 y 4 deberían usar:
```html
<video preload="none" poster="thumbnail.jpg">
```

### Considerar Picture Element
Para servir diferentes formatos según el navegador:
```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="...">
</picture>
```

## 🎯 Próximos Pasos

1. ✅ Lazy loading implementado
2. ✅ Dimensiones explícitas añadidas
3. ✅ Fetchpriority optimizado
4. ⏳ Comprimir imágenes existentes (manual)
5. ⏳ Convertir a WebP/AVIF (opcional)
6. ⏳ Optimizar videos (manual)
7. ⏳ Configurar CDN (opcional)

## 📝 Notas de Mantenimiento

- Al agregar nuevas imágenes, comprimirlas antes de subirlas
- Mantener dimensiones consistentes (aspect ratio 16:9 para galerías)
- Considerar lazy loading para imágenes below-the-fold
- Revisar métricas mensualmente con Google PageSpeed

---

**Última actualización**: Enero 2026
**Impacto estimado**: Reducción de 50-70% en tiempo de carga
