export default {
  name: 'heroBlock',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'scriptAccent',
      title: 'Script Accent',
      type: 'string',
      description: 'Small text above the main headline',
      initialValue: 'Where Dreams Begin'
    },
    {
      name: 'titleLine1',
      title: 'Title Line 1',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Rum River'
    },
    {
      name: 'titleLine2',
      title: 'Title Line 2',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Wedding Barn'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
      initialValue: 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.'
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      initialValue: 'Schedule Your Visit'
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      initialValue: '/contact'
    },
    {
      name: 'scrollText',
      title: 'Scroll Indicator Text',
      type: 'string',
      initialValue: 'Discover Your Perfect Day'
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'customImage',
      validation: Rule => Rule.required(),
      description: 'Hero background image - should be high quality and at least 1920px wide'
    },
    {
      name: 'showFloatingCta',
      title: 'Show Floating CTA',
      type: 'boolean',
      initialValue: true,
      description: 'Show floating CTA button when scrolling past hero'
    },
    {
      name: 'floatingCtaText',
      title: 'Floating CTA Text',
      type: 'string',
      initialValue: 'Schedule Your Tour'
    },
    {
      name: 'floatingCtaIcon',
      title: 'Floating CTA Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Calendar', value: 'calendar'},
          {title: 'Phone', value: 'phone'},
          {title: 'Email', value: 'email'},
          {title: 'Heart', value: 'heart'}
        ]
      },
      initialValue: 'calendar'
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