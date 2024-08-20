import {ListItemBuilder, StructureResolver} from 'sanity/structure';
import clients from './clientStructure'
import collections from './collectionStructure'
import colorThemes from './colorThemeStructure'
import deliverables from './deliverableStructure'
import home from './homeStructure'
import initiatives from './initiativeStructure'
import pages from './pageStructure'
import projects from './projectStructure'
import proposals from './proposalStructure'
import products from './productStructure'
import services from './serviceStructure'
import settings from './settingStructure'
import tags from './tagStructure'

/**
 * Structure overrides
 *
 * Sanity Studio automatically lists document types out of the box.
 * With this custom structure we achieve things like showing the `home`
 * and `settings` document types as singletons, and grouping product details
 * and variants for easy editorial access.
 *
 * You can customize this even further as your schemas progress.
 * To learn more about structure builder, visit our docs:
 * https://www.sanity.io/docs/overview-structure-builder
 */

// If you add document types to structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
		'client',
    'collection',
    'colorTheme',
    'home',
		'initiative',
    'media.tag',
    'page',
    'product',
		'project',
    'productVariant',
    'service',
		'settings',
		'tag',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      pages(S, context),
			projects(S, context),
			tags(S, context),
			S.divider(),
      proposals(S, context),
			services(S, context),
			initiatives(S, context),
			deliverables(S, context),
			clients(S, context),
      S.divider(),
      collections(S, context),
      products(S, context),
      S.divider(),
      colorThemes(S, context),
      S.divider(),
      settings(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
