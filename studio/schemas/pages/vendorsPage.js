export default {
  name: 'vendorsPage',
  title: 'Vendors Page',
  type: 'document',
  icon: () => '🤝',
  groups: [
    {
      name: 'hero',
      title: '🌟 Hero Section',
      default: true
    },
    {
      name: 'vendors',
      title: '📋 Vendor Directory'
    },
    {
      name: 'cta',
      title: '📢 Call to Action'
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
      initialValue: 'Preferred Vendor Directory',
      validation: Rule => Rule.required(),
      hidden: false,
      readOnly: true
    },
    {
      name: 'hero',
      title: '🎆 Hero Banner',
      description: 'Introduction to vendor partners',
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
          initialValue: 'Preferred Vendor Directory'
        },
        {
          name: 'lead',
          title: 'Hero Lead Text',
          type: 'text',
          rows: 2,
          initialValue: 'Our carefully curated list of trusted wedding professionals who understand our venue and share our commitment to making your day perfect.'
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
      name: 'vendorCategories',
      title: '📋 Vendor Categories',
      description: 'Organize vendors by service type (DJ, Catering, Photography, etc.)',
      type: 'array',
      group: 'vendors',
      options: {
        collapsible: false
      },
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Category Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              options: {
                list: [
                  { title: 'Music', value: 'music' },
                  { title: 'Cake', value: 'cake' },
                  { title: 'Sparkles', value: 'sparkles' },
                  { title: 'Truck', value: 'truck' },
                  { title: 'Building', value: 'building' },
                  { title: 'Camera', value: 'camera' },
                  { title: 'Heart', value: 'heart' }
                ]
              }
            },
            {
              name: 'vendors',
              title: 'Vendors',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Vendor Name',
                      type: 'string',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'phone',
                      title: 'Phone Number',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      rows: 2
                    },
                    {
                      name: 'website',
                      title: 'Website',
                      type: 'url'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'contactCta',
      title: '📢 Contact CTA',
      description: 'Bottom call-to-action section',
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
        title: title || 'vendors Page',
        subtitle: 'Preferred vendor partners',
        media: () => '🤝'
      }
    }
  }

}