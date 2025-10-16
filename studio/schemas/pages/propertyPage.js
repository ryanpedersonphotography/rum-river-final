export default {
  name: 'propertyPage',
  title: 'Property Page',
  type: 'document',
  icon: () => '🏡',
  groups: [
    {
      name: 'hero',
      title: '🌄 Hero Section',
      default: true
    },
    {
      name: 'content',
      title: '🏘️ Property Content'
    },
    {
      name: 'cta',
      title: '📍 Schedule Tour'
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
      initialValue: 'The Property',
      validation: Rule => Rule.required(),
      hidden: false,
      readOnly: true
    },
    {
      name: 'hero',
      title: '🏞️ Hero Section',
      description: 'Main banner showcasing the property',
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
          initialValue: 'The Property'
        },
        {
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          rows: 2,
          initialValue: 'Discover the beautiful spaces and natural settings that make Rum River Barn the perfect venue for your celebration.'
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
      name: 'venueDiscovery',
      title: '🏛️ Venue Discovery',
      description: 'Interactive venue space showcase',
      type: 'venueDiscoveryBlock',
      group: 'content',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'venueTabs',
      title: '🎭 Venue Showcase',
      description: 'Featured venue spaces with details',
      type: 'object',
      group: 'content',
      options: {
        collapsible: true,
        collapsed: true
      },
      fields: [
        {
          name: 'venues',
          title: 'Featured Venues',
          type: 'array',
          of: [{ 
            type: 'reference',
            to: [{ type: 'venue' }]
          }]
        }
      ]
    },
    {
      name: 'scheduleTour',
      title: '📅 Schedule Tour Form',
      description: 'Property tour booking form',
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
      description: 'Search engine optimization',
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
        title: title || 'property Page',
        subtitle: 'Venue spaces and amenities',
        media: () => '🏛️'
      }
    }
  }

}