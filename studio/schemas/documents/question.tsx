
import {BlockContentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'question',
  title: 'Question',
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
			name: 'label',
			title: 'Text',
			type: 'richtext',
		}),
		
		defineField({
			name: 'answers',
			title: 'Answers',
			type: 'array',
      of: [
				{type: 'answer.button'},
        {type: 'answer.text'},
				{type: 'answer.longtext'},
				{type: 'answer.select'},
        {type: 'answer.email'},
				{type: 'answer.entity'},
        {type: 'answer.phone'},
				{type: 'answer.checkbox'},
      ],
		}),	

		defineField({
			name: 'education',
			title: 'Education',
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