export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: () => '📧',
  groups: [
    {
      name: 'hero',
      title: '🌟 Hero Section',
      default: true
    },
    {
      name: 'tours',
      title: '🥽 Virtual Tours'
    },
    {
      name: 'info',
      title: '📍 Contact Info'
    },
    {
      name: 'form',
      title: '📨 Contact Form'
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
      initialValue: 'Get in Touch',
      validation: Rule => Rule.required(),
      hidden: false,
      readOnly: true
    },
    {
      name: 'hero',
      title: '🌆 Hero Banner',
      description: 'Welcome message for contact page',
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
          initialValue: 'Get in Touch'
        },
        {
          name: 'lead',
          title: 'Hero Lead Text',
          type: 'text',
          rows: 2,
          initialValue: 'We\'d love to hear from you! Reach out to schedule a tour, ask questions, or start planning your special day.'
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
      name: 'virtualTours',
      title: '🥽 Virtual Tours Section',
      description: '3D tours and virtual walkthroughs',
      type: 'object',
      group: 'tours',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Virtual 3D Tours'
        },
        {
          name: 'scriptAccent',
          title: 'Script Accent',
          type: 'string',
          initialValue: 'Take a Peek Inside'
        },
        {
          name: 'lead',
          title: 'Section Lead',
          type: 'text',
          rows: 2,
          initialValue: 'Explore our beautiful spaces before your visit with immersive virtual tours'
        },
        {
          name: 'tours',
          title: 'Virtual Tours',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Tour Title',
                  type: 'string'
                },
                {
                  name: 'description',
                  title: 'Tour Description',
                  type: 'text',
                  rows: 3
                },
                {
                  name: 'tourUrl',
                  title: 'Tour URL',
                  type: 'url'
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'string'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'contactInfo',
      title: '📍 Contact Information',
      description: 'Address, phone, and email details',
      type: 'object',
      group: 'info',
      options: {
        collapsible: true,
        collapsed: false
      },
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'string',
          initialValue: '14554 94th St, Milaca, MN 56353'
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          initialValue: '(320) 444-0070'
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'wedding@rumriverbarn.com'
        }
      ]
    },
    {
      name: 'contactForm',
      title: '📨 Contact Form',
      description: 'Main contact form configuration',
      type: 'formBlock',
      group: 'form',
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
        title: title || 'contact Page',
        subtitle: 'Get in touch with us',
        media: () => '📧'
      }
    }
  }

}