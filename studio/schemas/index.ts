// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationGloss from './annotations/glossary'
import annotationVariable from './annotations/variable'

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
  annotationGloss,
	annotationVariable,
]

// Document types
import styleTheme from './documents/styleTheme'
import contract from './documents/contract'
import colorTheme from './documents/colorTheme'

import profile from './documents/profile'
import dataText from './documents/dataText'

import flow from './documents/flow'

import page from './documents/page'
import post from './documents/post'
import question from './documents/question'
import section from './documents/section'
import template from './documents/template'
import variable from './documents/variable'

const documents = [
	styleTheme, 
	colorTheme,
	contract, 
	profile,
	dataText,
	flow,
	page, 
	post, 
	question, 
	section, 
	template,
	variable
]

// Singleton document types
//import home from './singletons/home'
import settings from './singletons/settings'

const singletons = [settings]

// Object types
import address from './objects/address'
import richtext from './objects/richtext'

import actionNavigate from './objects/action/action.navigate'
import actionVariable from './objects/action/action.variable'
import actionUrl from './objects/action/action.url'

import answerText from './objects/answer/answer.text'
import answerEmail from './objects/answer/answer.email'
import answerEntity from './objects/answer/answer.entity'
import answerProfile from './objects/answer/answer.profile'


import answerPhone from './objects/answer/answer.phone'
import answerButton from './objects/answer/answer.button'
import answerCheckbox from './objects/answer/answer.checkbox'
import answerLongText from './objects/answer/answer.longtext'
import answerSelect from './objects/answer/answer.select'

import footer from './objects/global/footer'
import menu from './objects/global/menu'
import linkExternal from './objects/global/linkExternal'
import linkInternal from './objects/global/linkInternal'
import links from './objects/global/links'
import notFoundPage from './objects/global/notFoundPage'
import placeholderString from './objects/global/placeholderString'
import seo from './objects/seo/seo'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoDescription from './objects/seo/description'


const objects = [
	actionVariable,
	actionNavigate,
	actionUrl,
	address, 
	answerText, 
	answerEmail, 
	answerEntity,
	answerPhone, 
	answerButton, 
	answerCheckbox, 
	answerLongText, 
	answerSelect, 
	answerProfile,
	footer,
	links,
	linkExternal,
	linkInternal,
	menu,
	notFoundPage,
	placeholderString,
	richtext,
	seo,
	seoHome,
	seoPage,
	seoDescription
]

export const schemaTypes = [...annotations, ...objects, ...documents, ...singletons]
