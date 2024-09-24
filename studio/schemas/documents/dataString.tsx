
import {BoltIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'variable',
  title: 'Variable',
  type: 'document',
  icon: BoltIcon,
  fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),		
    defineField({
			title: 'Type',
			name: 'type',
			type: 'string',
			validation: (Rule) => Rule.required(),
			options: {
				list: [
					{title: 'True/Fale', value: 'boolean'},
					{title: 'Text', value: 'text'},
					{title: 'Number', value: 'number'},
					{title: 'Date', value: 'date'},
					{title: 'Year', value: 'year'},
					{title: 'Entity', value: 'entity'},
					{title: 'Profile', value: 'profile'},
					{title: 'Option', value: 'option'}
				], 
			}
		}),
		defineField({
			title: 'Allow multiple values',
			name: 'array',
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