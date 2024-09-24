
import {UserIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  icon: UserIcon,
  fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
			initialValue: ({parent}) => parent?.type === 'Sole Proprietor' ? `${parent?.firstName} ${parent?.lastName}` : ''
		}),		
    defineField({
			title: 'Profile Type',
			name: 'type',
			type: 'string',
			initialValue: 'Sole Proprietor',
			options: {
				list: [
					{title: 'Individual', value: 'Sole Proprietor'},
					{title: 'LLC', value: 'LLC'},
					{title: 'Corporation', value: 'Corporation'}
				], 
			}
		}),
		defineField({
			name: 'firstName',
			title: 'First Name',
			type: 'string',
			hidden: ({parent}) => parent?.type !== 'Sole Proprietor'
		}),	
		defineField({
			name: 'middleName',
			title: 'Middle Name',
			type: 'string',
			hidden: ({parent}) => parent?.type !== 'Sole Proprietor'
		}),	
		defineField({
			name: 'lastName',
			title: 'Last Name',
			type: 'string',
			hidden: ({parent}) => parent?.type !== 'Sole Proprietor'
		}),	
    defineField({
      name: 'legalName',
      title: 'Legal Business Name',
      type: 'string',
			hidden: ({parent}) => parent?.type === 'Sole Proprietor'
    }),
    defineField({
      name: 'dbaName',
      title: 'DBA Title',
      type: 'string',
			hidden: ({parent}) => parent?.type === 'Sole Proprietor'
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
    }),
  ],
  preview: {
    select: {
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