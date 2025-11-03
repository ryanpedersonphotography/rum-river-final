# Sanity.io Migration Guide for Rum River Wedding Barn

## Overview

This guide outlines the complete migration from a static React site to a Sanity.io CMS-powered website. The migration preserves all existing visual design and functionality while adding powerful content management capabilities.

## 🎯 Goals

- **Preserve Design**: Keep exact same visual appearance and CSS classes
- **Add Flexibility**: Enable content editing through Sanity Studio
- **Maintain Performance**: Fast loading with optimized images
- **Production Ready**: Error handling, loading states, and fallbacks
- **Opinionated CMS**: Limit editor flexibility to prevent design breaks

## 📋 Features

### ✅ Completed

1. **Complete Schema System**
   - Block-based page builder with 7 block types
   - Supporting documents (venues, testimonials, weddings, etc.)
   - SEO settings and site configuration
   - Rich text support with controlled formatting

2. **React Components**
   - `PageRenderer` for dynamic page rendering
   - Block renderers for each content type
   - Sanity client with optimized image handling
   - Fallback content system

3. **Migration Strategy**
   - Conversion utilities for existing content
   - Backward compatibility with local content
   - Step-by-step migration process

## 🏗️ Architecture

### Schema Structure

```
schemas/
├── page.js                 # Main page document
├── siteSettings.js         # Global site settings
├── seoSettings.js          # SEO object type
├── richText.js            # Rich text configuration
├── blocks/
│   ├── heroBlock.js       # Hero section
│   ├── venueDiscoveryBlock.js
│   ├── featureBlocksBlock.js
│   ├── galleryBlock.js
│   ├── experienceBlock.js
│   ├── testimonialsBlock.js
│   └── formBlock.js
└── documents/
    ├── venue.js           # Venue information
    ├── testimonial.js     # Customer testimonials
    ├── weddingBlog.js     # Wedding blog posts
    ├── featureBlock.js    # Feature content blocks
    └── experienceFeature.js
```

### Component Structure

```
components/
├── PageRenderer.jsx       # Main page renderer
├── blocks/               # Block renderers
│   ├── HeroBlockRenderer.jsx
│   ├── VenueDiscoveryBlockRenderer.jsx
│   ├── FeatureBlocksBlockRenderer.jsx
│   ├── GalleryBlockRenderer.jsx
│   ├── ExperienceBlockRenderer.jsx
│   ├── TestimonialsBlockRenderer.jsx
│   └── FormBlockRenderer.jsx
└── ...existing components
```

## 🔧 Setup Instructions

### 1. Prerequisites

- Sanity project already exists (`vicw6cgb`)
- All dependencies installed (`@sanity/client`, `@sanity/image-url`, etc.)

### 2. Start Sanity Studio

```bash
npm run sanity:dev
```

This opens Sanity Studio at `http://localhost:3333`

### 3. Create Initial Content

1. **Site Settings**
   - Go to "Site Settings" in Sanity Studio
   - Add basic site information, contact details, and default SEO

2. **Create Venues**
   - Add venue documents for the venue discovery section
   - Upload images and set display order

3. **Create Feature Blocks**
   - Add the numbered feature blocks for homepage
   - Include images and rich text content

4. **Create Testimonials**
   - Add customer testimonials with ratings
   - Mark important ones as "featured"

5. **Create Homepage**
   - Go to "Pages" → "Homepage"
   - Add content blocks in desired order
   - Reference created venues, features, and testimonials

### 4. Update Application Code

#### Option A: Gradual Migration

Replace specific pages one at a time:

```jsx
// In App.jsx, update routes
import HomePageSanity from './pages/HomePageSanity'
import EventsPageSanity from './pages/EventsPageSanity'

// Replace existing routes
<Route path="/" element={<HomePageSanity />} />
<Route path="/events" element={<EventsPageSanity />} />
```

#### Option B: Complete Migration

1. Replace `HomePage.jsx` with Sanity version
2. Replace `EventsPage.jsx` with Sanity version
3. Update other pages as needed

## 📝 Content Management Guide

### Block Types Overview

#### 1. Hero Block
- **Purpose**: Main page header with title, description, and CTA
- **Customizable**: Text content, background image, CTA button
- **Fixed**: Layout, typography styles, animations

#### 2. Venue Discovery Block
- **Purpose**: Interactive venue showcase with image galleries
- **Customizable**: Section title, featured venues, descriptions
- **Fixed**: Tab layout, image carousel behavior, styling

#### 3. Feature Blocks Block
- **Purpose**: Numbered content blocks with images
- **Customizable**: Block content, images, order, CTA buttons
- **Fixed**: Alternating layout, typography, spacing

#### 4. Gallery Block
- **Purpose**: Wedding photo galleries or custom images
- **Customizable**: Wedding selection, custom images, CTA
- **Fixed**: Grid layout, hover effects, lightbox behavior

#### 5. Experience Block
- **Purpose**: Features list with icons and main image
- **Customizable**: Feature list, icons, main image, layout direction
- **Fixed**: Icon styles, layout behavior, responsive design

#### 6. Testimonials Block
- **Purpose**: Customer testimonials with ratings
- **Customizable**: Testimonial selection, layout (grid/carousel)
- **Fixed**: Card design, star ratings, typography

