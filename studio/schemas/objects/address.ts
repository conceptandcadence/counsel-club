import {defineField} from 'sanity'

export default defineField({
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    defineField({
      name: 'addressStreet1',
      title: 'Street 1',
      type: 'string',
    }),
		defineField({
      name: 'addressStreet2',
      title: 'Street 2',
      type: 'string',
    }),
		defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
		defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
		defineField({
      name: 'postcode',
      title: 'Postcode',
      type: 'string',
    }),
		defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      height: 'height',
      title: 'title',
      width: 'width',
    },
    prepare(selection) {
      const {height, title, width} = selection
      return {
        subtitle: `${width || '??'}cm x ${height || '??'}cm`,
        title,
      }
    },
  },
})
