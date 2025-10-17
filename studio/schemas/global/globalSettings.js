export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      description: 'Used for SEO and social media'
    },
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      description: 'The main site URL (used for SEO and sitemaps)'
    },
    {
      name: 'defaultSeo',
      title: 'Default SEO Settings',
      type: 'seoSettings'
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Small icon that appears in browser tabs'
    },
    {
      name: 'analytics',
      title: 'Analytics & Tracking',
      type: 'object',
      fields: [
        {
          name: 'googleAnalyticsId',
          title: 'Google Analytics ID',
          type: 'string',
          description: 'Format: G-XXXXXXXXXX'
        },
        {
          name: 'facebookPixelId',
          title: 'Facebook Pixel ID',
          type: 'string'
        },
        {
          name: 'googleTagManagerId',
          title: 'Google Tag Manager ID',
          type: 'string',
          description: 'Format: GTM-XXXXXXX'
        }
      ]
    },
    {
      name: 'businessInfo',
      title: 'Business Information',
      type: 'object',
      fields: [
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
          name: 'timezone',
          title: 'Timezone',
          type: 'string',
          initialValue: 'America/Chicago',
          description: 'Used for displaying accurate business hours'
        }
      ]
    },
    {
      name: 'maintenanceMode',
      title: 'Maintenance Mode',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Enable Maintenance Mode',
          type: 'boolean',
          initialValue: false
        },
        {
          name: 'message',
          title: 'Maintenance Message',
          type: 'text',
          rows: 3,
          hidden: ({ parent }) => !parent?.enabled
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Settings'
      }
    }
  }
}