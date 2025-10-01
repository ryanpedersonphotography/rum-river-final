const fs = require('fs');
const path = require('path');

const weddingsData = require('./wedding-data/weddings.json');
const outputFile = '/Users/ryanpederson/Dev/websites/rum-river-final/src/data/realWeddings.js';

// Helper to generate a nice intro based on available info
function generateIntro(wedding) {
  const templates = [
    `A beautiful celebration at Rum River Barn filled with love, laughter, and unforgettable moments.`,
    `${wedding.coupleName} chose our rustic barn venue for their special day, creating memories that will last a lifetime.`,
    `From the ceremony to the last dance, ${wedding.coupleName}'s wedding was a perfect blend of elegance and rustic charm.`,
    `Surrounded by family and friends, ${wedding.coupleName} celebrated their love story at our countryside venue.`,
    `A magical day celebrating ${wedding.coupleName} at Rum River Barn, where every detail came together beautifully.`
  ];

  return templates[Math.floor(Math.random() * templates.length)];
}

// Organize photos into sections based on count
function organizePhotos(wedding) {
  const totalPhotos = wedding.imageCount;
  const sections = [];

  if (totalPhotos <= 15) {
    // Small wedding - just one gallery
    sections.push({
      title: 'The Day',
      photos: Array.from({ length: totalPhotos }, (_, i) => ({
        src: `/wedding-photos/${wedding.slug}/${String(i + 1).padStart(3, '0')}.jpg`,
        alt: `${wedding.coupleName} wedding photo ${i + 1}`
      }))
    });
  } else if (totalPhotos <= 30) {
    // Medium wedding - 2 sections
    const midPoint = Math.floor(totalPhotos / 2);

    sections.push({
      title: 'Ceremony & Portraits',
      photos: Array.from({ length: midPoint }, (_, i) => ({
        src: `/wedding-photos/${wedding.slug}/${String(i + 1).padStart(3, '0')}.jpg`,
        alt: `${wedding.coupleName} ceremony photo ${i + 1}`
      }))
    });

    sections.push({
      title: 'Reception & Celebration',
      photos: Array.from({ length: totalPhotos - midPoint }, (_, i) => ({
        src: `/wedding-photos/${wedding.slug}/${String(midPoint + i + 1).padStart(3, '0')}.jpg`,
        alt: `${wedding.coupleName} reception photo ${i + 1}`
      }))
    });
  } else {
    // Large wedding - 3-4 sections
    const section1End = Math.floor(totalPhotos * 0.25);
    const section2End = Math.floor(totalPhotos * 0.5);
    const section3End = Math.floor(totalPhotos * 0.75);

    sections.push({
      title: 'Getting Ready',
      photos: Array.from({ length: section1End }, (_, i) => ({
        src: `/wedding-photos/${wedding.slug}/${String(i + 1).padStart(3, '0')}.jpg`,
        alt: `${wedding.coupleName} getting ready ${i + 1}`
      }))
    });

    sections.push({
      title: 'The Ceremony',
      photos: Array.from({ length: section2End - section1End }, (_, i) => ({
        src: `/wedding-photos/${wedding.slug}/${String(section1End + i + 1).padStart(3, '0')}.jpg`,
        alt: `${wedding.coupleName} ceremony ${i + 1}`
      }))
    });

    sections.push({
      title: 'Reception & Celebration',
      photos: Array.from({ length: section3End - section2End }, (_, i) => ({
        src: `/wedding-photos/${wedding.slug}/${String(section2End + i + 1).padStart(3, '0')}.jpg`,
        alt: `${wedding.coupleName} reception ${i + 1}`
      }))
    });

    if (totalPhotos > 50) {
      sections.push({
        title: 'Golden Hour & Details',
        photos: Array.from({ length: totalPhotos - section3End }, (_, i) => ({
          src: `/wedding-photos/${wedding.slug}/${String(section3End + i + 1).padStart(3, '0')}.jpg`,
          alt: `${wedding.coupleName} portraits ${i + 1}`
        }))
      });
    } else {
      sections.push({
        title: 'Portraits & Details',
        photos: Array.from({ length: totalPhotos - section3End }, (_, i) => ({
          src: `/wedding-photos/${wedding.slug}/${String(section3End + i + 1).padStart(3, '0')}.jpg`,
          alt: `${wedding.coupleName} portraits ${i + 1}`
        }))
      });
    }
  }

  return sections;
}

// Build blog data for each wedding
const weddingBlogs = weddingsData.map(wedding => {
  const heroImage = `/wedding-photos/${wedding.slug}/001.jpg`;
  const coverImage = `/wedding-photos/${wedding.slug}/${String(Math.min(3, wedding.imageCount)).padStart(3, '0')}.jpg`;

  return {
    slug: wedding.slug,
    coupleName: wedding.coupleName,
    heroImage: heroImage,
    coverImage: coverImage, // For listing page
    date: wedding.date || 'Summer 2024', // Default if no date
    location: 'Rum River Barn • Hillman, Minnesota',
    intro: generateIntro(wedding),
    photographer: wedding.photographer && wedding.photographer !== 'Gallery' ? wedding.photographer : null,
    photoCount: wedding.imageCount,
    galleries: organizePhotos(wedding),
    // Flag large weddings as premier
    isPremier: wedding.imageCount >= 50
  };
});

// Sort by photo count (largest first) to feature best weddings
weddingBlogs.sort((a, b) => b.photoCount - a.photoCount);

// Create the JavaScript file
const fileContent = `// Real wedding data extracted from old Rum River Barn website
// Generated automatically - do not edit manually
// To regenerate: node build-wedding-blogs.cjs

export const realWeddings = ${JSON.stringify(weddingBlogs, null, 2)};

// Quick access helpers
export const premierWeddings = realWeddings.filter(w => w.isPremier);
export const featuredWeddings = realWeddings.slice(0, 6); // Top 6 by photo count
export const getAllWeddings = () => realWeddings;
export const getWeddingBySlug = (slug) => realWeddings.find(w => w.slug === slug);
`;

// Write the file
fs.writeFileSync(outputFile, fileContent);

console.log('✨ Wedding blogs created!\n');
console.log(`📁 Saved to: ${outputFile}\n`);
console.log(`📊 Stats:`);
console.log(`  • Total weddings: ${weddingBlogs.length}`);
console.log(`  • Premier weddings (50+ photos): ${weddingBlogs.filter(w => w.isPremier).length}`);
console.log(`  • Total photos: ${weddingBlogs.reduce((sum, w) => sum + w.photoCount, 0)}`);
console.log(`\n🎯 Premier Weddings:`);
weddingBlogs.filter(w => w.isPremier).forEach(w => {
  console.log(`  • ${w.coupleName}: ${w.photoCount} photos`);
});
