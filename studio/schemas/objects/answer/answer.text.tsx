
import {BlockContentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'answer.text',
  title: 'Input: Text',
  type: 'object',
  icon: BlockContentIcon,
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
		})
  ],
	initialValue: {
    short: false
  },
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