/**
 * Homepage QA Field Check
 * Comprehensive validation of homepage document against schema
 */

import {createClient} from '@sanity/client'

// Colors for terminal output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m'
}

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false
})

// Define expected schema structure
const HOMEPAGE_SCHEMA = {
  required: ['_id', '_type', '_createdAt', '_updatedAt'],
  fields: {
    _id: { type: 'string', expected: 'homepage' },
    _type: { type: 'string', expected: 'homePage' },
    title: { type: 'string', required: false },
    hero: {
      type: 'object',
      fields: {
        scriptAccent: { type: 'string' },
        titleLine1: { type: 'string' },
        titleLine2: { type: 'string' },
        description: { type: 'string' },
        ctaText: { type: 'string' },
        ctaLink: { type: 'string' },
        scrollText: { type: 'string' },
        backgroundImage: { type: 'object' },
        showFloatingCta: { type: 'boolean' },
        floatingCtaText: { type: 'string' },
        floatingCtaIcon: { type: 'string' }
      }
    },
    venueDiscovery: {
      type: 'object',
      fields: {
        title: { type: 'string' },
        subtitle: { type: 'string' },
        description: { type: 'string' },
        sectionClassName: { type: 'string' }
      }
    },
    featureBlocks: {
      type: 'object',
      fields: {
        title: { type: 'string' },
        scriptAccent: { type: 'string' },
        lead: { type: 'string' },
        blocks: { type: 'array' },
        sectionStyle: { type: 'string' },
        centerContent: { type: 'boolean' }
      }
    },
    loveStories: {
      type: 'object',
      fields: {
        title: { type: 'string' },
        scriptAccent: { type: 'string' },
        lead: { type: 'string' },
        galleryType: { type: 'string' },
        limit: { type: 'number' },
        ctaText: { type: 'string' },
        ctaLink: { type: 'string' },
        sectionClassName: { type: 'string' }
      }
    },
    experience: {
      type: 'object',
      fields: {
        title: { type: 'string' },
        scriptAccent: { type: 'string' },
        description: { type: 'string' },
        features: { type: 'array' },
        image: { type: 'object' },
        imageAlt: { type: 'string' },
        layout: { type: 'string' },
        sectionStyle: { type: 'string' }
      }
    },
    testimonials: {
      type: 'object',
      fields: {
        title: { type: 'string' },
        scriptAccent: { type: 'string' },
        testimonialsType: { type: 'string' },
        inlineTestimonials: { type: 'array' },
        sectionClassName: { type: 'string' }
      }
    },
    scheduleTour: {
      type: 'object',
      fields: {
        title: { type: 'string' },
        subtitle: { type: 'string' },
        description: { type: 'string' },
        formType: { type: 'string' },
        formName: { type: 'string' },
        submitText: { type: 'string' },
        loadingText: { type: 'string' },
        redirectPath: { type: 'string' },
        showHeader: { type: 'boolean' },
        lightTheme: { type: 'boolean' }
      }
    },
    seo: {
      type: 'object',
      fields: {
        metaTitle: { type: 'string' },
        metaDescription: { type: 'string' },
        keywords: { type: 'array' },
        openGraphImage: { type: 'object' },
        noIndex: { type: 'boolean' }
      }
    }
  }
}

// Allowed top-level keys
const ALLOWED_KEYS = new Set([
  '_id', '_type', '_rev', '_createdAt', '_updatedAt',
  'title', 'hero', 'venueDiscovery', 'featureBlocks',
  'loveStories', 'experience', 'testimonials', 'scheduleTour', 'seo'
])

