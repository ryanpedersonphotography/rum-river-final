export default {
  name: 'featureBlock',
  title: 'Feature Block',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'string',
      description: 'Display number (e.g. "01", "02")',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'lead',
      title: 'Lead Text',
      type: 'string',
      description: 'Subtitle or lead text under the title'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'richText',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Feature Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'reverse',
      title: 'Reverse Layout',
      type: 'boolean',
      initialValue: false,
      description: 'Show image on the left side instead of right'
    },
    {
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string'
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string'
        },
        {
          name: 'style',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              {title: 'Primary', value: 'primary'},
              {title: 'Secondary', value: 'secondary'},
              {title: 'Outline', value: 'outline'}
            ]
          },
          initialValue: 'primary'
        }
      ]
    },
    {
      name: 'highlights',
      title: 'Text Highlights',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Words or phrases to bold/highlight in the content (e.g. phone numbers)'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(0),
      initialValue: 0
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
      title: 'Number Order',
      name: 'numberAsc',
      by: [
        {field: 'number', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'lead',
      number: 'number',
      media: 'image'
    },
    prepare(selection) {
      const {title, subtitle, number} = selection
      return {
        title: `${number}. ${title}`,
        subtitle: subtitle || 'No lead text',
        media: selection.media
      }
    }
  }
}