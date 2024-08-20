import type { PortableTextBlock } from "@sanity/types";

export interface Question { 
  _id: string;
  _type: "question";
  _createdAt: string;
  title?: string;
	label: PortableTextBlock[];
  answers: Object[];
	education: PortableTextBlock[];
}