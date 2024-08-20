import type { PortableTextBlock, Slug, ImageAsset } from "@sanity/types";

export interface Variable { 
  _id: string;
  _type: "variable";
  _createdAt: string;
  title: string;
	type: string;
	array: boolean;
}