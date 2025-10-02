# PHOTO ASSET GUIDE - Rum River Barn Website
## Complete Guide for Image Selection and Placement

### 🗂️ ASSET DIRECTORY STRUCTURE
```
/public/images/
├── venue/           # Primary venue photography (55 files)
├── historical/      # Historical Selmer family photos (19 files)
├── 2014-2021/       # Legacy wedding photos by year
├── 2024/            # Current year documents (PDFs only)
└── /wedding-photos/ # Real wedding blog photos (20+ weddings)
```

---

## 📍 IMAGE PLACEMENT MAP BY PAGE

### 1. HomePage.jsx
**CRITICAL: HomePage has mixed placeholder and real images that need fixing**

#### Venue Showcases (Lines 13-67)
**Main Barn Images:**
```javascript
barn: {
  images: [
    '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',  // Main interior shot
    '/images/venue/barn-exterior-full-view-landscape.jpg',         // Exterior view
    '/images/venue/barn-interior-ceiling-beams-lighting.jpg'       // Detail shot
  ]
}
```

**Bridal Suite - NEEDS REPLACEMENT (Currently using Unsplash):**
```javascript
bride: {
  images: [
    // REPLACE THESE UNSPLASH URLS:
    // Line 27-29: Use actual bridal suite photos from /images/venue/
    '/images/venue/details-bridal-room-interior.jpg',  // If exists
    '/images/venue/details-bridal-room-mirrors.jpg',   // If exists
    '/images/venue/details-bridal-suite-seating.jpg'   // If exists
  ]
}
```

**Groom's Quarters - NEEDS REPLACEMENT (Currently using Unsplash):**
```javascript
groom: {
  images: [
    // REPLACE THESE UNSPLASH URLS (Lines 41-43):
    '/images/venue/grooms-quarters-lounge.jpg',    // If exists
    '/images/venue/grooms-quarters-pool-table.jpg', // If exists
    '/images/venue/grooms-quarters-seating.jpg'     // If exists
  ]
}
```

**Garden Pavilion:**
```javascript
pavilion: {
  images: [
    '/images/venue/barn-interior-string-lights-ceiling-detail.jpg',
    '/images/venue/property-field-wildflowers-natural.jpg',
    '/images/venue/barn-exterior-deck-swing-under-tree.jpg'
  ]
}
```

#### Featured Sections
- **Line 342**: Wedding celebration image - Currently Unsplash, replace with real wedding photo
- **Line 368**: Special events - Using `/images/venue/barn-interior-ceiling-beams-lighting.jpg` ✅
- **Line 381**: Property showcase - Using `/images/venue/property-field-wildflowers-natural.jpg` ✅

---

### 2. PropertyPage.jsx
**All venue showcase images - Same structure as HomePage**

#### White Barn (Lines 8-19)
```javascript
images: [
  '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
  '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
  '/images/venue/barn-interior-string-lights-ceiling-detail.jpg'
]
```

#### Frame Barn (Lines 20-34) - NEEDS REPLACEMENT
```javascript
images: [
  // Line 23: Replace Unsplash with actual frame barn photo
  '/images/venue/barn-interior-string-lights-ceiling-detail.jpg',
  // Line 25: Replace Unsplash with actual frame barn photo
]
```

#### The Grounds (Lines 35-49)
```javascript
images: [
  '/images/venue/property-vineyard-rows-landscape.jpg',
  '/images/venue/property-field-wildflowers-natural.jpg',
  '/images/venue/property-landscape-rural-vista.jpg'
]
```

#### Lounge (Lines 50-64) - NEEDS REPLACEMENT
Currently using all Unsplash images - need actual lounge photos

#### Bridal Room (Lines 65-79) - NEEDS REPLACEMENT
Currently using mix of Unsplash and property photos - need actual bridal room photos

#### Groom's Quarters (Lines 80-94) - NEEDS REPLACEMENT
Currently all Unsplash - need actual groom's quarters photos

