export default {
  name: 'privacyPage',
  title: 'Privacy Policy Page',
  type: 'document',
  icon: () => '🔒',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Privacy Policy',
      validation: Rule => Rule.required(),
      readOnly: true
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          initialValue: 'Privacy Policy'
        },
        {
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'string',
          initialValue: 'How we protect and use your information'
        }
      ]
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Policy Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'}
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Number', value: 'number'}
          ]
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seoSettings'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title || 'Privacy Policy',
        subtitle: 'Legal page',
        media: () => '🔒'
      }
    }
  }
}