#### 7. Form Block
- **Purpose**: Contact forms and lead generation
- **Customizable**: Form fields, styling, submission settings
- **Fixed**: Form validation, submission handling, responsive layout

### Content Guidelines

#### Text Content
- Keep headlines concise (under 60 characters for SEO)
- Use sentence case for most content
- Bold important information (phone numbers, key features)
- Write in active voice and welcoming tone

#### Images
- **Hero Images**: 1920x1080px minimum, optimized for web
- **Feature Images**: 800x500px, landscape orientation
- **Gallery Images**: 800x800px, square format preferred
- **Portraits**: 400x400px for testimonial authors
- Always include descriptive alt text

#### SEO Best Practices
- Unique meta titles (50-60 characters)
- Meta descriptions (150-160 characters)
- Include location keywords (Minnesota, Princeton, etc.)
- Use structured schema markup (handled automatically)

## 🔄 Migration Process

### Step 1: Content Preparation
1. Audit existing content and identify what needs migration
2. Prepare images in optimized formats
3. Create content strategy for new CMS structure

### Step 2: Sanity Setup
1. Verify schema files are correct
2. Start Sanity Studio
3. Create initial documents and page structures

### Step 3: Development Migration
1. Test PageRenderer with fallback content
2. Create page-specific fallback content
3. Update routing to use new page components
4. Test all functionality thoroughly

### Step 4: Content Migration
1. Create all supporting documents (venues, testimonials, etc.)
2. Create page documents in Sanity
3. Test content editing workflow
4. Train content editors

### Step 5: Launch
1. Update production environment variables
2. Deploy updated application
3. Monitor for any issues
4. Document content editing procedures

## 🔧 Technical Implementation

### Environment Variables

```env
VITE_SANITY_PROJECT_ID=vicw6cgb
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
```

### Image Optimization

The system automatically optimizes images:
- WebP format for modern browsers
- Responsive sizing based on device
- Lazy loading for performance
- Hotspot support for focal points

### Error Handling

- Graceful fallback to local content if Sanity is unavailable
- Loading states during content fetch
- Error boundaries for component failures
- Development-friendly error messages

### Performance Considerations

- CDN-optimized image delivery
- Efficient GROQ queries
- Component-level loading states
- Image lazy loading and optimization

## 🎨 Design Preservation

### CSS Classes Maintained
All existing CSS classes are preserved:
- `.hero-enhanced` for hero sections
- `.alternating-blocks` for feature blocks
- `.section-cream`, `.section-blush` for backgrounds
- `.love-stories-section` for gallery
- `.testimonials-grid` for testimonials
- `.cta-contact-section` for forms

### Animation and Interactions
- Image reveal animations
- Hover effects
- Scroll indicators
- Floating CTA behavior

### Responsive Design
- Mobile-first approach maintained
- Breakpoint consistency
- Touch-friendly interactions
- Accessibility compliance

## 🚀 Advanced Features

### Custom Fields
Form blocks support custom field types:
```json
{
  "name": "guestCount",
  "label": "Expected Guest Count",
  "type": "select",
  "required": true,
  "options": ["50-100", "100-200", "200+"]
}
```

### Rich Text Customization
Controlled rich text formatting:
- Headings (H2, H3, H4)
- Bold and italic
- Bullet and numbered lists
- Links with target options
- No tables or complex formatting

### Image Hotspots
All images support hotspot selection for optimal cropping across devices.

### SEO Optimization
- Automatic meta tag generation
- Open Graph image support
- Structured data markup
- XML sitemap generation

## 📚 Resources

### Sanity Documentation
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Image API](https://www.sanity.io/docs/image-api)

### React Integration
- [Sanity React Client](https://www.sanity.io/docs/js-client)
- [Image URL Builder](https://www.sanity.io/docs/image-url)

### Best Practices
- [Content Modeling](https://www.sanity.io/docs/content-modelling)
- [Performance Optimization](https://www.sanity.io/docs/optimizing-performance)
- [Security Guidelines](https://www.sanity.io/docs/security)

## 🔍 Troubleshooting

### Common Issues

#### Sanity Studio Not Loading
- Check project ID and dataset in `sanity.config.js`
- Verify API permissions in Sanity management console
- Clear browser cache and restart dev server

#### Images Not Displaying
- Confirm image references in GROQ queries
- Check image URL builder configuration
- Verify image assets exist in Sanity

#### Content Not Updating
- Check GROQ query syntax
- Verify document IDs and references
- Clear CDN cache if using production dataset

#### Build Errors
- Ensure all schema files are properly imported
- Check for TypeScript errors in block components
- Verify environment variables are set correctly

### Support

For technical support:
1. Check the Sanity console for API errors
2. Review browser console for client-side issues
3. Test with fallback content to isolate problems
4. Verify network connectivity to Sanity CDN

## 🎉 Next Steps

After successful migration:

1. **Content Training**: Train editors on Sanity Studio
2. **Workflow Documentation**: Create content editing procedures
3. **Backup Strategy**: Set up regular content backups
4. **Performance Monitoring**: Monitor site performance metrics
5. **Feature Expansion**: Consider additional CMS features

This migration provides a solid foundation for scalable content management while preserving the beautiful, hand-crafted design of the Rum River Wedding Barn website.