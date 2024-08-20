import {CaseIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Proposals')
    .icon(CaseIcon)
    .schemaType('proposal')
    .child(S.documentTypeList('proposal'))
)
