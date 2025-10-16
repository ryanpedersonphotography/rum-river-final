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
  token: process.env.SANITY_API_TOKEN || 'skzRZDaeFfvV0tmc1hL8C0o3m35tvUBc77NzzZ7pKY3WY2Wm7SQiq4uBFhz1k7xY7aNmhHQLTTQT0H367TrwDwAfAbdFBfDUGF8kheREt9J2uOqDJ1BgtuiGyCkUwKhfUEcVCUx57Y7aNmhHQLTTQT0H367TrwDwAfAbdFBfDUGF8kheREt9J2uOqDJ1BgtuiGyCkUwKhfUEcVCUx9FNYgwBFRWw8euz0Rg36cN5j8CQsqZzbv1UtpEvgYqbBf',
  apiVersion: '2024-01-01'
})

// Wedding data mapping from existing site
const weddingData = {
  'anthony-and-linnea': {
    title: 'Anthony & Linnea',
    coupleNames: 'Anthony & Linnea',
    weddingDate: '2024-06-15',
    featured: true,
    excerpt: 'A beautiful summer wedding with rustic elegance',
    story: 'Anthony and Linnea celebrated their love in the warm embrace of summer at Rum River Barn.',
    season: 'summer',
    ceremony: 'barn-interior',
    reception: 'barn-interior'
  },
  'loria-and-jason-rolstad-agape': {
    title: 'Loria & Jason',
    coupleNames: 'Loria & Jason Rolstad',
    weddingDate: '2014-05-20',
    featured: true,
    excerpt: 'A classic spring celebration full of joy and laughter',
    story: 'Loria and Jason brought their families together for an unforgettable spring celebration.',
    season: 'spring',
    ceremony: 'vineyard',
    reception: 'barn-interior'
  },
  'mattea-courtney': {
    title: 'Mattea & Courtney',
    coupleNames: 'Mattea & Courtney',
    weddingDate: '2013-08-31',
    featured: false,
    excerpt: 'Late summer romance in the countryside',
    story: 'Mattea and Courtney chose the perfect late summer day for their countryside wedding.',
    season: 'summer',
    ceremony: 'garden',
    reception: 'barn-interior'
  },
  'kyle-carrie': {
    title: 'Kyle & Carrie',
    coupleNames: 'Kyle & Carrie',
    weddingDate: '2014-09-20',
    featured: false,
    excerpt: 'Fall colors and autumn romance',
    story: 'Kyle and Carrie celebrated as the leaves turned golden around them.',
    season: 'fall',
    ceremony: 'barn-deck',
    reception: 'barn-interior'
  },
  'emily-and-barron-nixon': {
    title: 'Emily & Barron',
    coupleNames: 'Emily & Barron Nixon',
    weddingDate: '2015-07-11',
    featured: false,
    excerpt: 'Midsummer magic with family and friends',
    story: 'Emily and Barron created magical memories in the height of summer.',
    season: 'summer',
    ceremony: 'vineyard',
    reception: 'barn-interior'
  },
  'joshua-and-teri': {
    title: 'Joshua & Teri',
    coupleNames: 'Joshua & Teri',
    weddingDate: '2014-10-04',
    featured: false,
    excerpt: 'Harvest season celebration',
    story: 'Joshua and Teri celebrated their love during the beautiful harvest season.',
    season: 'fall',
    ceremony: 'field',
    reception: 'barn-interior'
  },
  'reins': {
    title: 'The Reins Wedding',
    coupleNames: 'Mr. & Mrs. Reins',
    weddingDate: '2015-06-27',
    featured: false,
    excerpt: 'Classic summer barn wedding',
    story: 'The Reins family celebration was filled with tradition and joy.',
    season: 'summer',
    ceremony: 'barn-interior',
    reception: 'barn-interior'
  },
  'kerry-dominic': {
    title: 'Kerry & Dominic',
    coupleNames: 'Kerry & Dominic',
    weddingDate: '2016-08-13',
    featured: false,
    excerpt: 'Late summer garden party',
    story: 'Kerry and Dominic hosted an elegant garden party celebration.',
    season: 'summer',
    ceremony: 'garden',
    reception: 'mixed'
  },
  'rachel-and-vince': {
    title: 'Rachel & Vince',
    coupleNames: 'Rachel & Vince',
    weddingDate: '2014-07-19',
    featured: false,
    excerpt: 'Summer romance under the stars',
    story: 'Rachel and Vince danced under the summer stars.',
    season: 'summer',
    ceremony: 'barn-deck',
    reception: 'barn-interior'
  },
  'erin-kate': {
    title: 'Erin & Kate',
    coupleNames: 'Erin & Kate',
    weddingDate: '2015-09-12',
    featured: false,
    excerpt: 'Early autumn celebration',
    story: 'Erin and Kate celebrated as summer turned to fall.',
    season: 'fall',
    ceremony: 'vineyard',
    reception: 'barn-interior'
  },
  'kage': {
    title: 'Kage Wedding',
    coupleNames: 'Mr. & Mrs. Kage',
    weddingDate: '2015-05-30',
    featured: false,
    excerpt: 'Late spring countryside wedding',
    story: 'The Kage wedding celebrated the beauty of late spring.',
    season: 'spring',
    ceremony: 'field',
    reception: 'barn-interior'
  },
  'dave-kayla': {
    title: 'Dave & Kayla',
    coupleNames: 'Dave & Kayla',
    weddingDate: '2016-07-02',
    featured: false,
    excerpt: 'Independence Day weekend celebration',
    story: 'Dave and Kayla celebrated their independence together.',
    season: 'summer',
    ceremony: 'barn-interior',
    reception: 'barn-interior'
  },
  'jenna-and-steven-tschirgi': {
    title: 'Jenna & Steven',
    coupleNames: 'Jenna & Steven Tschirgi',
    weddingDate: '2016-09-24',
    featured: false,
    excerpt: 'Autumn harvest celebration',
    story: 'Jenna and Steven celebrated during the beautiful autumn harvest.',
    season: 'fall',
    ceremony: 'barn-deck',
    reception: 'barn-interior'
  },
  'nick-and-kayla': {
    title: 'Nick & Kayla',
    coupleNames: 'Nick & Kayla',
    weddingDate: '2017-06-10',
    featured: false,
    excerpt: 'Early summer barn celebration',
    story: 'Nick and Kayla kicked off summer with their joyful celebration.',
    season: 'summer',
    ceremony: 'barn-interior',
    reception: 'barn-interior'
  },
  'allison-and-will': {
    title: 'Allison & Will',
    coupleNames: 'Allison & Will',
    weddingDate: '2017-08-05',
    featured: false,
    excerpt: 'Midsummer countryside romance',
    story: 'Allison and Will created a romantic midsummer celebration.',
    season: 'summer',
    ceremony: 'vineyard',
    reception: 'mixed'
  },
  'james-and-denise-allen': {
    title: 'James & Denise',
    coupleNames: 'James & Denise Allen',
    weddingDate: '2017-09-16',
    featured: false,
    excerpt: 'Early fall family celebration',
    story: 'James and Denise brought their families together for an early fall celebration.',
    season: 'fall',
    ceremony: 'garden',
    reception: 'barn-interior'
  },
  'casey-garret': {
    title: 'Casey & Garret',
    coupleNames: 'Casey & Garret',
    weddingDate: '2018-05-19',
    featured: false,
    excerpt: 'Spring garden wedding',
    story: 'Casey and Garret celebrated among the spring blooms.',
    season: 'spring',
    ceremony: 'garden',
    reception: 'barn-interior'
  },
  'kristine-leuze': {
    title: 'Kristine & Her Love',
    coupleNames: 'Kristine Leuze',
    weddingDate: '2016-10-15',
    featured: false,
    excerpt: 'Autumn elegance',
    story: 'Kristine created an elegant autumn celebration.',
    season: 'fall',
    ceremony: 'barn-interior',
    reception: 'barn-interior'
  }
}

