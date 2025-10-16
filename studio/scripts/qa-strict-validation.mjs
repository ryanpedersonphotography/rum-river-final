#!/usr/bin/env node
/**
 * Strict Field Validation QA Script
 * Enforces schema strictness by detecting any fields not defined in schemas
 * This catches issues that 'sanity documents validate' misses
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import { resolve } from 'path'
import chalk from 'chalk'

dotenv.config({ path: resolve(process.cwd(), '.env') })

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'vicw6cgb',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

// Comprehensive field definitions for ALL schemas
const STRICT_SCHEMAS = {
  // Page types
  homePage: {
    required: ['_type', 'title'],
    allowed: new Set([
      '_id', '_type', '_rev', '_createdAt', '_updatedAt',
      'title', 'hero', 'venueDiscovery', 'featureBlocks',
      'loveStories', 'experience', 'testimonials', 'scheduleTour', 'seo'
    ])
  },
  
  eventsPage: {
    required: ['_type', 'title'],
    allowed: new Set([
      '_id', '_type', '_rev', '_createdAt', '_updatedAt',
      'title', 'hero', 'overview', 'weddingShowcase', 'eventTypes',
      'testimonials', 'scheduleTour', 'seo'
    ])
  },
  
  propertyPage: {
    required: ['_type', 'title'],
    allowed: new Set([
      '_id', '_type', '_rev', '_createdAt', '_updatedAt',
      'title', 'hero', 'overview', 'venueSpaces', 'amenities',
      'virtualTour', 'scheduleTour', 'seo'
    ])
  },
  
  // Block types
  venueDiscoveryBlock: {
    required: ['_type'],
    allowed: new Set([
      '_type', '_key',
      'scriptAccent', 'title', 'description', 'sectionStyle', 'venues'
    ])
  },
  
  heroBlock: {
    required: ['_type'],
    allowed: new Set([
      '_type', '_key',
      'overline', 'headline', 'subheadline', 'description',
      'buttons', 'backgroundImage', 'backgroundVideo', 'style'
    ])
  },
  
  featureBlock: {
    required: ['_type'],
    allowed: new Set([
      '_type', '_key',
      'scriptAccent', 'title', 'description', 'features',
      'sectionStyle', 'layout'
    ])
  },
  
  // Content types
  blogPost: {
    required: ['_type', 'title', 'slug'],
    allowed: new Set([
      '_id', '_type', '_rev', '_createdAt', '_updatedAt',
      'title', 'slug', 'author', 'categories', 'publishedAt',
      'mainImage', 'excerpt', 'body', 'seo'
    ])
  },
  
  realWedding: {
    required: ['_type', 'coupleName'],
    allowed: new Set([
      '_id', '_type', '_rev', '_createdAt', '_updatedAt',
      'coupleName', 'weddingDate', 'season', 'theme',
      'photographerName', 'photographerUrl', 'featuredImage',
      'galleryImages', 'story', 'highlights', 'vendorCredits'
    ])
  },
  
  venue: {
    required: ['_type', 'name'],
    allowed: new Set([
      '_id', '_type', '_rev', '_createdAt', '_updatedAt',
      'name', 'slug', 'description', 'capacity', 'features',
      'images', 'virtualTourUrl'
    ])
  },
  
  testimonial: {
    required: ['_type', 'author', 'content'],
    allowed: new Set([
      '_id', '_type', '_rev', '_createdAt', '_updatedAt',
      'author', 'role', 'content', 'rating', 'featured',
      'weddingDate', 'image'
    ])
  },
  
  preferredVendor: {
    required: ['_type', 'businessName', 'category'],
    allowed: new Set([
      '_id', '_type', '_rev', '_createdAt', '_updatedAt',
      'businessName', 'category', 'contactName', 'email',
      'phone', 'website', 'description', 'logo', 'featured'
    ])
  },
  
  siteSettings: {
    required: ['_type'],
    allowed: new Set([
      '_id', '_type', '_rev', '_createdAt', '_updatedAt',
      'title', 'description', 'logo', 'socialMedia',
      'contactInfo', 'businessHours', 'defaultSeo'
    ])
  }
}

function validateDocument(doc, path = '') {
  const errors = []
  const warnings = []
  
  // Skip draft documents
  if (doc._id && doc._id.startsWith('drafts.')) {
    return { errors, warnings }
  }
  
  const schema = STRICT_SCHEMAS[doc._type]
  if (!schema) {
    // Only warn for unknown types at root level
    if (!path) {
      warnings.push({
        path: path || doc._id,
        message: `Unknown document type: ${doc._type}`
      })
    }
    return { errors, warnings }
  }
  
  // Check required fields
  for (const field of schema.required) {
    if (!doc[field]) {
      errors.push({
        path: path || doc._id,
        field,
        message: `Required field missing: ${field}`
      })
    }
  }
  
  // Check for unknown fields
  const docKeys = Object.keys(doc)
  const unknownFields = docKeys.filter(key => !schema.allowed.has(key))
  
  if (unknownFields.length > 0) {
    errors.push({
      path: path || doc._id,
      fields: unknownFields,
      message: `Unknown fields found: ${unknownFields.join(', ')}`
    })
  }
  
  // Recursively validate nested objects and arrays
  for (const [key, value] of Object.entries(doc)) {
    if (value && typeof value === 'object' && !Array.isArray(value) && value._type) {
      const nestedPath = path ? `${path}.${key}` : key
      const nestedResult = validateDocument(value, nestedPath)
      errors.push(...nestedResult.errors)
      warnings.push(...nestedResult.warnings)
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (item && typeof item === 'object' && item._type) {
          const nestedPath = path ? `${path}.${key}[${index}]` : `${key}[${index}]`
          const nestedResult = validateDocument(item, nestedPath)
          errors.push(...nestedResult.errors)
          warnings.push(...nestedResult.warnings)
        }
      })
    }
  }
  
  return { errors, warnings }
}

async function runStrictValidation() {
  console.log(chalk.blue.bold('\n🔍 Running Strict Field Validation\n'))
  
  try {
    // Fetch all documents
    const documents = await client.fetch(`*[!(_id in path("drafts.**"))]`)
    console.log(chalk.cyan(`Validating ${documents.length} documents...\n`))
    
    let totalErrors = 0
    let totalWarnings = 0
    const documentErrors = new Map()
    
    for (const doc of documents) {
      const { errors, warnings } = validateDocument(doc)
      
      if (errors.length > 0 || warnings.length > 0) {
        documentErrors.set(doc._id, { errors, warnings })
        totalErrors += errors.length
        totalWarnings += warnings.length
      }
    }
    
    // Report results
    if (documentErrors.size === 0) {
      console.log(chalk.green('✅ All documents pass strict validation!\n'))
      return true
    }
    
    console.log(chalk.red.bold(`❌ Validation Failed\n`))
    console.log(chalk.yellow(`Found ${totalErrors} errors and ${totalWarnings} warnings in ${documentErrors.size} documents:\n`))
    
    for (const [docId, { errors, warnings }] of documentErrors) {
      console.log(chalk.bold(`\n📄 Document: ${docId}`))
      
      if (errors.length > 0) {
        console.log(chalk.red('  Errors:'))
        for (const error of errors) {
          console.log(`    • ${error.message}`)
          if (error.fields) {
            console.log(chalk.gray(`      Fields: ${error.fields.join(', ')}`))
          }
        }
      }
      
      if (warnings.length > 0) {
        console.log(chalk.yellow('  Warnings:'))
        for (const warning of warnings) {
          console.log(`    • ${warning.message}`)
        }
      }
    }
    
    console.log(chalk.bold('\n📊 Summary:'))
    console.log(`  • Total Errors: ${chalk.red(totalErrors)}`)
    console.log(`  • Total Warnings: ${chalk.yellow(totalWarnings)}`)
    console.log(`  • Affected Documents: ${chalk.magenta(documentErrors.size)}`)
    
    console.log(chalk.gray('\nRun cleanup-unknown-fields.mjs --execute to fix these issues'))
    
    return false
  } catch (error) {
    console.error(chalk.red('Error running validation:'), error)
    return false
  }
}

// Run validation and exit with appropriate code
runStrictValidation().then(success => {
  process.exit(success ? 0 : 1)
}).catch(err => {
  console.error(chalk.red('Fatal error:'), err)
  process.exit(1)
})