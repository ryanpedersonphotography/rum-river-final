const fs = require('fs');
const path = require('path');

const oldSiteDir = '/Users/ryanpederson/Dev/websites/rum-river-final/rumrivermn-website-old-sandbox';
const weddingsData = require('./wedding-data/weddings.json');
const publicDir = '/Users/ryanpederson/Dev/websites/rum-river-final/public/wedding-photos';

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

console.log('Copying wedding photos...\n');

let totalCopied = 0;
let totalMissing = 0;

weddingsData.forEach(wedding => {
  const weddingDir = path.join(publicDir, wedding.slug);

  // Create wedding directory
  if (!fs.existsSync(weddingDir)) {
    fs.mkdirSync(weddingDir, { recursive: true });
  }

  let copied = 0;
  let missing = 0;

  wedding.images.forEach((imagePath, index) => {
    const sourcePath = path.join(oldSiteDir, imagePath);

    if (fs.existsSync(sourcePath)) {
      // Get file extension
      const ext = path.extname(imagePath);
      // Create new filename: 001.jpg, 002.jpg, etc.
      const newFilename = String(index + 1).padStart(3, '0') + ext;
      const destPath = path.join(weddingDir, newFilename);

      try {
        fs.copyFileSync(sourcePath, destPath);
        copied++;
      } catch (error) {
        console.log(`  ❌ Error copying: ${imagePath}`);
      }
    } else {
      console.log(`  ⚠️  Missing: ${imagePath}`);
      missing++;
    }
  });

  console.log(`✅ ${wedding.coupleName}: ${copied} copied${missing > 0 ? `, ${missing} missing` : ''}`);
  totalCopied += copied;
  totalMissing += missing;
});

console.log(`\n✨ Total: ${totalCopied} photos copied, ${totalMissing} missing`);
console.log(`📁 Photos saved to: ${publicDir}`);
