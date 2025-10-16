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

async function createHomepage() {
  console.log('🏠 Creating Homepage with content blocks...')

  // Step 1: Hero Block
  console.log('📝 Creating Hero Block...')
  const homePage = {
    _type: 'page',
    _id: 'homepage',
    title: 'Homepage',
    slug: {
      _type: 'slug',
      current: 'home'
    },
    seo: {
      _type: 'seoSettings',
      title: 'Rum River Wedding Barn | Historic Hillman MN Wedding Venue',
      description: 'Elegant rustic wedding venue in Hillman, Minnesota. Historic barn with modern amenities, bridal suite, groom\'s quarters. Capacity up to 300 guests.',
      keywords: 'wedding venue, rustic barn, Hillman Minnesota, wedding barn, historic venue, Minnesota weddings, barn wedding, rural wedding venue'
    },
    contentBlocks: [
      // 1. Hero Section
      {
        _type: 'heroBlock',
        _key: 'hero',
        scriptAccent: 'Where Dreams Begin',
        titleLine1: 'Rum River',
        titleLine2: 'Wedding Barn',
        description: 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
        ctaText: 'Schedule Your Visit',
        ctaLink: '/contact',
        scrollText: 'Discover Your Perfect Day',
        showFloatingCta: true,
        floatingCtaText: 'Schedule Your Tour',
        floatingCtaIcon: 'calendar'
      }
    ]
  }

  try {
    const result = await client.createOrReplace(homePage)
    console.log('✅ Homepage created with Hero section:', result._id)
    return result
  } catch (error) {
    console.error('❌ Error creating homepage:', error)
    throw error
  }
}

// Run the script
createHomepage()
  .then(() => {
    console.log('🎉 Homepage Hero section complete!')
    console.log('🔗 Visit http://localhost:3333/ to see the Homepage in Sanity Studio')
  })
  .catch(console.error)