---

### 3. HistoryPage.jsx
**ALL CORRECT - Using proper historical photos**

Historical images in chronological order:
- Line 121: `/images/historical/selmer-family-winter-woodpile-1940s.jpg` ✅
- Line 159: `/images/historical/lumber-preparation-white-pine-1930s.jpg` ✅
- Line 197: `/images/historical/early-barn-construction-1940s.jpg` ✅
- Line 235: `/images/historical/harold-selmer-dairy-cow-farming.jpg` ✅
- Line 273: `/images/historical/stone-clearing-farming-work-1940s.jpg` ✅
- Line 311: `/images/historical/dairy-cattle-operations-1970s.jpg` ✅

---

### 4. EventsPage.jsx
**Mixed real and placeholder images**

- Line 173: `/images/2014/05/Reins-Wedding_3-193.jpg` ✅ (Wedding events)
- Line 220: `/images/venue/details-swing-rustic-romance.jpg` ✅ (Engagement)
- Line 267: `/images/2015/12/wedding-5.jpg` ✅ (Birthday)
- Line 314: `/images/venue/barn-exterior-deck-swing-golden-hour.jpg` ✅ (Graduation)
- Line 361: `/images/venue/barn-exterior-full-deck-view-evening.jpg` ✅ (Holiday)

---

### 5. GalleryPage.jsx
**CRITICAL: Using mostly Unsplash placeholders - needs complete replacement**

#### Current Structure (Lines 8-48):
```javascript
// WEDDINGS CATEGORY - Replace all Unsplash with real wedding photos
{ category: 'weddings', src: 'USE_REAL_WEDDING_PHOTOS_FROM_/wedding-photos/' },

// CEREMONY CATEGORY - Replace with actual ceremony photos
{ category: 'ceremony', src: 'USE_PHOTOS_FROM_/images/2014-2021/' },

// RECEPTION CATEGORY - Replace with actual reception photos
{ category: 'reception', src: 'USE_PHOTOS_FROM_/images/2014-2021/' },

// DETAILS CATEGORY - Replace with detail shots
{ category: 'details', src: 'USE_PHOTOS_FROM_/images/venue/details-*.jpg' },

// PROPERTY CATEGORY - Already correct (Lines 36-41)
{ category: 'property', src: '/images/venue/*.jpg' }, ✅

// VIDEOS CATEGORY - Needs actual video thumbnails
{ category: 'videos', src: 'REPLACE_WITH_ACTUAL_VIDEO_THUMBNAILS' }
```

---

## 🏷️ VENUE PHOTO NAMING CONVENTIONS

### File Naming Pattern:
`[location]-[subject]-[detail]-[modifier].jpg`

### Examples:
- `barn-interior-exposed-beams-chandeliers.jpg`
- `barn-exterior-full-view-landscape.jpg`
- `property-vineyard-rows-landscape.jpg`
- `details-swing-rustic-romance.jpg`

### Categories:
- **barn-interior-**: Inside the barn shots
- **barn-exterior-**: Outside barn shots
- **property-**: Grounds and landscape
- **details-**: Close-up detail shots
- **vineyard-**: Vineyard specific shots
- **deck-**: Deck and outdoor areas

---

## 🎯 PRIORITY FIXES REQUIRED

### HIGH PRIORITY - Replace Unsplash Placeholders:
1. **HomePage.jsx** Bridal Suite images (Lines 27-29)
2. **HomePage.jsx** Groom's Quarters images (Lines 41-43)
3. **PropertyPage.jsx** Frame Barn images (Line 23, 25)
4. **PropertyPage.jsx** Lounge images (Lines 53-55)
5. **PropertyPage.jsx** Bridal Room images (Lines 68-70)
6. **PropertyPage.jsx** Groom's Quarters (Lines 83-85)
7. **GalleryPage.jsx** ALL wedding/ceremony/reception photos (Lines 10-33)

