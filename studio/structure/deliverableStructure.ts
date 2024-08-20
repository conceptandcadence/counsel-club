import {PackageIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Deliverables')
    .icon(PackageIcon)
    .schemaType('deliverable')
    .child(S.documentTypeList('deliverable'))
)
