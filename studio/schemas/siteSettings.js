export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'url',
      title: 'Site URL',
      type: 'url',
      description: 'The main site URL (used for SEO)'
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image'
    },
    {
      name: 'defaultSeo',
      title: 'Default SEO Settings',
      type: 'seoSettings'
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string'
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'email'
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
        }
      ]
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url'
        },
        {
          name: 'pinterest',
          title: 'Pinterest URL',
          type: 'url'
        }
      ]
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        {
          name: 'monday',
          title: 'Monday',
          type: 'string'
        },
        {
          name: 'tuesday',
          title: 'Tuesday',
          type: 'string'
        },
        {
          name: 'wednesday',
          title: 'Wednesday',
          type: 'string'
        },
        {
          name: 'thursday',
          title: 'Thursday',
          type: 'string'
        },
        {
          name: 'friday',
          title: 'Friday',
          type: 'string'
        },
        {
          name: 'saturday',
          title: 'Saturday',
          type: 'string'
        },
        {
          name: 'sunday',
          title: 'Sunday',
          type: 'string'
        }
      ]
    },
    {
      name: 'analytics',
      title: 'Analytics',
      type: 'object',
      fields: [
        {
          name: 'googleAnalyticsId',
          title: 'Google Analytics ID',
          type: 'string'
        },
        {
          name: 'facebookPixelId',
          title: 'Facebook Pixel ID',
          type: 'string'
        }
      ]
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        {
          name: 'copyrightText',
          title: 'Copyright Text',
          type: 'string'
        },
        {
          name: 'quickLinks',
          title: 'Quick Links',
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
              ]
            }
          ]
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
              ]
            }
          ]
        }
      ]
    }
  ]
}