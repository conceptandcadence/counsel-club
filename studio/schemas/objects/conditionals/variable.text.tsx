
import {BoltIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'variable.text',
  title: 'Text Variable',
  type: 'document',
  icon: BoltIcon,
  fields: [
		defineField({
			name: 'title',
			title: 'value',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),		
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