import type { PortableTextBlock, Slug } from "@sanity/types";
import type { Section } from './Section'

export interface Template {
  _id: string;
  _type: "template";
  _createdAt: string;
  title?: string;
  slug: Slug;
  body: PortableTextBlock[];
	sections: Section[];
	usage: PortableTextBlock[];
}
