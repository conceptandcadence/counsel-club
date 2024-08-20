import {defineField} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineField({
  name: 'action.url',
  title: 'Navigate to URL',
  type: 'object',
	icon: LinkIcon,
  fields: [
		defineField({
      name: 'destination',
      title: 'Destination',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      url: `destination`,
    },
    prepare(selection) {
			const {url} = selection
      return {
        title: `Go to URL: ${url}`,
      }
    },
  },
})
