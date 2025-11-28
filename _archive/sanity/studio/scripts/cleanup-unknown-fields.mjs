#!/usr/bin/env node
/**
 * Cleanup Unknown Fields Script
 * Scans all documents for fields not defined in their schemas
 * and removes them to ensure schema strictness
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import { resolve } from 'path'
import chalk from 'chalk'

// Load environment variables
dotenv.config({ path: resolve(process.cwd(), '.env') })

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'vicw6cgb',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

// Define allowed fields for each document type
const SCHEMA_FIELDS = {
  homePage: new Set([
    '_id', '_type', '_rev', '_createdAt', '_updatedAt',
    'title', 'hero', 'venueDiscovery', 'featureBlocks',
    'loveStories', 'experience', 'testimonials', 'scheduleTour', 'seo'
  ]),
  
  eventsPage: new Set([
    '_id', '_type', '_rev', '_createdAt', '_updatedAt',
    'title', 'hero', 'overview', 'weddingShowcase', 'eventTypes', 
    'testimonials', 'scheduleTour', 'seo'
  ]),
  
  propertyPage: new Set([
    '_id', '_type', '_rev', '_createdAt', '_updatedAt',
    'title', 'hero', 'overview', 'venueSpaces', 'amenities',
    'virtualTour', 'scheduleTour', 'seo'
  ]),
  
  galleryPage: new Set([
    '_id', '_type', '_rev', '_createdAt', '_updatedAt',
    'title', 'hero', 'galleryIntro', 'galleries', 'seo'
  ]),
  
  contactPage: new Set([
    '_id', '_type', '_rev', '_createdAt', '_updatedAt',
    'title', 'hero', 'contactInfo', 'contactForm', 'locationMap',
    'faq', 'seo'
  ]),
  
  // Block-level allowed fields
  venueDiscoveryBlock: new Set([
    '_type', '_key',
    'scriptAccent', 'title', 'description', 'sectionStyle', 'venues'
  ]),
  
  heroBlock: new Set([
    '_type', '_key',
    'overline', 'headline', 'subheadline', 'description', 
    'buttons', 'backgroundImage', 'backgroundVideo', 'style'
  ]),
  
  featureBlock: new Set([
    '_type', '_key',
    'scriptAccent', 'title', 'description', 'features',
    'sectionStyle', 'layout'
  ])
}

// Known field mappings (old -> new)
const FIELD_MAPPINGS = {
  venueDiscoveryBlock: {
    'subtitle': 'scriptAccent',
    'sectionClassName': 'sectionStyle'
  }
}

async function scanDocument(doc) {
  const schemaFields = SCHEMA_FIELDS[doc._type]
  if (!schemaFields) {
    console.log(chalk.gray(`⚠️  No schema definition for type: ${doc._type}`))
    return { unknown: [], mapped: [] }
  }
  
  const docKeys = Object.keys(doc)
  const unknown = []
  const mapped = []
  
  for (const key of docKeys) {
    if (!schemaFields.has(key)) {
      // Check if this is a known mapping
      const mappings = FIELD_MAPPINGS[doc._type]
      if (mappings && mappings[key]) {
        mapped.push({ old: key, new: mappings[key], value: doc[key] })
      } else {
        unknown.push(key)
      }
    }
  }
  
  // Recursively scan nested blocks
  for (const [key, value] of Object.entries(doc)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item && typeof item === 'object' && item._type) {
          const nestedResult = await scanDocument(item)
          if (nestedResult.unknown.length || nestedResult.mapped.length) {
            console.log(chalk.gray(`  Nested in ${key}[${item._key || 'no-key'}]:`))
            if (nestedResult.unknown.length) {
              console.log(chalk.yellow(`    Unknown: ${nestedResult.unknown.join(', ')}`))
            }
            if (nestedResult.mapped.length) {
              for (const map of nestedResult.mapped) {
                console.log(chalk.cyan(`    Mapped: ${map.old} → ${map.new}`))
              }
            }
          }
        }
      }
    }
  }
  
  return { unknown, mapped }
}

async function cleanupDocument(docId, patches) {
  if (patches.length === 0) return false
  
  try {
    const transaction = client.transaction()
    
    for (const patch of patches) {
      if (patch.type === 'unset') {
        transaction.patch(docId, p => p.unset([patch.path]))
      } else if (patch.type === 'rename') {
        transaction.patch(docId, p => 
          p.set({ [patch.newPath]: patch.value })
           .unset([patch.oldPath])
        )
      }
    }
    
    await transaction.commit()
    return true
  } catch (error) {
    console.error(chalk.red(`Failed to cleanup ${docId}:`, error.message))
    return false
  }
}

async function main() {
  console.log(chalk.blue.bold('\n🧹 Scanning for Unknown Fields\n'))
  
  const allDocs = await client.fetch(`*[!(_id in path("drafts.**"))]`)
  console.log(chalk.cyan(`Found ${allDocs.length} documents to scan\n`))
  
  let totalUnknown = 0
  let totalMapped = 0
  const cleanupTasks = []
  
  for (const doc of allDocs) {
    const result = await scanDocument(doc)
    
    if (result.unknown.length || result.mapped.length) {
      console.log(chalk.bold(`\n📄 ${doc._type}: ${doc._id}`))
      
      if (result.unknown.length) {
        console.log(chalk.yellow(`  Unknown fields: ${result.unknown.join(', ')}`))
        totalUnknown += result.unknown.length
        
        // Prepare cleanup for unknown fields
        for (const field of result.unknown) {
          cleanupTasks.push({
            docId: doc._id,
            patches: [{ type: 'unset', path: field }]
          })
        }
      }
      
      if (result.mapped.length) {
        for (const map of result.mapped) {
          console.log(chalk.cyan(`  Can map: ${map.old} → ${map.new} (value: "${map.value}")`))
        }
        totalMapped += result.mapped.length
        
        // Prepare cleanup for mapped fields
        const patches = result.mapped.map(map => ({
          type: 'rename',
          oldPath: map.old,
          newPath: map.new,
          value: map.value
        }))
        cleanupTasks.push({ docId: doc._id, patches })
      }
    }
  }
  
  console.log(chalk.bold('\n📊 Summary:'))
  console.log(`  • Total unknown fields: ${chalk.yellow(totalUnknown)}`)
  console.log(`  • Total mappable fields: ${chalk.cyan(totalMapped)}`)
  console.log(`  • Documents needing cleanup: ${chalk.magenta(cleanupTasks.length)}`)
  
  if (cleanupTasks.length > 0) {
    console.log(chalk.bold('\n🔧 Cleanup Actions:'))
    
    const args = process.argv.slice(2)
    const dryRun = !args.includes('--execute')
    
    if (dryRun) {
      console.log(chalk.gray('\n(Dry run - no changes will be made)'))
      console.log(chalk.gray('Run with --execute to apply changes\n'))
      
      for (const task of cleanupTasks) {
        console.log(`\nDocument: ${chalk.bold(task.docId)}`)
        for (const patch of task.patches) {
          if (patch.type === 'unset') {
            console.log(`  ${chalk.red('- Remove:')} ${patch.path}`)
          } else if (patch.type === 'rename') {
            console.log(`  ${chalk.green('↻ Rename:')} ${patch.oldPath} → ${patch.newPath}`)
          }
        }
      }
    } else {
      console.log(chalk.yellow('\nExecuting cleanup...'))
      
      let success = 0
      let failed = 0
      
      for (const task of cleanupTasks) {
        process.stdout.write(`Cleaning ${task.docId}... `)
        const result = await cleanupDocument(task.docId, task.patches)
        if (result) {
          console.log(chalk.green('✓'))
          success++
        } else {
          console.log(chalk.red('✗'))
          failed++
        }
      }
      
      console.log(chalk.bold('\n✨ Cleanup Complete:'))
      console.log(`  • Successful: ${chalk.green(success)}`)
      console.log(`  • Failed: ${chalk.red(failed)}`)
    }
  } else {
    console.log(chalk.green('\n✨ No unknown fields found! Schema is clean.'))
  }
}

main().catch(err => {
  console.error(chalk.red('Error:'), err)
  process.exit(1)
})