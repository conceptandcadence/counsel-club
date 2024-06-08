
import {StrikethroughIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'section',
  title: 'Section',
  type: 'document',
  icon: StrikethroughIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
		defineField({
			name: 'body',
			title: 'Text',
			type: 'richtext',
		}),
		defineField({
			title: 'Include this section in section numbering',
			name: 'numbered',
			type: 'boolean'
		})
  ],
  preview: {
    select: {
      active: 'active',
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection

      return {
        title,
      }
    },
  },
})