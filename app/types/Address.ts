export interface Address { 
  _id: string;
  _type: "address";
  _createdAt: string;
  addressStreet1?: string;
  addressStreet2?: string;
	city?: string;
	state?: string;
	country?: string;
}