
import {BoltIcon} from '@sanity/icons'
import {defineField} from 'sanity'

// Look up the slug of the parent category and append it to the slug of the current document
export async function asyncSlugifier(input: { doc: { title: string; parent: { _ref: string } } }, schemaType: any, context: any) {

	const {getClient} = context
	const client = getClient({apiVersion: '2023-03-01'})

	let pageSlug = input.doc.title
		.toUpperCase()
		.replace(/\s+/g, '_') // slugify the title 

	// Remove all non-alphanumeric characters (but keep the hyphens)
	pageSlug = pageSlug.replace(/[^A-Za-z0-9-]/g, '_');

	//console.log(input)

	if (input.doc.parent) {
		const query = '*[_id == $parentID]';
		const params = {parentID: input.doc.parent._ref}

		var result = await client.fetch(query, params);
		//console.log(result)

		if (result.length > 0) {
			let parentSlug = result[0].handle.current;
			return `${parentSlug}.${pageSlug}`;
		} else {
			return pageSlug;
		}
	} else {
		return pageSlug;
	}	

}


function capitalizeFirstLetter(string:string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default defineField({
  name: 'variable',
  title: 'Variable',
  type: 'document',
  icon: BoltIcon,
  fields: [
    defineField({
			title: 'Type',
			name: 'type',
			type: 'string',
			validation: (Rule) => Rule.required(),
			options: {
				list: [
					{title: 'True/Fale', value: 'boolean'},
					{title: 'Text', value: 'text'},
					{title: 'Number', value: 'number'},
					{title: 'Date', value: 'date'},
					{title: 'Year', value: 'year'},
					{title: 'Profile', value: 'profile'},
					{title: 'Option', value: 'option'},
					{title: 'Multiple Choice', value: 'choices'},
					{title: 'Template', value: 'template'}
				], 
			}
		}),		
		defineField({
			name: 'parent',
			title: 'Parent Variable',
			type: 'reference',
			to: [{type: 'variable'}],
			options: {
				filter: 'type == $type',
				filterParams: {type: 'option'}
			},
			hidden: ({parent}) => parent?.type !== 'choices'
		}),
		defineField({
			name: 'title',
			title: 'Display Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),		
		defineField({
			title: 'Handle',
			name: 'handle',
			type: 'slug',
			validation: (Rule) => Rule.required(),
			options: {
				source: (doc, options) => ({ doc, options }),
				slugify: asyncSlugifier
			}
		}),
		defineField({
			title: 'Allow multiple values',
			name: 'array',
			type: 'boolean',
			initialValue: false
		})
  ],
  preview: {
    select: {
      title: 'title',
			type: 'type',
			parent: 'parent.title',
    },
    prepare(selection) {
      let {title, type, parent} = selection
			let subtitle = `${capitalizeFirstLetter(type)}`

			console.log(parent, type)

			if (parent && type === 'property') {
				
				title = `${parent ? parent : 'unknown'} -> ${title}`
				//subtitle = `Directed by: ${parent ? parent : 'unknown'}`
			}

      return {
        title,
				subtitle,
      }
    },
  },
})