export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true, // Enables cropping and focal point selection
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description: 'Important for SEO and accessibility.',
      validation: Rule => Rule.required()
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption for the image'
    },
    {
      name: 'credit',
      title: 'Photo Credit',
      type: 'string',
      description: 'Photographer or source credit'
    }
  ]
}