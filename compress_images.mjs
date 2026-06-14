import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const maxSizeBytes = 300 * 1024; // 300KB
const publicDir = path.join(process.cwd(), 'public');

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(webp|png|jpg|jpeg)$/i.test(entry.name)) {
      const stats = await fs.stat(fullPath);
      
      if (stats.size > maxSizeBytes) {
        console.log(`Compressing ${entry.name} (${(stats.size / 1024).toFixed(2)} KB)...`);
        
        try {
          const tempPath = fullPath + '.tmp';
          const image = sharp(fullPath);
          const metadata = await image.metadata();

          let s = image;
          if (metadata.width > 1600) {
            s = s.resize(1600, null, { withoutEnlargement: true });
          }

          await s.webp({ quality: 75, effort: 6 }).toFile(tempPath);
          
          await fs.unlink(fullPath); // delete original
          
          // rename if it was a different extension initially, but let's just keep same extension or rename to webp
          const newPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
          await fs.rename(tempPath, newPath);

          const newStats = await fs.stat(newPath);
          console.log(`Done! New size: ${(newStats.size / 1024).toFixed(2)} KB`);
        } catch (error) {
          console.error(`Failed to compress ${entry.name}:`, error);
        }
      }
    }
  }
}

async function run() {
  console.log("Starting image compression...");
  await processDirectory(publicDir);
  console.log("Finished image compression.");
}

run();
