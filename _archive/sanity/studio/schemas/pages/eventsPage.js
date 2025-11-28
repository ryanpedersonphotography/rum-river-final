export default {
  name: 'eventsPage',
  title: 'Events Page',
  type: 'document',
  icon: () => '🎉',
  groups: [
    {
      name: 'hero',
      title: '🎯 Hero Section',
      default: true
    },
    {
      name: 'events',
      title: '🎊 Event Types'
    },
    {
      name: 'cta',
      title: '📅 Bottom CTA'
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
      initialValue: 'Events & Celebrations',
      validation: Rule => Rule.required(),
      hidden: false,
      readOnly: true
    },
    {
      name: 'hero',
      title: '🏔️ Hero Section',
      description: 'The main banner for the events page',
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
          initialValue: 'Events & Celebrations'
        },
        {
          name: 'lead',
          title: 'Hero Lead Text',
          type: 'text',
          rows: 2,
          initialValue: 'From intimate gatherings to grand celebrations, our historic barn venue creates unforgettable memories for every occasion'
        },
        {
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'eventTypes',
      title: '🎪 Event Types',
      description: 'Add different event categories (Weddings, Birthdays, Corporate, etc.)',
      type: 'array',
      of: [{ type: 'eventBlock' }],
      group: 'events',
      validation: Rule => Rule.required().min(1),
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'scheduleTourForm',
      title: '📝 Schedule Tour Form',
      description: 'Bottom of page contact form',
      type: 'formBlock',
      group: 'cta',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      description: 'Meta tags and search optimization',
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
        title: title || 'events Page',
        subtitle: 'Weddings and special events',
        media: () => '🎉'
      }
    }
  }

}