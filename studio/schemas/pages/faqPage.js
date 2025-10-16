export default {
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  icon: () => '❓',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
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
          initialValue: 'Frequently Asked Questions'
        },
        {
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'string',
          initialValue: 'Everything you need to know about your wedding at Rum River Barn'
        }
      ]
    },
    {
      name: 'faqCategories',
      title: 'FAQ Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqCategory',
          title: 'FAQ Category',
          fields: [
            {
              name: 'categoryName',
              title: 'Category Name',
              type: 'string',
              validation: Rule => Rule.required(),
              description: 'e.g., "Booking & Availability", "Venue Details", "Catering"'
            },
            {
              name: 'questions',
              title: 'Questions',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'faqItem',
                  title: 'FAQ Item',
                  fields: [
                    {
                      name: 'question',
                      title: 'Question',
                      type: 'string',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'answer',
                      title: 'Answer',
                      type: 'text',
                      validation: Rule => Rule.required()
                    }
                  ],
                  preview: {
                    select: {
                      title: 'question',
                      subtitle: 'answer'
                    },
                    prepare({ title, subtitle }) {
                      return {
                        title: title,
                        subtitle: subtitle ? subtitle.substring(0, 60) + '...' : ''
                      }
                    }
                  }
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'categoryName',
              questions: 'questions'
            },
            prepare({ title, questions }) {
              const count = questions ? questions.length : 0
              return {
                title: title,
                subtitle: `${count} question${count !== 1 ? 's' : ''}`
              }
            }
          }
        }
      ]
    },
    {
      name: 'contactCTA',
      title: 'Contact Call-to-Action',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'CTA Title',
          type: 'string',
          initialValue: 'Still Have Questions?'
        },
        {
          name: 'description',
          title: 'CTA Description',
          type: 'text',
          initialValue: 'We\'re here to help! Contact us for more information about hosting your special day at Rum River Wedding Barn.'
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Contact Us'
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact'
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
      title: 'title',
      categories: 'faqCategories'
    },
    prepare({ title, categories }) {
      const categoryCount = categories ? categories.length : 0
      let totalQuestions = 0
      if (categories) {
        categories.forEach(cat => {
          totalQuestions += cat.questions ? cat.questions.length : 0
        })
      }
      return {
        title: title || 'FAQ',
        subtitle: `${categoryCount} categories, ${totalQuestions} questions`,
        media: () => '❓'
      }
    }
  }
}