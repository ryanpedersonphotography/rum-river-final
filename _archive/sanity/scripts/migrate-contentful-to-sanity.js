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

async function migrateContentfulToSanity() {
  try {
    console.log('🔍 Fetching wedding blogs from Contentful...')
    
    // Fetch all wedding blogs from Contentful
    const contentfulEntries = await contentfulClient.getEntries({
      content_type: 'weddingBlog',
      limit: 1000, // Get all entries
      include: 2 // Include linked assets
    })
    
    console.log(`📦 Found ${contentfulEntries.items.length} wedding blogs in Contentful`)
    
    if (contentfulEntries.items.length === 0) {
      console.log('ℹ️  No wedding blogs found in Contentful. Using sample data instead.')
      return
    }
    
    // First, clear existing sample data from Sanity
    console.log('🧹 Clearing sample data from Sanity...')
    const existingWeddings = await sanityClient.fetch('*[_type == "weddingBlog"]')
    for (const wedding of existingWeddings) {
      await sanityClient.delete(wedding._id)
      console.log(`🗑️  Deleted sample wedding: ${wedding.title}`)
    }
    
    console.log('🔄 Migrating Contentful data to Sanity...')
    
    for (let i = 0; i < contentfulEntries.items.length; i++) {
      const item = contentfulEntries.items[i]
      console.log(`\n📝 Processing ${i + 1}/${contentfulEntries.items.length}: ${item.fields.title || 'Untitled'}`)
      
      try {
        // Handle featured image
        let featuredImageRef = null
        if (item.fields.featuredImage) {
          console.log('  🖼️  Processing featured image...')
          const imageUrl = `https:${item.fields.featuredImage.fields.file.url}`
          const imageResponse = await fetch(imageUrl)
          const imageBuffer = await imageResponse.arrayBuffer()
          
          const imageAsset = await sanityClient.assets.upload('image', Buffer.from(imageBuffer), {
            filename: item.fields.featuredImage.fields.file.fileName || 'featured-image.jpg'
          })
          
          featuredImageRef = {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: imageAsset._id
            }
          }
        }
        
        // Handle gallery images
        const galleryRefs = []
        if (item.fields.gallery && Array.isArray(item.fields.gallery)) {
          console.log(`  🎨 Processing ${item.fields.gallery.length} gallery images...`)
          
          for (let j = 0; j < Math.min(item.fields.gallery.length, 10); j++) { // Limit to 10 images
            const galleryImage = item.fields.gallery[j]
            try {
              const imageUrl = `https:${galleryImage.fields.file.url}`
              const imageResponse = await fetch(imageUrl)
              const imageBuffer = await imageResponse.arrayBuffer()
              
              const imageAsset = await sanityClient.assets.upload('image', Buffer.from(imageBuffer), {
                filename: galleryImage.fields.file.fileName || `gallery-${j}.jpg`
              })
              
              galleryRefs.push({
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageAsset._id
                },
                caption: galleryImage.fields.description || ''
              })
            } catch (imgError) {
              console.log(`    ⚠️  Skipped gallery image ${j + 1}: ${imgError.message}`)
            }
          }
        }
        
        // Create the wedding document in Sanity
        const weddingDoc = {
          _type: 'weddingBlog',
          title: item.fields.title || '',
          slug: {
            _type: 'slug',
            current: item.fields.slug || item.fields.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'untitled'
          },
          date: item.fields.date || new Date().toISOString(),
          season: item.fields.season || '',
          venue: item.fields.venue || 'Rum River Barn',
          excerpt: item.fields.excerpt || '',
          story: item.fields.story || '',
          photographerCredit: item.fields.photographerCredit || '',
          featuredImage: featuredImageRef,
          gallery: galleryRefs,
          featured: item.fields.featured || false,
          published: true // Assume published if it was in Contentful
        }
        
        const result = await sanityClient.create(weddingDoc)
        console.log(`  ✅ Created in Sanity: ${result._id}`)
        
      } catch (error) {
        console.error(`  ❌ Error migrating "${item.fields.title}":`, error.message)
      }
    }
    
    console.log('\n🎉 Migration completed!')
    console.log('✅ Your Contentful wedding data has been migrated to Sanity!')
    console.log('🔗 Test at: https://rum-river-final.netlify.app/test-sanity-api.html')
    
  } catch (error) {
    console.error('❌ Migration error:', error)
  }
}

// Run the migration
migrateContentfulToSanity()