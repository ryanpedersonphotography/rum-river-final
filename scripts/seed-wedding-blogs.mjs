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

// Sample wedding data (limited for demo)
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
    introText: "From the ceremony to the last dance, Anthony & Linnea's wedding was a perfect blend of elegance and rustic charm. Golden hour portraits, garden blooms, and heartfelt moments made this summer celebration truly unforgettable.",
    storyContent: {
      nodeType: 'document',
      content: [
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              value: "Anthony and Linnea's love story came full circle at the Rum River Barn on a beautiful July afternoon. Surrounded by 150 of their closest friends and family, they exchanged vows under our century-old oak tree.",
              marks: []
            }
          ]
        },
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              value: "The reception featured locally-sourced cuisine, handcrafted cocktails named after the couple's pets, and dancing until midnight under the stars. Every detail reflected their personalities - from the wildflower centerpieces to the surprise fireworks display.",
              marks: []
            }
          ]
        }
      ]
    },
    testimonial: "The Rum River Barn team made our wedding day absolutely perfect. From the stunning venue to the incredible coordination, everything exceeded our expectations. We couldn't have asked for a more magical day!",
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
      },
      catering: {
        name: "Fable Farm Kitchen",
        url: "https://fablefarmkitchen.com"
      },
      music: {
        name: "DJ Minnesota",
        url: "https://djminnesota.com"
      },
      planning: {
        name: "Elegant Events MN",
        url: "https://elegantevents.mn"
      }
    },
    seoTitle: "Anthony & Linnea's Summer Wedding at Rum River Barn",
    seoDescription: "See photos from Anthony and Linnea's romantic summer garden wedding at Rum River Barn in Hillman, Minnesota. 150 guests celebrated under the stars."
  },
  {
    title: "Sarah & Michael's Fall Barn Wedding",
    slug: "sarah-michael-fall-2024",
    coupleName: "Sarah & Michael",
    weddingDate: "2024-10-12",
    publishedDate: "2024-11-01",
    location: "Rum River Barn • Hillman, Minnesota",
    season: "Fall 2024",
    featured: true,
    introText: "Autumn colors and cozy barn vibes made Sarah & Michael's October wedding a stunning celebration. With golden leaves, warm candlelight, and heartfelt moments, their day was pure magic.",
    testimonial: "From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.",
    photoCredits: "Moments in Time Photography",
    guestCount: 120,
    tags: ["fall", "autumn", "rustic", "barn", "candlelit"],
    vendors: {
      photography: {
        name: "Moments in Time Photography",
        url: "https://momentsintimephoto.com"
      }
    }
  }
]

