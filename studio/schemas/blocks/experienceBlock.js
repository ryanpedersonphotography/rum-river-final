export default {
  name: 'experienceBlock',
  title: 'Experience Section',
  type: 'object',
  fields: [
    {
      name: 'scriptAccent',
      title: 'Script Accent',
      type: 'string',
      initialValue: 'The Rum River Experience'
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'More Than a Venue'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue: 'We don\'t just provide a space—we create an experience. From your first visit to your last dance, our dedicated team ensures every detail reflects your unique love story.'
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
      initialValue: 'section-blush'
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Content Left, Image Right', value: 'content-left'},
          {title: 'Image Left, Content Right', value: 'image-left'}
        ]
      },
      initialValue: 'content-left'
    },
    {
      name: 'features',
      title: 'Experience Features',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'experienceFeature'}]
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'image',
      title: 'Section Image',
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
      initialValue: 'Wedding Celebration'
    }
  ],
  preview: {
    select: {
      title: 'title',
      featureCount: 'features',
      media: 'image'
    },
    prepare(selection) {
      const {title, featureCount} = selection
      const count = featureCount ? featureCount.length : 0
      return {
        title: `Experience: ${title}`,
        subtitle: `${count} features`,
        media: selection.media
      }
    }
  }
}