export type Answer = AnswerText | AnswerSelect | AnswerPhone | AnswerLongText | AnswerEntity | AnswerEmail | AnswerCheckbox | AnswerButton | AnswerProfile;

export interface AnswerText { 
  _id: string;
  _type: "answer.text";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface AnswerSelect { 
  _id: string;
  _type: "answer.select";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface AnswerPhone { 
  _id: string;
  _type: "answer.phone";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface AnswerLongText { 
  _id: string;
  _type: "answer.longtext";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface AnswerEntity { 
  _id: string;
  _type: "answer.entity";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface AnswerEmail { 
  _id: string;
  _type: "answer.email";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface AnswerCheckbox { 
  _id: string;
  _type: "answer.checkbox";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface AnswerButton { 
  _id: string;
  _type: "answer.button";
  _createdAt: string;
  title?: string;
	variable: string;
}
export interface AnswerProfile { 
  _id: string;
  _type: "answer.profile";
  _createdAt: string;
  title?: string;
	variable: string;
}