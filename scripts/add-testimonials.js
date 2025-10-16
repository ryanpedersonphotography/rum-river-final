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

async function addTestimonialsSection() {
  console.log('💕 Adding Testimonials section to Homepage...')

  // Get existing homepage
  const homepage = await client.fetch('*[_type == "page" && _id == "homepage"][0]')
  if (!homepage) {
    throw new Error('Homepage not found')
  }

  // Testimonials section with inline testimonials (not references for now)
  const testimonialsSection = {
    _type: 'testimonialsBlock',
    _key: 'testimonials',
    scriptAccent: 'Love Letters',
    title: 'What Couples Say',
    sectionClassName: 'testimonials-section section section-cream',
    testimonialsType: 'inline', // Use inline testimonials for simplicity
    inlineTestimonials: [
      {
        _type: 'inlineTestimonial',
        _key: 'sarah-michael',
        quote: 'From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.',
        authorName: 'Sarah & Michael Johnson',
        authorDetail: 'Married October 2024'
      },
      {
        _type: 'inlineTestimonial',
        _key: 'emma-james',
        quote: 'We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for.',
        authorName: 'Emma & James Wilson',
        authorDetail: 'Married June 2024'
      },
      {
        _type: 'inlineTestimonial',
        _key: 'amanda-chris',
        quote: 'The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn\'t have asked for more.',
        authorName: 'Amanda & Chris Thompson',
        authorDetail: 'Married February 2024'
      }
    ]
  }

  // Update homepage
  const updatedHomepage = {
    ...homepage,
    contentBlocks: [
      ...homepage.contentBlocks,
      testimonialsSection
    ]
  }

  try {
    const result = await client.createOrReplace(updatedHomepage)
    console.log('✅ Added Testimonials section with 3 testimonials')
    return result
  } catch (error) {
    console.error('❌ Error adding testimonials:', error)
    throw error
  }
}

// Run the script
addTestimonialsSection()
  .then(() => {
    console.log('🎉 Testimonials section added!')
    console.log('💕 Added: "Love Letters" testimonials section')
  })
  .catch(console.error)