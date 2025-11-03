export default {
  name: 'eventBlock',
  type: 'object',
  title: 'Event Block',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Event Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Event Description',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      type: 'array',
      title: 'Event Features',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'ctaText',
      type: 'string',
      title: 'CTA Button Text',
      initialValue: 'Learn More'
    },
    {
      name: 'ctaLink',
      type: 'string',
      title: 'CTA Button Link',
      initialValue: '/contact'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Event Image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ]
    },
    {
      name: 'sectionStyle',
      type: 'string',
      title: 'Section Style',
      options: {
        list: [
          { title: 'Dark Gradient', value: 'dark-gradient-section' },
          { title: 'Warm', value: 'section-warm' },
          { title: 'Cream', value: 'section-cream' },
          { title: 'White', value: 'section-white' }
        ]
      },
      initialValue: 'dark-gradient-section'
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout Direction',
      options: {
        list: [
          { title: 'Content Left', value: 'normal' },
          { title: 'Content Right', value: 'reverse' }
        ]
      },
      initialValue: 'normal'
    }
  ]
}