
import {BlockContentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'template',
  title: 'Template',
  type: 'document',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
		defineField({
			name: 'body',
			title: 'Content',
			type: 'richtext',
		}),
		defineField({
			name: 'sections',
			title: 'Sections',
			type: 'array',
      of: [
        {type: 'section'},
      ],
		}),	
		defineField({
			name: 'usage',
			title: 'Usage',
			type: 'richtext',
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