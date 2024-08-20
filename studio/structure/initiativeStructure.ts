import {SparklesIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Initiatives')
    .icon(SparklesIcon)
    .schemaType('initiative')
    .child(S.documentTypeList('initiative'))
)
