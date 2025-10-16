export default {
  name: 'historyPage',
  title: 'History Page',
  type: 'document',
  icon: () => '📜',
  groups: [
    {
      name: 'hero',
      title: '🌅 Hero Section',
      default: true
    },
    {
      name: 'history',
      title: '⌛ Timeline & Story'
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
      initialValue: 'Our Story',
      validation: Rule => Rule.required(),
      hidden: false,
      readOnly: true
    },
    {
      name: 'hero',
      title: '🏆 Hero Banner',
      description: 'History page introduction',
      type: 'object',
      group: 'hero',
      options: {
        collapsible: true,
        collapsed: false
      },
      fields: [
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          initialValue: 'Our Story'
        },
        {
          name: 'lead',
          title: 'Hero Lead Text',
          type: 'text',
          rows: 2,
          initialValue: 'A century of memories in the making'
        },
        {
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true }
        }
      ]
    },
    {
      name: 'timeline',
      title: '⏳ Historical Timeline',
      description: 'Key events and milestones',
      type: 'array',
      group: 'history',
      options: {
        collapsible: true,
        collapsed: false
      },
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              title: 'Year',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'title',
              title: 'Event Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3
            },
            {
              name: 'image',
              title: 'Historical Photo',
              type: 'image',
              options: { hotspot: true }
            }
          ]
        }
      ]
    },
    {
      name: 'storyContent',
      title: '📖 Story Content',
      description: 'Full narrative of your history',
      type: 'richText',
      group: 'history',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seoSettings',
      group: 'seo',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
    preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title || 'history Page',
        subtitle: 'Our story and heritage',
        media: () => '📜'
      }
    }
  }

}