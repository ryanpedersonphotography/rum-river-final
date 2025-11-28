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

async function fixFeatureBlocks() {
  console.log('🔧 Fixing Feature Blocks section schema issues...\n')
  
  try {
    // Step 1: Create featureBlock documents
    console.log('📝 Creating featureBlock documents...')
    
    const featureBlocks = [
      {
        _type: 'featureBlock',
        _id: 'feature-block-01',
        number: '01',
        title: 'A Picturesque Location For Your Special Event',
        lead: 'Near Milaca, Saint Paul, St Cloud, and Brainerd MN',
        content: 'When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.\n\nHere at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.\n\nOur goal is to help you have your perfect day. We tend to book up fast, so don\'t wait—call us today at 612-801-0546!',
        imageAlt: 'Special event venue',
        reverse: false,
        order: 1
      },
      {
        _type: 'featureBlock',
        _id: 'feature-block-02',
        number: '02',
        title: 'Rum River Barn & Vineyard',
        lead: 'Milaca, St. Cloud, Saint Paul, and Brainerd MN',
        content: 'Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota\'s premier barn wedding venue and country special events venue for your custom special event.\n\nEnjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.',
        imageAlt: 'Rum River Barn and Vineyard',
        reverse: true,
        order: 2
      }
    ]
    
    // Create or update each feature block document
    for (const block of featureBlocks) {
      await client.createOrReplace(block)
      console.log(`  ✅ Created feature block: ${block.title}`)
    }
    
    // Step 2: Get the homepage
    console.log('\n📋 Fetching homepage...')
    const homepage = await client.fetch('*[_id == "homepage"][0]')
    
    if (!homepage) {
      throw new Error('Homepage not found')
    }
    
    // Step 3: Find and fix the feature blocks section
    console.log('🔍 Finding feature blocks in content blocks...')
    
    const updatedContentBlocks = homepage.contentBlocks.map(block => {
      if (block._type === 'featureBlocksBlock') {
        console.log('  Found feature blocks section, fixing...')
        
        // Remove inline blocks and use references
        const fixedBlock = {
          _type: 'featureBlocksBlock',
          _key: block._key || 'feature-blocks',
          scriptAccent: block.scriptAccent || 'Your Perfect Venue',
          title: block.title || 'Why Choose Rum River Barn',
          lead: block.lead || 'Discover what makes our venue the perfect setting for your unforgettable celebration',
          sectionStyle: block.sectionStyle || 'section-white',
          centerContent: block.centerContent !== undefined ? block.centerContent : false,
          // Replace inline blocks with references
          blocks: [
            {
              _type: 'reference',
              _ref: 'feature-block-01',
              _key: 'ref-block-01'
            },
            {
              _type: 'reference',
              _ref: 'feature-block-02',
              _key: 'ref-block-02'
            }
          ]
        }
        
        return fixedBlock
      }
      return block
    })
    
    // Step 4: Update the homepage
    console.log('\n💾 Updating homepage with fixed feature blocks...')
    
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
    const featureBlocksSection = updatedHomepage.contentBlocks.find(b => b._type === 'featureBlocksBlock')
    
    if (featureBlocksSection) {
      console.log('✅ Feature blocks section structure:')
      console.log('  - Has blocks array:', Array.isArray(featureBlocksSection.blocks))
      console.log('  - Blocks are references:', featureBlocksSection.blocks?.[0]?._type === 'reference')
      console.log('  - Number of blocks:', featureBlocksSection.blocks?.length)
    }
    
    return result
    
  } catch (error) {
    console.error('❌ Error fixing feature blocks:', error)
    throw error
  }
}

// Run the fix
fixFeatureBlocks()
  .then(() => {
    console.log('\n' + '='.repeat(50))
    console.log('🎉 Feature blocks section fixed successfully!')
    console.log('✅ Created proper featureBlock documents')
    console.log('✅ Fixed feature blocks section to use references')
    console.log('✅ Removed inline featureBlockItem objects')
    console.log('='.repeat(50))
    console.log('\n🔗 Visit http://localhost:3333/structure/pages;homepage to verify')
    console.log('\nYou should now see:')
    console.log('  - No validation errors for feature blocks')
    console.log('  - Feature blocks properly referenced')
    console.log('  - Edit individual blocks from "Feature Blocks" in sidebar')
  })
  .catch((error) => {
    console.error('💥 Fix failed:', error)
    process.exit(1)
  })