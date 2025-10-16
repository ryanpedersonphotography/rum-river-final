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

async function addGallerySection() {
  console.log('🖼️ Adding Gallery section to Homepage...')

  // Get existing homepage
  const homepage = await client.fetch('*[_type == "page" && _id == "homepage"][0]')
  if (!homepage) {
    throw new Error('Homepage not found')
  }

  // Gallery section - Love Stories/Wedding Gallery
  const gallerySection = {
    _type: 'galleryBlock',
    _key: 'gallery',
    scriptAccent: 'Real Love Stories',
    title: 'Weddings at the Barn',
    lead: 'Every celebration tells a unique story of love, laughter, and happily ever after.',
    sectionClassName: 'love-stories-section section section-cream',
    galleryType: 'auto', // Auto-fetch featured weddings
    limit: 6,
    ctaText: 'View All Real Weddings',
    ctaLink: '/real-weddings'
  }

  // Update homepage
  const updatedHomepage = {
    ...homepage,
    contentBlocks: [
      ...homepage.contentBlocks,
      gallerySection
    ]
  }

  try {
    const result = await client.createOrReplace(updatedHomepage)
    console.log('✅ Added Gallery section (Love Stories)')
    return result
  } catch (error) {
    console.error('❌ Error adding gallery:', error)
    throw error
  }
}

// Run the script
addGallerySection()
  .then(() => {
    console.log('🎉 Gallery section added!')
    console.log('🖼️ Added: "Weddings at the Barn" love stories gallery')
  })
  .catch(console.error)