
import {SchemaIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'flow',
  title: 'Flow',
  type: 'document',
  icon: SchemaIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
		defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
		defineField({
			name: 'label',
			title: 'Text',
			type: 'richtext',
		}),
		defineField({
			name: 'start',
			title: 'Starting Point',
			type: 'reference',
			to: [{type: 'question'}]
		}),
    defineField({
      name: 'thumb',
      title: 'Thumbnail',
      type: 'image',
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