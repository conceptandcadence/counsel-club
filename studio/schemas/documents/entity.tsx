
import {BoltIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'entity',
  title: 'Entity',
  type: 'document',
  icon: BoltIcon,
  fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),		
    defineField({
			title: 'Type',
			name: 'type',
			type: 'string',
			options: {
				list: [
					{title: 'Individual', value: 'Sole Proprietor'},
					{title: 'LLC', value: 'LLC'},
					{title: 'Corporation', value: 'Corporation'}
				], 
			}
		}),
    defineField({
      name: 'dba',
      title: 'DBA Title',
      type: 'string',
    }),
		defineField({
			name: 'website',
			title: 'Website',
			type: 'url',
		}),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
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