export default {
  name: 'weddingBlog',
  title: 'Wedding Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
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
      name: 'coupleName',
      title: 'Couple Name',
      type: 'string',
      description: 'e.g. "Sarah & Michael"'
    },
    {
      name: 'weddingDate',
      title: 'Wedding Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'season',
      title: 'Season',
      type: 'string',
      options: {
        list: [
          {title: 'Spring', value: 'Spring'},
          {title: 'Summer', value: 'Summer'},
          {title: 'Fall', value: 'Fall'},
          {title: 'Winter', value: 'Winter'}
        ]
      }
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      initialValue: 'Rum River Barn',
      description: 'Primary venue name'
    },
    {
      name: 'location',
      title: 'Location Details',
      type: 'string',
      description: 'e.g. "Princeton, MN • Outdoor Ceremony"'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief introduction for blog listings'
    },
    {
      name: 'story',
      title: 'Wedding Story',
      type: 'richText',
      description: 'The full wedding story and details'
    },
    {
      name: 'photographerCredit',
      title: 'Photographer Credit',
      type: 'string',
      description: 'Photographer name and website'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Main hero image for the blog post'
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Cover image for blog listings and previews'
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Featured image for special promotions'
    },
    {
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'details',
      title: 'Wedding Details',
      type: 'object',
      fields: [
        {
          name: 'guestCount',
          title: 'Guest Count',
          type: 'number'
        },
        {
          name: 'ceremony',
          title: 'Ceremony Details',
          type: 'object',
          fields: [
            {
              name: 'location',
              title: 'Ceremony Location',
              type: 'string'
            },
            {
              name: 'time',
              title: 'Ceremony Time',
              type: 'string'
            }
          ]
        },
        {
          name: 'reception',
          title: 'Reception Details',
          type: 'object',
          fields: [
            {
              name: 'location',
              title: 'Reception Location',
              type: 'string'
            },
            {
              name: 'time',
              title: 'Reception Time',
              type: 'string'
            }
          ]
        },
        {
          name: 'vendors',
          title: 'Wedding Vendors',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'category',
                  title: 'Vendor Category',
                  type: 'string',
                  options: {
                    list: [
                      'Photography',
                      'Videography',
                      'Florist',
                      'Caterer',
                      'DJ/Music',
                      'Wedding Planner',
                      'Dress Shop',
                      'Hair & Makeup',
                      'Transportation',
                      'Other'
                    ]
                  }
                },
                {
                  name: 'name',
                  title: 'Vendor Name',
                  type: 'string'
                },
                {
                  name: 'website',
                  title: 'Website',
                  type: 'url'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'featured',
      title: 'Featured Wedding',
      type: 'boolean',
      initialValue: false,
      description: 'Show this wedding in featured sections'
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
      description: 'Only published weddings appear on the website'
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'seoSettings'
    }
  ],
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'publishedDate', direction: 'desc'}
      ]
    },
    {
      title: 'Published Date (Newest)',
      name: 'publishedNewest',
      by: [
        {field: 'publishedDate', direction: 'desc'}
      ]
    },
    {
      title: 'Wedding Date (Newest)',
      name: 'weddingNewest',
      by: [
        {field: 'weddingDate', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'coupleName',
      description: 'season',
      media: 'featuredImage'
    },
    prepare(selection) {
      const {title, subtitle, description} = selection
      return {
        title,
        subtitle: subtitle || 'No couple name',
        description: description ? `Season: ${description}` : 'No season',
        media: selection.media
      }
    }
  }
}