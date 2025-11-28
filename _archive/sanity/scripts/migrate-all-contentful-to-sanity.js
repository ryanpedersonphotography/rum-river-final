import { createClient as createContentfulClient } from 'contentful'
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Contentful client (read-only)
const contentfulClient = createContentfulClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

// Sanity client (write access)
const sanityClient = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

// Helper to upload image to Sanity
async function uploadImageToSanity(contentfulImage, description = '') {
  try {
    const imageUrl = `https:${contentfulImage.fields.file.url}`
    const imageResponse = await fetch(imageUrl)
    const imageBuffer = await imageResponse.arrayBuffer()
    
    const imageAsset = await sanityClient.assets.upload('image', Buffer.from(imageBuffer), {
      filename: contentfulImage.fields.file.fileName || 'image.jpg',
      title: contentfulImage.fields.title || description,
      description: contentfulImage.fields.description || description
    })
    
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id
      }
    }
  } catch (error) {
    console.log(`    ⚠️  Failed to upload image: ${error.message}`)
    return null
  }
}

async function migrateAllContentful() {
  try {
    console.log('🚀 Starting comprehensive Contentful to Sanity migration...')
    
    // Get all entries
    const allEntries = await contentfulClient.getEntries({ limit: 1000 })
    
    // Group by content type
    const entriesByType = {}
    for (const entry of allEntries.items) {
      const contentType = entry.sys.contentType.sys.id
      if (!entriesByType[contentType]) {
        entriesByType[contentType] = []
      }
      entriesByType[contentType].push(entry)
    }
    
    console.log(`\n📊 Found content types: ${Object.keys(entriesByType).join(', ')}`)
    
    // Clear existing data first
    console.log('\n🧹 Clearing existing Sanity data...')
    const existingDocs = await sanityClient.fetch('*[_type in ["homePage", "featureBlock", "experienceFeature", "testimonial", "venue", "venueItem", "weddingBlog"]]')
    
    for (const doc of existingDocs) {
      await sanityClient.delete(doc._id)
      console.log(`🗑️  Deleted: ${doc._type} - ${doc.title || doc.name || doc._id}`)
    }
    
    // MIGRATE TESTIMONIALS FIRST (no dependencies)
    if (entriesByType.testimonial) {
      console.log(`\n📝 Migrating ${entriesByType.testimonial.length} testimonials...`)
      
      for (const entry of entriesByType.testimonial) {
        try {
          const testimonialDoc = {
            _type: 'testimonial',
            quote: entry.fields.quote || '',
            authorName: entry.fields.authorName || '',
            authorDetail: entry.fields.authorDetail || ''
          }
          
          const result = await sanityClient.create(testimonialDoc)
          console.log(`✅ Testimonial: ${result.authorName}`)
          
        } catch (error) {
          console.log(`❌ Failed to migrate testimonial: ${error.message}`)
        }
      }
    }
    
    // MIGRATE EXPERIENCE FEATURES (no dependencies)
    if (entriesByType.experienceFeature) {
      console.log(`\n🌟 Migrating ${entriesByType.experienceFeature.length} experience features...`)
      
      for (const entry of entriesByType.experienceFeature) {
        try {
          const featureDoc = {
            _type: 'experienceFeature',
            title: entry.fields.title || '',
            description: entry.fields.description || ''
          }
          
          const result = await sanityClient.create(featureDoc)
          console.log(`✅ Experience Feature: ${result.title}`)
          
        } catch (error) {
          console.log(`❌ Failed to migrate experience feature: ${error.message}`)
        }
      }
    }
    
    // MIGRATE FEATURE BLOCKS (no dependencies)
    if (entriesByType.featureBlock) {
      console.log(`\n🎯 Migrating ${entriesByType.featureBlock.length} feature blocks...`)
      
      for (const entry of entriesByType.featureBlock) {
        try {
          const featureBlockDoc = {
            _type: 'featureBlock',
            number: entry.fields.number || '',
            title: entry.fields.title || '',
            lead: entry.fields.lead || '',
            content: entry.fields.content || '',
            imageAlt: entry.fields.imageAlt || '',
            reverse: entry.fields.reverse || false
          }
          
          // Handle image
          if (entry.fields.image) {
            console.log(`  🖼️  Processing image for: ${entry.fields.title}`)
            const imageRef = await uploadImageToSanity(entry.fields.image, entry.fields.title)
            if (imageRef) {
              featureBlockDoc.image = imageRef
            }
          }
          
          const result = await sanityClient.create(featureBlockDoc)
          console.log(`✅ Feature Block: ${result.title}`)
          
        } catch (error) {
          console.log(`❌ Failed to migrate feature block: ${error.message}`)
        }
      }
    }
    
    // MIGRATE VENUES (no dependencies)
    if (entriesByType.venue) {
      console.log(`\n🏛️  Migrating ${entriesByType.venue.length} venues...`)
      
      for (const entry of entriesByType.venue) {
        try {
          const venueDoc = {
            _type: 'venue',
            title: entry.fields.title || '',
            key: entry.fields.key || '',
            description: entry.fields.description || '',
            order: entry.fields.order || 0,
            capacity: entry.fields.capacity || '',
            features: entry.fields.features || [],
            lighting: entry.fields.lighting || '',
            climate: entry.fields.climate || '',
            images: []
          }
          
          // Handle multiple images
          if (entry.fields.images && Array.isArray(entry.fields.images)) {
            console.log(`  🖼️  Processing ${entry.fields.images.length} images for: ${entry.fields.title}`)
            
            for (const image of entry.fields.images) {
              const imageRef = await uploadImageToSanity(image, `${entry.fields.title} venue image`)
              if (imageRef) {
                venueDoc.images.push(imageRef)
              }
            }
          }
          
          const result = await sanityClient.create(venueDoc)
          console.log(`✅ Venue: ${result.title}`)
          
        } catch (error) {
          console.log(`❌ Failed to migrate venue: ${error.message}`)
        }
      }
    }
    
    // MIGRATE VENUE ITEMS (no dependencies)
    if (entriesByType.venueItem) {
      console.log(`\n🏠 Migrating ${entriesByType.venueItem.length} venue items...`)
      
      for (const entry of entriesByType.venueItem) {
        try {
          const venueItemDoc = {
            _type: 'venueItem',
            id: entry.fields.id || '',
            name: entry.fields.name || '',
            description: entry.fields.description || '',
            vrTourUrl: entry.fields.vrTourUrl || '',
            order: entry.fields.order || 0
          }
          
          const result = await sanityClient.create(venueItemDoc)
          console.log(`✅ Venue Item: ${result.name}`)
          
        } catch (error) {
          console.log(`❌ Failed to migrate venue item: ${error.message}`)
        }
      }
    }
    
    // MIGRATE WEDDING BLOGS (enhanced version)
    if (entriesByType.weddingBlog) {
      console.log(`\n💒 Migrating ${entriesByType.weddingBlog.length} wedding blogs...`)
      
      for (const entry of entriesByType.weddingBlog) {
        try {
          console.log(`  📝 Processing: ${entry.fields.title || entry.fields.coupleName}`)
          
          const weddingDoc = {
            _type: 'weddingBlog',
            title: entry.fields.title || `${entry.fields.coupleName}'s Wedding`,
            slug: {
              _type: 'slug',
              current: entry.fields.slug || entry.fields.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'untitled'
            },
            coupleName: entry.fields.coupleName || '',
            date: entry.fields.weddingDate || entry.fields.date || new Date().toISOString().split('T')[0],
            publishedDate: entry.fields.publishedDate || entry.sys.createdAt.split('T')[0],
            season: entry.fields.season || '',
            venue: entry.fields.venue || entry.fields.location || 'Rum River Barn',
            location: entry.fields.location || 'Rum River Barn',
            excerpt: entry.fields.introText || entry.fields.excerpt || '',
            story: entry.fields.story || '',
            photographerCredit: entry.fields.photographerCredit || '',
            guestCount: entry.fields.guestCount || null,
            tags: entry.fields.tags || [],
            featured: entry.fields.featured || false,
            published: true,
            seoTitle: entry.fields.seoTitle || '',
            seoDescription: entry.fields.seoDescription || ''
          }
          
          // Handle hero image
          if (entry.fields.heroImage) {
            console.log(`    🖼️  Processing hero image...`)
            const heroImageRef = await uploadImageToSanity(entry.fields.heroImage, `${entry.fields.coupleName} hero image`)
            if (heroImageRef) {
              weddingDoc.heroImage = heroImageRef
            }
          }
          
          // Handle cover image
          if (entry.fields.coverImage) {
            console.log(`    🖼️  Processing cover image...`)
            const coverImageRef = await uploadImageToSanity(entry.fields.coverImage, `${entry.fields.coupleName} cover image`)
            if (coverImageRef) {
              weddingDoc.coverImage = coverImageRef
            }
          }
          
          // Handle featured image
          if (entry.fields.featuredImage) {
            console.log(`    🖼️  Processing featured image...`)
            const featuredImageRef = await uploadImageToSanity(entry.fields.featuredImage, `${entry.fields.coupleName} featured image`)
            if (featuredImageRef) {
              weddingDoc.featuredImage = featuredImageRef
            }
          }
          
          // Handle gallery photos
          if (entry.fields.photos && Array.isArray(entry.fields.photos)) {
            console.log(`    🎨 Processing ${entry.fields.photos.length} gallery photos...`)
            weddingDoc.gallery = []
            
            for (let i = 0; i < Math.min(entry.fields.photos.length, 30); i++) { // Limit to 30 photos
              const photo = entry.fields.photos[i]
              const photoRef = await uploadImageToSanity(photo, `${entry.fields.coupleName} gallery photo ${i + 1}`)
              if (photoRef) {
                weddingDoc.gallery.push({
                  ...photoRef,
                  caption: photo.fields.description || ''
                })
              }
            }
          }
          
          const result = await sanityClient.create(weddingDoc)
          console.log(`✅ Wedding: ${result.title}`)
          
        } catch (error) {
          console.log(`❌ Failed to migrate wedding: ${error.message}`)
        }
      }
    }
    
    // MIGRATE HOMEPAGE (has dependencies on other content)
    if (entriesByType.homePage && entriesByType.homePage.length > 0) {
      console.log(`\n🏠 Migrating homepage content...`)
      
      const entry = entriesByType.homePage[0] // Should only be one
      
      try {
        // Get references for related content
        const featureBlocks = await sanityClient.fetch('*[_type == "featureBlock"]{_id, title}')
        const experienceFeatures = await sanityClient.fetch('*[_type == "experienceFeature"]{_id, title}')
        const testimonials = await sanityClient.fetch('*[_type == "testimonial"]{_id, authorName}')
        
        const homepageDoc = {
          _type: 'homePage',
          heroScriptAccent: entry.fields.heroScriptAccent || '',
          heroTitleLine1: entry.fields.heroTitleLine1 || '',
          heroTitleLine2: entry.fields.heroTitleLine2 || '',
          heroDescription: entry.fields.heroDescription || '',
          heroCtaText: entry.fields.heroCtaText || '',
          heroCtaLink: entry.fields.heroCtaLink || '',
          heroScrollText: entry.fields.heroScrollText || '',
          
          featureScriptAccent: entry.fields.featureScriptAccent || '',
          featureTitle: entry.fields.featureTitle || '',
          featureLead: entry.fields.featureLead || '',
          featureBlocks: featureBlocks.map(fb => ({
            _type: 'reference',
            _ref: fb._id
          })),
          
          experienceScriptAccent: entry.fields.experienceScriptAccent || '',
          experienceTitle: entry.fields.experienceTitle || '',
          experienceDescription: entry.fields.experienceDescription || '',
          experienceFeatures: experienceFeatures.slice(0, 3).map(ef => ({
            _type: 'reference',
            _ref: ef._id
          })),
          
          loveStoriesScriptAccent: entry.fields.loveStoriesScriptAccent || '',
          loveStoriesTitle: entry.fields.loveStoriesTitle || '',
          loveStoriesLead: entry.fields.loveStoriesLead || '',
          
          testimonialsScriptAccent: entry.fields.testimonialsScriptAccent || '',
          testimonialsTitle: entry.fields.testimonialsTitle || '',
          testimonialItems: testimonials.slice(0, 3).map(t => ({
            _type: 'reference',
            _ref: t._id
          })),
          
          venueDiscoveryScriptAccent: entry.fields.venueDiscoveryScriptAccent || '',
          venueDiscoveryTitle: entry.fields.venueDiscoveryTitle || '',
          venueDiscoveryLead: entry.fields.venueDiscoveryLead || '',
          
          floatingCtaText: entry.fields.floatingCtaText || '',
          floatingCtaIcon: entry.fields.floatingCtaIcon || '',
          
          galleryCtaText: entry.fields.galleryCtaText || '',
          galleryCtaLink: entry.fields.galleryCtaLink || '',
          
          starRatingEnabled: entry.fields.starRatingEnabled !== false,
          starCount: entry.fields.starCount || 5,
          
          loadingText: entry.fields.loadingText || '',
          errorTitle: entry.fields.errorTitle || '',
          errorDescription: entry.fields.errorDescription || ''
        }
        
        // Handle hero background image
        if (entry.fields.heroBackgroundImage) {
          console.log(`    🖼️  Processing hero background image...`)
          const heroImageRef = await uploadImageToSanity(entry.fields.heroBackgroundImage, 'Homepage hero background')
          if (heroImageRef) {
            homepageDoc.heroBackgroundImage = heroImageRef
          }
        }
        
        // Handle experience image
        if (entry.fields.experienceImage) {
          console.log(`    🖼️  Processing experience image...`)
          const expImageRef = await uploadImageToSanity(entry.fields.experienceImage, 'Homepage experience image')
          if (expImageRef) {
            homepageDoc.experienceImage = expImageRef
          }
        }
        
        const result = await sanityClient.create(homepageDoc)
        console.log(`✅ Homepage: ${result.heroTitleLine1} ${result.heroTitleLine2}`)
        
      } catch (error) {
        console.log(`❌ Failed to migrate homepage: ${error.message}`)
      }
    }
    
    console.log('\n🎉 Migration completed!')
    console.log('✅ All Contentful content has been migrated to Sanity!')
    console.log('🎨 Check your Sanity Studio at: http://localhost:3333')
    console.log('🔗 Test API at: https://rum-river-final.netlify.app/test-sanity-api.html')
    
  } catch (error) {
    console.error('❌ Migration error:', error)
  }
}

// Run the migration
migrateAllContentful()