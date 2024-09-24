
import {BoltIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'variable.template',
  title: 'Template',
  type: 'document',
  icon: BoltIcon,
  fields: [
		defineField({
			title: 'Variable',
			name: 'variable',
			type: 'reference',
			to: [{type: 'variable'}],
			options: {
				filter: 'type == $type',
				filterParams: {type: 'template'}
			}
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