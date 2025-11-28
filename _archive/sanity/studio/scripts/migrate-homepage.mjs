import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
dotenv.config()

const client = createClient({
  projectId: 'vicw6cgb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

// Just copy everything directly - no references, no complexity
const homePageData = {
  _id: 'homePage',
  _type: 'homePage',
  title: 'Homepage',
  
  // Hero Section - just copy what's there
  hero: {
    _type: 'heroBlock',
    scriptAccent: 'Where Dreams Begin',
    titleLine1: 'Rum River',
    titleLine2: 'Wedding Barn',
    description: "Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.",
    ctaText: 'Schedule Your Visit',
    ctaLink: '/contact',
    ctaStyle: 'primary',
    floatingCtaEnabled: true,
    floatingCtaText: 'Schedule Your Tour',
    floatingCtaLink: '#lets-connect-form',
    backgroundImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-hero-barn'
      },
      alt: 'Rum River Barn hero image'
    }
  },

  // Venue Discovery - just basic text, venues can be added later
  venueDiscovery: {
    _type: 'venueDiscoveryBlock',
    scriptAccent: 'Your Perfect Setting',
    title: 'Discover Our Spaces',
    description: 'Every corner tells a story, every space creates memories',
    sectionStyle: 'section-cream'
    // Skipping venue references for now
  },

  // Feature Blocks - copy all the "Why Choose Us" content
  featureBlocks: {
    _type: 'featureBlocksBlock',
    scriptAccent: 'Your Perfect Venue',
    title: 'Why Choose Rum River Barn',
    lead: 'Discover what makes our venue the perfect setting for your unforgettable celebration',
    blocks: [
      {
        _key: 'historic-charm',
        _type: 'featureBlock',
        icon: 'sparkles',
        title: 'Historic Charm',
        description: 'A beautifully restored 1940s barn featuring original timber beams, soaring ceilings, and authentic rustic character that creates an unforgettable atmosphere.'
      },
      {
        _key: 'all-season',
        _type: 'featureBlock',
        icon: 'calendar',
        title: 'All-Season Comfort',
        description: 'Climate-controlled spaces ensure your guests are comfortable year-round, from intimate winter ceremonies to grand summer celebrations under the stars.'
      },
      {
        _key: 'natural-beauty',
        _type: 'featureBlock',
        icon: 'sparkles',
        title: 'Natural Beauty',
        description: 'Set on acres of picturesque Minnesota countryside with manicured gardens, vineyard views, and scenic photo opportunities at every turn.'
      },
      {
        _key: 'full-service',
        _type: 'featureBlock',
        icon: 'heart',
        title: 'Full Service Support',
        description: 'Our experienced team handles every detail, from setup to cleanup, working with trusted vendors to bring your vision to life seamlessly.'
      }
    ]
  },

  // Love Stories Gallery - just copy the text
  loveStories: {
    _type: 'galleryBlock',
    scriptAccent: 'Real Love Stories',
    title: 'Weddings at the Barn',
    lead: 'Every celebration tells a unique story of love, laughter, and happily ever after.',
    viewAllText: 'View All Real Weddings',
    viewAllLink: '/real-weddings'
    // Skip wedding references for now
  },

  // Experience Section
  experience: {
    _type: 'experienceBlock',
    scriptAccent: 'The Rum River Experience',
    title: 'More Than a Venue',
    description: "We don't just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.",
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-experience'
      },
      alt: 'Rum River Barn experience'
    },
    features: [
      {
        _key: 'personal-coordinator',
        _type: 'experienceFeature',
        icon: 'users',
        title: 'Personal Coordinator',
        description: 'Dedicated support from booking to "I do"'
      },
      {
        _key: 'vendor-network',
        _type: 'experienceFeature',
        icon: 'globe',
        title: 'Vendor Network',
        description: 'Trusted professionals who know our venue'
      },
      {
        _key: 'custom-layouts',
        _type: 'experienceFeature',
        icon: 'template',
        title: 'Custom Layouts',
        description: 'Flexible spaces for your unique vision'
      },
      {
        _key: 'worry-free',
        _type: 'experienceFeature',
        icon: 'shield-check',
        title: 'Worry-Free Day',
        description: 'We handle the details, you make memories'
      }
    ]
  },

  // Testimonials - just embed a few directly
  testimonials: {
    _type: 'testimonialsBlock',
    scriptAccent: 'Love Letters',
    title: 'What Couples Say',
    sectionTheme: 'dark',
    testimonials: [
      {
        _key: 'sarah-michael',
        _type: 'testimonial',
        quote: 'From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical!',
        author: 'Sarah & Michael Johnson',
        detail: 'Married October 2024',
        rating: 5
      },
      {
        _key: 'emma-james',
        _type: 'testimonial',
        quote: 'The perfect blend of rustic charm and elegance. Our guests are still talking about how beautiful everything was.',
        author: 'Emma & James Wilson',
        detail: 'Married June 2024',
        rating: 5
      },
      {
        _key: 'amanda-chris',
        _type: 'testimonial',
        quote: 'The staff went above and beyond to make our winter wedding absolutely magical. We couldn\'t have asked for more.',
        author: 'Amanda & Chris Thompson',
        detail: 'Married February 2024',
        rating: 5
      },
      {
        _key: 'jennifer-david',
        _type: 'testimonial',
        quote: 'The vineyard backdrop for our ceremony was breathtaking! This venue is a photographer\'s dream.',
        author: 'Jennifer & David Martinez',
        detail: 'Married September 2024',
        rating: 5
      }
    ]
  },

  // Schedule Tour Form
  scheduleTour: {
    _type: 'formBlock',
    formName: 'lets-connect',
    title: 'Start Your Journey',
    subtitle: 'Let\'s Connect',
    description: 'Ready to see how Rum River Barn can make your wedding dreams come true? Schedule a tour today and let\'s start planning your perfect day.',
    submitText: 'Schedule Your Tour',
    loadingText: 'SUBMITTING YOUR REQUEST...',
    formType: 'schedule-tour',
    lightTheme: false,
    sectionStyle: 'contact-info-section'
  },

  // SEO Settings
  seo: {
    _type: 'seoSettings',
    metaTitle: 'Rum River Wedding Barn | Premier Minnesota Wedding Venue | Hillman MN',
    metaDescription: 'Discover Minnesota\'s premier wedding venue. Rum River Barn offers rustic elegance, all-season comfort, and unforgettable celebrations in Hillman, MN. Schedule your tour today!',
    keywords: [
      'Minnesota wedding venue',
      'barn wedding Minnesota',
      'Rum River Barn',
      'Hillman MN wedding',
      'rustic wedding venue',
      'outdoor wedding Minnesota',
      'all-season wedding venue'
    ]
  }
}

async function migrateHomePage() {
  try {
    console.log('Starting HomePage migration...')
    
    const result = await client.createOrReplace(homePageData)
    
    console.log('✅ HomePage successfully migrated!')
    console.log(`Document ID: ${result._id}`)
    console.log('\nContent summary:')
    console.log('  - Hero section')
    console.log('  - Venue discovery')
    console.log('  - 4 Feature blocks')
    console.log('  - Love stories gallery')
    console.log('  - Experience section with 4 features')
    console.log('  - 4 Testimonials')
    console.log('  - Schedule tour form')
    console.log('  - SEO settings')
    
  } catch (error) {
    console.error('❌ Error migrating HomePage:', error)
  }
}

migrateHomePage()