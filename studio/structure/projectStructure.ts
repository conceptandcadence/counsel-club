import {CaseIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Case Studies')
    .icon(CaseIcon)
    .schemaType('project')
    .child(S.documentTypeList('project'))
)
