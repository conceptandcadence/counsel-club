import type { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";


export interface Flow { 
  _id: string;
  _type: "flow";
  _createdAt: string;
  title?: string;
  slug: Slug;
	label: PortableTextBlock[];
  thumb?: ImageAsset;
	start: Object;
}