async function runQA() {
  console.log(`${colors.blue}🔍 Homepage QA Field Check${colors.reset}`)
  console.log('='.repeat(50))
  
  const report = {
    passed: [],
    warnings: [],
    errors: [],
    unknownFields: [],
    missingFields: [],
    typeErrors: []
  }

  try {
    // Fetch homepage document
    console.log(`\n${colors.cyan}📋 Fetching homepage document...${colors.reset}`)
    const homepage = await client.fetch('*[_id == "homepage"][0]')
    
    if (!homepage) {
      report.errors.push('Homepage document not found!')
      printReport(report)
      return
    }

    console.log(`${colors.green}✓ Homepage found${colors.reset}`)
    console.log(`  Type: ${homepage._type}`)
    console.log(`  Created: ${new Date(homepage._createdAt).toLocaleDateString()}`)
    console.log(`  Updated: ${new Date(homepage._updatedAt).toLocaleDateString()}`)

    // 1. Check document type
    console.log(`\n${colors.cyan}📋 Checking document type...${colors.reset}`)
    if (homepage._type !== 'homePage') {
      report.errors.push(`Invalid document type: "${homepage._type}" (expected "homePage")`)
    } else {
      report.passed.push('Document type is correct')
    }

    // 2. Check for unknown top-level fields
    console.log(`\n${colors.cyan}📋 Checking for unknown fields...${colors.reset}`)
    const documentKeys = Object.keys(homepage)
    const unknownKeys = documentKeys.filter(key => !ALLOWED_KEYS.has(key))
    
    if (unknownKeys.length > 0) {
      unknownKeys.forEach(key => {
        report.unknownFields.push(key)
        console.log(`  ${colors.yellow}⚠ Unknown field: ${key}${colors.reset}`)
      })
    } else {
      report.passed.push('No unknown fields found')
    }

    // 3. Validate each section
    console.log(`\n${colors.cyan}📋 Validating content sections...${colors.reset}`)
    
    // Hero section
    validateSection('hero', homepage.hero, HOMEPAGE_SCHEMA.fields.hero, report)
    
    // Venue Discovery
    validateSection('venueDiscovery', homepage.venueDiscovery, HOMEPAGE_SCHEMA.fields.venueDiscovery, report)
    
    // Feature Blocks
    validateSection('featureBlocks', homepage.featureBlocks, HOMEPAGE_SCHEMA.fields.featureBlocks, report)
    
    // Love Stories
    validateSection('loveStories', homepage.loveStories, HOMEPAGE_SCHEMA.fields.loveStories, report)
    
    // Experience
    validateSection('experience', homepage.experience, HOMEPAGE_SCHEMA.fields.experience, report)
    
    // Testimonials
    validateSection('testimonials', homepage.testimonials, HOMEPAGE_SCHEMA.fields.testimonials, report)
    
    // Schedule Tour
    validateSection('scheduleTour', homepage.scheduleTour, HOMEPAGE_SCHEMA.fields.scheduleTour, report)
    
    // SEO
    validateSection('seo', homepage.seo, HOMEPAGE_SCHEMA.fields.seo, report)

    // 4. Check references
    console.log(`\n${colors.cyan}📋 Checking references...${colors.reset}`)
    await checkReferences(homepage, report)

    // 5. Check images
    console.log(`\n${colors.cyan}📋 Checking images...${colors.reset}`)
    await checkImages(homepage, report)

  } catch (error) {
    report.errors.push(`QA Check failed: ${error.message}`)
  }

  // Print final report
  printReport(report)
}

function validateSection(name, data, schema, report) {
  console.log(`  Validating ${name}...`)
  
  if (!data && schema.required) {
    report.missingFields.push(name)
    console.log(`    ${colors.red}✗ Missing required section${colors.reset}`)
    return
  }
  
  if (!data) {
    console.log(`    ${colors.yellow}⚠ Section not present (optional)${colors.reset}`)
    return
  }
  
  // Check field types
  if (schema.type === 'object' && schema.fields) {
    Object.keys(schema.fields).forEach(fieldName => {
      const fieldSchema = schema.fields[fieldName]
      const fieldValue = data[fieldName]
      
      if (fieldValue !== undefined && fieldValue !== null) {
        const actualType = Array.isArray(fieldValue) ? 'array' : typeof fieldValue
        if (actualType !== fieldSchema.type) {
          report.typeErrors.push(`${name}.${fieldName}: expected ${fieldSchema.type}, got ${actualType}`)
        }
      }
    })
    
    // Check for unexpected fields in this section
    const expectedFields = new Set(Object.keys(schema.fields))
    Object.keys(data).forEach(key => {
      if (!key.startsWith('_') && !expectedFields.has(key)) {
        report.warnings.push(`${name}.${key}: unexpected field in section`)
      }
    })
  }
  
  console.log(`    ${colors.green}✓ Section validated${colors.reset}`)
  report.passed.push(`${name} section validated`)
}

