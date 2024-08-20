import {UsersIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Clients')
    .icon(UsersIcon)
    .schemaType('client')
    .child(S.documentTypeList('client'))
)
