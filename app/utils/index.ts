import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'
import type { Profile } from "~/types/Profile"
import {createClient} from '@sanity/client'

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function urlFor(source: Image) {
  const sanity = useSanity()
  const builder = imageUrlBuilder(sanity.client)
  return builder.image(source)
}

export const client = createClient({
	projectId: "hcnymid5",
	dataset: "production",
	useCdn: true, 
	apiVersion: '2024-03-15',
	token: "skwJDQgky3MvmVAzDr4dJN8nJIKc789DxdZ0SJP1EHkaOBkQjUw4DSrOj8TojcOJUkE7An92wNOMdJBgbpkKgvdYokRxW2NzasqIWutoEhERA5tdT2La41FsH1yLfE9xaC2GwrN60XzE6ZABWP5Iztu7wfyeCcbC0J2AI1ODwYTmfdv6USsz"
})

export async function getProfiles() {
  const profiles = await client.fetch('*[_type == "profile"]')
  return profiles
}

export async function getProfile(id) {
  const profile = await client.fetch(`*[_type == "profile" && _id == "${id}"][0]`)
  return profile
}

export async function getStages() {
  const profiles = await client.fetch('*[_type == "question"]')
  return profiles
}

export async function getStage(id) {
  const profile = await client.fetch(`*[_type == "question" && _id == "${id}"][0]`)
  return profile
}

export async function createProfile(profile:Profile) {
  const result = client.create(profile).then(result => {
		alert('Your profile has been saved!')
	})
  return result
}

export async function updateDocumentTitle(_id:string, title:string) {
  const result = client.patch(_id).set({title})
  return result
}

export function navigateToStage(id:string, session) {
	if (id) {
		const stage = getStage(id).then(stage => {
			//session.stage.test.value = 'example'
			console.log('navigateToStage', stage)
		})
	}
}

export async function getVariable(id:string) {
	if (id) {
		const variable = await client.fetch(`*[_type == "variable" && _id == "${id}"][0]`)
		return variable
	}
}

export function obectKeyMatches(obj, handle) {
	let value = false
	if (obj && handle) {
		for (const prop in obj) {
			console.log(prop, prop.value)
			let index = prop.indexOf(handle)
			if (index !== -1) {
				value = true
			}
		}
	}
	return value
}
export function arrayKeyMatches(array, variable) {
	if (array && variable) {
		array
		for (const property in obj) {
			for (const propie in property) {
				console.log(propie)
			}
		}
	}
}
export function getVariableById(id:string, variables: Array<Object>) {
	let $variable = {}
	variables.forEach(variable => {
		if (variable?._id === id) {
			$variable = variable
		}
	})
	return $variable
}
export function getVariableHandleById(id:string, variables: Array<Object>) {
	let handle = 'ERROR'
	variables.forEach(variable => {
		if (variable._id === id) {
			handle = `${variable?.handle?.current?.replace(/[^a-zA-Z _]/g, '')}`
		}
	})
	return handle
}


export const session = reactive({
	profile: {},
	stage: {},
	user: {},
	contract: {},
	template: {},
	entries: {},
	variables: {},
	data: {},
	vars: {}
})