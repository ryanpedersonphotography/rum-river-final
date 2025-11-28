export default {
  name: 'venueDiscoveryBlock',
  title: 'Venue Discovery Section',
  type: 'object',
  fields: [
    {
      name: 'scriptAccent',
      title: 'Script Accent',
      type: 'string',
      initialValue: 'Your Perfect Setting'
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Discover Our Spaces'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      initialValue: 'Every corner tells a story, every space creates memories'
    },
    {
      name: 'sectionStyle',
      title: 'Section Style',
      type: 'string',
      options: {
        list: [
          {title: 'Cream Background', value: 'section-cream'},
          {title: 'White Background', value: 'section-white'},
          {title: 'Blush Background', value: 'section-blush'},
          {title: 'Warm Background', value: 'section-warm'}
        ]
      },
      initialValue: 'section-cream'
    },
    {
      name: 'venues',
      title: 'Featured Venues',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'venue'}]
        }
      ],
      description: 'Leave empty to show all venues'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      return {
        title: `Venue Discovery: ${selection.title}`
      }
    }
  }
}