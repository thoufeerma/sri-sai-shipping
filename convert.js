const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.join(__dirname, 'public', 'gallery');

const convertToWebp = async (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await convertToWebp(filePath);
    } else if (file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
      const parsedPath = path.parse(filePath);
      const outputFilePath = path.join(dir, `${parsedPath.name}.webp`);

      try {
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(outputFilePath);
        console.log(`Converted: ${filePath} -> ${outputFilePath}`);
        fs.unlinkSync(filePath); // delete original
      } catch (err) {
        console.error(`Error converting ${filePath}:`, err);
      }
    }
  }
};

convertToWebp(directoryPath).then(() => console.log('Done!')).catch(console.error);
