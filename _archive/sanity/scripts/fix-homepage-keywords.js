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

async function fixHomepageKeywords() {
  console.log('🔧 Fixing homepage SEO keywords field...')
  
  try {
    // Fetch the homepage document
    const homepage = await client.fetch('*[_id == "homepage"][0]')
    
    if (!homepage) {
      console.log('❌ Homepage not found')
      return
    }
    
    console.log('Current homepage SEO:', homepage.seo)
    
    // Check if keywords is a string and needs conversion
    if (homepage.seo && typeof homepage.seo.keywords === 'string') {
      // Split the comma-separated string into an array
      const keywordsArray = homepage.seo.keywords
        .split(',')
        .map(keyword => keyword.trim())
        .filter(keyword => keyword.length > 0)
      
      console.log('Converting keywords from string to array:')
      console.log('  From:', homepage.seo.keywords)
      console.log('  To:', keywordsArray)
      
      // Update the homepage with the corrected keywords
      const result = await client
        .patch('homepage')
        .set({
          'seo.keywords': keywordsArray
        })
        .commit()
      
      console.log('✅ Homepage keywords fixed successfully!')
      return result
      
    } else if (homepage.seo && Array.isArray(homepage.seo.keywords)) {
      console.log('✅ Keywords are already an array - no fix needed')
      return homepage
      
    } else if (!homepage.seo) {
      // If no SEO object exists, create one with proper keywords array
      console.log('📝 Creating SEO settings with proper keywords array...')
      
      const result = await client
        .patch('homepage')
        .setIfMissing({
          seo: {
            metaTitle: 'Rum River Wedding Barn - Historic Wedding Venue in Hillman, Minnesota',
            metaDescription: 'Discover the perfect rustic wedding venue at Rum River Barn. Historic charm meets modern elegance in Hillman, Minnesota. Schedule your tour today!',
            keywords: [
              'wedding venue',
              'rustic barn',
              'Hillman Minnesota',
              'wedding barn',
              'historic venue',
              'Minnesota weddings',
              'barn wedding',
              'rural wedding venue'
            ]
          }
        })
        .commit()
      
      console.log('✅ SEO settings created with proper keywords array!')
      return result
    }
    
  } catch (error) {
    console.error('❌ Error fixing homepage keywords:', error)
    throw error
  }
}

// Run the fix
fixHomepageKeywords()
  .then((result) => {
    console.log('🎉 Fix complete!')
    console.log('📋 Updated document ID:', result?._id)
    console.log('\n🔗 Visit http://localhost:3333/structure/pages;homepage to verify the fix')
  })
  .catch((error) => {
    console.error('💥 Fix failed:', error)
    process.exit(1)
  })