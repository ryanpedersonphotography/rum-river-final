export default {
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',
  icon: () => '📸',
  groups: [
    {
      name: 'hero',
      title: '🌆 Hero Section',
      default: true
    },
    {
      name: 'gallery',
      title: '🖼️ Gallery Settings'
    },
    {
      name: 'cta',
      title: '✨ Call to Action'
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
      initialValue: 'Photo Gallery',
      validation: Rule => Rule.required(),
      hidden: false,
      readOnly: true
    },
    {
      name: 'hero',
      title: '🎅 Hero Banner',
      description: 'Gallery page introduction',
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
          initialValue: 'Photo Gallery'
        },
        {
          name: 'lead',
          title: 'Hero Lead Text',
          type: 'text',
          rows: 2,
          initialValue: 'Browse through beautiful moments captured at Rum River Barn'
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
      name: 'categories',
      title: '📋 Gallery Categories',
      description: 'Organize photos into categories',
      type: 'array',
      group: 'gallery',
      options: {
        collapsible: true,
        collapsed: false
      },
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Category Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'slug',
              title: 'Category Slug',
              type: 'slug',
              options: {
                source: 'name',
                maxLength: 96
              }
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2
            }
          ]
        }
      ]
    },
    {
      name: 'scheduleTourCta',
      title: '📨 Schedule Tour CTA',
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
        title: title || 'gallery Page',
        subtitle: 'Wedding photos and inspiration',
        media: () => '📸'
      }
    }
  }

}