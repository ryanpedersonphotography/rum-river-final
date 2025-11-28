export default {
  name: 'galleryBlock',
  title: 'Gallery Section',
  type: 'object',
  fields: [
    {
      name: 'scriptAccent',
      title: 'Script Accent',
      type: 'string',
      initialValue: 'Real Love Stories'
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Weddings at the Barn'
    },
    {
      name: 'lead',
      title: 'Lead Text',
      type: 'text',
      rows: 2,
      initialValue: 'Every celebration tells a unique story of love, laughter, and happily ever after.'
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
      name: 'galleryType',
      title: 'Gallery Type',
      type: 'string',
      options: {
        list: [
          {title: 'Wedding Blogs', value: 'weddings'},
          {title: 'Custom Images', value: 'images'}
        ]
      },
      initialValue: 'weddings'
    },
    {
      name: 'featuredWeddings',
      title: 'Featured Weddings',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'weddingBlog'}]
        }
      ],
      hidden: ({parent}) => parent?.galleryType !== 'weddings',
      description: 'Leave empty to show latest featured weddings'
    },
    {
      name: 'maxWeddings',
      title: 'Max Weddings to Show',
      type: 'number',
      initialValue: 6,
      validation: Rule => Rule.min(1).max(12),
      hidden: ({parent}) => parent?.galleryType !== 'weddings'
    },
    {
      name: 'customImages',
      title: 'Custom Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'title',
              title: 'Image Title',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
              description: 'Optional link when image is clicked'
            }
          ]
        }
      ],
      hidden: ({parent}) => parent?.galleryType !== 'images'
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      initialValue: 'View All Real Weddings'
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      initialValue: '/real-weddings'
    },
    {
      name: 'showCta',
      title: 'Show Call to Action',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title',
      galleryType: 'galleryType'
    },
    prepare(selection) {
      const {title, galleryType} = selection
      return {
        title: `Gallery: ${title}`,
        subtitle: `Type: ${galleryType}`
      }
    }
  }
}