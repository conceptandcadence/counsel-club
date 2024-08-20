import {TagsIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Tags')
    .icon(TagsIcon)
    .schemaType('tag')
    .child(S.documentTypeList('tag'))
)
