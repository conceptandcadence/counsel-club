
import {LeaveIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'answer.button',
  title: 'Button',
  type: 'document',
  icon: LeaveIcon,
  fields: [
		defineField({
			name: 'title',
			title: 'Label',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),		
		defineField({
			name: 'actions',
			title: 'Actions',
			type: 'array',
      of: [
        {type: 'action.navigate'},
				{type: 'action.url'},
				{type: 'action.variable'},
      ],
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