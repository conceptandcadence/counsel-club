
import {EnvelopeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'answer.email',
  title: 'Input: Email',
  type: 'object',
  icon: EnvelopeIcon,
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