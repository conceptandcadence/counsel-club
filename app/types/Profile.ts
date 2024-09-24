import type { Address } from "./Address";

export interface Profile { 
  _id: string;
  _type: "variable";
  _createdAt: string;
  title: string;
	type: string;
	firstName?: string;
	middleName?: string;
	lastName?: string;
	legalName: string;
	dbaName: string;
	address: Address;
}