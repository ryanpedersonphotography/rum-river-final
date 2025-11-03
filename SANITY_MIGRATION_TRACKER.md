# Sanity CMS Page Migration Tracker

## Project Info
- **Sanity Project ID**: vicw6cgb
- **Dataset**: production
- **Studio URL**: http://localhost:3333 (local) / https://rum-river-final.sanity.studio (pending deployment)

## ✅ MAJOR MILESTONES COMPLETED!

1. **Studio Deployed**: https://rum-river-final.sanity.studio ✅
2. **Structure Reorganized**: Clean page-based architecture ✅  
3. **Homepage Migrated**: Data successfully moved to new schema ✅
4. **Unknown Fields Cleaned**: No orphaned fields ✅

### New Studio Structure:
```
📄 Main Pages (10 pages with individual schemas)
📝 Dynamic Content (Real Weddings, Blogs, Gallery)
🧩 Reusable Content (Venues, Testimonials)
⚙️ Settings
```

- Each page now has its own dedicated schema
- Technical blocks are hidden from the main menu
- Visual icons added for better navigation
- Clean separation of content types

## Migration Status Overview

### ✅ Completed
1. **Studio Restructuring** - Complete reorganization with page-specific schemas
2. **Homepage Schema** - Created new `homePage` schema with proper fields
3. **Core Schemas** - All base schemas created

### 🔧 Manual Migration Required
**Homepage Content** - The existing homepage data needs to be manually migrated:
1. Go to http://localhost:3333
2. Navigate to **📄 Main Pages** → **🏠 Homepage**
3. Copy content from the old homepage (still exists as type "page")
4. Or delete the old document and create new one with the migration data

### 🔄 In Progress
None

### ⏳ Pending Migration

## Page-by-Page Migration Details

---

## 1. EVENTS PAGE
**Status**: ⏳ Pending  
**Route**: `/events`  
**Source File**: `/src/pages/EventsPage.jsx`

### Hero Section
- [ ] title: "Events & Celebrations"
- [ ] lead: "From intimate gatherings to grand celebrations..."
- [ ] heroImage: "/images/venue/barn-interior-exposed-beams-chandeliers.jpg"

### Event Blocks Needed (6 blocks)
Each event block needs:
- title (string)
- description (text)
- features (array of strings - 4 items each)
- ctaText (string)
- ctaLink (string)
- image (image with alt text)
- sectionStyle (dark-gradient-section or section-warm)
- layout (normal or reverse)

#### 1. Wedding Events Block
- [ ] title: "Wedding Events"
- [ ] description: "Celebrate your love story in our tranquil..."
- [ ] features:
  - "Indoor and outdoor ceremony spaces with flexible configurations"
  - "Year-round venue availability with climate-controlled comfort"
  - "Picturesque grounds perfect for wedding photography"
  - "Capacity for up to 600 guests with authentic barn charm"
- [ ] ctaText: "Plan Your Wedding"
- [ ] image: "/images/venue/barn-interior-ceiling-beams-lighting.jpg"
- [ ] sectionStyle: "dark-gradient-section"
- [ ] layout: "normal"

#### 2. Engagement Parties Block
- [ ] title: "Engagement Parties"
- [ ] description: "Host your engagement celebration..."
- [ ] features: (4 items)
- [ ] ctaText: "Plan Your Engagement"
- [ ] image: "/images/venue/details-swing-rustic-romance.jpg"
- [ ] sectionStyle: "section-warm"
- [ ] layout: "reverse"

#### 3. Birthday Parties Block
- [ ] title: "Birthday Parties"
- [ ] description: "Whether turning 16 or 60..."
- [ ] features: (4 items)
- [ ] ctaText: "Book Birthday Party"
- [ ] image: "/images/2015/12/wedding-5.jpg"
- [ ] sectionStyle: "dark-gradient-section"
- [ ] layout: "normal"

