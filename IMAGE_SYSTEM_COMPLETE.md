# 🖼️ Sanity Image System - Complete Implementation

## ✅ What's Been Accomplished

### 1. **Image Schemas Created**
- **`/schemas/image.js`** - Custom image type with alt text, captions, and credits
- **`/schemas/gallery.js`** - Gallery image documents with categorization
- **`/schemas/wedding.js`** - Wedding documents with photo galleries
- **Updated sanity.config.js** - All schemas registered and available in Studio

### 2. **Bulk Image Upload System**
- **`/scripts/upload-images-to-sanity.js`** - Uploads all venue/gallery images
- **`/scripts/create-wedding-documents.js`** - Creates wedding docs with photo galleries
- **`/scripts/update-homepage-images.js`** - Updates homepage with proper image refs

### 3. **Frontend Image Utilities**
- **`/src/utils/sanityImage.js`** - Complete image URL building and optimization utilities
- Responsive image generation
- CDN optimization (WebP, quality control, sizing)
- Gallery thumbnail generation
- Hero image optimization

## 🏗️ Architecture Overview

### Image Categories
```javascript
{
  'barn': 'Barn interior/exterior photos',
  'property': 'Property/landscape photos', 
  'bridal-suite': 'Bridal suite photos',
  'reception-area': 'Reception area photos',
  'details': 'Venue detail shots',
  'historical': 'Historical photos',
  'real-weddings': 'Wedding photography'
}
```

### CDN URL Structure
```javascript
// Base CDN URL
https://cdn.sanity.io/images/vicw6cgb/production/{imageId}

// Optimized with parameters
https://cdn.sanity.io/images/vicw6cgb/production/{imageId}?w=1920&h=1080&q=85&fm=webp&fit=crop
```

## 📊 Upload Results

### Venue & Gallery Images
- ✅ **34 venue images** uploaded and categorized
- ✅ **Gallery entries** created with proper metadata
- ✅ **Image optimization** enabled (WebP, quality control)

### Wedding Galleries
- ✅ **15+ wedding documents** created
- ✅ **Photo galleries** with 12 optimized images per wedding
- ✅ **Cover images** for each wedding
- ✅ **Metadata** (dates, couples, seasons, venue details)

### Content Integration
- ✅ **Homepage hero** updated with Sanity CDN image
- ✅ **Content blocks** support proper image fields
- ✅ **Image schemas** integrated with existing content

## 🎯 How to Use

### In React Components
```javascript
import { buildSanityImageUrl, getHeroImageUrls } from '../utils/sanityImage'

// Basic usage
const imageUrl = buildSanityImageUrl(image, { width: 800, quality: 85 })

// Hero images with responsive sizes
const heroUrls = getHeroImageUrls(heroImage)
// Returns: { mobile, tablet, desktop, original }

// Gallery thumbnails
const galleryUrls = getGalleryImageUrls(galleryImage)
// Returns: { thumbnail, medium, large, original }
```

### In Sanity Studio
1. **Navigate to:** http://localhost:3333/
2. **Gallery Images** - Manage all venue photos
3. **Weddings** - Real wedding galleries  
4. **Pages > Homepage** - Edit hero background image
5. **Content blocks** - All support image fields with hotspot/crop

### GROQ Queries for Images
```javascript
// Fetch homepage with optimized images
*[_type == "page" && _id == "homepage"][0]{
  contentBlocks[]{
    ...,
    backgroundImage{
      asset->,
      alt,
      hotspot,
      crop
    }
  }
}

// Fetch wedding galleries
*[_type == "wedding" && featured == true]{
  title,
  coupleNames,
  coverImage{
    asset->,
    alt
  },
  gallery[]{
    asset->,
    alt
  }
}

// Fetch gallery images by category
*[_type == "galleryImage" && category == "barn"]{
  title,
  image{
    asset->,
    alt
  },
  featured
}
```

## 🔧 Configuration

### Environment Variables Required
```bash
SANITY_API_TOKEN=your_token_here
```

### Sanity Project Settings
- **Project ID:** vicw6cgb
- **Dataset:** production
- **CDN:** Enabled with optimization

## 🚀 Performance Benefits

### Before (Local Images)
- ❌ Fixed file sizes
- ❌ No format optimization  
- ❌ No responsive sizing
- ❌ No CDN delivery

### After (Sanity CDN)
- ✅ **Automatic WebP conversion**
- ✅ **Responsive sizing** (mobile, tablet, desktop)
- ✅ **Quality optimization** (85% default, 90% for hero)
- ✅ **Global CDN delivery**
- ✅ **Hotspot/crop editing** in Studio
- ✅ **Lazy loading** ready URLs

## 📁 File Structure

```
/schemas/
  ├── image.js          # Custom image type
  ├── gallery.js        # Gallery image documents  
  ├── wedding.js         # Wedding documents
  └── blocks/
      ├── heroBlock.js   # Updated with image field
      └── ...

/scripts/
  ├── upload-images-to-sanity.js      # Bulk upload venue images
  ├── create-wedding-documents.js     # Create wedding galleries
  └── update-homepage-images.js       # Update homepage images

/src/utils/
  └── sanityImage.js    # Frontend image utilities

/public/images/        # Original images (backup)
  ├── venue/           # Venue photos → uploaded
  ├── wedding-photos/  # Wedding galleries → uploaded  
  ├── bridal-suite/    # Bridal suite → uploaded
  └── ...
```

## 🎉 Next Steps

The image system is now **fully operational**! You can:

1. **Edit images** in Sanity Studio with hotspot/crop
2. **Add new images** via Studio upload
3. **Use responsive URLs** in frontend components
4. **Optimize performance** with automatic WebP conversion
5. **Manage galleries** with proper categorization

The system automatically handles:
- Image optimization and conversion
- Responsive sizing for all devices  
- CDN delivery for fast loading
- Metadata management (alt text, captions, credits)
- Gallery organization by category

**Your images are now properly handled with full CDN optimization! 🚀**