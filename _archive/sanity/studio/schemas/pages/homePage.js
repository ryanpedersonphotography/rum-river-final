export default {
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  icon: () => '🏠',
  
  // Strict field validation to prevent unknown fields at publish time
  validation: Rule => Rule.custom((doc) => {
    if (!doc) return true
    
    const allowedFields = new Set([
      '_id', '_type', '_rev', '_createdAt', '_updatedAt',
      'title', 'hero', 'venueDiscovery', 'featureBlocks',
      'loveStories', 'experience', 'testimonials', 'scheduleTour', 'seo'
    ])
    
    const unknownFields = Object.keys(doc).filter(key => !allowedFields.has(key))
    
    if (unknownFields.length > 0) {
      return `Unknown fields detected: ${unknownFields.join(', ')}. These must be removed before publishing. Run: npm run cleanup:fields`
    }
    
    return true
  }),
  
  groups: [
    {
      name: 'hero',
      title: '🎯 Hero Section',
      default: true
    },
    {
      name: 'content',
      title: '📝 Main Content'
    },
    {
      name: 'social',
      title: '💬 Social Proof'
    },
    {
      name: 'cta',
      title: '🎬 Call to Action'
    },
    {
      name: 'seo',
      title: '🔍 SEO'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage',
      validation: Rule => Rule.required(),
      hidden: false,
      readOnly: true
    },
    
    // Hero Section Group
    {
      name: 'hero',
      title: '🏔️ Hero Section',
      description: 'The main hero banner that visitors see first',
      type: 'heroBlock',
      group: 'hero',
      validation: Rule => Rule.required(),
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    
    // Main Content Group
    {
      name: 'venueDiscovery',
      title: '🏛️ Venue Discovery',
      description: 'Showcase your venue spaces with interactive discovery',
      type: 'venueDiscoveryBlock',
      group: 'content',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'featureBlocks',
      title: '✨ Why Choose Us',
      description: 'Highlight your unique selling points and features',
      type: 'featureBlocksBlock',
      group: 'content',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'experience',
      title: '🎯 Experience Section',
      description: 'Describe the experience couples can expect',
      type: 'experienceBlock',
      group: 'content',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    
    // Social Proof Group
    {
      name: 'loveStories',
      title: '💑 Love Stories Gallery',
      description: 'Showcase real weddings and celebrations',
      type: 'galleryBlock',
      group: 'social',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'testimonials',
      title: '💬 Testimonials',
      description: 'Reviews and testimonials from happy couples',
      type: 'testimonialsBlock',
      group: 'social',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    
    // CTA Group
    {
      name: 'scheduleTour',
      title: '📅 Schedule Tour Form',
      description: 'Bottom of page form for scheduling tours',
      type: 'formBlock',
      group: 'cta',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    
    // SEO Group
    {
      name: 'seo',
      title: 'SEO Settings',
      description: 'Meta tags, keywords, and social sharing settings',
      type: 'seoSettings',
      group: 'seo',
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
    preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title || 'home Page',
        subtitle: 'Main landing page',
        media: () => '🏠'
      }
    }
  }

}