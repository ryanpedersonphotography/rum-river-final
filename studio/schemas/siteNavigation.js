export default {
  name: 'siteNavigation',
  title: 'Site Navigation',
  type: 'document',
  icon: () => '🧭',
  fields: [
    {
      name: 'title',
      title: 'Navigation Title',
      type: 'string',
      initialValue: 'Main Navigation',
      readOnly: true
    },
    {
      name: 'logo',
      title: 'Logo Settings',
      type: 'object',
      fields: [
        {
          name: 'line1',
          title: 'Logo Line 1',
          type: 'string',
          initialValue: 'Rum River'
        },
        {
          name: 'line2',
          title: 'Logo Line 2',
          type: 'string',
          initialValue: 'Wedding Barn'
        },
        {
          name: 'link',
          title: 'Logo Link',
          type: 'string',
          initialValue: '/',
          description: 'Where the logo links to (usually home)'
        }
      ]
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
              description: 'Internal link (e.g., /events) or external URL',
              validation: Rule => Rule.required()
            },
            {
              name: 'isDropdown',
              title: 'Has Dropdown Menu?',
              type: 'boolean',
              initialValue: false
            },
            {
              name: 'dropdownItems',
              title: 'Dropdown Items',
              type: 'array',
              hidden: ({ parent }) => !parent?.isDropdown,
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'link',
                      title: 'Link',
                      type: 'string',
                      validation: Rule => Rule.required()
                    }
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'link'
                    }
                  }
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'link',
              hasDropdown: 'isDropdown'
            },
            prepare({ title, subtitle, hasDropdown }) {
              return {
                title,
                subtitle: hasDropdown ? `${subtitle} ▾` : subtitle,
                media: () => hasDropdown ? '📁' : '📄'
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: title || 'Navigation',
        subtitle: 'Main site navigation',
        media: () => '🧭'
      }
    }
  }
}