export default {
  name: 'locationPage',
  title: 'Location Page',
  type: 'document',
  icon: () => '📍',
  groups: [
    {
      name: 'hero',
      title: '🌅 Hero Section',
      default: true
    },
    {
      name: 'location',
      title: '🗺️ Location Details'
    },
    {
      name: 'directions',
      title: '🚗 Directions'
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
      initialValue: 'Find Your Way',
      validation: Rule => Rule.required(),
      hidden: false,
      readOnly: true
    },
    {
      name: 'hero',
      title: '🌄 Hero Banner',
      description: 'Location page introduction',
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
          initialValue: 'Find Your Way'
        },
        {
          name: 'lead',
          title: 'Hero Lead Text',
          type: 'text',
          rows: 2,
          initialValue: 'Located in the heart of Minnesota\'s scenic countryside, just minutes from major cities'
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
      name: 'locationInfo',
      title: '📍 Location Information',
      description: 'Address and contact details',
      type: 'object',
      group: 'location',
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
        },
        {
          name: 'mapUrl',
          title: 'Google Maps Embed URL',
          type: 'url'
        }
      ]
    },
    {
      name: 'directions',
      title: '🧭 Directions from Major Cities',
      description: 'Driving directions from nearby cities',
      type: 'array',
      group: 'directions',
      options: {
        collapsible: true,
        collapsed: false
      },
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'city',
              title: 'City Name',
              type: 'string'
            },
            {
              name: 'distance',
              title: 'Distance',
              type: 'string'
            },
            {
              name: 'directions',
              title: 'Directions',
              type: 'text',
              rows: 3
            }
          ]
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
        title: title || 'location Page',
        subtitle: 'Directions and nearby hotels',
        media: () => '📍'
      }
    }
  }

}