async function checkReferences(homepage, report) {
  // Check feature block references
  if (homepage.featureBlocks?.blocks) {
    for (const block of homepage.featureBlocks.blocks) {
      if (block._ref) {
        const exists = await client.fetch(`*[_id == $id][0]._id`, { id: block._ref })
        if (!exists) {
          report.errors.push(`Missing reference: featureBlock ${block._ref}`)
        } else {
          report.passed.push(`Reference valid: ${block._ref}`)
        }
      }
    }
  }
  
  // Check experience feature references
  if (homepage.experience?.features) {
    for (const feature of homepage.experience.features) {
      if (feature._ref) {
        const exists = await client.fetch(`*[_id == $id][0]._id`, { id: feature._ref })
        if (!exists) {
          report.errors.push(`Missing reference: experienceFeature ${feature._ref}`)
        } else {
          report.passed.push(`Reference valid: ${feature._ref}`)
        }
      }
    }
  }
}

async function checkImages(homepage, report) {
  // Check hero background image
  if (homepage.hero?.backgroundImage?.asset?._ref) {
    const asset = await client.fetch(`*[_id == $id][0]`, { id: homepage.hero.backgroundImage.asset._ref })
    if (!asset) {
      report.errors.push('Hero background image asset not found')
    } else {
      report.passed.push('Hero background image valid')
    }
  }
  
  // Check experience image
  if (homepage.experience?.image?.asset?._ref) {
    const asset = await client.fetch(`*[_id == $id][0]`, { id: homepage.experience.image.asset._ref })
    if (!asset) {
      report.errors.push('Experience section image asset not found')
    } else {
      report.passed.push('Experience image valid')
    }
  }
}

function printReport(report) {
  console.log(`\n${colors.blue}${'='.repeat(50)}${colors.reset}`)
  console.log(`${colors.blue}📊 QA Report Summary${colors.reset}`)
  console.log(`${colors.blue}${'='.repeat(50)}${colors.reset}\n`)
  
  // Passed checks
  if (report.passed.length > 0) {
    console.log(`${colors.green}✅ Passed (${report.passed.length})${colors.reset}`)
    report.passed.forEach(item => console.log(`  ✓ ${item}`))
  }
  
  // Warnings
  if (report.warnings.length > 0) {
    console.log(`\n${colors.yellow}⚠️  Warnings (${report.warnings.length})${colors.reset}`)
    report.warnings.forEach(item => console.log(`  ⚠ ${item}`))
  }
  
  // Errors
  if (report.errors.length > 0) {
    console.log(`\n${colors.red}❌ Errors (${report.errors.length})${colors.reset}`)
    report.errors.forEach(item => console.log(`  ✗ ${item}`))
  }
  
  // Unknown fields
  if (report.unknownFields.length > 0) {
    console.log(`\n${colors.yellow}🔍 Unknown Fields (${report.unknownFields.length})${colors.reset}`)
    report.unknownFields.forEach(item => console.log(`  • ${item}`))
  }
  
  // Missing fields
  if (report.missingFields.length > 0) {
    console.log(`\n${colors.red}📋 Missing Required Fields (${report.missingFields.length})${colors.reset}`)
    report.missingFields.forEach(item => console.log(`  • ${item}`))
  }
  
  // Type errors
  if (report.typeErrors.length > 0) {
    console.log(`\n${colors.red}⚡ Type Errors (${report.typeErrors.length})${colors.reset}`)
    report.typeErrors.forEach(item => console.log(`  • ${item}`))
  }
  
  // Final status
  console.log(`\n${colors.blue}${'='.repeat(50)}${colors.reset}`)
  const hasErrors = report.errors.length > 0 || report.missingFields.length > 0 || report.typeErrors.length > 0
  const hasWarnings = report.warnings.length > 0 || report.unknownFields.length > 0
  
  if (hasErrors) {
    console.log(`${colors.red}❌ QA Check Failed - ${report.errors.length + report.missingFields.length + report.typeErrors.length} errors found${colors.reset}`)
  } else if (hasWarnings) {
    console.log(`${colors.yellow}⚠️  QA Check Passed with ${report.warnings.length + report.unknownFields.length} warnings${colors.reset}`)
  } else {
    console.log(`${colors.green}✅ QA Check Passed - Homepage is fully valid!${colors.reset}`)
  }
  console.log(`${colors.blue}${'='.repeat(50)}${colors.reset}\n`)
}

// Run QA check
runQA().catch(err => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, err)
  process.exit(1)
})