async function seedWeddingBlogs() {
  try {
    console.log('🚀 Starting wedding blog seed process...')
    
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment(ENVIRONMENT)
    
    // Check if content type exists
    try {
      await environment.getContentType('weddingBlog')
      console.log('✅ WeddingBlog content type found')
    } catch (error) {
      console.error('❌ WeddingBlog content type not found. Run migrations first:')
      console.log('   npx contentful space migration migrations/06-create-wedding-blog.cjs')
      process.exit(1)
    }
    
    // Create sample assets using existing images from the site
    console.log('📸 Creating wedding blog entries with existing site images...')
    
    // Create wedding blog entries
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
        
        // First create placeholder assets for images
        const heroAsset = await environment.createAssetFromFiles({
          fields: {
            title: { 'en-US': `${wedding.coupleName} - Hero Image` },
            file: {
              'en-US': {
                contentType: 'image/jpeg',
                fileName: 'hero.jpg',
                upload: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600'
              }
            }
          }
        })
        await heroAsset.processForAllLocales()
        await heroAsset.publish()
        
        const coverAsset = await environment.createAssetFromFiles({
          fields: {
            title: { 'en-US': `${wedding.coupleName} - Cover Image` },
            file: {
              'en-US': {
                contentType: 'image/jpeg',
                fileName: 'cover.jpg',
                upload: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800'
              }
            }
          }
        })
        await coverAsset.processForAllLocales()
        await coverAsset.publish()
        
        const featuredAsset = await environment.createAssetFromFiles({
          fields: {
            title: { 'en-US': `${wedding.coupleName} - Featured Image` },
            file: {
              'en-US': {
                contentType: 'image/jpeg',
                fileName: 'featured.jpg',
                upload: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200'
              }
            }
          }
        })
        await featuredAsset.processForAllLocales()
        await featuredAsset.publish()
        
        // Create sample photo gallery
        const photoAssets = []
        const samplePhotos = [
          'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800',
          'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800',
          'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
          'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800',
          'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800'
        ]
        
        for (let i = 0; i < 5; i++) {
          const photoAsset = await environment.createAssetFromFiles({
            fields: {
              title: { 'en-US': `${wedding.coupleName} - Photo ${i + 1}` },
              file: {
                'en-US': {
                  contentType: 'image/jpeg',
                  fileName: `photo-${i + 1}.jpg`,
                  upload: samplePhotos[i]
                }
              }
            }
          })
          await photoAsset.processForAllLocales()
          await photoAsset.publish()
          photoAssets.push({ sys: { id: photoAsset.sys.id, linkType: 'Asset', type: 'Link' } })
        }
        
        // Create the entry with linked assets
        const entry = await environment.createEntry('weddingBlog', {
          fields: {
            title: { 'en-US': wedding.title },
            slug: { 'en-US': wedding.slug },
            coupleName: { 'en-US': wedding.coupleName },
            weddingDate: { 'en-US': wedding.weddingDate },
            publishedDate: { 'en-US': wedding.publishedDate },
            heroImage: { 'en-US': { sys: { id: heroAsset.sys.id, linkType: 'Asset', type: 'Link' } } },
            coverImage: { 'en-US': { sys: { id: coverAsset.sys.id, linkType: 'Asset', type: 'Link' } } },
            featuredImage: { 'en-US': { sys: { id: featuredAsset.sys.id, linkType: 'Asset', type: 'Link' } } },
            photos: { 'en-US': photoAssets },
            location: { 'en-US': wedding.location },
            season: { 'en-US': wedding.season },
            featured: { 'en-US': wedding.featured || false },
            introText: { 'en-US': wedding.introText },
            storyContent: wedding.storyContent ? { 'en-US': wedding.storyContent } : undefined,
            testimonial: wedding.testimonial ? { 'en-US': wedding.testimonial } : undefined,
            photoCredits: wedding.photoCredits ? { 'en-US': wedding.photoCredits } : undefined,
            guestCount: wedding.guestCount ? { 'en-US': wedding.guestCount } : undefined,
            tags: wedding.tags ? { 'en-US': wedding.tags } : undefined,
            vendors: wedding.vendors ? { 'en-US': wedding.vendors } : undefined,
            seoTitle: wedding.seoTitle ? { 'en-US': wedding.seoTitle } : undefined,
            seoDescription: wedding.seoDescription ? { 'en-US': wedding.seoDescription } : undefined
          }
        })
        
        // Publish the entry
        await entry.publish()
        console.log(`✅ Created and published: ${wedding.title}`)
        
      } catch (error) {
        console.error(`❌ Error creating wedding blog "${wedding.title}":`, error.message)
      }
    }
    
    console.log('\n📝 Note: Sample wedding blogs created with placeholder images.')
    console.log('   To update with real photos:')
    console.log('   1. Go to Contentful and replace the placeholder images')
    console.log('   2. Upload actual wedding photos as Assets')
    console.log('   3. Update the hero, cover, featured, and gallery images')
    
    console.log('\n✨ Wedding blog seeding complete!')
    console.log('   View at: http://localhost:3000/real-weddings')
    
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

// Run the seeding
seedWeddingBlogs()