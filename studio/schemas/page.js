export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seoSettings'
    },
    {
      name: 'contentBlocks',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'heroBlock' },
        { type: 'venueDiscoveryBlock' },
        { type: 'featureBlocksBlock' },
        { type: 'galleryBlock' },
        { type: 'experienceBlock' },
        { type: 'testimonialsBlock' },
        { type: 'formBlock' },
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
}