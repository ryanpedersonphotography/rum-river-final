export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Barn', value: 'barn' },
          { title: 'Property', value: 'property' },
          { title: 'Bridal Suite', value: 'bridal-suite' },
          { title: 'Reception Area', value: 'reception-area' },
          { title: 'Details', value: 'details' },
          { title: 'Real Weddings', value: 'real-weddings' },
          { title: 'Historical', value: 'historical' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Image',
      type: 'boolean',
      description: 'Show this image in featured galleries and homepage'
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category'
    },
    prepare(selection) {
      const { title, media, category } = selection
      return {
        title: title,
        subtitle: category,
        media: media
      }
    }
  }
}