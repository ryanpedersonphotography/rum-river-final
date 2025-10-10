#!/usr/bin/env node

// Test script to migrate just one wedding's photos
import contentfulManagement from 'contentful-management'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { realWeddings } from '../src/data/realWeddings.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Contentful configuration
const MANAGEMENT_TOKEN = 'mrx3-UU2GRDcxHOiWyFcAFBu6ZuUyFqZc5GSuwPClpE'
const SPACE_ID = 'qqjgd2e69j47'
const ENVIRONMENT_ID = 'master'

// Initialize Contentful client
const client = contentfulManagement.createClient({
  accessToken: MANAGEMENT_TOKEN
})

// Test with just the first wedding
async function testMigration() {
  try {
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment(ENVIRONMENT_ID)
    
    // Get wedding entries
    const entries = await environment.getEntries({
      content_type: 'weddingBlog',
      limit: 1
    })
    
    if (entries.items.length === 0) {
      console.log('No wedding blogs found in Contentful')
      return
    }
    
    const entry = entries.items[0]
    const wedding = realWeddings.find(w => w.slug === entry.fields.slug['en-US'])
    
    if (!wedding) {
      console.log('No matching local wedding data found')
      return
    }
    
    console.log(`Testing with: ${wedding.coupleName} (${wedding.slug})`)
    
    // Test uploading just the cover image
    if (wedding.coverImage) {
      const fullPath = path.join(__dirname, '..', 'public', wedding.coverImage)
      
      if (fs.existsSync(fullPath)) {
        console.log(`File exists: ${fullPath}`)
        console.log(`File size: ${fs.statSync(fullPath).size} bytes`)
        
        // Create a simple asset
        const file = fs.readFileSync(fullPath)
        
        const asset = await environment.createAssetFromFiles({
          fields: {
            title: {
              'en-US': `${wedding.coupleName} - Test Cover Image`
            },
            file: {
              'en-US': {
                contentType: 'image/jpeg',
                fileName: path.basename(wedding.coverImage),
                file: file
              }
            }
          }
        })
        
        console.log('Asset created:', asset.sys.id)
        
        // Process and publish
        await asset.processForAllLocales()
        
        // Wait for processing
        let processed = false
        let attempts = 0
        while (!processed && attempts < 30) {
          await new Promise(resolve => setTimeout(resolve, 1000))
          const checkAsset = await environment.getAsset(asset.sys.id)
          if (checkAsset.fields.file && checkAsset.fields.file['en-US'] && checkAsset.fields.file['en-US'].url) {
            processed = true
            await checkAsset.publish()
            console.log('Asset published successfully!')
            console.log('URL:', checkAsset.fields.file['en-US'].url)
            
            // Update the entry
            entry.fields.coverImage = {
              'en-US': {
                sys: {
                  type: 'Link',
                  linkType: 'Asset',
                  id: asset.sys.id
                }
              }
            }
            
            const updated = await entry.update()
            await updated.publish()
            console.log('Entry updated with cover image!')
          }
          attempts++
        }
        
        if (!processed) {
          console.log('Asset processing timed out')
        }
      } else {
        console.log('File not found:', fullPath)
      }
    }
    
  } catch (error) {
    console.error('Error:', error)
  }
}

testMigration()