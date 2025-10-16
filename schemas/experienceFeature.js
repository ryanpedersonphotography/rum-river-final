export default {
  name: 'experienceFeature',
  title: 'Experience Feature',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Feature Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Check Mark', value: 'check'},
          {title: 'Sparkles', value: 'sparkles'},
          {title: 'Home', value: 'home'},
          {title: 'Heart', value: 'heart'},
          {title: 'Star', value: 'star'},
          {title: 'Calendar', value: 'calendar'},
          {title: 'Music', value: 'music'},
          {title: 'Camera', value: 'camera'},
          {title: 'Gift', value: 'gift'},
          {title: 'Phone', value: 'phone'},
          {title: 'Email', value: 'email'},
          {title: 'Location', value: 'location'},
          {title: 'Clock', value: 'clock'},
          {title: 'Users', value: 'users'}
        ]
      },
      initialValue: 'check',
      description: 'Icon to display with this feature'
    },
    {
      name: 'iconColor',
      title: 'Icon Color',
      type: 'string',
      options: {
        list: [
          {title: 'Primary (Sage Green)', value: 'primary'},
          {title: 'Secondary (Warm Walnut)', value: 'secondary'},
          {title: 'Accent (Blush Pink)', value: 'accent'},
          {title: 'White', value: 'white'},
          {title: 'Black', value: 'black'}
        ]
      },
      initialValue: 'primary'
    },
    {
      name: 'iconSize',
      title: 'Icon Size',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'sm'},
          {title: 'Medium', value: 'md'},
          {title: 'Large', value: 'lg'},
          {title: 'Extra Large', value: 'xl'}
        ]
      },
      initialValue: 'lg'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(0),
      initialValue: 0
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Highlight this feature'
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'order', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      icon: 'icon'
    },
    prepare(selection) {
      const {title, subtitle, icon} = selection
      return {
        title,
        subtitle: subtitle || 'No description',
        description: icon ? `Icon: ${icon}` : 'No icon'
      }
    }
  }
}