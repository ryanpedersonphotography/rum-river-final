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

async function updateHomepageWithImages() {
  console.log('🖼️ Updating homepage with Sanity images...')
  
  try {
    // Get the homepage
    const homepage = await client.fetch('*[_type == "page" && _id == "homepage"][0]')
    
    if (!homepage) {
      throw new Error('Homepage not found')
    }
    
    // Find a good hero background image from gallery
    const heroImage = await client.fetch(`
      *[_type == "galleryImage" && category == "barn" && title match "*full-deck-view-evening*"][0].image
    `)
    
    if (!heroImage) {
      console.log('⚠️  Hero background image not found, using default')
    }
    
    // Update hero block with background image
    const updatedContentBlocks = homepage.contentBlocks.map(block => {
      if (block._type === 'heroBlock') {
        return {
          ...block,
          backgroundImage: heroImage || {
            _type: 'customImage',
            asset: {
              _type: 'reference',
              _ref: 'image-36a9e7766804bbe86f5302eaba42db14431fb39e' // evening deck view
            },
            alt: 'Rum River Barn evening view with deck'
          }
        }
      }
      return block
    })
    
    // Update homepage
    const updatedHomepage = {
      ...homepage,
      contentBlocks: updatedContentBlocks
    }
    
    const result = await client.createOrReplace(updatedHomepage)
    console.log('✅ Updated homepage with hero background image')
    
    return result
    
  } catch (error) {
    console.error('❌ Error updating homepage images:', error)
    throw error
  }
}

// Helper function to create Sanity CDN URLs
function createSanityImageUrl(assetRef, options = {}) {
  const { width = 1920, height, quality = 85, format = 'webp' } = options
  
  // Extract the image ID from asset reference
  const imageId = assetRef.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')
  
  let url = `https://cdn.sanity.io/images/vicw6cgb/production/${imageId}`
  
  const params = []
  if (width) params.push(`w=${width}`)
  if (height) params.push(`h=${height}`) 
  if (quality) params.push(`q=${quality}`)
  if (format && format !== 'auto') params.push(`fm=${format}`)
  
  if (params.length > 0) {
    url += '?' + params.join('&')
  }
  
  return url
}

// Export the helper function
export { createSanityImageUrl }

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  updateHomepageWithImages()
    .then(() => {
      console.log('🎉 Homepage images updated!')
      console.log('🔗 Visit http://localhost:3333/ to see updated homepage in Sanity Studio')
    })
    .catch(console.error)
}