
import {UnknownIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'answer.select',
  title: 'Input: Select List',
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
			title: 'Variable',
			type: 'reference',
			to: [{type: 'variable'}],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Half width',
			name: 'short',
			type: 'boolean'
		}),	
		defineField({
			name: 'options',
			title: 'Options',
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