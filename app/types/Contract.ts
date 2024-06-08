import type { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";


export interface Contract {
  _id: string;
  _type: "contract";
  _createdAt: string;
  title?: string;
  slug: Slug;
  mainImage?: ImageAsset;
  text: PortableTextBlock[];
	template: Template;
}