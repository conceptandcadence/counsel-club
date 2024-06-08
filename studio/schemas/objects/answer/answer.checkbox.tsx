
import {BlockContentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'answer.checkbox',
  title: 'Checkbox',
  type: 'document',
  icon: BlockContentIcon,
  fields: [
		defineField({
			name: 'title',
			title: 'Label',
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