#### 4. Graduation Parties Block
- [ ] title: "Graduation Parties"
- [ ] description: "Celebrate high school, college..."
- [ ] features: (4 items)
- [ ] ctaText: "Celebrate Graduation"
- [ ] image: "/images/venue/barn-exterior-deck-swing-golden-hour.jpg"
- [ ] sectionStyle: "section-warm"
- [ ] layout: "reverse"

#### 5. Holiday Parties Block
- [ ] title: "Holiday Parties"
- [ ] description: "Host your holiday celebration..."
- [ ] features: (4 items)
- [ ] ctaText: "Plan Holiday Event"
- [ ] image: "/images/venue/barn-interior-exposed-beams-chandeliers.jpg"
- [ ] sectionStyle: "dark-gradient-section"
- [ ] layout: "normal"

### Schedule Tour Form
- [ ] formName: "events-schedule-tour"
- [ ] title: "Let's Start Planning Together"
- [ ] subtitle: "Ready to Plan Your Event?"
- [ ] description: "Contact us today to schedule a tour..."

---

## 2. PROPERTY PAGE
**Status**: ⏳ Pending  
**Route**: `/property`  
**Source File**: `/src/pages/PropertyPage.jsx`

### Hero Section
- [ ] title: "The Property"
- [ ] description: "Discover the beautiful spaces..."
- [ ] heroImage: "/images/venue/barn-interior-ceiling-beams-lighting.jpg"

### Venue Discovery Block
- [ ] sectionClassName: "section-warm"
- [ ] scriptAccent: "Your Perfect Setting"
- [ ] title: "Discover Our Spaces"
- [ ] description: "Every corner tells a story..."

### Schedule Tour Form
- [ ] formName: "schedule-tour"
- [ ] title: "Schedule Your Property Tour"
- [ ] scriptAccent: "Ready to Visit?"
- [ ] description: "Experience the beauty of Rum River Barn..."

---

## 3. GALLERY PAGE
**Status**: ⏳ Pending  
**Route**: `/gallery`  
**Source File**: `/src/pages/GalleryPage.jsx`

### Hero Section
- [ ] title: "Photo Gallery"
- [ ] lead: "Browse through beautiful moments..."
- [ ] heroImage: "/images/gallery/wedding-main.jpg"

### Gallery Categories
- [ ] All Photos
- [ ] Barn Interior & Exterior (15 images)
- [ ] Bridal Suite (7 images)
- [ ] Reception Area (5 images)
- [ ] Details & Decor (8 images)
- [ ] Real Weddings (16 images)

### Gallery Images (51 total)
Each image needs:
- src (string)
- category (string)
- alt (string)
- id (number)

---

## 4. CONTACT PAGE
**Status**: ⏳ Pending  
**Route**: `/contact`  
**Source File**: `/src/pages/ContactPage.jsx`

### Hero Section
- [ ] title: "Get in Touch"
- [ ] lead: "We'd love to hear from you..."
- [ ] heroImage: "/images/venue/barn-exterior-entrance-lighting-view.jpg"

### Virtual Tours Section
- [ ] sectionTitle: "Virtual 3D Tours"
- [ ] scriptAccent: "Take a Peek Inside"
- [ ] lead: "Explore our beautiful spaces..."

### VR Tour Cards (2)
#### Wedding Barn Tour
- [ ] title: "Wedding Barn"
- [ ] description: "Step inside our historic barn..."
- [ ] tourUrl: "https://my.matterport.com/show/?m=P25ecLeSZdF"
- [ ] icon: "building"

#### Bridal Suite Tour
- [ ] title: "Bridal Suite"
- [ ] description: "Tour the charming bridal suite..."
- [ ] tourUrl: "https://my.matterport.com/show/?m=sFjR96cKfqv"
- [ ] icon: "👰"

### Contact Form
- [ ] Standard contact form fields

---

## 5. VENDORS PAGE
**Status**: ⏳ Pending  
**Route**: `/vendor-list`  
**Source File**: `/src/pages/VendorsPage.jsx`

