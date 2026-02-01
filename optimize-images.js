#!/usr/bin/env node
/**
 * Optimizador de Imágenes usando Sharp
 * Comprime JPG a calidad 80% y redimensiona si es muy grande
 */

import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import sharp from 'sharp';

const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

async function getImageFiles(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await getImageFiles(fullPath, files);
    } else if (['.jpg', '.jpeg', '.png'].includes(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function optimizeImage(imagePath) {
  try {
    const stats = await stat(imagePath);
    const sizeKB = (stats.size / 1024).toFixed(0);
    
    console.log(`📸 Procesando: ${imagePath} (${sizeKB} KB)`);
    
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    let pipeline = image;
    
    // Redimensionar si es muy grande
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Comprimir según formato
    if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
      pipeline = pipeline.jpeg({ 
        quality: QUALITY, 
        progressive: true,
        mozjpeg: true
      });
    } else if (metadata.format === 'png') {
      pipeline = pipeline.png({ 
        quality: QUALITY,
        compressionLevel: 9,
        progressive: true
      });
    }
    
    await pipeline.toFile(imagePath + '.tmp');
    
    const newStats = await stat(imagePath + '.tmp');
    const newSizeKB = (newStats.size / 1024).toFixed(0);
    const savings = ((1 - newStats.size / stats.size) * 100).toFixed(0);
    
    // Solo reemplazar si es más pequeña
    if (newStats.size < stats.size) {
      await sharp(imagePath + '.tmp').toFile(imagePath);
      console.log(`✅ Optimizado: ${sizeKB}KB → ${newSizeKB}KB (${savings}% ahorro)`);
    } else {
      console.log(`⏭️  Sin cambios: ${sizeKB}KB (ya optimizado)`);
    }
    
    // Limpiar temporal
    await import('fs').then(fs => fs.promises.unlink(imagePath + '.tmp').catch(() => {}));
    
  } catch (error) {
    console.error(`❌ Error en ${imagePath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Iniciando optimización con Sharp...\n');
  
  const imagesDir = 'public/images';
  const imageFiles = await getImageFiles(imagesDir);
  
  console.log(`📊 Encontradas ${imageFiles.length} imágenes\n`);
  
  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath);
  }
  
  console.log('\n✅ ¡Optimización completada!');
}

main().catch(console.error);