### MEDIUM PRIORITY - Enhance with Real Photos:
1. **HomePage.jsx** Line 342 - Wedding celebration image
2. **GalleryPage.jsx** Video thumbnails (Lines 44-47)

### LOW PRIORITY - Already Correct:
- HistoryPage.jsx ✅
- EventsPage.jsx ✅
- Property category in GalleryPage ✅

---

## 📸 AVAILABLE ORIGINAL ASSETS

### /images/venue/ (55 high-quality venue photos)
Complete list of available venue photos:
- barn-exterior-deck-stairs-trees.jpg
- barn-exterior-deck-swing-golden-hour.jpg
- barn-exterior-deck-swing-under-tree.jpg
- barn-exterior-entrance-lighting-view.jpg
- barn-exterior-front-entrance-concrete-pad.jpg
- barn-exterior-full-deck-view-evening.jpg
- barn-exterior-full-view-landscape.jpg
- barn-exterior-landscaping-stone-border.jpg
- barn-exterior-side-angle-landscaping.jpg
- barn-exterior-stone-wall-trees.jpg
- barn-exterior-vintage-tractor-rustic.jpg
- barn-exterior-welcome-sign-entrance.jpg
- barn-exterior-welcome-sign-rustic-charm.jpg
- barn-interior-ceiling-beams-lighting.jpg
- barn-interior-exposed-beams-chandeliers.jpg
- barn-interior-string-lights-ceiling-detail.jpg
- details-americana-flag-decor.jpg
- [... and 38 more venue photos]

### /wedding-photos/ (20+ real weddings)
Real wedding folders with actual wedding photography:
- anthony-and-linnea/ (114 photos)
- allison-and-will/
- casey-garret/
- dave-kayla/
- emily-and-barron-nixon/
- [... and 15+ more weddings]

### /images/2014-2021/ (Legacy wedding photos)
Thousands of real wedding photos organized by year

---

## 🔧 IMPLEMENTATION INSTRUCTIONS

### For Claude Sonnet:
1. **NEVER use Unsplash or placeholder images** when real assets exist
2. **CHECK the /images/venue/ directory first** for any venue-related images
3. **USE /wedding-photos/ directory** for real wedding gallery content
4. **MAINTAIN the existing naming convention** when referencing images
5. **VERIFY image paths exist** before updating code
6. **PRIORITIZE high-impact pages** (HomePage, GalleryPage) for replacements

### Image Selection Criteria:
- **Quality**: Use highest resolution available
- **Relevance**: Match image to section context
- **Variety**: Mix wide shots, details, and people
- **Consistency**: Keep similar style within sections
- **Authenticity**: Always prefer real venue photos over stock

### Testing After Changes:
1. Check all image paths resolve correctly
2. Verify images load without 404 errors
3. Ensure responsive sizing still works
4. Test lightbox/gallery functionality
5. Confirm lazy loading still functions

---

## 📋 REPLACEMENT CHECKLIST

- [ ] HomePage.jsx - Replace 6 Unsplash venue showcase images
- [ ] HomePage.jsx - Replace 1 wedding celebration image
- [ ] PropertyPage.jsx - Replace 11 Unsplash venue images
- [ ] GalleryPage.jsx - Replace 28 Unsplash gallery images
- [ ] GalleryPage.jsx - Add real video thumbnails (4 images)
- [ ] Verify all paths resolve to actual files
- [ ] Test image loading performance
- [ ] Update alt text to be descriptive

**TOTAL IMAGES TO REPLACE: 50**

---

## 🚨 CRITICAL NOTES

1. **DO NOT DELETE** any existing venue photos in /images/venue/
2. **DO NOT RENAME** existing files - update references instead
3. **DO NOT USE** generic stock photos when specific venue photos exist
4. **ALWAYS CHECK** if an image exists before creating placeholder
5. **PRESERVE** all historical images exactly as they are

This guide should be followed exactly to ensure consistent, authentic imagery across the entire Rum River Barn website.