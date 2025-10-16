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

async function addFeatureBlocks() {
  console.log('📋 Adding Feature Blocks section to Homepage...')

  // Get existing homepage
  const homepage = await client.fetch('*[_type == "page" && _id == "homepage"][0]')
  if (!homepage) {
    throw new Error('Homepage not found')
  }

  // Feature Blocks section - matches your existing localContent.js
  const featureBlocksSection = {
    _type: 'featureBlocksBlock',
    _key: 'feature-blocks',
    scriptAccent: 'Your Perfect Venue',
    title: 'Why Choose Rum River Barn',
    lead: 'Discover what makes our venue the perfect setting for your unforgettable celebration',
    blocks: [
      {
        _type: 'featureBlockItem',
        _key: 'block-01',
        number: '01',
        title: 'A Picturesque Location For Your Special Event',
        lead: 'Near Milaca, Saint Paul, St Cloud, and Brainerd MN',
        content: 'When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.\n\nHere at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.\n\nOur goal is to help you have your perfect day. We tend to book up fast, so don\'t wait—call us today at 612-801-0546!',
        imageAlt: 'Special event venue',
        reverse: false
      },
      {
        _type: 'featureBlockItem',
        _key: 'block-02',
        number: '02',
        title: 'Rum River Barn & Vineyard',
        lead: 'Milaca, St. Cloud, Saint Paul, and Brainerd MN',
        content: 'Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota\'s premier barn wedding venue and country special events venue for your custom special event.\n\nEnjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.',
        imageAlt: 'Rum River Barn and Vineyard',
        reverse: true
      }
    ]
  }

  // Update homepage
  const updatedHomepage = {
    ...homepage,
    contentBlocks: [
      ...homepage.contentBlocks,
      featureBlocksSection
    ]
  }

  try {
    const result = await client.createOrReplace(updatedHomepage)
    console.log('✅ Added Feature Blocks section with 2 numbered blocks')
    return result
  } catch (error) {
    console.error('❌ Error adding feature blocks:', error)
    throw error
  }
}

// Run the script
addFeatureBlocks()
  .then(() => {
    console.log('🎉 Feature Blocks section added!')
    console.log('📋 Added: "Why Choose Rum River Barn" with numbered blocks')
  })
  .catch(console.error)