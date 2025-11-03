import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false
})

async function updateHeroImage() {
  try {
    // Update the homePage document to add a placeholder image reference
    // Since we don't have an actual image uploaded, we'll set it to use the fallback
    const result = await client
      .patch('homePage')
      .set({
        'hero.ctaText': 'Schedule Your Visit',
        'hero.ctaLink': '/contact',
        'hero.description': "Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.",
        'hero.scrollText': 'Discover Your Perfect Day'
      })
      .commit()

    console.log('✅ Updated hero block with content:', result)
    
    console.log('\n📝 Note: Background image needs to be uploaded through Sanity Studio')
    console.log('   1. Go to http://localhost:3333')
    console.log('   2. Navigate to Homepage')
    console.log('   3. Upload an image to the Hero Section > Background Image field')
    console.log('   4. Publish the changes')
    
  } catch (error) {
    console.error('Error updating hero:', error)
  }
}

updateHeroImage()