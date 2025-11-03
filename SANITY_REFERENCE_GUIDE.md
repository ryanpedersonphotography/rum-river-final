# 📚 Sanity Studio Reference Guide
## Rum River Wedding Barn CMS Architecture

### 🔑 Critical Understanding Points

#### Document IDs (IMPORTANT!)
- **Homepage**: Uses `homepage` (lowercase) NOT `homePage`
- **Other pages**: Use camelCase like `eventsPage`, `contactPage`, etc.
- **Special IDs**: 
  - `mainNavigation` - Site navigation
  - `siteSettings` - Global site settings
  - `thank-you-page` - Thank you page (note the hyphens)

### 📂 Project Structure

```
/studio/
├── sanity.config.js       # Main Sanity configuration
├── schemas/
│   ├── blocks/           # Reusable content blocks
│   │   ├── heroBlock.js
│   │   ├── venueDiscoveryBlock.js
│   │   ├── featureBlocksBlock.js
│   │   ├── galleryBlock.js
│   │   ├── experienceBlock.js
│   │   ├── testimonialsBlock.js
│   │   ├── formBlock.js
│   │   └── eventBlock.js
│   ├── pages/           # Page schemas
│   │   ├── homePage.js
│   │   ├── eventsPage.js
│   │   ├── propertyPage.js
│   │   ├── galleryPage.js
│   │   ├── contactPage.js
│   │   └── [other pages...]
│   └── [supporting schemas]
└── scripts/             # Migration & maintenance scripts

```

### 🏗️ Data Architecture

#### Homepage Structure (`homepage` document)
```javascript
{
  "_id": "homepage",  // ⚠️ lowercase!
  "_type": "homePage",
  "hero": {
    "_type": "heroBlock",
    "backgroundImage": { asset: { _ref: "image-id" }},
    "scriptAccent": "Where Dreams Begin",
    "titleLine1": "Rum River",
    "titleLine2": "Wedding Barn",
    "description": "...",
    "ctaText": "Schedule Your Visit",
    "ctaLink": "/contact",
    "showFloatingCta": true,
    "floatingCtaText": "Schedule Your Tour",
    "floatingCtaIcon": "calendar",
    "scrollText": "Discover Your Perfect Day"
  },
  "venueDiscovery": { /* venue data */ },
  "featureBlocks": { /* features */ },
  "loveStories": { /* gallery block */ },
  "experience": { /* experience section */ },
  "testimonials": { /* testimonials */ },
  "scheduleTour": { /* form block */ }
}
```

### 🖼️ Image Handling

#### Sanity Image Structure
```javascript
{
  "_type": "image",
  "asset": {
    "_ref": "image-[hash]-[dimensions]-[format]",
    "_type": "reference"
  },
  "alt": "Description for accessibility"
}
```

#### Image URL Building
```javascript
import { urlFor } from '../lib/sanityClient'

// Basic usage
urlFor(image).url()

// With transformations
urlFor(image)
  .width(2000)
  .height(1200)
  .fit('crop')
  .auto('format')
  .url()
```

### 🔌 Frontend Integration

#### Key Hooks & Utilities

1. **useSanityPage** - Fetches page by document ID
```javascript
const { data, loading, error } = useSanityPage('homepage')
```

2. **PageRenderer** - Renders blocks dynamically
```javascript
<PageRenderer slug="home" />
```

3. **Client Configuration** (`/src/config/sanity.config.js`)
- Frontend context: Uses CDN in production
- Preview context: No CDN for fresh data
- Admin context: No CDN for writes

### 🎯 Common Gotchas & Solutions

#### Issue: Hero not rendering
**Cause**: Wrong class names (hero-enhanced vs hero-section)
**Solution**: Use matching CSS class names:
- `hero-section` (main wrapper)
- `hero-background` (image container)
- `hero-overlay` (dark overlay)
- `hero-content-wrapper` & `hero-content`
- `hero-title`, `hero-lead`, `hero-actions`

#### Issue: Navigation not using Sanity data
**Cause**: HeaderSanity has "formatting issues" (per code comments)
**Solution**: Currently using hardcoded Header component
**Future Fix**: Debug HeaderSanity formatting, likely CSS class conflicts

#### Issue: Images not loading
**Cause**: Incorrect asset reference structure
**Solution**: Use `urlFor()` helper, not direct asset.url access

### 📝 Quick Commands

```bash
# Query homepage data
npx sanity documents query '*[_id == "homepage"][0]'

# Check all page documents
npx sanity documents query '*[_type in ["homePage", "eventsPage", etc.]]'

# Start Sanity Studio
cd studio && npm run dev  # Runs on :3333

# Start main site
npm run dev  # Runs on :3000 or :3001
```

### 🚀 Deployment URLs
- **Sanity Studio**: http://localhost:3333
- **Structure View**: http://localhost:3333/structure/mainPages;homepage
- **Vision Tool**: http://localhost:3333/vision
- **Main Site**: http://localhost:3000

### 📊 Content Status

#### ✅ Fully Migrated Pages (13 total)
1. HomePage (`homepage`)
2. EventsPage (`eventsPage`) 
3. PropertyPage (`propertyPage`)
4. GalleryPage (`galleryPage`)
5. ContactPage (`contactPage`)
6. FAQPage (`faqPage`)
7. VendorsPage (`vendorsPage`)
8. LocationPage (`locationPage`)
9. TestimonialsPage (`testimonialsPage`)
10. HistoryPage (`historyPage`)
11. ThankYouPage (`thankYouPage`)
12. PrivacyPage (`privacyPage`)
13. TermsPage (`termsPage`)

#### 🎨 Block Types Available
- `heroBlock` - Hero sections with background images
- `venueDiscoveryBlock` - Venue showcase
- `featureBlocksBlock` - Feature cards/blocks
- `galleryBlock` - Photo galleries
- `experienceBlock` - Experience sections
- `testimonialsBlock` - Customer testimonials
- `formBlock` - Contact/scheduling forms
- `eventBlock` - Event information

### 🔧 Current Integration Status

#### Working ✅
- All page content in Sanity
- Hero block with image (`homepage` document)
- Block renderers for all content types
- Image optimization via urlFor()
- SEO metadata

#### Needs Attention ⚠️
- Navigation (HeaderSanity) - formatting issues
- Some components still use hardcoded Header
- Toggle system removed but remnants exist

### 💡 Pro Tips

1. **Always use lowercase `homepage`** for the main homepage document ID
2. **Check Studio at :3333** to verify content structure
3. **Use Vision tool** for testing GROQ queries
4. **Background images exist** - Check Sanity assets, many barn images uploaded
5. **References are lazy-loaded** - Use `->` in GROQ to expand references

---

## Emergency Fixes

### Hero Not Showing?
```javascript
// Check if data exists
npx sanity documents query '*[_id == "homepage"][0].hero'

// Verify image asset
npx sanity documents query '*[_id == "homepage"][0].hero.backgroundImage'
```

### Page Not Loading?
```javascript
// Check document exists
npx sanity documents query '*[_id == "[PAGE_ID]"][0]'

// Common IDs: homepage, eventsPage, contactPage, etc.
```

---

*Last Updated: October 16, 2025*
*Migration Complete: All 13 pages in Sanity CMS*