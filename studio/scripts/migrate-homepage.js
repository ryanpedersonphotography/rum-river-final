import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
})

async function migrateHomepage() {
  console.log('Starting homepage migration...')
  
  try {
    // Fetch the existing homepage data
    const existingHomepage = await client.fetch(`*[_id == "homepage"][0]`)
    
    if (!existingHomepage) {
      console.log('No existing homepage found to migrate')
      return
    }
    
    console.log('Found existing homepage with blocks:', existingHomepage.contentBlocks?.length || 0)
    
    // Map the old contentBlocks array to the new structure
    const blocks = existingHomepage.contentBlocks || []
    const newHomepageData = {
      _id: 'homepage',
      _type: 'homePage',
      title: 'Homepage',
    }
    
    // Map each block to its appropriate field
    blocks.forEach(block => {
      switch(block._type) {
        case 'heroBlock':
          newHomepageData.hero = block
          delete newHomepageData.hero._key // Remove _key from standalone field
          console.log('✓ Migrated hero block')
          break
          
        case 'venueDiscoveryBlock':
          newHomepageData.venueDiscovery = block
          delete newHomepageData.venueDiscovery._key
          console.log('✓ Migrated venue discovery block')
          break
          
        case 'featureBlocksBlock':
          newHomepageData.featureBlocks = block
          delete newHomepageData.featureBlocks._key
          console.log('✓ Migrated feature blocks')
          break
          
        case 'galleryBlock':
          newHomepageData.loveStories = block
          delete newHomepageData.loveStories._key
          console.log('✓ Migrated gallery/love stories block')
          break
          
        case 'experienceBlock':
          newHomepageData.experience = block
          delete newHomepageData.experience._key
          console.log('✓ Migrated experience block')
          break
          
        case 'testimonialsBlock':
          newHomepageData.testimonials = block
          delete newHomepageData.testimonials._key
          console.log('✓ Migrated testimonials block')
          break
          
        case 'formBlock':
          newHomepageData.scheduleTour = block
          delete newHomepageData.scheduleTour._key
          console.log('✓ Migrated form block')
          break
          
        default:
          console.log(`⚠ Unknown block type: ${block._type}`)
      }
    })
    
    // Copy SEO settings if they exist
    if (existingHomepage.seo) {
      newHomepageData.seo = existingHomepage.seo
      console.log('✓ Migrated SEO settings')
    }
    
    // Create or replace the homepage document with the new schema
    console.log('\nCreating new homepage document...')
    const result = await client.createOrReplace(newHomepageData)
    
    console.log('✅ Homepage migration completed successfully!')
    console.log('Document ID:', result._id)
    console.log('Document type:', result._type)
    
    // Optionally, archive the old page document
    if (existingHomepage._type === 'page') {
      console.log('\nArchiving old page document...')
      await client.patch('homepage')
        .set({ _type: 'page_archived' })
        .commit()
        .catch(err => {
          console.log('Note: Could not archive old document (may already be converted)')
        })
    }
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message)
    console.error(error)
  }
}

// Run the migration
migrateHomepage()