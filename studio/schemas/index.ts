// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationFootnote from './annotations/footnote'
import annotationVariable from './annotations/variable'

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
  annotationFootnote,
	annotationVariable,
]

// Document types
import styleTheme from './documents/styleTheme'
import contract from './documents/contract'
import page from './documents/page'
import post from './documents/post'
import question from './documents/question'
import section from './documents/section'
import template from './documents/template'
import variable from './documents/variable'

const documents = [
	styleTheme, 
	contract, 
	page, 
	post, 
	question, 
	section, 
	template,
	variable
]

// Singleton document types
//import home from './singletons/home'
//import settings from './singletons/settings'

//const singletons = [settings]

// Object types
import address from './objects/address'
import richtext from './objects/richtext'

import answerText from './objects/answer/answer.text'
import answerEmail from './objects/answer/answer.email'
import answerPhone from './objects/answer/answer.phone'
import answerButton from './objects/answer/answer.button'
import answerCheckbox from './objects/answer/answer.checkbox'
import answerLongText from './objects/answer/answer.longtext'

const objects = [
	address, 
	answerText, 
	answerEmail, 
	answerPhone, 
	answerButton, 
	answerCheckbox, 
	answerLongText, 
	richtext,
]

export const schemaTypes = [...annotations, ...objects, ...documents]
