export default {
  name: 'headerSettings',
  title: 'Header Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for accessibility and SEO'
        }
      ]
    },
    {
      name: 'navigation',
      title: 'Main Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Menu Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'openInNewTab',
              title: 'Open in New Tab',
              type: 'boolean',
              initialValue: false
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'url'
            }
          }
        }
      ]
    },
    {
      name: 'ctaButton',
      title: 'Call-to-Action Button',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Show CTA Button',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Schedule Tour'
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'string',
          initialValue: '/contact'
        },
        {
          name: 'style',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
              { title: 'Outline', value: 'outline' }
            ]
          },
          initialValue: 'primary'
        }
      ]
    },
    {
      name: 'mobileMenu',
      title: 'Mobile Menu Settings',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Enable Mobile Menu',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'breakpoint',
          title: 'Mobile Breakpoint (px)',
          type: 'number',
          initialValue: 768,
          description: 'Screen width below which mobile menu is shown'
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Settings'
      }
    }
  }
}