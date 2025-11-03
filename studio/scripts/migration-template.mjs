/**
 * Migration Template - Follow QA-STRATEGY.md guidelines
 * 
 * Purpose: [Describe what this migration does]
 * Source: [Describe source data structure]
 * Target: [Describe target data structure]
 * 
 * This migration is idempotent (safe to run multiple times)
 */

import {createClient} from '@sanity/client'

// Configuration
const DRY_RUN = process.argv.includes('--dry-run')
const VERBOSE = process.argv.includes('--verbose')

// Initialize client
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || 'vicw6cgb',
  dataset: process.env.SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production',
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-07-01',
  useCdn: false
})

// Stats tracking
const stats = {
  documentsProcessed: 0,
  documentsModified: 0,
  documentsSkipped: 0,
  errors: []
}

/**
 * Main migration function
 */
async function migrate() {
  console.log('🔄 Starting migration...')
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`)
  console.log('')
  
  try {
    // 1. Fetch documents to migrate
    console.log('📋 Fetching documents...')
    const documents = await client.fetch(`
      *[_type == "OLD_TYPE"]{
        _id,
        _type,
        // Add fields you need
        ...
      }
    `)
    
    console.log(`Found ${documents.length} documents to process`)
    
    // 2. Process each document
    for (const doc of documents) {
      try {
        stats.documentsProcessed++
        
        if (VERBOSE) {
          console.log(`Processing: ${doc._id}`)
        }
        
        // Check if already migrated (idempotency)
        const existing = await client.fetch(`*[_id == $id][0]`, {id: doc._id})
        if (existing && existing._type === 'NEW_TYPE') {
          stats.documentsSkipped++
          if (VERBOSE) console.log(`  → Already migrated, skipping`)
          continue
        }
        
        // Transform document
        const newDoc = transformDocument(doc)
        
        // Save if not dry run
        if (!DRY_RUN) {
          await client
            .transaction()
            .createOrReplace(newDoc)
            .commit()
        }
        
        stats.documentsModified++
        if (VERBOSE) console.log(`  ✅ Migrated successfully`)
        
      } catch (error) {
        stats.errors.push({
          document: doc._id,
          error: error.message
        })
        console.error(`  ❌ Error processing ${doc._id}:`, error.message)
      }
    }
    
    // 3. Report results
    printSummary()
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

/**
 * Transform document from old structure to new
 */
function transformDocument(doc) {
  // Clean up fields that shouldn't be copied
  const cleaned = { ...doc }
  delete cleaned._rev
  delete cleaned._createdAt
  delete cleaned._updatedAt
  
  // Build new document structure
  const newDoc = {
    _id: doc._id, // Keep same ID for updates
    _type: 'NEW_TYPE',
    
    // Map old fields to new structure
    // Example:
    // title: doc.oldTitle || 'Default Title',
    // content: doc.oldContent?.map(transformContent) || [],
    
    // Add your transformation logic here
  }
  
  return newDoc
}

/**
 * Print migration summary
 */
function printSummary() {
  console.log('')
  console.log('================================')
  console.log('📊 Migration Summary:')
  console.log('================================')
  console.log(`Documents processed: ${stats.documentsProcessed}`)
  console.log(`Documents modified: ${stats.documentsModified}`)
  console.log(`Documents skipped: ${stats.documentsSkipped}`)
  console.log(`Errors: ${stats.errors.length}`)
  
  if (stats.errors.length > 0) {
    console.log('\n❌ Errors encountered:')
    stats.errors.forEach(err => {
      console.log(`  - ${err.document}: ${err.error}`)
    })
  }
  
  if (DRY_RUN) {
    console.log('\n⚠️  This was a DRY RUN - no changes were made')
    console.log('Run without --dry-run to apply changes')
  }
  
  console.log('')
  console.log(stats.errors.length > 0 ? '⚠️  Migration completed with errors' : '✅ Migration completed successfully')
}

// Run migration
migrate().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})