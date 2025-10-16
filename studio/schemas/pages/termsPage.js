export default {
  name: 'termsPage',
  title: 'Terms of Service Page',
  type: 'document',
  icon: () => '📜',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Terms of Service',
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
          initialValue: 'Terms of Service'
        },
        {
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'string',
          initialValue: 'Venue rental agreement and policies'
        }
      ]
    },
    {
      name: 'effectiveDate',
      title: 'Effective Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Terms Content',
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
        title: title || 'Terms of Service',
        subtitle: 'Legal page',
        media: () => '📜'
      }
    }
  }
}