### Hero Section
- [ ] title: "Preferred Vendor Directory"
- [ ] lead: "Our carefully curated list..."
- [ ] heroImage: "/images/venue/barn-exterior-welcome-sign-entrance.jpg"

### Vendor Categories (5)
Each category needs:
- title (string)
- iconName (string)
- vendors (array)

#### DJ & Entertainment (3 vendors)
#### Catering and Bar Service (4 vendors)
#### Florist (1 vendor)
#### Shuttle Service (1 vendor)
#### Accommodations (3 vendors)

Each vendor needs:
- name (string)
- phone (string)
- description (text)

---

## 6. LOCATION PAGE
**Status**: ⏳ Pending  
**Route**: `/location`  
**Source File**: `/src/pages/LocationPage.jsx`

### Hero Section
- [ ] title: "Find Your Way"
- [ ] lead: "Located in the heart of Minnesota..."
- [ ] heroImage: "/images/venue/property-landscape-rural-vista.jpg"

### Location Info
- [ ] address: "14554 94th St, Milaca, MN 56353"
- [ ] phone: "(320) 444-0070"
- [ ] email: "wedding@rumriverbarn.com"

### Map Section
- [ ] Google Maps embed
- [ ] Directions from major cities

---

## 7. TESTIMONIALS PAGE
**Status**: ⏳ Pending  
**Route**: `/testimonials`  
**Source File**: `/src/pages/TestimonialsPage.jsx`

### Hero Section
- [ ] title: "Love Letters"
- [ ] lead: "What our couples are saying..."
- [ ] heroImage: "/images/venue/barn-interior-exposed-beams.jpg"

### Testimonials
Need to migrate existing testimonials from document type

---

## 8. HISTORY PAGE
**Status**: ⏳ Pending  
**Route**: `/history`  
**Source File**: `/src/pages/HistoryPage.jsx`

### Hero Section
- [ ] title: "Our Story"
- [ ] lead: "A century of memories..."
- [ ] heroImage: "/images/venue/barn-exterior-vintage.jpg"

### Timeline Content
- [ ] Timeline events and milestones
- [ ] Historical photos
- [ ] Story text blocks

---

## 9. THANK YOU PAGE
**Status**: ⏳ Pending  
**Route**: `/thank-you`  
**Source File**: `/src/pages/ThankYouPage.jsx`

### Hero Section
- [ ] title: "Thank You!"
- [ ] lead: "We've received your message..."
- [ ] heroImage: "/images/venue/barn-exterior-sunset.jpg"

### Content
- [ ] Thank you message
- [ ] Next steps information
- [ ] Contact information

---

## Migration Process for Each Page

### Step 1: Create/Update Schema
1. Add any new block types needed to `/studio/schemas/blocks/`
2. Register new blocks in `/studio/sanity.config.js`
3. Update page schema if needed

### Step 2: Create Page Document
```javascript
// Using Sanity CLI or Studio
npx sanity documents create --dataset production
```

### Step 3: Populate Content
1. Create document with proper _id (e.g., 'events-page')
2. Add all content blocks
3. Upload and reference images
4. Set SEO fields

### Step 4: Update Frontend
1. Update page component to use `usePageContent` hook
2. Map Sanity content to component props
3. Test data flow

### Step 5: Verify
- [ ] Content displays correctly
- [ ] Images load properly
- [ ] Forms work
- [ ] SEO meta tags present
- [ ] No console errors

---

## Notes
- Preserve exact design - no DRY principles needed
- Each page can have custom blocks specific to its needs
- Keep all existing styles and classes
- Images should be uploaded to Sanity CDN
- Use existing components where possible

## Commands
```bash
# Start Sanity Studio locally
cd studio && npm run dev

# Deploy Studio
cd studio && npm run deploy

# Query documents
npx sanity documents query '*[_type == "page"]{_id, title}'
```