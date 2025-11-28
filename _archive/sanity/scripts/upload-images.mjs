#!/usr/bin/env node

import contentfulManagement from 'contentful-management'
import { readFileSync, createReadStream } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load management token from config
const configPath = join(__dirname, '..', '.contentfulrc.json')
const config = JSON.parse(readFileSync(configPath, 'utf8'))

const client = contentfulManagement.createClient({
  accessToken: config.managementToken
})

// Images to upload (only the key ones used on homepage)
const images = [
  {
    path: 'public/images/venue/barn-interior-ceiling-beams-lighting.jpg',
    title: 'Barn Interior with Ceiling Beams',
    description: 'Beautiful barn interior showing exposed ceiling beams and romantic lighting'
  },
  {
    path: 'public/images/venue/property-field-wildflowers-natural.jpg',
    title: 'Property Field with Wildflowers',
    description: 'Natural field with wildflowers on the Rum River property'
  },
  {
    path: 'public/images/2014/04/Loria-Jason-wedding-2-0026.jpg',
    title: 'Wedding Celebration',
    description: 'Happy couple celebrating at their wedding reception'
  }
]

async function uploadImages() {
  try {
    console.log('📸 Uploading images to Contentful...\n')
    
    const space = await client.getSpace(config.activeSpaceId)
    const environment = await space.getEnvironment('master')
    
    const uploadedAssets = []
    
    for (const image of images) {
      const fullPath = join(__dirname, '..', image.path)
      console.log(`📤 Uploading ${basename(image.path)}...`)
      
      try {
        // Create asset
        const asset = await environment.createAssetFromFiles({
          fields: {
            title: {
              'en-US': image.title
            },
            description: {
              'en-US': image.description
            },
            file: {
              'en-US': {
                contentType: 'image/jpeg',
                fileName: basename(image.path),
                file: createReadStream(fullPath)
              }
            }
          }
        })
        
        // Process and publish the asset
        await asset.processForAllLocales()
        await asset.publish()
        
        console.log(`✅ Uploaded: ${image.title} (ID: ${asset.sys.id})\n`)
        uploadedAssets.push({
          id: asset.sys.id,
          title: image.title,
          path: image.path
        })
        
      } catch (err) {
        console.error(`❌ Failed to upload ${image.path}:`, err.message)
      }
    }
    
    console.log('🎉 Image upload complete!\n')
    console.log('📋 Uploaded assets:')
    uploadedAssets.forEach(asset => {
      console.log(`- ${asset.title}: ${asset.id}`)
    })
    
    // Now update the content entries with these images
    console.log('\n🔗 Linking images to content entries...\n')
    
    // Get current entries
    const entries = await environment.getEntries({
      content_type: 'homePage',
      limit: 1
    })
    
    if (entries.items.length > 0 && uploadedAssets.length >= 3) {
      const homePage = entries.items[0]
      
      // Link experience image
      if (uploadedAssets[2]) {
        homePage.fields.experienceImage = {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: uploadedAssets[2].id
            }
          }
        }
      }
      
      await homePage.update()
      await homePage.publish()
      console.log('✅ Updated HomePage with experience image\n')
    }
    
    // Update feature blocks with images
    const featureBlocks = await environment.getEntries({
      content_type: 'featureBlock'
    })
    
    if (featureBlocks.items.length >= 2 && uploadedAssets.length >= 2) {
      // Update first feature block
      const block1 = featureBlocks.items.find(b => b.fields.number['en-US'] === '01')
      if (block1 && uploadedAssets[0]) {
        block1.fields.image = {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: uploadedAssets[0].id
            }
          }
        }
        await block1.update()
        await block1.publish()
        console.log('✅ Updated Feature Block 01 with image')
      }
      
      // Update second feature block
      const block2 = featureBlocks.items.find(b => b.fields.number['en-US'] === '02')
      if (block2 && uploadedAssets[1]) {
        block2.fields.image = {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: uploadedAssets[1].id
            }
          }
        }
        await block2.update()
        await block2.publish()
        console.log('✅ Updated Feature Block 02 with image')
      }
    }
    
    console.log('\n🎉 All done! Images are now managed through Contentful.')
    console.log('📌 You can now change these images anytime in Contentful Media library.')
    
  } catch (error) {
    console.error('Error uploading images:', error)
    process.exit(1)
  }
}

uploadImages()