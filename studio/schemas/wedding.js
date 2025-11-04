export default {
  name: 'wedding',
  title: 'Wedding',
  type: 'document',
  options: {
    // Tell Presentation Tool where to preview this document
    previewUrl: {
      // Always preview on the real weddings sanity page
      previewUrl: '/real-weddings-sanity',
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Wedding Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'coupleNames',
      title: 'Couple Names',
      type: 'string',
      description: 'e.g., "Sarah & Michael"',
      validation: Rule => Rule.required()
    },
    {
      name: 'weddingDate',
      title: 'Wedding Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Make this wedding visible on the website',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Featured Wedding',
      type: 'boolean',
      description: 'Show this wedding on homepage and in featured galleries'
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage',
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Wedding Gallery',
      type: 'array',
      of: [
        {
          type: 'customImage'
        }
      ]
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short description for previews',
      rows: 3
    },
    {
      name: 'story',
      title: 'Wedding Story',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'customImage'
        }
      ]
    },
    {
      name: 'venue',
      title: 'Venue Details',
      type: 'object',
      fields: [
        {
          name: 'ceremony',
          title: 'Ceremony Location',
          type: 'string',
          options: {
            list: [
              { title: 'Barn Interior', value: 'barn-interior' },
              { title: 'Barn Deck', value: 'barn-deck' },
              { title: 'Vineyard', value: 'vineyard' },
              { title: 'Garden', value: 'garden' },
              { title: 'Field', value: 'field' }
            ]
          }
        },
        {
          name: 'reception',
          title: 'Reception Location',
          type: 'string',
          options: {
            list: [
              { title: 'Barn Interior', value: 'barn-interior' },
              { title: 'Outdoor Tent', value: 'outdoor-tent' },
              { title: 'Mixed Indoor/Outdoor', value: 'mixed' }
            ]
          }
        }
      ]
    },
    {
      name: 'season',
      title: 'Season',
      type: 'string',
      options: {
        list: [
          { title: 'Spring', value: 'spring' },
          { title: 'Summer', value: 'summer' },
          { title: 'Fall', value: 'fall' },
          { title: 'Winter', value: 'winter' }
        ]
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'coupleNames',
      date: 'weddingDate',
      media: 'coverImage'
    },
    prepare(selection) {
      const { title, date, media } = selection
      const formattedDate = date ? new Date(date).getFullYear() : 'No date'
      return {
        title: title,
        subtitle: formattedDate,
        media: media
      }
    }
  }
}