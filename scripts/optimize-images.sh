#!/bin/bash

# Script de Optimización de Imágenes - La Casa del Poeta
# Este script optimiza todas las imágenes JPG y PNG del sitio

set -e

echo "🖼️  Iniciando optimización de imágenes..."
echo "================================================"
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para mostrar progreso
show_progress() {
    echo -e "${BLUE}▶${NC} $1"
}

# Función para mostrar éxito
show_success() {
    echo -e "${GREEN}✓${NC} $1"
}

# Función para mostrar info
show_info() {
    echo -e "${YELLOW}ℹ${NC} $1"
}

# Verificar que existe la carpeta de imágenes
if [ ! -d "public/images" ]; then
    echo "❌ Error: No se encuentra la carpeta public/images"
    exit 1
fi

# Crear carpeta temporal para procesamiento
mkdir -p public/images_temp

# Contador de archivos procesados
count_jpg=0
count_png=0

echo ""
show_progress "Paso 1: Optimizando imágenes JPG..."
echo "   - Calidad: 85%"
echo "   - Formato: Progressive JPEG"
echo ""

# Procesar cada imagen JPG
find public/images -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read -r img; do
    # Obtener tamaño original
    original_size=$(du -h "$img" | cut -f1)
    
    # Obtener ruta relativa
    rel_path="${img#public/images/}"
    
    show_info "Procesando: $rel_path (Original: $original_size)"
    
    # Crear directorio de destino si no existe
    dest_dir="public/images_temp/$(dirname "$rel_path")"
    mkdir -p "$dest_dir"
    
    # Optimizar imagen
    npx sharp-cli -i "$img" -o "public/images_temp/$rel_path" --quality 85 --progressive --mozjpeg 2>/dev/null
    
    # Obtener nuevo tamaño
    if [ -f "public/images_temp/$rel_path" ]; then
        new_size=$(du -h "public/images_temp/$rel_path" | cut -f1)
        show_success "Optimizado: $new_size"
        count_jpg=$((count_jpg + 1))
    fi
    
    echo ""
done

echo ""
show_progress "Paso 2: Optimizando imágenes PNG..."
echo ""

# Procesar cada imagen PNG
find public/images -type f -name "*.png" | while read -r img; do
    original_size=$(du -h "$img" | cut -f1)
    rel_path="${img#public/images/}"
    
    show_info "Procesando: $rel_path (Original: $original_size)"
    
    dest_dir="public/images_temp/$(dirname "$rel_path")"
    mkdir -p "$dest_dir"
    
    npx sharp-cli -i "$img" -o "public/images_temp/$rel_path" --compressionLevel 9 2>/dev/null
    
    if [ -f "public/images_temp/$rel_path" ]; then
        new_size=$(du -h "public/images_temp/$rel_path" | cut -f1)
        show_success "Optimizado: $new_size"
        count_png=$((count_png + 1))
    fi
    
    echo ""
done

echo ""
show_progress "Paso 3: Reemplazando imágenes originales..."

# Copiar archivos optimizados de vuelta
find public/images_temp -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | while read -r img; do
    rel_path="${img#public/images_temp/}"
    cp "$img" "public/images/$rel_path"
done

show_success "Imágenes reemplazadas"

echo ""
show_progress "Paso 4: Limpiando archivos temporales..."
rm -rf public/images_temp
show_success "Limpieza completada"

echo ""
echo "================================================"
echo -e "${GREEN}✅ Optimización completada!${NC}"
echo ""
echo "📊 Estadísticas:"
echo "   - Imágenes JPG optimizadas: $count_jpg"
echo "   - Imágenes PNG optimizadas: $count_png"
echo ""

# Mostrar comparación de tamaños
original_size=$(du -sh public/images_backup 2>/dev/null | cut -f1)
new_size=$(du -sh public/images | cut -f1)

if [ -d "public/images_backup" ]; then
    echo "💾 Tamaño original: $original_size (backup en public/images_backup/)"
    echo "🎯 Tamaño nuevo: $new_size"
    echo ""
    echo "ℹ️  Si estás satisfecho con los resultados, puedes eliminar el backup:"
    echo "   rm -rf public/images_backup"
fi

echo ""
echo "🚀 Próximo paso: Ejecuta ./scripts/convert-to-webp.sh para crear versiones WebP"
echo ""
