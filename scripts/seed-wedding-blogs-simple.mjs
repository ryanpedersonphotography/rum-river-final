#!/usr/bin/env node

import 'dotenv/config'
import contentfulManagement from 'contentful-management'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read management token from .contentfulrc.json
const configPath = path.join(process.cwd(), '.contentfulrc.json')
if (!fs.existsSync(configPath)) {
  console.error('❌ .contentfulrc.json not found. Run contentful login first.')
  process.exit(1)
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

const client = contentfulManagement.createClient({
  accessToken: config.managementToken
})

const SPACE_ID = process.env.VITE_CONTENTFUL_SPACE_ID
const ENVIRONMENT = 'master'

// Sample wedding data
const sampleWeddings = [
  {
    title: "Anthony & Linnea's Summer Garden Wedding",
    slug: "anthony-linnea-summer-2024",
    coupleName: "Anthony & Linnea",
    weddingDate: "2024-07-15",
    publishedDate: "2024-08-01",
    location: "Rum River Barn • Hillman, Minnesota",
    season: "Summer 2024",
    featured: true,
    introText: "From the ceremony to the last dance, Anthony & Linnea's wedding was a perfect blend of elegance and rustic charm.",
    testimonial: "The Rum River Barn team made our wedding day absolutely perfect!",
    photoCredits: "Sarah Johnson Photography",
    guestCount: 150,
    tags: ["summer", "garden", "outdoor", "rustic", "elegant"],
    vendors: {
      photography: {
        name: "Sarah Johnson Photography",
        url: "https://sarahjohnsonphoto.com"
      },
      florals: {
        name: "Prairie Blooms",
        url: "https://prairieblooms.com"
      }
    }
  }
]

async function seedSimpleWeddingBlogs() {
  try {
    console.log('🚀 Creating simple wedding blog entries...')
    
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment(ENVIRONMENT)
    
    // First, check and update the content type to make image fields optional
    console.log('📝 Checking content type...')
    try {
      const contentType = await environment.getContentType('weddingBlog')
      
      // Check if images are already optional
      const heroImageField = contentType.fields.find(f => f.id === 'heroImage')
      if (heroImageField && heroImageField.required) {
        console.log('📝 Updating content type to make images optional...')
        
        // Make image fields optional
        const fields = contentType.fields
        fields.forEach(field => {
          if (field.id === 'heroImage' || field.id === 'coverImage' || field.id === 'featuredImage' || field.id === 'photos') {
            field.required = false
          }
        })
        
        // Unpublish first if published
        if (contentType.sys.publishedVersion) {
          await contentType.unpublish()
        }
        
        await contentType.update()
        await contentType.publish()
        console.log('✅ Content type updated')
      } else {
        console.log('✅ Content type already configured')
      }
    } catch (error) {
      console.log('⚠️  Could not update content type:', error.message)
      console.log('   Proceeding with entry creation...')
    }
    
    // Create wedding blog entries without images
    for (const wedding of sampleWeddings) {
      try {
        // Check if entry already exists
        const existingEntries = await environment.getEntries({
          content_type: 'weddingBlog',
          'fields.slug': wedding.slug
        })
        
        if (existingEntries.items.length > 0) {
          console.log(`⚠️  Wedding blog "${wedding.title}" already exists, skipping...`)
          continue
        }
        
        // Create the entry without images
        const entry = await environment.createEntry('weddingBlog', {
          fields: {
            title: { 'en-US': wedding.title },
            slug: { 'en-US': wedding.slug },
            coupleName: { 'en-US': wedding.coupleName },
            weddingDate: { 'en-US': wedding.weddingDate },
            publishedDate: { 'en-US': wedding.publishedDate },
            location: { 'en-US': wedding.location },
            season: { 'en-US': wedding.season },
            featured: { 'en-US': wedding.featured || false },
            introText: { 'en-US': wedding.introText },
            testimonial: wedding.testimonial ? { 'en-US': wedding.testimonial } : undefined,
            photoCredits: wedding.photoCredits ? { 'en-US': wedding.photoCredits } : undefined,
            guestCount: wedding.guestCount ? { 'en-US': wedding.guestCount } : undefined,
            tags: wedding.tags ? { 'en-US': wedding.tags } : undefined,
            vendors: wedding.vendors ? { 'en-US': wedding.vendors } : undefined
          }
        })
        
        // Publish the entry
        await entry.publish()
        console.log(`✅ Created and published: ${wedding.title}`)
        
      } catch (error) {
        console.error(`❌ Error creating wedding blog "${wedding.title}":`, error.message)
      }
    }
    
    console.log('\n✨ Wedding blog seeding complete!')
    console.log('   View at: http://localhost:3000/real-weddings')
    console.log('\n📸 To add images:')
    console.log('   1. Go to Contentful Web App')
    console.log('   2. Navigate to Content > Wedding Blogs')
    console.log('   3. Upload images for each wedding')
    
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

// Run the seeding
seedSimpleWeddingBlogs()