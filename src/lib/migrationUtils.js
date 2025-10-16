import { localHomePageContent } from './localContent'

/**
 * Migration utilities for converting existing content to Sanity format
 */

/**
 * Convert local HomePage content to Sanity page structure
 */
export function convertHomePageToSanityFormat() {
  const { hero, featureBlocks, experience, loveStories, testimonials } = localHomePageContent

  return {
    _type: 'page',
    _id: 'homepage',
    title: 'Homepage',
    slug: { current: 'homepage' },
    seo: {
      metaTitle: 'Rum River Wedding Barn - Minnesota\'s Premier Wedding Venue',
      metaDescription: 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
      keywords: ['wedding venue', 'Minnesota wedding', 'barn wedding', 'rustic wedding', 'Rum River'],
    },
    contentBlocks: [
      // Hero Block
      {
        _type: 'heroBlock',
        scriptAccent: hero.scriptAccent,
        titleLine1: hero.titleLine1,
        titleLine2: hero.titleLine2,
        description: hero.description,
        ctaText: hero.ctaText,
        ctaLink: hero.ctaLink,
        scrollText: 'Discover Your Perfect Day',
        showFloatingCta: true,
        floatingCtaText: 'Schedule Your Tour',
        floatingCtaIcon: 'calendar'
      },
      
      // Venue Discovery Block
      {
        _type: 'venueDiscoveryBlock',
        scriptAccent: 'Your Perfect Setting',
        title: 'Discover Our Spaces',
        description: 'Every corner tells a story, every space creates memories',
        sectionStyle: 'section-cream'
      },
      
      // Feature Blocks
      {
        _type: 'featureBlocksBlock',
        scriptAccent: featureBlocks.scriptAccent,
        title: featureBlocks.title,
        lead: featureBlocks.lead,
        sectionStyle: 'alternating-blocks',
        centerContent: true,
        blocks: featureBlocks.blocks.map(block => ({
          _type: 'reference',
          _ref: `feature-block-${block.number}`,
          // This would reference actual feature block documents
        }))
      },
      
      // Gallery Block (Love Stories)
      {
        _type: 'galleryBlock',
        scriptAccent: loveStories.scriptAccent,
        title: loveStories.title,
        lead: loveStories.lead,
        sectionStyle: 'section-cream',
        galleryType: 'weddings',
        maxWeddings: 6,
        ctaText: 'View All Real Weddings',
        ctaLink: '/real-weddings',
        showCta: true
      },
      
      // Experience Block
      {
        _type: 'experienceBlock',
        scriptAccent: experience.scriptAccent,
        title: experience.title,
        description: experience.description,
        sectionStyle: 'section-blush',
        layout: 'content-left',
        features: experience.features.map(feature => ({
          _type: 'reference',
          _ref: `experience-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`,
          // This would reference actual experience feature documents
        })),
        imageAlt: 'Wedding Celebration'
      },
      
      // Testimonials Block
      {
        _type: 'testimonialsBlock',
        scriptAccent: testimonials.scriptAccent,
        title: testimonials.title,
        sectionStyle: 'section-cream',
        maxTestimonials: 3,
        showStarRating: true,
        starCount: 5,
        layout: 'grid'
      },
      
      // Form Block
      {
        _type: 'formBlock',
        title: 'Start Planning Your Perfect Day',
        subtitle: 'Schedule Your Tour',
        description: 'We\'d love to show you around our beautiful venue and discuss your wedding vision.',
        formType: 'tour',
        formName: 'home-schedule-tour',
        submitText: 'Schedule Tour',
        loadingText: 'SCHEDULING...',
        redirectPath: '/thank-you',
        sectionStyle: 'cta-contact-section',
        lightTheme: false,
        showHeader: true
      }
    ]
  }
}

/**
 * Convert feature blocks to Sanity documents
 */
