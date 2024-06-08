
import {BoltIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'variable.date',
  title: 'Date',
  type: 'document',
  icon: BoltIcon,
  fields: [
		defineField({
			name: 'title',
			title: 'value',
			type: 'date',
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