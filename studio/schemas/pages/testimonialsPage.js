export default {
  name: 'testimonialsPage',
  title: 'Testimonials Page',
  type: 'document',
  icon: () => '💬',
  groups: [
    {
      name: 'hero',
      title: '🌟 Hero Section',
      default: true
    },
    {
      name: 'testimonials',
      title: '💌 Display Settings'
    },
    {
      name: 'cta',
      title: '🎉 Call to Action'
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
      initialValue: 'Love Letters',
      validation: Rule => Rule.required(),
      hidden: false,
      readOnly: true
    },
    {
      name: 'hero',
      title: '💕 Hero Banner',
      description: 'Love letters page introduction',
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
          initialValue: 'Love Letters'
        },
        {
          name: 'lead',
          title: 'Hero Lead Text',
          type: 'text',
          rows: 2,
          initialValue: 'What our couples are saying about their special day at Rum River Barn'
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
      name: 'testimonialDisplay',
      title: '💌 Testimonial Display',
      description: 'Configure how testimonials are shown',
      type: 'object',
      group: 'testimonials',
      options: {
        collapsible: true,
        collapsed: false
      },
      fields: [
        {
          name: 'layout',
          title: 'Layout Style',
          type: 'string',
          options: {
            list: [
              { title: 'Grid', value: 'grid' },
              { title: 'Carousel', value: 'carousel' },
              { title: 'Masonry', value: 'masonry' }
            ]
          },
          initialValue: 'grid'
        },
        {
          name: 'showAll',
          title: 'Show All Testimonials',
          type: 'boolean',
          initialValue: true,
          description: 'Show all testimonials or select specific ones'
        },
        {
          name: 'featured',
          title: 'Featured Testimonials',
          type: 'array',
          of: [{ 
            type: 'reference',
            to: [{ type: 'testimonial' }]
          }],
          hidden: ({ parent }) => parent?.showAll
        }
      ]
    },
    {
      name: 'ctaSection',
      title: '🎉 CTA Section',
      description: 'Bottom call-to-action',
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
        title: title || 'testimonials Page',
        subtitle: 'Reviews from happy couples',
        media: () => '💬'
      }
    }
  }

}