const fs = require('fs');
const path = require('path');

const oldSiteDir = '/Users/ryanpederson/Dev/websites/rum-river-final/rumrivermn-website-old-sandbox';
const outputDir = '/Users/ryanpederson/Dev/websites/rum-river-final/wedding-data';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Wedding HTML files (excluding general pages)
const weddingFiles = [
  'allison-and-will.html',
  'anthony-and-linnea.html',
  'dave-kayla.html',
  'emily-and-barron-nixon.html',
  'erin-kate.html',
  'james-and-denise-allen.html',
  'jenna-and-steven-tschirgi.html',
  'joshua-and-teri.html',
  'kage.html',
  'kerry-dominic.html',
  'kyle-carrie.html',
  'loria-and-jason-rolstad-agape.html',
  'mattea-courtney-photo-gallery.html',
  'nick-and-kayla.html',
  'rachel-and-vince.html',
  'reins-wedding.html',
  'casey-garret.html',
  'kristine-leuze-rum-river.html',
  '2014-2.html'
];

const weddings = [];

console.log('Extracting wedding data from HTML files...\n');

weddingFiles.forEach(filename => {
  const filePath = path.join(oldSiteDir, filename);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filename}`);
    return;
  }

  try {
    const html = fs.readFileSync(filePath, 'utf8');

    // Extract couple name from filename
    const slug = filename.replace('.html', '');
    let coupleName = slug
      .split('-and-')
      .map(name => name.charAt(0).toUpperCase() + name.slice(1))
      .join(' & ');

    // Clean up the name
    coupleName = coupleName
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
      .replace(' Photo Gallery', '')
      .replace(' Rum River', '')
      .replace(' Agape', '')
      .replace(' Wedding', '');

    // Extract og:image meta tags (these are the wedding photos)
    const imageRegex = /<meta property="og:image" content="([^"]+)"/g;
    const images = [];
    let match;

    while ((match = imageRegex.exec(html)) !== null) {
      images.push(match[1]);
    }

    // Extract title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : '';

    // Try to extract date if available in content
    const datePattern = /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}\b/gi;
    const dateMatch = html.match(datePattern);
    const date = dateMatch ? dateMatch[0] : null;

    // Try to extract photographer credit
    const photographerPattern = /(?:photo(?:graph)?(?:y)?(?:\s+by)?|captured by|photographer)[:\s]+([^<.\n]+)/gi;
    const photographerMatch = html.match(photographerPattern);
    let photographer = null;
    if (photographerMatch && photographerMatch[0]) {
      photographer = photographerMatch[0]
        .replace(/photo(?:graph)?(?:y)?(?:\s+by)?|captured by|photographer/gi, '')
        .replace(/[:\s]+/, '')
        .trim();
    }

    const wedding = {
      slug,
      coupleName,
      title,
      date,
      photographer,
      images: images.map(img => {
        // Clean up image path
        return img.replace(/\\/g, '/').replace(/\?w=.*$/, '');
      }),
      imageCount: images.length
    };

    weddings.push(wedding);
    console.log(`✅ ${coupleName}: ${images.length} photos`);

  } catch (error) {
    console.log(`❌ Error processing ${filename}:`, error.message);
  }
});

// Save all wedding data
const outputFile = path.join(outputDir, 'weddings.json');
fs.writeFileSync(outputFile, JSON.stringify(weddings, null, 2));

console.log(`\n✨ Extracted ${weddings.length} weddings`);
console.log(`📁 Data saved to: ${outputFile}`);

// Print summary
console.log('\n📊 Summary:');
weddings.forEach(w => {
  console.log(`  • ${w.coupleName}: ${w.imageCount} photos${w.date ? ` (${w.date})` : ''}`);
});
