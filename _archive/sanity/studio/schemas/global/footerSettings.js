export default {
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    // Brand Section
    {
      name: 'brandSection',
      title: 'Brand Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Brand Title',
          type: 'string',
          initialValue: 'Rum River Wedding Barn'
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'text',
          rows: 2,
          initialValue: "Minnesota's premier wedding venue\nwhere dreams come to life"
        }
      ]
    },
    
    // Contact Section
    {
      name: 'contactSection',
      title: 'Contact Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Visit Us'
        },
        {
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            {
              name: 'street',
              title: 'Street Address',
              type: 'string'
            },
            {
              name: 'city',
              title: 'City',
              type: 'string'
            },
            {
              name: 'state',
              title: 'State',
              type: 'string'
            },
            {
              name: 'zip',
              title: 'ZIP Code',
              type: 'string'
            }
          ]
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string'
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'email'
        }
      ]
    },
    
    // Social Media Section
    {
      name: 'socialSection',
      title: 'Social Media Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Follow Along'
        },
        {
          name: 'links',
          title: 'Social Media Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Facebook', value: 'facebook' },
                      { title: 'Instagram', value: 'instagram' },
                      { title: 'Pinterest', value: 'pinterest' },
                      { title: 'Twitter', value: 'twitter' },
                      { title: 'YouTube', value: 'youtube' },
                      { title: 'TikTok', value: 'tiktok' }
                    ]
                  }
                },
                {
                  name: 'displayName',
                  title: 'Display Name',
                  type: 'string',
                  description: 'How the link appears (e.g., "Facebook", "@rumriverbarn")'
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: Rule => Rule.required()
                }
              ],
              preview: {
                select: {
                  title: 'displayName',
                  subtitle: 'platform'
                }
              }
            }
          ]
        }
      ]
    },
    
    // Quick Links Section
    {
      name: 'quickLinksSection',
      title: 'Quick Links Section',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Show Quick Links?',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Quick Links',
          hidden: ({ parent }) => !parent?.enabled
        },
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          hidden: ({ parent }) => !parent?.enabled,
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Link Text',
                  type: 'string',
                  validation: Rule => Rule.required()
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                  validation: Rule => Rule.required()
                }
              ],
              preview: {
                select: {
                  title: 'text',
                  subtitle: 'url'
                }
              }
            }
          ]
        }
      ]
    },
    
    // Copyright Section
    {
      name: 'copyrightSection',
      title: 'Copyright Section',
      type: 'object',
      fields: [
        {
          name: 'copyrightText',
          title: 'Copyright Text',
          type: 'string',
          initialValue: '© 2025 Rum River Wedding Barn. All rights reserved.',
          description: 'The year will be automatically updated'
        },
        {
          name: 'additionalText',
          title: 'Additional Text',
          type: 'string',
          initialValue: 'Designed with love in Minnesota',
          description: 'Text after the copyright (e.g., "Designed by...")'
        },
        {
          name: 'legalLinks',
          title: 'Legal Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Link Text',
                  type: 'string'
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'string'
                }
              ],
              preview: {
                select: {
                  title: 'text',
                  subtitle: 'url'
                }
              }
            }
          ]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings'
      }
    }
  }
}