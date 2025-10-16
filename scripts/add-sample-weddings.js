import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

const sampleWeddings = [
  {
    _type: 'weddingBlog',
    title: 'Sarah & Michael\'s Rustic Fall Wedding',
    slug: {
      _type: 'slug',
      current: 'sarah-michael-fall-wedding'
    },
    date: '2024-10-12T16:00:00.000Z',
    season: 'fall',
    venue: 'Rum River Barn',
    excerpt: 'A beautiful autumn celebration filled with golden leaves, warm lighting, and heartfelt moments.',
    story: 'Sarah and Michael chose Rum River Barn for their fall wedding, and it couldn\'t have been more perfect. The crisp October air and golden foliage created a magical backdrop for their special day. From the rustic ceremony space to the elegant reception hall, every detail reflected their love for nature and each other.',
    photographerCredit: 'Emma Photography Studio',
    featured: true,
    published: true
  },
  {
    _type: 'weddingBlog',
    title: 'Jessica & David\'s Summer Garden Party',
    slug: {
      _type: 'slug',
      current: 'jessica-david-summer-wedding'
    },
    date: '2024-07-20T17:00:00.000Z',
    season: 'summer',
    venue: 'Rum River Barn',
    excerpt: 'A vibrant summer celebration with garden-fresh florals and outdoor dancing under the stars.',
    story: 'Jessica and David wanted their wedding to feel like a beautiful garden party, and that\'s exactly what they got. With lush summer blooms, string lights, and an outdoor dance floor, their celebration was both elegant and fun. The warm summer evening was perfect for their al fresco reception.',
    photographerCredit: 'Sunset Wedding Photography',
    featured: false,
    published: true
  },
  {
    _type: 'weddingBlog',
    title: 'Amanda & Chris\'s Winter Wonderland',
    slug: {
      _type: 'slug',
      current: 'amanda-chris-winter-wedding'
    },
    date: '2024-01-15T15:00:00.000Z',
    season: 'winter',
    venue: 'Rum River Barn',
    excerpt: 'An intimate winter ceremony with cozy fires, evergreen accents, and snow-kissed romance.',
    story: 'Amanda and Chris embraced the beauty of winter for their January wedding. With evergreen garlands, warm candlelight, and a cozy fireplace, their celebration felt like a winter fairy tale. The fresh snow outside created a stunning backdrop for their romantic photos.',
    photographerCredit: 'Nordic Light Photography',
    featured: false,
    published: true
  }
]

async function addSampleWeddings() {
  try {
    console.log('Adding sample wedding blogs to Sanity...')
    
    for (const wedding of sampleWeddings) {
      const result = await client.create(wedding)
      console.log(`✅ Created wedding: ${wedding.title} (ID: ${result._id})`)
    }
    
    console.log('\n🎉 All sample weddings added successfully!')
    console.log('You can now test the API at: https://rum-river-final.netlify.app/test-sanity-api.html')
    
  } catch (error) {
    console.error('❌ Error adding sample weddings:', error)
  }
}

addSampleWeddings()