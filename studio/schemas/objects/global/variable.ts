
import {BoltIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'variable',
  title: 'Variable',
  type: 'document',
  icon: BoltIcon,
  fields: [
		defineField({
			title: 'Variable',
			name: 'variable',
			type: 'reference',
			to: [{type: 'variable'}],
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