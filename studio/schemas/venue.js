export default {
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Venue Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'key',
      title: 'Venue Key',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required(),
      description: 'Used for URL and internal referencing'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
      validation: Rule => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(0),
      initialValue: 0
    },
    {
      name: 'capacity',
      title: 'Capacity',
      type: 'string',
      description: 'e.g. "Up to 200 guests"',
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of venue features and amenities'
    },
    {
      name: 'lighting',
      title: 'Lighting Description',
      type: 'string',
      description: 'e.g. "Natural light with elegant chandeliers"'
    },
    {
      name: 'climate',
      title: 'Climate Control',
      type: 'string',
      description: 'e.g. "Climate controlled year-round"'
    },
    {
      name: 'images',
      title: 'Venue Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'vrTourUrl',
      title: 'VR Tour URL',
      type: 'url',
      description: 'Optional virtual reality tour link'
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        {
          name: 'length',
          title: 'Length (feet)',
          type: 'number'
        },
        {
          name: 'width',
          title: 'Width (feet)',
          type: 'number'
        },
        {
          name: 'height',
          title: 'Height (feet)',
          type: 'number'
        }
      ]
    },
    {
      name: 'pricing',
      title: 'Pricing Information',
      type: 'object',
      fields: [
        {
          name: 'basePrice',
          title: 'Base Price',
          type: 'number'
        },
        {
          name: 'priceDescription',
          title: 'Price Description',
          type: 'string',
          description: 'e.g. "Starting at $X per day"'
        }
      ]
    },
    {
      name: 'availability',
      title: 'Availability Notes',
      type: 'text',
      rows: 3,
      description: 'Special availability notes or restrictions'
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'capacity',
      media: 'images.0'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle: subtitle || 'No capacity specified',
        media: selection.media
      }
    }
  }
}