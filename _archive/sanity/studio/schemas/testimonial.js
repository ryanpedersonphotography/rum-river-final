export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required().max(500).warning('Long quotes may not display well')
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'e.g. "Sarah & Michael Johnson"'
    },
    {
      name: 'authorDetail',
      title: 'Author Detail',
      type: 'string',
      description: 'e.g. "Married October 2024"'
    },
    {
      name: 'authorImage',
      title: 'Author Photo',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Optional photo of the couple'
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      description: 'Date of their wedding/event'
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Wedding', value: 'wedding'},
          {title: 'Engagement Party', value: 'engagement'},
          {title: 'Birthday Party', value: 'birthday'},
          {title: 'Graduation', value: 'graduation'},
          {title: 'Holiday Party', value: 'holiday'},
          {title: 'Other', value: 'other'}
        ]
      },
      initialValue: 'wedding'
    },
    {
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      validation: Rule => Rule.min(1).max(5),
      initialValue: 5,
      description: 'Star rating out of 5'
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      initialValue: false,
      description: 'Show this testimonial prominently'
    },
    {
      name: 'approved',
      title: 'Approved for Display',
      type: 'boolean',
      initialValue: false,
      description: 'Only approved testimonials will appear on the site'
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: [
          {title: 'Direct Feedback', value: 'direct'},
          {title: 'Google Reviews', value: 'google'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'Wedding Wire', value: 'weddingwire'},
          {title: 'The Knot', value: 'theknot'},
          {title: 'Other', value: 'other'}
        ]
      },
      initialValue: 'direct'
    },
    {
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
      description: 'Link to original review (if applicable)'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      },
      description: 'Tags for categorizing testimonials (e.g. "service", "venue", "food")'
    }
  ],
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'eventDate', direction: 'desc'}
      ]
    },
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [
        {field: 'eventDate', direction: 'desc'}
      ]
    },
    {
      title: 'Highest Rating',
      name: 'highestRating',
      by: [
        {field: 'rating', direction: 'desc'},
        {field: 'eventDate', direction: 'desc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'authorName',
      subtitle: 'authorDetail',
      description: 'quote',
      media: 'authorImage'
    },
    prepare(selection) {
      const {title, subtitle, description} = selection
      return {
        title,
        subtitle: subtitle || 'No date specified',
        description: description ? `"${description.substring(0, 100)}..."` : 'No quote',
        media: selection.media
      }
    }
  }
}