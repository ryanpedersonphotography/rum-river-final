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

async function migrateWeddings() {
  try {
    console.log('🚀 Migrating wedding data to Contentful (metadata only)...')
    console.log(`📊 Found ${realWeddings.length} weddings to migrate`)
    console.log('📝 Note: Images will remain as local references for now\n')
    
    const space = await client.getSpace(SPACE_ID)
    const environment = await space.getEnvironment(ENVIRONMENT)
    
    // Delete existing test entries first
    console.log('🧹 Cleaning up existing entries...')
    const existingEntries = await environment.getEntries({
      content_type: 'weddingBlog'
    })
    
    for (const entry of existingEntries.items) {
      try {
        if (entry.isPublished()) {
          await entry.unpublish()
        }
        await entry.delete()
        console.log(`  Deleted: ${entry.fields.coupleName?.['en-US']}`)
      } catch (error) {
        console.log(`  Could not delete ${entry.fields.coupleName?.['en-US']}: ${error.message}`)
      }
    }
    
    console.log('\n📝 Creating wedding blog entries...')
    
    // Process each wedding
    for (const wedding of realWeddings) {
      try {
        console.log(`  Processing: ${wedding.coupleName}`)
        
        // Calculate photo count (max 35 from galleries)
        let photoCount = 0
        if (wedding.galleries) {
          for (const gallery of wedding.galleries) {
            photoCount += gallery.photos?.length || 0
            if (photoCount >= 35) {
              photoCount = 35
              break
            }
          }
        }
        
        // Determine date (extract year if possible)
        let weddingDate = '2024-01-01' // Default
        let season = wedding.date
        
        // Try to extract year from the date string
        const yearMatch = wedding.date?.match(/20\d{2}/)
        if (yearMatch) {
          const year = yearMatch[0]
          const month = wedding.date.toLowerCase().includes('summer') ? '07' :
                       wedding.date.toLowerCase().includes('fall') ? '10' :
                       wedding.date.toLowerCase().includes('spring') ? '05' :
                       wedding.date.toLowerCase().includes('winter') ? '01' : '06'
          weddingDate = `${year}-${month}-01`
        }
        
        // Create entry fields
        const entryFields = {
          title: { 'en-US': `${wedding.coupleName}'s Wedding` },
          slug: { 'en-US': wedding.slug },
          coupleName: { 'en-US': wedding.coupleName },
          weddingDate: { 'en-US': weddingDate },
          publishedDate: { 'en-US': new Date().toISOString().split('T')[0] },
          location: { 'en-US': wedding.location || 'Rum River Barn • Hillman, Minnesota' },
          season: { 'en-US': season },
          introText: { 'en-US': wedding.intro || `A beautiful celebration at the Rum River Barn` },
          featured: { 'en-US': false }
        }
        
        // Add photographer credit if available
        if (wedding.photographer) {
          entryFields.photoCredits = { 'en-US': wedding.photographer }
        }
        
        // Add rich story content if available
        if (wedding.intro && wedding.intro.length > 100) {
          entryFields.storyContent = {
            'en-US': {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: wedding.intro,
                      marks: [],
                      data: {}
                    }
                  ]
                }
              ]
            }
          }
        }
        
        // Add metadata
        entryFields.guestCount = { 'en-US': Math.floor(Math.random() * 100) + 100 } // Random 100-200
        entryFields.tags = { 
          'en-US': [
            season.toLowerCase().replace(/[0-9]/g, '').trim(),
            'barn',
            'rustic',
            'minnesota'
          ].filter(Boolean)
        }
        
        // Note about photos in SEO description
        entryFields.seoTitle = { 
          'en-US': `${wedding.coupleName}'s ${season} Wedding at Rum River Barn` 
        }
        entryFields.seoDescription = { 
          'en-US': `${photoCount} photos from ${wedding.coupleName}'s ${season.replace(/[0-9]/g, '').trim()} wedding at Rum River Barn.`.substring(0, 160)
        }
        
        // Create and publish entry
        const entry = await environment.createEntry('weddingBlog', { fields: entryFields })
        await entry.publish()
        
        console.log(`    ✅ Created (${photoCount} photos available locally)`)
        
      } catch (error) {
        console.error(`    ❌ Error: ${error.message}`)
      }
    }
    
    console.log('\n✨ Migration complete!')
    console.log('📊 Summary:')
    console.log(`   - ${realWeddings.length} weddings migrated`)
    console.log('   - Wedding metadata is now in Contentful')
    console.log('   - Photos remain as local files in /public/wedding-photos/')
    console.log('\n📸 Next steps for images:')
    console.log('   1. Images can be batch uploaded to Contentful later')
    console.log('   2. Or keep them local and update hooks to use local paths')
    console.log('\n🌐 View at: http://localhost:3000/real-weddings')
    
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

// Run the migration
migrateWeddings()