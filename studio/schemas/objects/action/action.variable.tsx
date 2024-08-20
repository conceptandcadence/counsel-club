import {defineField} from 'sanity'
import {EqualIcon} from '@sanity/icons'

export default defineField({
  name: 'action.variable',
  title: 'Set Variable',
  type: 'object',
	icon: EqualIcon,
  fields: [
    defineField({
      name: 'variable',
      title: 'Variable',
      type: 'reference',
			to: [{type: 'variable'}],
    }),
		defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      variable: 'variable.title',
      value: 'value',
    },
    prepare(selection) {
			const {variable, value} = selection
			console.log(variable)
      return {
        title: `Set ${variable} to ${value}`,
      }
    },
  },
})
