export type Input = InputText | InputSelect | InputPhone | InputLongText | InputEntity | InputEmail | InputCheckbox | InputButton;

export interface InputText { 
  _id: string;
  _type: "input.text";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface InputSelect { 
  _id: string;
  _type: "input.select";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface InputPhone { 
  _id: string;
  _type: "input.phone";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface InputLongText { 
  _id: string;
  _type: "input.longtext";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface InputEntity { 
  _id: string;
  _type: "input.entity";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface InputEmail { 
  _id: string;
  _type: "input.email";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface InputCheckbox { 
  _id: string;
  _type: "input.checkbox";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface InputButton { 
  _id: string;
  _type: "input.button";
  _createdAt: string;
  title?: string;
	variable: string;
}
