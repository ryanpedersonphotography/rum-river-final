export default {
  name: 'thankYouPage',
  title: 'Thank You Page',
  type: 'document',
  icon: () => '🙏',
  groups: [
    {
      name: 'hero',
      title: '🎆 Hero Section',
      default: true
    },
    {
      name: 'content',
      title: '📨 Page Content'
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
      initialValue: 'Thank You!',
      validation: Rule => Rule.required(),
      hidden: false,
      readOnly: true
    },
    {
      name: 'hero',
      title: '🎆 Hero Banner',
      description: 'Thank you message header',
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
          initialValue: 'Thank You!'
        },
        {
          name: 'lead',
          title: 'Hero Lead Text',
          type: 'text',
          rows: 2,
          initialValue: 'We\'ve received your message and will be in touch soon!'
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
      name: 'content',
      title: '📨 Page Content',
      description: 'Thank you message and next steps',
      type: 'object',
      group: 'content',
      options: {
        collapsible: true,
        collapsed: false
      },
      fields: [
        {
          name: 'message',
          title: 'Thank You Message',
          type: 'richText'
        },
        {
          name: 'nextSteps',
          title: 'Next Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'step',
                  title: 'Step',
                  type: 'string'
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
        }
      ]
    },
    {
      name: 'contactInfo',
      title: '📞 Contact Information',
      description: 'Optional contact details to display',
      type: 'object',
      group: 'content',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'showContactInfo',
          title: 'Show Contact Info',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          initialValue: '(320) 444-0070',
          hidden: ({ parent }) => !parent?.showContactInfo
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'wedding@rumriverbarn.com',
          hidden: ({ parent }) => !parent?.showContactInfo
        }
      ]
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
        title: title || 'thankYou Page',
        subtitle: 'Thank you confirmation',
        media: () => '🙏'
      }
    }
  }

}