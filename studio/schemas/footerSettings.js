export default {
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'object',
  fields: [
    // Column 1 - Brand/Tagline
    {
      name: 'brandSection',
      title: 'Brand Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Brand Title',
          type: 'string',
          initialValue: 'Rum River Barn'
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
    
    // Column 2 - Contact/Visit
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
          name: 'streetAddress',
          title: 'Street Address',
          type: 'string',
          initialValue: '42618 78th Street'
        },
        {
          name: 'cityStateZip',
          title: 'City, State ZIP',
          type: 'string',
          initialValue: 'Hillman, MN 56338'
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          initialValue: '(320) 492-8584'
        },
        {
          name: 'phoneLink',
          title: 'Phone Link (for tel: links)',
          type: 'string',
          initialValue: 'tel:+13204928584',
          description: 'Phone number in tel: format for clickable links'
        }
      ]
    },
    
    // Column 3 - Social Media
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
    
    // Column 4 - Quick Links (optional)
    {
      name: 'quickLinksSection',
      title: 'Quick Links Section (Optional)',
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
          initialValue: '© 2025 Rum River Barn. All rights reserved.',
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
          name: 'showPrivacyPolicy',
          title: 'Show Privacy Policy Link?',
          type: 'boolean',
          initialValue: true
        },
        {
          name: 'showTermsOfService',
          title: 'Show Terms of Service Link?',
          type: 'boolean',
          initialValue: true
        }
      ]
    },
    
    // Style Settings
    {
      name: 'styleSettings',
      title: 'Style Settings',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          initialValue: 'var(--text-dark)',
          description: 'CSS color value or variable'
        },
        {
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
          initialValue: 'var(--accent-gold)',
          description: 'CSS color value or variable'
        },
        {
          name: 'accentColor',
          title: 'Accent Color',
          type: 'string',
          initialValue: 'var(--accent-gold)',
          description: 'Used for headings and links'
        }
      ]
    }
  ]
}