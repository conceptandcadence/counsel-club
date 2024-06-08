
import {BoltIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'variable.number',
  title: 'Number Variable',
  type: 'document',
  icon: BoltIcon,
  fields: [
		defineField({
			name: 'title',
			title: 'value',
			type: 'number',
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