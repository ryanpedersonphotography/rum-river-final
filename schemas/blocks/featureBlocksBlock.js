export default {
  name: 'featureBlocksBlock',
  title: 'Feature Blocks Section',
  type: 'object',
  fields: [
    {
      name: 'scriptAccent',
      title: 'Script Accent',
      type: 'string',
      initialValue: 'Your Perfect Venue'
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Why Choose Rum River Barn'
    },
    {
      name: 'lead',
      title: 'Lead Text',
      type: 'text',
      rows: 2,
      initialValue: 'Discover what makes our venue the perfect setting for your unforgettable celebration'
    },
    {
      name: 'sectionStyle',
      title: 'Section Style',
      type: 'string',
      options: {
        list: [
          {title: 'Alternating Blocks', value: 'alternating-blocks'},
          {title: 'Cream Background', value: 'section-cream'},
          {title: 'White Background', value: 'section-white'},
          {title: 'Blush Background', value: 'section-blush'},
          {title: 'Warm Background', value: 'section-warm'}
        ]
      },
      initialValue: 'alternating-blocks'
    },
    {
      name: 'blocks',
      title: 'Feature Blocks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'featureBlock'}]
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'centerContent',
      title: 'Center Content',
      type: 'boolean',
      initialValue: true,
      description: 'Center the header content'
    }
  ],
  preview: {
    select: {
      title: 'title',
      blockCount: 'blocks'
    },
    prepare(selection) {
      const {title, blockCount} = selection
      const count = blockCount ? blockCount.length : 0
      return {
        title: `Feature Blocks: ${title}`,
        subtitle: `${count} blocks`
      }
    }
  }
}