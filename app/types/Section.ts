import type { PortableTextBlock, Slug } from "@sanity/types";

export interface Section {
  _id: string;
  _type: "template";
  _createdAt: string;
  title?: string;
  body: PortableTextBlock[];
	numbered: boolean;
}