
import {UnknownIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'answer.email',
  title: 'Input: Email',
  type: 'object',
  icon: UnknownIcon,
  fields: [
		defineField({
			name: 'title',
			title: 'Label',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),		
		defineField({
			name: 'variable',
			title: 'Variable Name',
			type: 'string',
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