// Helper function to upload image from file
async function uploadImageFromFile(imagePath) {
  try {
    const imageBuffer = fs.readFileSync(imagePath)
    const filename = path.basename(imagePath)
    
    // Upload to Sanity
    const imageAsset = await client.assets.upload('image', imageBuffer, {
      filename: filename
    })
    
    return {
      _type: 'customImage',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id
      },
      alt: generateAltFromPath(imagePath)
    }
    
  } catch (error) {
    console.error(`❌ Error uploading ${imagePath}:`, error.message)
    return null
  }
}

// Generate alt text from image path
function generateAltFromPath(imagePath) {
  const filename = path.basename(imagePath, path.extname(imagePath))
  return filename.replace(/[-_]/g, ' ').replace(/\d+/g, '').trim() || 'Wedding photo'
}

// Create wedding document with photos
async function createWeddingDocument(weddingSlug, weddingInfo) {
  try {
    console.log(`\n👰 Creating wedding: ${weddingInfo.title}`)
    
    const weddingPhotosDir = path.join(__dirname, '../public/wedding-photos', weddingSlug)
    
    if (!fs.existsSync(weddingPhotosDir)) {
      console.log(`⚠️  No photos directory found for ${weddingSlug}`)
      return null
    }
    
    // Get all image files
    const files = fs.readdirSync(weddingPhotosDir)
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    ).sort() // Sort to get consistent ordering
    
    console.log(`📸 Found ${imageFiles.length} photos`)
    
    if (imageFiles.length === 0) {
      console.log(`⚠️  No image files found in ${weddingSlug}`)
      return null
    }
    
    // Upload cover image (first photo)
    const coverImagePath = path.join(weddingPhotosDir, imageFiles[0])
    console.log(`📷 Uploading cover image: ${imageFiles[0]}`)
    const coverImage = await uploadImageFromFile(coverImagePath)
    
    if (!coverImage) {
      console.log(`❌ Failed to upload cover image for ${weddingSlug}`)
      return null
    }
    
    // Upload up to 12 gallery images (for performance)
    const galleryImages = []
    const maxGalleryImages = Math.min(12, imageFiles.length)
    
    for (let i = 0; i < maxGalleryImages; i++) {
      const imagePath = path.join(weddingPhotosDir, imageFiles[i])
      console.log(`📷 Uploading gallery image ${i + 1}/${maxGalleryImages}: ${imageFiles[i]}`)
      
      const galleryImage = await uploadImageFromFile(imagePath)
      if (galleryImage) {
        galleryImages.push(galleryImage)
      }
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200))
    }
    
    // Create wedding document
    const wedding = {
      _type: 'wedding',
      _id: `wedding-${weddingSlug}`,
      title: weddingInfo.title,
      slug: {
        _type: 'slug',
        current: weddingSlug
      },
      coupleNames: weddingInfo.coupleNames,
      weddingDate: weddingInfo.weddingDate,
      featured: weddingInfo.featured,
      coverImage: coverImage,
      gallery: galleryImages,
      excerpt: weddingInfo.excerpt,
      story: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: weddingInfo.story
            }
          ]
        }
      ],
      venue: {
        ceremony: weddingInfo.ceremony,
        reception: weddingInfo.reception
      },
      season: weddingInfo.season,
      tags: [weddingInfo.season, 'rum-river-barn', 'minnesota-wedding']
    }
    
    const result = await client.createOrReplace(wedding)
    console.log(`✅ Created wedding document: ${result._id}`)
    
    return result
    
  } catch (error) {
    console.error(`❌ Error creating wedding ${weddingSlug}:`, error.message)
    return null
  }
}

// Main function
async function createAllWeddings() {
  console.log('💒 Creating wedding documents in Sanity...')
  
  let successCount = 0
  let errorCount = 0
  
  for (const [slug, info] of Object.entries(weddingData)) {
    try {
      const result = await createWeddingDocument(slug, info)
      if (result) {
        successCount++
      } else {
        errorCount++
      }
      
      // Delay between weddings to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000))
      
    } catch (error) {
      console.error(`❌ Failed to process wedding ${slug}:`, error.message)
      errorCount++
    }
  }
  
  console.log(`\n🎉 Wedding creation complete!`)
  console.log(`✅ Successfully created: ${successCount} weddings`)
  console.log(`❌ Errors: ${errorCount}`)
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  createAllWeddings()
    .then(() => {
      console.log('🏁 All done!')
      process.exit(0)
    })
    .catch(error => {
      console.error('💥 Creation failed:', error)
      process.exit(1)
    })
}