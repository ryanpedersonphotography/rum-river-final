# Wedding Photo Organization

## Summary

Successfully extracted and organized **19 real weddings** from the old Rum River Barn website.

- **Total Photos**: 669 photos copied (7 missing from old site)
- **Data File**: `weddings.json` contains all wedding metadata
- **Photos Location**: `/public/wedding-photos/{wedding-slug}/`

## Weddings Extracted

| Couple Name | Photos | Slug |
|------------|--------|------|
| Allison & Will | 9 | allison-and-will |
| Anthony & Linnea | 114 | anthony-and-linnea |
| Dave Kayla | 17 | dave-kayla |
| Emily & Barron Nixon | 36 | emily-and-barron-nixon |
| Erin Kate | 19 | erin-kate |
| James & Denise Allen | 7 | james-and-denise-allen |
| Jenna & Steven Tschirgi | 15 | jenna-and-steven-tschirgi |
| Joshua & Teri | 36 | joshua-and-teri |
| Kage | 18 | kage |
| Kerry Dominic | 22 | kerry-dominic |
| Kyle Carrie | 57 | kyle-carrie |
| Loria & Jason Rolstad | 96 | loria-and-jason-rolstad-agape |
| Mattea Courtney | 89 | mattea-courtney-photo-gallery |
| Nick & Kayla | 15 | nick-and-kayla |
| Rachel & Vince | 20 | rachel-and-vince |
| Reins | 32 | reins-wedding |
| Casey Garret | 6 | casey-garret |
| Kristine Leuze | 6 | kristine-leuze-rum-river |
| 2014 2 | 62 | 2014-2 |

## File Structure

```
/public/wedding-photos/
├── allison-and-will/
│   ├── 001.jpg
│   ├── 002.jpg
│   └── ...
├── anthony-and-linnea/
│   ├── 001.jpg
│   ├── 002.jpg
│   └── ... (114 photos)
├── dave-kayla/
│   └── ...
└── ...
```

## Data Structure (weddings.json)

```json
{
  "slug": "allison-and-will",
  "coupleName": "Allison & Will",
  "title": "Barn Wedding Venue: Milaca, St. Cloud, St. Paul, MN | Rum River Barn & Vineyard",
  "date": null,
  "photographer": "Gallery",
  "images": [
    "files/2014/05/6lv2R9KqOr5T8Fpw-9U8rYtPJA1X2DNeIpVVJbT7NtE.jpg",
    ...
  ],
  "imageCount": 9
}
```

## Next Steps

1. **Update RealWeddingsPage.jsx** to use this data instead of sample data
2. **Update RealWeddingPost.jsx** to load photos from `/wedding-photos/{slug}/`
3. **Add wedding descriptions** - Most weddings don't have date/photographer info, you may want to add manually
4. **Consider premier weddings** - Weddings with lots of photos (50+):
   - Anthony & Linnea (114 photos)
   - Loria & Jason (96 photos)
   - Mattea & Courtney (89 photos)
   - Kyle & Carrie (57 photos)
   - 2014-2 (62 photos)

## Missing Photos (7 total)

Some photos referenced in HTML were not found in the old site:
- Anthony & Linnea: 5 missing
- Joshua & Teri: 1 missing
- Rachel & Vince: 1 missing

## Usage in React

```jsx
import weddingsData from '../wedding-data/weddings.json';

// List all weddings
weddingsData.map(wedding => ({
  slug: wedding.slug,
  name: wedding.coupleName,
  photoCount: wedding.imageCount,
  coverImage: `/wedding-photos/${wedding.slug}/001.jpg`
}))

// Individual wedding page
const photos = Array.from({ length: wedding.imageCount }, (_, i) => ({
  src: `/wedding-photos/${wedding.slug}/${String(i + 1).padStart(3, '0')}.jpg`,
  alt: `${wedding.coupleName} wedding photo ${i + 1}`
}))
```

## Scripts

- **extract-wedding-data.cjs** - Extracts wedding data from HTML files
- **copy-wedding-photos.cjs** - Copies photos to public folder with organized naming

Run again if needed:
```bash
node extract-wedding-data.cjs
node copy-wedding-photos.cjs
```
