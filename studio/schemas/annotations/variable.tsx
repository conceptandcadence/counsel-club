/**
 * Annotations are ways of marking up text in the block content editor.
 *
 * Read more: https://www.sanity.io/docs/customization#f924645007e1
 */
import {BoltIcon} from '@sanity/icons'
import React from 'react'
import {defineField} from 'sanity'

export default defineField({
  title: 'Variable',
  name: 'annotationVariable',
  type: 'object',
  icon: BoltIcon,
  components: {
    annotation: (props) => (
      <span className="annotation annotation__variable">
        <BoltIcon
          style={{
            marginLeft: '-0.05em',
            marginRight: '0.075em',
            width: '14px',
						transform: 'translateY(1px)',
						fill: '#000000'
          }}
        />
        {props.renderDefault(props)}
      </span>
    ),
  },
  fields: [
		defineField({
			title: 'Variable',
			name: 'variable',
			type: 'reference',
			to: [{type: 'variable'}],
		}),
  ],
})
