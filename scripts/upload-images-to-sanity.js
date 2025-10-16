import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01'
})

// Image categories mapping
const categoryMapping = {
  'venue': 'barn',
  'bridal-suite': 'bridal-suite', 
  'reception': 'reception-area',
  'historical': 'historical',
  'wedding-photos': 'real-weddings'
}

// Helper function to get category from path
function getCategoryFromPath(imagePath) {
  const pathParts = imagePath.split('/')
  
  if (pathParts.includes('venue')) return 'barn'
  if (pathParts.includes('bridal-suite')) return 'bridal-suite'
  if (pathParts.includes('reception')) return 'reception-area'
  if (pathParts.includes('historical')) return 'historical'
  if (pathParts.includes('wedding-photos')) return 'real-weddings'
  if (pathParts.includes('real-wedding-blogs')) return 'real-weddings'
  
  // Default to property for venue images in root
  if (imagePath.includes('property') || imagePath.includes('landscape')) return 'property'
  if (imagePath.includes('details')) return 'details'
  
  return 'barn' // Default
}

// Helper function to generate alt text
function generateAltText(imagePath) {
  const filename = path.basename(imagePath, path.extname(imagePath))
  
  // Convert filename to readable alt text
  return filename
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\d+/g, '') // Remove numbers
    .trim()
}

// Helper function to upload single image
async function uploadImage(imagePath, publicPath) {
  try {
    console.log(`📷 Uploading: ${publicPath}`)
    
    const imageBuffer = fs.readFileSync(imagePath)
    const filename = path.basename(imagePath)
    
    // Upload to Sanity
    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: filename
    })
    
    console.log(`✅ Uploaded: ${imageAsset._id}`)
    
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id
      },
      alt: generateAltText(imagePath)
    }
    
  } catch (error) {
    console.error(`❌ Error uploading ${publicPath}:`, error.message)
    return null
  }
}

// Helper function to create gallery image document
async function createGalleryImage(imageData, imagePath, publicPath) {
  if (!imageData) return null
  
  try {
    const category = getCategoryFromPath(publicPath)
    const title = generateAltText(imagePath)
    
    const galleryImage = {
      _type: 'galleryImage',
      _id: `gallery-${path.basename(imagePath, path.extname(imagePath))}`,
      title: title,
      image: {
        _type: 'customImage',
        ...imageData
      },
      category: category,
      featured: false, // We'll manually set featured images later
      sortOrder: 100 // Default sort order
    }
    
    const result = await client.createOrReplace(galleryImage)
    console.log(`📋 Created gallery entry: ${result._id}`)
    
    return result
  } catch (error) {
    console.error(`❌ Error creating gallery entry for ${publicPath}:`, error.message)
    return null
  }
}

// Main function to process all images
async function uploadAllImages() {
  console.log('🚀 Starting image upload to Sanity...')
  
  const publicDir = path.join(__dirname, '../public')
  const imagesDirs = [
    'images/venue',
    'images/bridal-suite', 
    'images/reception',
    'images/historical',
    'images/2014',
    'images/2015',
    'images/2016',
    'images/2017',
    'images/2020',
    'images/2021',
    'images/2024'
  ]
  
  const urlMapping = {} // Track old URL -> new Sanity URL mapping
  let uploadCount = 0
  let errorCount = 0
  
  for (const dir of imagesDirs) {
    const fullDir = path.join(publicDir, dir)
    
    if (!fs.existsSync(fullDir)) {
      console.log(`⚠️  Directory not found: ${dir}`)
      continue
    }
    
    console.log(`\n📁 Processing directory: ${dir}`)
    
    const files = fs.readdirSync(fullDir)
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    )
    
    console.log(`Found ${imageFiles.length} images in ${dir}`)
    
    for (const file of imageFiles) {
      const imagePath = path.join(fullDir, file)
      const publicPath = `/${dir}/${file}`
      
      try {
        // Upload image
        const imageData = await uploadImage(imagePath, publicPath)
        
        if (imageData) {
          // Create gallery entry (except for wedding photos - we'll handle those separately)
          if (!dir.includes('wedding-photos') && !dir.includes('2014') && !dir.includes('2015')) {
            await createGalleryImage(imageData, imagePath, publicPath)
          }
          
          // Store URL mapping (we'll need to get the CDN URL from Sanity later)
          urlMapping[publicPath] = imageData.asset._ref
          uploadCount++
        } else {
          errorCount++
        }
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100))
        
      } catch (error) {
        console.error(`❌ Failed to process ${publicPath}:`, error.message)
        errorCount++
      }
    }
  }
  
  console.log(`\n🎉 Upload complete!`)
  console.log(`✅ Successfully uploaded: ${uploadCount} images`)
  console.log(`❌ Errors: ${errorCount}`)
  
  // Save URL mapping for reference
  fs.writeFileSync(
    path.join(__dirname, '../image-url-mapping.json'),
    JSON.stringify(urlMapping, null, 2)
  )
  
  console.log(`💾 URL mapping saved to: image-url-mapping.json`)
  
  return urlMapping
}

// Function to create CDN URL helper
function getSanityImageUrl(assetRef, options = {}) {
  const { width = 800, height, quality = 85, format = 'webp' } = options
  
  // Extract asset ID from reference
  const assetId = assetRef.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')
  
  // Build Sanity CDN URL
  let url = `https://cdn.sanity.io/images/vicw6cgb/production/${assetId}`
  
  const params = []
  if (width) params.push(`w=${width}`)
  if (height) params.push(`h=${height}`)
  if (quality) params.push(`q=${quality}`)
  if (format) params.push(`fm=${format}`)
  
  if (params.length > 0) {
    url += '?' + params.join('&')
  }
  
  return url
}

// Export helper function
export { getSanityImageUrl }

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  uploadAllImages()
    .then(() => {
      console.log('🏁 All done!')
      process.exit(0)
    })
    .catch(error => {
      console.error('💥 Upload failed:', error)
      process.exit(1)
    })
}