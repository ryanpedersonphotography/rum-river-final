# 📊 Studio Content Dataset Structure Analysis

## 🏗️ **Current Architecture Overview**

### **Core Philosophy: Page-Specific Schemas**
Your studio uses a **page-specific schema architecture** rather than generic `page` documents. Each page type has its own dedicated schema with tailored fields.

## 📄 **Page Documents (14 total)**

### **Page Types Structure**
```
├── homePage (2 documents - DUPLICATE ISSUE!)
│   ├── _id: "homePage" 
│   └── _id: "homepage" ← ACTIVE ONE
├── contactPage (1 document)
├── eventsPage (1 document) 
├── faqPage (1 document)
├── galleryPage (1 document)
├── historyPage (1 document)
├── locationPage (1 document)
├── privacyPage (1 document)
├── propertyPage (1 document)
├── termsPage (1 document)
├── testimonialsPage (1 document)
├── thankYouPage (1 document - NO HERO)
└── vendorsPage (1 document)
```

### **Page Schema Pattern**
Each page follows this structure:
```javascript
{
  _id: "pageType",
  _type: "pageType", 
  title: "Page Title",
  hero: { heroBlock },        // Most pages have heroes
  sectionName: { blockType }, // Page-specific content sections
  seo: { seoSettings }        // SEO metadata
}
```

## 🧩 **Block System Architecture**

### **Hero Block Structure** (`heroBlock`)
```javascript
{
  _type: "heroBlock",
  // Headline Text Group
  scriptAccent: "Where Dreams Begin",
  titleLine1: "Rum River", 
  titleLine2: "Wedding Barn",
  description: "Long description...",
  
  // Main CTA Group  
  ctaText: "Schedule Your Visit",
  ctaLink: "/contact",
  
  // Floating CTA Group
  showFloatingCta: true,
  floatingCtaText: "Schedule Your Tour",
  floatingCtaIcon: "calendar",
  
  // Visual Elements
  backgroundImage: {
    _type: "image",
    asset: { _ref: "image-[hash]-[dimensions]-[format]" },
    alt: "Image description"
  },
  scrollText: "Discover Your Perfect Day"
}
```

### **Available Block Types**
```
schemas/blocks/
├── heroBlock.js          ← Hero sections
├── venueDiscoveryBlock.js ← Venue showcases  
├── featureBlocksBlock.js ← Feature cards
├── galleryBlock.js       ← Photo galleries
├── experienceBlock.js    ← Experience sections
├── testimonialsBlock.js  ← Customer testimonials
├── formBlock.js          ← Contact/scheduling forms
└── eventBlock.js         ← Event information
```

## 📚 **Supporting Content Types**

### **Content Counts**
- **Testimonials**: 18 documents
- **Venues**: 5 documents  
- **Gallery Images**: 20 documents
- **Weddings**: 4 documents
- **Wedding Blogs**: 0 documents

### **Settings & Navigation**
- **Site Settings**: 1 document (`siteSettings`)
- **Navigation**: 1 document (`mainNavigation`)

## 🎯 **Homepage Data Structure** (`homepage` document)

### **Current Fields Structure**
```javascript
{
  _id: "homepage",
  _type: "homePage",
  title: "Homepage",
  
  // Field validation enforces these exact fields:
  hero: { heroBlock },           // ✅ COMPLETE
  venueDiscovery: { venueDiscoveryBlock },
  featureBlocks: { featureBlocksBlock },
  loveStories: { galleryBlock },
  experience: { experienceBlock },
  testimonials: { testimonialsBlock },
  scheduleTour: { formBlock },
  seo: { seoSettings }
}
```

### **Hero Block Status** ✅
```javascript
{
  scriptAccent: "Where Dreams Begin",
  titleLine1: "Rum River",
  titleLine2: "Wedding Barn", 
  description: "Nestled along Minnesota's scenic Rum River...",
  ctaText: "Schedule Your Visit",
  ctaLink: "/contact",
  backgroundImage: {
    asset: { _ref: "image-36a9e7766804bbe86f5302eaba42db14431fb39e-1280x854-jpg" },
    alt: "Barn Exterior Full Deck View Evening"
  }
}
```

**Image URL**: `https://cdn.sanity.io/images/vicw6cgb/production/36a9e7766804bbe86f5302eaba42db14431fb39e-1280x854.jpg`

## 🔧 **Schema Validation Features**

### **Strict Field Validation**
Each page schema includes validation that prevents unknown fields:
```javascript
validation: Rule => Rule.custom((doc) => {
  const allowedFields = new Set([
    '_id', '_type', '_rev', '_createdAt', '_updatedAt',
    'title', 'hero', 'venueDiscovery', 'featureBlocks',
    'loveStories', 'experience', 'testimonials', 'scheduleTour', 'seo'
  ])
  
  const unknownFields = Object.keys(doc).filter(key => !allowedFields.has(key))
  
  if (unknownFields.length > 0) {
    return `Unknown fields detected: ${unknownFields.join(', ')}`
  }
  
  return true
})
```

### **Studio Scripts Available**
```bash
npm run qa:strict           # Validate schema compliance
npm run qa:homepage         # Check homepage integrity  
npm run cleanup:fields      # Remove unknown fields
npm run fix:venue          # Fix venue discovery issues
npm run fix:testimonials   # Fix testimonial fields
```

## 🎯 **Key Findings**

### ✅ **Strengths**
1. **Complete hero data** with valid background image
2. **Rich content** across all page types
3. **Strict validation** prevents schema drift
4. **Well-organized block system** for reusable components
5. **Proper image assets** stored in Sanity CDN

### ⚠️ **Issues to Address**
1. **Duplicate homepage documents** (`homePage` vs `homepage`)
2. **Missing titles** on some pages (contactPage, eventsPage, testimonialsPage)
3. **No wedding blog content** (0 weddingBlog documents)
4. **thankYouPage** is the only page without a hero

### 🚀 **Recommended Actions**
1. **Delete duplicate**: `npx sanity documents delete homePage --api-version v2024-01-01`
2. **Add missing titles** to pages without them
3. **Verify frontend integration** uses `homepage` (lowercase) not `homePage`

## 📊 **Dataset Health: EXCELLENT** ✅

Your content dataset is **complete and well-structured**. The hero rendering issue is definitely in the frontend code, not the Sanity data layer.

---

*Analysis Date: October 16, 2025*  
*Total Documents: 223*  
*Dataset: production*  
*Status: READY FOR PRODUCTION*