export function convertFeatureBlocksToSanityDocs() {
  const { featureBlocks } = localHomePageContent
  
  return featureBlocks.blocks.map(block => ({
    _type: 'featureBlock',
    _id: `feature-block-${block.number}`,
    number: block.number,
    title: block.title,
    lead: block.lead,
    content: convertTextToRichText(block.content),
    imageAlt: block.imageAlt,
    reverse: block.reverse || false,
    highlights: ['612-801-0546'], // Phone numbers to highlight
    order: parseInt(block.number)
  }))
}

/**
 * Convert experience features to Sanity documents
 */
export function convertExperienceFeaturesToSanityDocs() {
  const { experience } = localHomePageContent
  
  const iconMap = {
    'All-Inclusive Planning': 'check',
    'Customizable Packages': 'sparkles',
    'Historic Charm': 'home'
  }
  
  return experience.features.map((feature, index) => ({
    _type: 'experienceFeature',
    _id: `experience-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`,
    title: feature.title,
    description: feature.description,
    icon: iconMap[feature.title] || 'check',
    iconColor: 'primary',
    iconSize: 'lg',
    order: index,
    featured: false
  }))
}

/**
 * Convert testimonials to Sanity documents
 */
export function convertTestimonialsToSanityDocs() {
  const { testimonials } = localHomePageContent
  
  return testimonials.items.map((testimonial, index) => ({
    _type: 'testimonial',
    _id: `testimonial-${index + 1}`,
    quote: testimonial.quote,
    authorName: testimonial.authorName,
    authorDetail: testimonial.authorDetail,
    eventType: 'wedding',
    rating: 5,
    featured: index < 3, // First 3 are featured
    approved: true,
    source: 'direct'
  }))
}

/**
 * Convert plain text to Sanity rich text format
 */
function convertTextToRichText(text) {
  if (!text) return []
  
  const paragraphs = text.split('\n\n')
  
  return paragraphs.map(paragraph => ({
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: paragraph.trim()
      }
    ]
  }))
}

/**
 * Generate migration script for Sanity Studio
 */
export function generateMigrationScript() {
  const homePage = convertHomePageToSanityFormat()
  const featureBlocks = convertFeatureBlocksToSanityDocs()
  const experienceFeatures = convertExperienceFeaturesToSanityDocs()
  const testimonials = convertTestimonialsToSanityDocs()
  
  return {
    pages: [homePage],
    featureBlocks,
    experienceFeatures,
    testimonials,
    siteSettings: {
      _type: 'siteSettings',
      _id: 'site-settings',
      title: 'Rum River Wedding Barn',
      description: 'Minnesota\'s premier wedding venue featuring rustic charm and modern elegance',
      url: 'https://rumriverweddingbarn.com',
      contactInfo: {
        phone: '612-801-0546',
        email: 'info@rumriverweddingbarn.com',
        address: 'Princeton, MN'
      },
      defaultSeo: {
        metaTitle: 'Rum River Wedding Barn - Minnesota\'s Premier Wedding Venue',
        metaDescription: 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
        keywords: ['wedding venue', 'Minnesota wedding', 'barn wedding', 'rustic wedding', 'Rum River']
      }
    }
  }
}

/**
 * Migration steps for developers
 */
export const MIGRATION_STEPS = [
  {
    step: 1,
    title: 'Set up Sanity Studio',
    description: 'Run `npm run sanity:dev` to start the Sanity Studio',
    command: 'npm run sanity:dev'
  },
  {
    step: 2,
    title: 'Create initial documents',
    description: 'Use the migration script to create base content in Sanity Studio',
    action: 'manual'
  },
  {
    step: 3,
    title: 'Update HomePage to use PageRenderer',
    description: 'Replace HomePage.jsx content with PageRenderer component',
    files: ['src/pages/HomePage.jsx']
  },
  {
    step: 4,
    title: 'Update EventsPage to use PageRenderer',
    description: 'Convert EventsPage.jsx to use Sanity blocks',
    files: ['src/pages/EventsPage.jsx']
  },
  {
    step: 5,
    title: 'Update routing',
    description: 'Update App.jsx to handle new page structure',
    files: ['src/App.jsx']
  },
  {
    step: 6,
    title: 'Test and validate',
    description: 'Ensure all functionality works with new CMS integration',
    action: 'testing'
  }
]