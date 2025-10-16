export default {
  name: 'heroBlock',
  title: 'Hero Section',
  type: 'object',
  fieldsets: [
    {
      name: 'headline',
      title: '📝 Headline Text',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'mainCta',
      title: '🎯 Main Call to Action',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'floatingCta',
      title: '🔘 Floating CTA (Sticky Button)',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'visual',
      title: '🖼️ Visual Elements',
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    // Headline Text Group
    {
      name: 'scriptAccent',
      title: 'Script Accent',
      type: 'string',
      description: 'Small decorative text above the main headline',
      initialValue: 'Where Dreams Begin',
      fieldset: 'headline'
    },
    {
      name: 'titleLine1',
      title: 'Title Line 1',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Rum River',
      fieldset: 'headline'
    },
    {
      name: 'titleLine2',
      title: 'Title Line 2',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Wedding Barn',
      fieldset: 'headline'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
      initialValue: 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
      fieldset: 'headline'
    },
    
    // Main CTA Group
    {
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Schedule Your Visit',
      fieldset: 'mainCta'
    },
    {
      name: 'ctaLink',
      title: 'Button Link',
      type: 'string',
      initialValue: '/contact',
      fieldset: 'mainCta'
    },
    
    // Visual Elements
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'customImage',
      validation: Rule => Rule.required(),
      description: '🎨 High quality image - recommended 1920px wide minimum',
      fieldset: 'visual'
    },
    {
      name: 'scrollText',
      title: 'Scroll Indicator Text',
      type: 'string',
      description: 'Text shown with the scroll arrow at bottom of hero',
      initialValue: 'Discover Your Perfect Day',
      fieldset: 'visual'
    },
    
    // Floating CTA Group
    {
      name: 'showFloatingCta',
      title: 'Enable Floating CTA?',
      type: 'boolean',
      initialValue: true,
      description: 'Shows a sticky button when user scrolls past the hero',
      fieldset: 'floatingCta'
    },
    {
      name: 'floatingCtaText',
      title: 'Floating Button Text',
      type: 'string',
      initialValue: 'Schedule Your Tour',
      fieldset: 'floatingCta',
      hidden: ({parent}) => !parent?.showFloatingCta
    },
    {
      name: 'floatingCtaIcon',
      title: 'Floating Button Icon',
      type: 'string',
      options: {
        list: [
          {title: '📅 Calendar', value: 'calendar'},
          {title: '📞 Phone', value: 'phone'},
          {title: '✉️ Email', value: 'email'},
          {title: '❤️ Heart', value: 'heart'}
        ],
        layout: 'dropdown'
      },
      initialValue: 'calendar',
      fieldset: 'floatingCta',
      hidden: ({parent}) => !parent?.showFloatingCta
    }
  ],
  preview: {
    select: {
      title: 'titleLine1',
      subtitle: 'titleLine2',
      media: 'backgroundImage'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Hero: ${title} ${subtitle}`,
        media: selection.media
      }
    }
  }
}