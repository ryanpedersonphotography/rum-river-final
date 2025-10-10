#!/usr/bin/env node

/**
 * Contentful Setup Script
 * This script creates the HomePage content type in your Contentful space
 * 
 * Usage: node scripts/contentful-setup.js
 * 
 * Make sure you have .contentfulrc.json configured with your management token
 */

const contentful = require('contentful-management')
const fs = require('fs')
const path = require('path')

// Load management token from config
const configPath = path.join(__dirname, '..', '.contentfulrc.json')
if (!fs.existsSync(configPath)) {
  console.error('❌ .contentfulrc.json not found. Please configure your management token.')
  process.exit(1)
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
const MANAGEMENT_TOKEN = config.managementToken

async function setupContentful() {
  console.log('🚀 Setting up Contentful content model...\n')

  const client = contentful.createClient({
    accessToken: MANAGEMENT_TOKEN
  })

  try {
    // Get or create space
    console.log('📍 Fetching spaces...')
    const spaces = await client.getSpaces()
    
    if (spaces.items.length === 0) {
      console.error('❌ No spaces found. Please create a space in Contentful first.')
      process.exit(1)
    }

    // Use the first space (you can modify this to select a specific space)
    const space = spaces.items[0]
    console.log(`✅ Using space: ${space.name} (${space.sys.id})\n`)

    // Get the master environment
    const environment = await space.getEnvironment('master')

    // Check if HomePage content type already exists
    let homePageContentType
    try {
      homePageContentType = await environment.getContentType('homePage')
      console.log('⚠️  HomePage content type already exists. Updating...')
    } catch (err) {
      console.log('📝 Creating HomePage content type...')
      homePageContentType = await environment.createContentTypeWithId('homePage', {
        name: 'Home Page',
        displayField: 'heroTitleLine1',
        description: 'Content for the website home page'
      })
    }

    // Define the fields for HomePage content type
    homePageContentType.fields = [
      // Hero Section
      {
        id: 'heroScriptAccent',
        name: 'Hero Script Accent',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'heroTitleLine1',
        name: 'Hero Title Line 1',
        type: 'Symbol',
        required: true,
        localized: false
      },
      {
        id: 'heroTitleLine2',
        name: 'Hero Title Line 2',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'heroDescription',
        name: 'Hero Description',
        type: 'Text',
        required: false,
        localized: false
      },
      {
        id: 'heroCtaText',
        name: 'Hero CTA Text',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'heroCtaLink',
        name: 'Hero CTA Link',
        type: 'Symbol',
        required: false,
        localized: false
      },
      
      // Feature Blocks Section
      {
        id: 'featureScriptAccent',
        name: 'Feature Section Script Accent',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'featureTitle',
        name: 'Feature Section Title',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'featureLead',
        name: 'Feature Section Lead',
        type: 'Text',
        required: false,
        localized: false
      },
      {
        id: 'featureBlocks',
        name: 'Feature Blocks',
        type: 'Array',
        items: {
          type: 'Link',
          linkType: 'Entry',
          validations: [{
            linkContentType: ['featureBlock']
          }]
        },
        required: false,
        localized: false
      },
      
      // Experience Section
      {
        id: 'experienceScriptAccent',
        name: 'Experience Script Accent',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'experienceTitle',
        name: 'Experience Title',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'experienceDescription',
        name: 'Experience Description',
        type: 'Text',
        required: false,
        localized: false
      },
      {
        id: 'experienceFeatures',
        name: 'Experience Features',
        type: 'Array',
        items: {
          type: 'Link',
          linkType: 'Entry',
          validations: [{
            linkContentType: ['experienceFeature']
          }]
        },
        required: false,
        localized: false
      },
      
      // Love Stories Section
      {
        id: 'loveStoriesScriptAccent',
        name: 'Love Stories Script Accent',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'loveStoriesTitle',
        name: 'Love Stories Title',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'loveStoriesLead',
        name: 'Love Stories Lead',
        type: 'Text',
        required: false,
        localized: false
      },
      
      // Testimonials Section
      {
        id: 'testimonialsScriptAccent',
        name: 'Testimonials Script Accent',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'testimonialsTitle',
        name: 'Testimonials Title',
        type: 'Symbol',
        required: false,
        localized: false
      },
      {
        id: 'testimonialItems',
        name: 'Testimonial Items',
        type: 'Array',
        items: {
          type: 'Link',
          linkType: 'Entry',
          validations: [{
            linkContentType: ['testimonial']
          }]
        },
        required: false,
        localized: false
      }
    ]

    // Save the HomePage content type
    await homePageContentType.update()
    await homePageContentType.publish()
    console.log('✅ HomePage content type created/updated\n')

    // Create Feature Block content type
    let featureBlockType
    try {
      featureBlockType = await environment.getContentType('featureBlock')
      console.log('⚠️  FeatureBlock content type already exists.')
    } catch (err) {
      console.log('📝 Creating FeatureBlock content type...')
      featureBlockType = await environment.createContentTypeWithId('featureBlock', {
        name: 'Feature Block',
        displayField: 'title',
        description: 'A feature block for the home page'
      })
      
      featureBlockType.fields = [
        {
          id: 'number',
          name: 'Number',
          type: 'Symbol',
          required: true
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
          required: true
        },
        {
          id: 'lead',
          name: 'Lead Text',
          type: 'Symbol',
          required: false
        },
        {
          id: 'content',
          name: 'Content',
          type: 'Text',
          required: true
        },
        {
          id: 'imageAlt',
          name: 'Image Alt Text',
          type: 'Symbol',
          required: false
        },
        {
          id: 'reverse',
          name: 'Reverse Layout',
          type: 'Boolean',
          required: false
        }
      ]
      
      await featureBlockType.update()
      await featureBlockType.publish()
      console.log('✅ FeatureBlock content type created\n')
    }

    // Create Experience Feature content type
    let experienceFeatureType
    try {
      experienceFeatureType = await environment.getContentType('experienceFeature')
      console.log('⚠️  ExperienceFeature content type already exists.')
    } catch (err) {
      console.log('📝 Creating ExperienceFeature content type...')
      experienceFeatureType = await environment.createContentTypeWithId('experienceFeature', {
        name: 'Experience Feature',
        displayField: 'title',
        description: 'A feature item for the experience section'
      })
      
      experienceFeatureType.fields = [
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
          required: true
        },
        {
          id: 'description',
          name: 'Description',
          type: 'Text',
          required: true
        }
      ]
      
      await experienceFeatureType.update()
      await experienceFeatureType.publish()
      console.log('✅ ExperienceFeature content type created\n')
    }

    // Create Testimonial content type
    let testimonialType
    try {
      testimonialType = await environment.getContentType('testimonial')
      console.log('⚠️  Testimonial content type already exists.')
    } catch (err) {
      console.log('📝 Creating Testimonial content type...')
      testimonialType = await environment.createContentTypeWithId('testimonial', {
        name: 'Testimonial',
        displayField: 'authorName',
        description: 'A customer testimonial'
      })
      
      testimonialType.fields = [
        {
          id: 'quote',
          name: 'Quote',
          type: 'Text',
          required: true
        },
        {
          id: 'authorName',
          name: 'Author Name',
          type: 'Symbol',
          required: true
        },
        {
          id: 'authorDetail',
          name: 'Author Detail',
          type: 'Symbol',
          required: false
        }
      ]
      
      await testimonialType.update()
      await testimonialType.publish()
      console.log('✅ Testimonial content type created\n')
    }

    // Output configuration
    console.log('🎉 Setup complete!\n')
    console.log('📋 Next steps:')
    console.log('1. Create a .env file with the following variables:')
    console.log(`   VITE_CONTENTFUL_SPACE_ID=${space.sys.id}`)
    console.log('   VITE_CONTENTFUL_ACCESS_TOKEN=<your-delivery-api-token>')
    console.log('\n2. Get your Delivery API token from:')
    console.log('   Settings → API keys → Add API key')
    console.log('\n3. Create content in Contentful:')
    console.log('   - Create Feature Block entries')
    console.log('   - Create Experience Feature entries')
    console.log('   - Create Testimonial entries')
    console.log('   - Create a HomePage entry and link the above entries')
    console.log('\n4. The site will automatically use Contentful content when configured,')
    console.log('   or fall back to local content if not.')

  } catch (error) {
    console.error('❌ Error setting up Contentful:', error.message)
    process.exit(1)
  }
}

// Run the setup
setupContentful()