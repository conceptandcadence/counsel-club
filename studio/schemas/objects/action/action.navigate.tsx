import {defineField} from 'sanity'
import {ArrowRightIcon} from '@sanity/icons'

export default defineField({
  name: 'action.navigate',
  title: 'Navigate to Question',
  type: 'object',
	icon: ArrowRightIcon,
  fields: [
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'reference',
			to: [{type: 'question'}],
    }),
  ],
  preview: {
    select: {
      destination: `destination.title`,
    },
    prepare(selection) {
			const {destination} = selection
      return {
        title: `Navigate to ${destination}`,
      }
    },
  },
})
