/**
 * Annotations are ways of marking up text in the block content editor.
 *
 * Read more: https://www.sanity.io/docs/customization#f924645007e1
 */
import {TagIcon} from '@sanity/icons'
import React from 'react'
import {defineField} from 'sanity'

export default defineField({
  title: 'Gloss',
  name: 'annotationGloss',
  type: 'object',
  icon: TagIcon,
  components: {
    annotation: (props) => (
      <span>
        <TagIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em',
          }}
        />
        {props.renderDefault(props)}
      </span>
    ),
  },
  fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'text',
			title: 'text',
			type: 'richtext',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'post',
			title: 'Related Post',
			type: 'reference',
			to: [{type: 'post'}],
		}),
		defineField({
			name: 'sidebar',
			title: 'Sidebar Content',
			type: 'reference',
			to: [{type: 'section'}],
		}),
  ],
})
