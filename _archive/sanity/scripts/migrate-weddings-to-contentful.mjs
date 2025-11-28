#!/usr/bin/env node

import 'dotenv/config'
import contentfulManagement from 'contentful-management'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { realWeddings } from '../src/data/realWeddings.js'

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

const SPACE_ID = process.env.VITE_CONTENTFUL_SPACE_ID || 'qqjgd2e69j47'
const ENVIRONMENT = 'master'

// Function to upload an image asset to Contentful
async function uploadImageAsset(environment, imagePath, title) {
  try {
    // Check if file exists locally
    const fullPath = path.join(process.cwd(), 'public', imagePath)
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Image not found locally: ${imagePath}`)
      return null
    }

    // Create asset from local file
    const fileContent = fs.readFileSync(fullPath)
    const fileName = path.basename(imagePath)
    
    const asset = await environment.createAssetFromFiles({
      fields: {
        title: { 'en-US': title },
        file: {
          'en-US': {
            contentType: 'image/jpeg',
            fileName: fileName,
            file: fileContent
          }
        }
      }
    })
    
    await asset.processForAllLocales()
    
    // Wait for processing to complete
    let attempts = 0
    while (attempts < 10) {
      const checkAsset = await environment.getAsset(asset.sys.id)
      if (checkAsset.fields.file['en-US'].url) {
        break
      }
      await new Promise(resolve => setTimeout(resolve, 1000))
      attempts++
    }
    
    try {
      await asset.publish()
    } catch (publishError) {
      // Asset might already be published or in conflict state
      console.log(`    ⚠️  Could not publish asset, but continuing...`)
    }
    
    return asset
  } catch (error) {
    console.log(`⚠️  Could not upload ${imagePath}: ${error.message}`)
    return null
  }
}

// Function to collect photos from galleries (max 35)
function collectPhotos(galleries, maxPhotos = 35) {
  const allPhotos = []
  
  for (const gallery of galleries) {
    for (const photo of gallery.photos) {
      if (allPhotos.length >= maxPhotos) break
      allPhotos.push(photo)
    }
    if (allPhotos.length >= maxPhotos) break
  }
  
  return allPhotos
}

async function migrateWeddings() {
  try {
    console.log('🚀 Starting wedding migration to Contentful...')
    console.log(`📊 Found ${realWeddings.length} weddings to migrate`)
    
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment(ENVIRONMENT)
    
    // Process each wedding
    for (const wedding of realWeddings) {
      console.log(`\n📸 Processing: ${wedding.coupleName}`)
      
      try {
        // Check if entry already exists
        const existingEntries = await environment.getEntries({
          content_type: 'weddingBlog',
          'fields.slug': wedding.slug
        })
        
        if (existingEntries.items.length > 0) {
          console.log(`⚠️  Wedding "${wedding.coupleName}" already exists, updating...`)
          const entry = existingEntries.items[0]
          
          // Upload images if they're missing
          if (!entry.fields.heroImage) {
            console.log('  📷 Uploading hero image...')
            const heroAsset = await uploadImageAsset(
              environment, 
              wedding.heroImage, 
              `${wedding.coupleName} - Hero Image`
            )
            
            if (heroAsset) {
              entry.fields.heroImage = { 
                'en-US': { sys: { id: heroAsset.sys.id, linkType: 'Asset', type: 'Link' } } 
              }
            }
          }
          
          if (!entry.fields.coverImage) {
            console.log('  📷 Uploading cover image...')
            const coverAsset = await uploadImageAsset(
              environment, 
              wedding.coverImage, 
              `${wedding.coupleName} - Cover Image`
            )
            
            if (coverAsset) {
              entry.fields.coverImage = { 
                'en-US': { sys: { id: coverAsset.sys.id, linkType: 'Asset', type: 'Link' } } 
              }
            }
          }
          
          // Use cover image as featured image if not specified
          if (!entry.fields.featuredImage) {
            console.log('  📷 Using cover as featured image...')
            const featuredAsset = await uploadImageAsset(
              environment, 
              wedding.coverImage || wedding.heroImage, 
              `${wedding.coupleName} - Featured Image`
            )
            
            if (featuredAsset) {
              entry.fields.featuredImage = { 
                'en-US': { sys: { id: featuredAsset.sys.id, linkType: 'Asset', type: 'Link' } } 
              }
            }
          }
          
          // Upload gallery photos if missing
          if (!entry.fields.photos || entry.fields.photos['en-US'].length === 0) {
            console.log('  📷 Uploading gallery photos (max 35)...')
            const photos = collectPhotos(wedding.galleries)
            const photoAssets = []
            
            for (let i = 0; i < photos.length; i++) {
              process.stdout.write(`\r    Uploading photo ${i + 1}/${photos.length}...`)
              const photoAsset = await uploadImageAsset(
                environment,
                photos[i].src,
                `${wedding.coupleName} - ${photos[i].alt || `Photo ${i + 1}`}`
              )
              
              if (photoAsset) {
                photoAssets.push({ sys: { id: photoAsset.sys.id, linkType: 'Asset', type: 'Link' } })
              }
            }
            console.log('')
            
            if (photoAssets.length > 0) {
              entry.fields.photos = { 'en-US': photoAssets }
            }
          }
          
          // Update and publish
          await entry.update()
          await entry.publish()
          console.log(`✅ Updated: ${wedding.coupleName}`)
          continue
        }
        
        // Create new entry
        console.log(`  📝 Creating new entry...`)
        
        // Upload images
        console.log('  📷 Uploading hero image...')
        const heroAsset = await uploadImageAsset(
          environment, 
          wedding.heroImage, 
          `${wedding.coupleName} - Hero Image`
        )
        
        console.log('  📷 Uploading cover image...')
        const coverAsset = await uploadImageAsset(
          environment, 
          wedding.coverImage, 
          `${wedding.coupleName} - Cover Image`
        )
        
        console.log('  📷 Uploading featured image...')
        const featuredAsset = await uploadImageAsset(
          environment, 
          wedding.coverImage || wedding.heroImage, 
          `${wedding.coupleName} - Featured Image`
        )
        
        // Upload gallery photos (max 35)
        console.log('  📷 Uploading gallery photos (max 35)...')
        const photos = collectPhotos(wedding.galleries)
        const photoAssets = []
        
        for (let i = 0; i < photos.length; i++) {
          process.stdout.write(`\r    Uploading photo ${i + 1}/${photos.length}...`)
          const photoAsset = await uploadImageAsset(
            environment,
            photos[i].src,
            `${wedding.coupleName} - ${photos[i].alt || `Photo ${i + 1}`}`
          )
          
          if (photoAsset) {
            photoAssets.push({ sys: { id: photoAsset.sys.id, linkType: 'Asset', type: 'Link' } })
          }
        }
        console.log('')
        
        // Create entry fields
        const entryFields = {
          title: { 'en-US': `${wedding.coupleName}'s Wedding` },
          slug: { 'en-US': wedding.slug },
          coupleName: { 'en-US': wedding.coupleName },
          weddingDate: { 'en-US': '2024-01-01' }, // Default date since not in data
          publishedDate: { 'en-US': new Date().toISOString().split('T')[0] },
          location: { 'en-US': wedding.location },
          season: { 'en-US': wedding.date },
          introText: { 'en-US': wedding.intro },
          featured: { 'en-US': false }
        }
        
        // Add image references if they were uploaded successfully
        if (heroAsset) {
          entryFields.heroImage = { 
            'en-US': { sys: { id: heroAsset.sys.id, linkType: 'Asset', type: 'Link' } } 
          }
        }
        
        if (coverAsset) {
          entryFields.coverImage = { 
            'en-US': { sys: { id: coverAsset.sys.id, linkType: 'Asset', type: 'Link' } } 
          }
        }
        
        if (featuredAsset) {
          entryFields.featuredImage = { 
            'en-US': { sys: { id: featuredAsset.sys.id, linkType: 'Asset', type: 'Link' } } 
          }
        }
        
        if (photoAssets.length > 0) {
          entryFields.photos = { 'en-US': photoAssets }
        }
        
        // Add photographer credit if available
        if (wedding.photographer) {
          entryFields.photoCredits = { 'en-US': wedding.photographer }
        }
        
        // Create and publish entry
        const entry = await environment.createEntry('weddingBlog', { fields: entryFields })
        await entry.publish()
        
        console.log(`✅ Created: ${wedding.coupleName}`)
        
      } catch (error) {
        console.error(`❌ Error processing "${wedding.coupleName}":`, error.message)
      }
    }
    
    console.log('\n✨ Migration complete!')
    console.log('   View at: http://localhost:3000/real-weddings')
    
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

// Run the migration
migrateWeddings()