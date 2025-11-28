#!/usr/bin/env node

import contentfulManagement from 'contentful-management'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { realWeddings } from '../src/data/realWeddings.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Contentful configuration
const MANAGEMENT_TOKEN = process.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN || 'mrx3-UU2GRDcxHOiWyFcAFBu6ZuUyFqZc5GSuwPClpE'
const SPACE_ID = process.env.VITE_CONTENTFUL_SPACE_ID || 'qqjgd2e69j47'
const ENVIRONMENT_ID = 'master'

// Initialize Contentful client
const client = contentfulManagement.createClient({
  accessToken: MANAGEMENT_TOKEN
})

// Helper function to upload an asset to Contentful
async function uploadAsset(environment, filePath, title, slug) {
  try {
    // Check if file exists
    const fullPath = path.join(__dirname, '..', 'public', filePath)
    if (!fs.existsSync(fullPath)) {
      console.log(`  ⚠️  File not found: ${filePath}`)
      return null
    }

    // Read file
    const file = fs.readFileSync(fullPath)
    const fileName = path.basename(filePath)
    const contentType = 'image/jpeg'

    console.log(`  📤 Uploading: ${fileName}`)

    // Create asset
    const asset = await environment.createAssetFromFiles({
      fields: {
        title: {
          'en-US': title
        },
        description: {
          'en-US': `${slug} - ${title}`
        },
        file: {
          'en-US': {
            contentType: contentType,
            fileName: fileName,
            file: file
          }
        }
      }
    })

    // Process asset
    await asset.processForAllLocales()
    
    // Wait for processing to complete
    let processed = false
    let attempts = 0
    while (!processed && attempts < 30) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const checkAsset = await environment.getAsset(asset.sys.id)
      if (checkAsset.fields.file['en-US'].url) {
        processed = true
        // Publish the asset
        await checkAsset.publish()
        console.log(`  ✅ Uploaded: ${fileName}`)
        return checkAsset
      }
      attempts++
    }

    if (!processed) {
      console.log(`  ⚠️  Processing timeout for: ${fileName}`)
      return null
    }
  } catch (error) {
    console.error(`  ❌ Error uploading ${filePath}:`, error.message)
    return null
  }
}

// Main migration function
async function migratePhotos() {
  try {
    console.log('🚀 Starting photo migration to Contentful...\n')

    // Get space and environment
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment(ENVIRONMENT_ID)

    // Get all wedding entries
    const entries = await environment.getEntries({
      content_type: 'weddingBlog'
    })

    console.log(`Found ${entries.items.length} wedding blogs in Contentful\n`)

    // Process each wedding
    for (const wedding of realWeddings) {
      console.log(`\n📸 Processing: ${wedding.coupleName} (${wedding.slug})`)
      console.log(`   Photos to migrate: ${wedding.photoCount || 0}`)

      // Find corresponding Contentful entry
      const contentfulEntry = entries.items.find(entry => 
        entry.fields.slug && entry.fields.slug['en-US'] === wedding.slug
      )

      if (!contentfulEntry) {
        console.log(`  ⚠️  No Contentful entry found for ${wedding.slug}`)
        continue
      }

      console.log(`  ✅ Found Contentful entry: ${contentfulEntry.sys.id}`)

      const assetReferences = {
        heroImage: null,
        coverImage: null,
        featuredImage: null,
        photos: []
      }

      // Upload hero image
      if (wedding.heroImage) {
        const heroAsset = await uploadAsset(
          environment, 
          wedding.heroImage, 
          `${wedding.coupleName} - Hero Image`,
          wedding.slug
        )
        if (heroAsset) {
          assetReferences.heroImage = {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: heroAsset.sys.id
            }
          }
        }
      }

      // Upload cover image
      if (wedding.coverImage) {
        const coverAsset = await uploadAsset(
          environment,
          wedding.coverImage,
          `${wedding.coupleName} - Cover Image`,
          wedding.slug
        )
        if (coverAsset) {
          assetReferences.coverImage = {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: coverAsset.sys.id
            }
          }
        }
      }

      // Use cover image as featured image if not specified
      const featuredImage = wedding.featuredImage || wedding.coverImage
      if (featuredImage) {
        const featuredAsset = await uploadAsset(
          environment,
          featuredImage,
          `${wedding.coupleName} - Featured Image`,
          wedding.slug
        )
        if (featuredAsset) {
          assetReferences.featuredImage = {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: featuredAsset.sys.id
            }
          }
        }
      }

      // Upload gallery photos (limit to first 35)
      if (wedding.galleries && wedding.galleries.length > 0) {
        const allPhotos = wedding.galleries.flatMap(gallery => gallery.photos)
        const photosToUpload = allPhotos.slice(0, 35)

        console.log(`  📷 Uploading ${photosToUpload.length} gallery photos...`)

        for (let i = 0; i < photosToUpload.length; i++) {
          const photo = photosToUpload[i]
          const photoAsset = await uploadAsset(
            environment,
            photo.src,
            `${wedding.coupleName} - Photo ${i + 1}`,
            wedding.slug
          )
          if (photoAsset) {
            assetReferences.photos.push({
              sys: {
                type: 'Link',
                linkType: 'Asset',
                id: photoAsset.sys.id
              }
            })
          }

          // Add a small delay to avoid rate limiting
          if (i % 5 === 4) {
            console.log(`  ⏸️  Pausing to avoid rate limits...`)
            await new Promise(resolve => setTimeout(resolve, 2000))
          }
        }
      }

      // Update the Contentful entry with asset references
      if (Object.values(assetReferences).some(v => v !== null && (Array.isArray(v) ? v.length > 0 : true))) {
        console.log(`  🔗 Linking ${assetReferences.photos.length} photos to wedding blog...`)
        
        try {
          // Get fresh version of entry
          const freshEntry = await environment.getEntry(contentfulEntry.sys.id)
          
          // Update fields
          if (assetReferences.heroImage) {
            freshEntry.fields.heroImage = { 'en-US': assetReferences.heroImage }
          }
          if (assetReferences.coverImage) {
            freshEntry.fields.coverImage = { 'en-US': assetReferences.coverImage }
          }
          if (assetReferences.featuredImage) {
            freshEntry.fields.featuredImage = { 'en-US': assetReferences.featuredImage }
          }
          if (assetReferences.photos.length > 0) {
            freshEntry.fields.photos = { 'en-US': assetReferences.photos }
          }

          // Update and publish
          const updatedEntry = await freshEntry.update()
          await updatedEntry.publish()
          
          console.log(`  ✅ Successfully linked photos to ${wedding.coupleName}`)
        } catch (error) {
          console.error(`  ❌ Error updating entry:`, error.message)
        }
      }

      // Add delay between weddings
      console.log(`  ⏸️  Waiting before next wedding...`)
      await new Promise(resolve => setTimeout(resolve, 3000))
    }

    console.log('\n✨ Photo migration completed!')
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
console.log('='.repeat(50))
console.log('  CONTENTFUL PHOTO MIGRATION')
console.log('='.repeat(50))
console.log()
console.log('This script will upload all local wedding photos to Contentful.')
console.log('It may take 30-60 minutes to complete.')
console.log()

// Add confirmation prompt
import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Do you want to continue? (y/n): ', (answer) => {
  if (answer.toLowerCase() === 'y') {
    rl.close()
    migratePhotos()
  } else {
    console.log('Migration cancelled.')
    rl.close()
    process.exit(0)
  }
})