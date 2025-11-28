import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { realWeddings } from '../src/data/realWeddings.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '../public');
const BASE_URL = 'https://rumriverweddingbarn.com';

const corePages = [
  '',
  '/events',
  '/vendor-list',
  '/property',
  '/location',
  '/history',
  '/gallery',
  '/testimonials',
  '/real-weddings',
  '/contact'
];

const generateSitemap = () => {
  const pages = [
    ...corePages,
    ...realWeddings.map(wedding => `/real-weddings/${wedding.slug}`)
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapContent);
  console.log(`✅ Sitemap generated with ${pages.length} URLs at public/sitemap.xml`);
};

generateSitemap();
