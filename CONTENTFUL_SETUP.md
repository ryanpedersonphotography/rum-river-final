# Contentful CMS Setup Guide

## ✅ What Has Been Done

1. **Installed Contentful SDKs** - Both client and management SDKs are installed
2. **Created Contentful Integration** - The HomePage now supports Contentful CMS
3. **Preserved Existing Design** - All styling and layout remains exactly the same
4. **Added Fallback Support** - Site works with or without Contentful configured
5. **Management Token Configured** - Your token is saved in `.contentfulrc.json`

## 📋 Setup Instructions

### Step 1: Create a Contentful Space

1. Go to [app.contentful.com](https://app.contentful.com)
2. Click "Add a space" or use an existing space
3. Name it something like "Rum River Website"
4. Choose the free "Blank" template

### Step 2: Run the Setup Script

Once you have a space created, run:

```bash
node scripts/contentful-setup.mjs
```

This will create all the content models you need.

### Step 3: Get Your API Keys

1. In Contentful, go to **Settings → API keys**
2. Click **Add API key**
3. Name it "Website"
4. Copy the **Space ID** and **Content Delivery API - access token**

### Step 4: Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_delivery_token_here
```

### Step 5: Create Content in Contentful

1. Go to **Content** in Contentful
2. Create entries in this order:

#### A. Feature Blocks (create 2)
- **Feature Block 1:**
  - Number: "01"
  - Title: "A Picturesque Location For Your Special Event"
  - Lead: "Near Milaca, Saint Paul, St Cloud, and Brainerd MN"
  - Content: (paste the full paragraph text)
  - Image Alt: "Special event venue"
  - Reverse: false

- **Feature Block 2:**
  - Number: "02"
  - Title: "Rum River Barn & Vineyard"
  - Lead: "Milaca, St. Cloud, Saint Paul, and Brainerd MN"
  - Content: (paste the full paragraph text)
  - Image Alt: "Rum River Barn and Vineyard"
  - Reverse: true

#### B. Experience Features (create 3)
- All-Inclusive Planning
- Customizable Packages
- Historic Charm

#### C. Testimonials (create 3)
- Add your testimonial quotes and author details

#### D. HomePage Entry (create 1)
Link all the above entries to the HomePage entry fields.

### Step 6: Test the Integration

1. Restart your dev server: `npm run dev`
2. The site will now pull content from Contentful
3. Any changes in Contentful will appear on the site after refresh

## 🎯 How It Works

- **With Contentful configured**: Content is fetched from your Contentful space
- **Without Contentful**: Falls back to local JSON files (current behavior)
- **No design changes**: The CMS only manages text content, not styling
- **Edit content**: Log into Contentful to make text changes

## 📝 Editable Content Areas

The following HomePage sections are now CMS-managed:

1. **Hero Section**
   - Script accent text
   - Title (both lines)
   - Description
   - CTA button text and link

2. **Feature Blocks**
   - Section header
   - Each block's content
   - Order can be changed in Contentful

3. **Experience Section**
   - All text content
   - Feature items

4. **Love Stories**
   - Section headers

5. **Testimonials**
   - All testimonial content
   - Can add/remove testimonials

## 🔧 Troubleshooting

**Site shows fallback content:**
- Check `.env` file has correct credentials
- Verify content is published in Contentful
- Check browser console for errors

**Content not updating:**
- Content must be published in Contentful
- Clear browser cache
- Restart dev server

## 🚀 Next Steps

1. Complete the Contentful setup above
2. Add more pages to CMS if needed
3. Consider adding image management to Contentful
4. Set up webhooks for automatic deployment on content changes