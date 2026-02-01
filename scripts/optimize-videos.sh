#!/bin/bash

# Script de Optimización de Videos - La Casa del Poeta
# Este script comprime videos MP4 manteniendo calidad razonable

set -e

echo "🎬 Script de Optimización de Videos"
echo "================================================"
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

show_progress() {
    echo -e "${BLUE}▶${NC} $1"
}

show_success() {
    echo -e "${GREEN}✓${NC} $1"
}

show_info() {
    echo -e "${YELLOW}ℹ${NC} $1"
}

show_error() {
    echo -e "${RED}✗${NC} $1"
}

# Verificar si ffmpeg está instalado
if ! command -v ffmpeg &> /dev/null; then
    echo ""
    show_error "ffmpeg no está instalado"
    echo ""
    echo "Para instalar ffmpeg:"
    echo "  - Linux (Ubuntu/Debian): sudo apt install ffmpeg"
    echo "  - Linux (Fedora): sudo dnf install ffmpeg"
    echo "  - macOS: brew install ffmpeg"
    echo ""
    exit 1
fi

# Verificar que existe la carpeta de imágenes
if [ ! -d "public/images" ]; then
    show_error "No se encuentra la carpeta public/images"
    exit 1
fi

# Buscar videos
video_count=$(find public/images -type f -name "*.mp4" | wc -l)

if [ "$video_count" -eq 0 ]; then
    show_info "No se encontraron videos MP4 para optimizar"
    exit 0
fi

echo ""
show_info "Encontrados $video_count videos para optimizar"
echo ""
show_progress "Configuración de compresión:"
echo "   - Codec: H.264 (libx264)"
echo "   - CRF: 28 (balance calidad/tamaño)"
echo "   - Preset: slow (mejor compresión)"
echo "   - Audio: AAC 128kbps"
echo ""

read -p "¿Continuar con la optimización? (s/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "Optimización cancelada"
    exit 0
fi

# Crear backup de videos si no existe
if [ ! -d "public/videos_backup" ]; then
    show_progress "Creando backup de videos originales..."
    mkdir -p public/videos_backup
    find public/images -type f -name "*.mp4" -exec cp {} public/videos_backup/ \;
    show_success "Backup creado en public/videos_backup/"
fi

echo ""
show_progress "Iniciando compresión de videos..."
echo ""

count=0
total_original=0
total_compressed=0

# Procesar cada video
while IFS= read -r video; do
    # Obtener información del archivo
    original_size=$(stat -f%z "$video" 2>/dev/null || stat -c%s "$video" 2>/dev/null)
    rel_path="${video#public/images/}"
    
    # Archivo temporal para el video comprimido
    temp_video="${video}.temp.mp4"
    
    show_info "Procesando: $rel_path"
    echo "   Tamaño original: $(echo "scale=2; $original_size / 1024 / 1024" | bc)MB"
    
    # Comprimir video con ffmpeg (redirigir stdin para evitar conflictos con el loop)
    ffmpeg -i "$video" \
        -c:v libx264 \
        -crf 28 \
        -preset slow \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        -y \
        "$temp_video" \
        -loglevel error -stats </dev/null
    
    if [ -f "$temp_video" ]; then
        new_size=$(stat -f%z "$temp_video" 2>/dev/null || stat -c%s "$temp_video" 2>/dev/null)
        
        # Calcular reducción
        reduction=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
        new_mb=$(echo "scale=2; $new_size / 1024 / 1024" | bc)
        
        # Reemplazar original con comprimido
        mv "$temp_video" "$video"
        
        show_success "Comprimido: ${new_mb}MB (-${reduction}%)"
        
        count=$((count + 1))
        total_original=$((total_original + original_size))
        total_compressed=$((total_compressed + new_size))
    else
        show_error "Error al comprimir $rel_path"
    fi
    
    echo ""
done < <(find public/images -type f -name "*.mp4")

echo ""
echo "================================================"
echo -e "${GREEN}✅ Optimización de videos completada!${NC}"
echo ""
echo "📊 Estadísticas:"
echo "   - Videos optimizados: $count"

if [ $total_original -gt 0 ]; then
    total_orig_mb=$(echo "scale=2; $total_original / 1024 / 1024" | bc)
    total_comp_mb=$(echo "scale=2; $total_compressed / 1024 / 1024" | bc)
    total_reduction=$(echo "scale=1; (1 - $total_compressed / $total_original) * 100" | bc)
    
    echo "   - Tamaño total original: ${total_orig_mb}MB"
    echo "   - Tamaño total comprimido: ${total_comp_mb}MB"
    echo "   - Reducción total: -${total_reduction}%"
fi

echo ""
echo "💾 Backup de videos originales en: public/videos_backup/"
echo ""
echo "ℹ️  Si estás satisfecho con los resultados, puedes eliminar el backup:"
echo "   rm -rf public/videos_backup"
echo ""
