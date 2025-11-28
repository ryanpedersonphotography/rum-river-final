import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

async function fixExperienceSection() {
  console.log('🔧 Fixing Experience section schema issues...\n')
  
  try {
    // Step 1: Create experienceFeature documents
    console.log('📝 Creating experienceFeature documents...')
    
    const features = [
      {
        _type: 'experienceFeature',
        _id: 'experience-feature-planning',
        title: 'All-Inclusive Planning',
        description: 'Our experienced coordinators handle every detail, so you can focus on what matters most—each other.',
        icon: 'check',
        order: 1
      },
      {
        _type: 'experienceFeature',
        _id: 'experience-feature-packages',
        title: 'Customizable Packages',
        description: 'From intimate gatherings to grand celebrations, we tailor every element to your vision and budget.',
        icon: 'sparkles',
        order: 2
      },
      {
        _type: 'experienceFeature',
        _id: 'experience-feature-charm',
        title: 'Historic Charm',
        description: 'Our lovingly restored 1920s barn combines century-old character with modern convenience.',
        icon: 'home',
        order: 3
      }
    ]
    
    // Create or update each feature document
    for (const feature of features) {
      await client.createOrReplace(feature)
      console.log(`  ✅ Created feature: ${feature.title}`)
    }
    
    // Step 2: Get the homepage
    console.log('\n📋 Fetching homepage...')
    const homepage = await client.fetch('*[_id == "homepage"][0]')
    
    if (!homepage) {
      throw new Error('Homepage not found')
    }
    
    // Step 3: Find and fix the experience block
    console.log('🔍 Finding experience block in content blocks...')
    
    const updatedContentBlocks = homepage.contentBlocks.map(block => {
      if (block._type === 'experienceBlock') {
        console.log('  Found experience block, fixing...')
        
        // Remove invalid fields and update structure
        const fixedBlock = {
          _type: 'experienceBlock',
          _key: block._key || 'experience',
          scriptAccent: block.scriptAccent || 'The Rum River Experience',
          title: block.title || 'More Than a Venue',
          description: block.description || 'We don\'t just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.',
          sectionStyle: 'section-blush', // Use the correct field name
          layout: 'content-left',
          // Reference the created feature documents
          features: [
            {
              _type: 'reference',
              _ref: 'experience-feature-planning',
              _key: 'ref-planning'
            },
            {
              _type: 'reference',
              _ref: 'experience-feature-packages',
              _key: 'ref-packages'
            },
            {
              _type: 'reference',
              _ref: 'experience-feature-charm',
              _key: 'ref-charm'
            }
          ],
          // Use existing image or fetch one from gallery
          image: block.image || {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: 'image-c76221e6e25ca37fda8693e27e69d783559735e9-1280x854-jpg' // barn-interior-exposed-beams
            }
          },
          imageAlt: block.imageAlt || 'Wedding Celebration'
        }
        
        // Remove invalid fields
        delete fixedBlock.sectionClassName // Not in schema
        
        return fixedBlock
      }
      return block
    })
    
    // Step 4: Update the homepage
    console.log('\n💾 Updating homepage with fixed experience block...')
    
    const result = await client
      .patch('homepage')
      .set({
        contentBlocks: updatedContentBlocks
      })
      .commit()
    
    console.log('✅ Homepage updated successfully!')
    
    // Step 5: Verify the fix
    console.log('\n🔍 Verifying fix...')
    const updatedHomepage = await client.fetch('*[_id == "homepage"][0]')
    const experienceBlock = updatedHomepage.contentBlocks.find(b => b._type === 'experienceBlock')
    
    if (experienceBlock) {
      console.log('✅ Experience block structure:')
      console.log('  - Has features array:', Array.isArray(experienceBlock.features))
      console.log('  - Features are references:', experienceBlock.features?.[0]?._type === 'reference')
      console.log('  - No sectionClassName field:', !experienceBlock.sectionClassName)
      console.log('  - Has sectionStyle field:', !!experienceBlock.sectionStyle)
    }
    
    return result
    
  } catch (error) {
    console.error('❌ Error fixing experience section:', error)
    throw error
  }
}

// Run the fix
fixExperienceSection()
  .then(() => {
    console.log('\n' + '='.repeat(50))
    console.log('🎉 Experience section fixed successfully!')
    console.log('✅ Created proper experienceFeature documents')
    console.log('✅ Fixed experience block to use references')
    console.log('✅ Removed invalid sectionClassName field')
    console.log('✅ Added required fields')
    console.log('='.repeat(50))
    console.log('\n🔗 Visit http://localhost:3333/structure/pages;homepage to verify')
  })
  .catch((error) => {
    console.error('💥 Fix failed:', error)
    process.exit(1)
  })