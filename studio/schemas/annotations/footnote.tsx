/**
 * Annotations are ways of marking up text in the block content editor.
 *
 * Read more: https://www.sanity.io/docs/customization#f924645007e1
 */
import {TagIcon} from '@sanity/icons'
import React from 'react'
import {defineField} from 'sanity'

export default defineField({
  title: 'Footnote',
  name: 'annotationFootnote',
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
    // Product
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    // Link action
    defineField({
      name: 'linkAction',
      title: 'Link action',
      type: 'string',
      initialValue: 'link',
      options: {
        layout: 'radio',
        list: [
          {
            title: 'Navigate to product',
            value: 'link',
          },
          {
            title: 'Add to cart',
            value: 'addToCart',
          },
          {
            title: 'Buy now',
            value: 'buyNow',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
