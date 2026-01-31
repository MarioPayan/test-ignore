#!/bin/bash

# Script de Conversión a WebP - La Casa del Poeta
# Este script crea versiones WebP de todas las imágenes JPG y PNG

set -e

echo "🎨 Iniciando conversión a WebP..."
echo "================================================"
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
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

# Verificar que existe la carpeta de imágenes
if [ ! -d "public/images" ]; then
    echo "❌ Error: No se encuentra la carpeta public/images"
    exit 1
fi

count=0
total_original=0
total_webp=0

echo ""
show_progress "Convirtiendo imágenes a WebP (calidad 85%)..."
echo ""

# Procesar cada imagen JPG y PNG
find public/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | while read -r img; do
    # Obtener información del archivo
    original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    rel_path="${img#public/images/}"
    
    # Generar nombre de salida WebP
    output_path="${img%.*}.webp"
    output_rel="${rel_path%.*}.webp"
    
    show_info "Procesando: $rel_path"
    
    # Convertir a WebP
    npx sharp-cli -i "$img" -o "$output_path" -f webp --quality 85 2>/dev/null
    
    if [ -f "$output_path" ]; then
        new_size=$(stat -f%z "$output_path" 2>/dev/null || stat -c%s "$output_path" 2>/dev/null)
        
        # Calcular reducción de tamaño
        reduction=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
        
        # Convertir tamaños a formato legible
        orig_kb=$(echo "scale=1; $original_size / 1024" | bc)
        new_kb=$(echo "scale=1; $new_size / 1024" | bc)
        
        show_success "Creado: $output_rel (${new_kb}KB vs ${orig_kb}KB original, -${reduction}%)"
        
        count=$((count + 1))
        total_original=$((total_original + original_size))
        total_webp=$((total_webp + new_size))
    fi
    
    echo ""
done

echo ""
echo "================================================"
echo -e "${GREEN}✅ Conversión a WebP completada!${NC}"
echo ""
echo "📊 Estadísticas:"
echo "   - Imágenes convertidas: $count"

if [ $total_original -gt 0 ]; then
    total_orig_mb=$(echo "scale=2; $total_original / 1024 / 1024" | bc)
    total_webp_mb=$(echo "scale=2; $total_webp / 1024 / 1024" | bc)
    total_reduction=$(echo "scale=1; (1 - $total_webp / $total_original) * 100" | bc)
    
    echo "   - Tamaño total original: ${total_orig_mb}MB"
    echo "   - Tamaño total WebP: ${total_webp_mb}MB"
    echo "   - Reducción total: -${total_reduction}%"
fi

echo ""
echo "ℹ️  Las imágenes WebP se han creado junto a las originales."
echo "   Los componentes del sitio usarán WebP automáticamente con picture element."
echo ""
echo "🚀 Próximo paso: Reconstruye el sitio con 'npm run build'"
echo ""
