export default {
  name: 'formBlock',
  title: 'Form Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Start Planning Your Perfect Day'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Schedule Your Tour'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue: 'We\'d love to show you around our beautiful venue and discuss your wedding vision.'
    },
    {
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      options: {
        list: [
          {title: 'Schedule Tour', value: 'tour'},
          {title: 'Contact Form', value: 'contact'},
          {title: 'Vendor Application', value: 'vendor'}
        ]
      },
      initialValue: 'tour'
    },
    {
      name: 'formName',
      title: 'Form Name',
      type: 'string',
      description: 'Netlify form name for submission handling',
      initialValue: 'schedule-tour'
    },
    {
      name: 'submitText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Schedule Tour'
    },
    {
      name: 'loadingText',
      title: 'Loading Text',
      type: 'string',
      initialValue: 'SCHEDULING...'
    },
    {
      name: 'redirectPath',
      title: 'Success Redirect Path',
      type: 'string',
      initialValue: '/thank-you'
    },
    {
      name: 'sectionStyle',
      title: 'Section Style',
      type: 'string',
      options: {
        list: [
          {title: 'Default CTA Style', value: 'cta-contact-section'},
          {title: 'Cream Background', value: 'section-cream'},
          {title: 'White Background', value: 'section-white'},
          {title: 'Blush Background', value: 'section-blush'},
          {title: 'Warm Background', value: 'section-warm'}
        ]
      },
      initialValue: 'cta-contact-section'
    },
    {
      name: 'lightTheme',
      title: 'Light Theme',
      type: 'boolean',
      initialValue: false,
      description: 'Use light text colors'
    },
    {
      name: 'showHeader',
      title: 'Show Header',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'customFields',
      title: 'Custom Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Field Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'label',
              title: 'Field Label',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'type',
              title: 'Field Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Text', value: 'text'},
                  {title: 'Email', value: 'email'},
                  {title: 'Phone', value: 'tel'},
                  {title: 'Date', value: 'date'},
                  {title: 'Textarea', value: 'textarea'},
                  {title: 'Select', value: 'select'}
                ]
              },
              initialValue: 'text'
            },
            {
              name: 'required',
              title: 'Required',
              type: 'boolean',
              initialValue: false
            },
            {
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string'
            },
            {
              name: 'options',
              title: 'Select Options',
              type: 'array',
              of: [{type: 'string'}],
              hidden: ({parent}) => parent?.type !== 'select'
            }
          ]
        }
      ],
      description: 'Leave empty to use default form fields'
    }
  ],
  preview: {
    select: {
      title: 'title',
      formType: 'formType'
    },
    prepare(selection) {
      const {title, formType} = selection
      return {
        title: `Form: ${title}`,
        subtitle: `Type: ${formType}`
      }
    }
  }
}