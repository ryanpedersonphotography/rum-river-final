import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || 'skzRZDaeFfvV0tmc1hL8C0o3m35tvUBc77NzzZ7pKY3WY2Wm7SQiq4uBFhz1k7xY7aNmhHQLTTQT0H367TrwDwAfAbdFBfDUGF8kheREt9J2uOqDJ1BgtuiGyCkUwKhfUEcVCUx9FNYgwBFRWw8euz0Rg36cN5j8CQsqZzbv1UtpEvgYqbBf',
  apiVersion: '2024-01-01'
})

async function addVenueDiscovery() {
  console.log('🏛️ Adding Venue Discovery section to Homepage...')

  // Get existing homepage
  const homepage = await client.fetch('*[_type == "page" && _id == "homepage"][0]')
  if (!homepage) {
    throw new Error('Homepage not found - run create-homepage.js first')
  }

  // Add Venue Discovery block
  const venueDiscoveryBlock = {
    _type: 'venueDiscoveryBlock',
    _key: 'venue-discovery',
    title: 'Discover Our Spaces',
    subtitle: 'Your Perfect Setting',
    description: 'Every corner tells a story, every space creates memories',
    sectionClassName: 'section section-cream'
  }

  // Update homepage with new block
  const updatedHomepage = {
    ...homepage,
    contentBlocks: [
      ...homepage.contentBlocks,
      venueDiscoveryBlock
    ]
  }

  try {
    const result = await client.createOrReplace(updatedHomepage)
    console.log('✅ Added Venue Discovery section')
    return result
  } catch (error) {
    console.error('❌ Error adding venue discovery:', error)
    throw error
  }
}

// Run the script
addVenueDiscovery()
  .then(() => {
    console.log('🎉 Venue Discovery section added!')
    console.log('🔗 Check http://localhost:3333/ to see updated Homepage')
  })
  .catch(console.error)