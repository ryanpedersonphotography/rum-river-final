export default {
  name: 'testimonialsBlock',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    {
      name: 'scriptAccent',
      title: 'Script Accent',
      type: 'string',
      initialValue: 'Love Letters'
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'What Couples Say'
    },
    {
      name: 'sectionStyle',
      title: 'Section Style',
      type: 'string',
      options: {
        list: [
          {title: 'Cream Background', value: 'section-cream'},
          {title: 'White Background', value: 'section-white'},
          {title: 'Blush Background', value: 'section-blush'},
          {title: 'Warm Background', value: 'section-warm'}
        ]
      },
      initialValue: 'section-cream'
    },
    {
      name: 'testimonials',
      title: 'Featured Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'testimonial'}]
        }
      ],
      description: 'Leave empty to show latest testimonials'
    },
    {
      name: 'maxTestimonials',
      title: 'Max Testimonials to Show',
      type: 'number',
      initialValue: 3,
      validation: Rule => Rule.min(1).max(6)
    },
    {
      name: 'showStarRating',
      title: 'Show Star Rating',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'starCount',
      title: 'Star Count',
      type: 'number',
      initialValue: 5,
      validation: Rule => Rule.min(1).max(5),
      hidden: ({parent}) => !parent?.showStarRating
    },
    {
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          {title: 'Grid Layout', value: 'grid'},
          {title: 'Carousel Layout', value: 'carousel'}
        ]
      },
      initialValue: 'grid'
    }
  ],
  preview: {
    select: {
      title: 'title',
      testimonialCount: 'testimonials'
    },
    prepare(selection) {
      const {title, testimonialCount} = selection
      const count = testimonialCount ? testimonialCount.length : 0
      return {
        title: `Testimonials: ${title}`,
        subtitle: count > 0 ? `${count} selected` : 'Auto-selected'
      }
    }
  }
}