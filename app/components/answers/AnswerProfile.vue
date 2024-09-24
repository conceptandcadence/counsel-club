<script lang="ts" setup>
import type { Profile } from "~/types/Profile";
import { reactive, ref, computed } from "vue";
import { textFloatingLabel } from '~/inputs/textFloatingLabel'
import { setgroups } from "process";
import { getProfile } from '~/utils'

const profileCreatedRecently = ref(false)
const profileSelectedID = ref('')
const profileType = ref('Sole Proprietor')
const profileFirstName = ref('')
const profileMiddleName = ref('')
const profileLastName = ref('')
const profileLegalName = ref('')
const profileDBAName = ref('')
const profileTitle = computed(() => {
	if (profileDBAName.value ) {
		return `${profileDBAName.value}`
	}
	if (profileLegalName.value ) {
		return `${profileLegalName.value}`
	}
	if (profileFirstName.value  && profileMiddleName.value  && profileLastName.value) {
		return `${profileFirstName.value} ${profileMiddleName.value} ${profileLastName.value}`
	}
	if (profileFirstName.value && profileLastName.value) {
		return `${profileFirstName.value} ${profileLastName.value}`
	}
  return `Untitled Profile`
})

const profileFormLayout = ref('create')
const toggleProfileMode = () => {
	if (profileFormLayout.value === 'create') {
		profileFormLayout.value = 'select'
	} else {
		profileFormLayout.value = 'create'
	}	
}

const createNewProfile = () => {
	const profile = {
		_type: 'profile',
		title: profileTitle.value,
		firstName: profileFirstName.value,
		lastName: profileLastName.value,
		middleName: profileMiddleName.value,
		type: profileType.value,
		legalName: profileLegalName.value,
		dbaName: profileDBAName.value,
	}
	createProfile(profile)
	profileCreatedRecently.value = true
	setTimeout(() => {
		profileCreatedRecently.value = false
	}, 2000)
}

const selectProfile = (profile:Object) => {
	if (profileSelectedID?.value) {
		//console.log('profileSelected', profileSelectedID, profileSelectedID.value)
		const profile = getProfile(profileSelectedID.value).then(profile => {
			console.log(profile)

			profileType.value = ''
			profileFirstName.value = ''
			profileMiddleName.value = ''
			profileLastName.value = ''
			profileLegalName.value = ''
			profileDBAName.value = ''

			if (profile?.type && profile.type !== '') {
				profileType.value = profile.type
			}

			if (profile?.type && profile.type !== 'Sole Proprietor') {
				if (profile?.legalName && profile.legalName !== '') {
					profileLegalName.value = profile.legalName
				}
				if (profile?.dbaName && profile.dbaName !== '') {
					profileDBAName.value = profile.dbaName
				}	
				profileFirstName.value = ''
				profileMiddleName.value = ''
				profileLastName.value = ''
			}

			if (profile?.type && profile.type === 'Sole Proprietor') {
				profileLegalName.value = ''
				profileDBAName.value = ''
				if (profile?.firstName && profile.firstName !== '') {
					profileFirstName.value = profile.firstName
				}
				if (profile?.middleName && profile.middleName !== '') {
					profileMiddleName.value = profile.middleName
				}
				if (profile?.lastName && profile.lastName !== '') {
					profileLastName.value = profile.lastName
				}
			}
			if (profile?.title && profile.title !== '') {
				profileDBAName.value = profile.title
			}	

			
		})
	}
	//if (profileSelected.value) {
		//type = ''
	//	console.log('profileSelected.value', profileSelected.value) 
	//}
}
/*
const query = groq`{'profiles': *[_type == 'profile'],}`
const { data: profilesQuery } = await useSanityQuery<Profile[]>(query)
internalProfile.profiles = profilesQuery?.value?.profiles
console.log('internalProfile')
console.log(internalProfile)
*/
defineProps<{ session:Object, answer:Object }>()

</script>
<template>
	<div class="answer answer-profile font-sans text-lg mb-12">
		
			<div :class="`profile-select flex flex-wrap justify-between ${profileFormLayout === 'create' ? 'hidden' : '' }`">
				<FormKit
					type="button"
					name="title"
					label="create a new profile"
					:classes="{
						outer: `$reset flex my-4 $reset relative p-[1px] rounded-full w-full md:w-1/2 border border-brightgreen ease-in-out w-full transition-all duration-1000 ease-in-out has-[:hover]:scale-y-[110%] has-[:focus]:scale-x-[105%] has-[:hover]:scale-x-[102%] has-[:focus]:scale-y-[105%]`,
						wrapper: `$reset relative p-[1px] rounded-full border border-black transition-all ease-in-out duration-1000 w-full has-[:hover]:border-offwhite has-[:focus]:border-offwhite`,
						input: `$reset block text-h6 uppercase text-darkgreen bg-offwhite font-sans transition-all ease-in-out duration-1000 w-full h-[32px] rounded-full hover:bg-brightgreen focus:bg-brightgreen hover:text-offwhite focus:text-offwhite`,
					}"	
					@click="toggleProfileMode()"
				/>
				<div class="border-b-1 border-darkgreen/30 w-full"></div>

				<FormKit
					type="select"
					label="Your Profile"
					placeholder="true"
					v-model="profileSelectedID"
					v-if="session.profiles"
					:name="`${getVariableHandleById(answer?.variable?._ref, session.vars)}_PROFILE_ID`"
					:classes="{
						outer: `$reset input-wrapper input-floating relative input input-text mt-4 mb-4 w-full`,
						wrapper: `$reset relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out`,
						label: `$reset label-floating absolute z-10 block text-h6 uppercase text-brightgreen font-sans left-4 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-500`,
						inner: `flex justify-end`,
						input: `$reset w-1/2 font-serif relative z-0 block py-3 px-3 text-charcoal border border-brightgreen/0 rounded-[6px] placeholder:text-darkgreen/30 focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose`,
					}"	
					@change="selectProfile(value)"
				>
					<option hidden="true" disabled="true" data-is-placeholder="true" selected="true" value="">Select a profile</option>
					<option
						v-for="profile of session.profiles"
						:value="profile?._id"
						:label="profile?.title"
						:key="profile._id">
					</option>
				</FormKit>
			</div>
			<div :class="`profile-create flex flex-wrap justify-between ${profileFormLayout !== 'create' ? 'hidden' : '' }`">
				<FormKit
					type="button"
					name="title"
					label="Select an existing profile"
					:classes="{
						outer: `$reset flex mt-4 $reset relative p-[1px] rounded-full w-full md:w-1/2 border border-brightgreen ease-in-out w-full transition-all duration-1000 ease-in-out has-[:hover]:scale-y-[110%] has-[:focus]:scale-x-[105%] has-[:hover]:scale-x-[102%] has-[:focus]:scale-y-[105%] mb-4`,
						wrapper: `$reset relative p-[1px] rounded-full border border-black transition-all ease-in-out duration-1000 w-full has-[:hover]:border-offwhite has-[:focus]:border-offwhite`,
						input: `$reset block text-h6 uppercase text-darkgreen bg-offwhite font-sans transition-all ease-in-out duration-1000 w-full h-[32px] rounded-full hover:bg-brightgreen focus:bg-brightgreen hover:text-offwhite focus:text-offwhite`,
					}"	
					@click="toggleProfileMode()"
				/>
				<FormKit
					type="select"
					label="Profile Type"
					v-model="profileType"
					:name="`${getVariableHandleById(answer?.variable?._ref, session.vars)}_ENTITY_TYPE`"
					:classes="{
						outer: `$reset input-wrapper input-floating relative input input-text mt-4 mb-4 w-full`,
						wrapper: `$reset relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out`,
						label: `$reset label-floating absolute z-10 block text-h6 uppercase text-brightgreen font-sans left-4 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-500`,
						inner: `flex justify-end`,
						input: `$reset w-1/2 font-serif relative z-0 block py-3 px-3 text-charcoal border border-brightgreen/0 rounded-[6px] placeholder:text-darkgreen/30 focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose`,
					}"	
				>
					<option class="font-sans text-lg" value="Sole Proprietor" key="sole-proprietor">Individual</option>
					<option class="font-sans text-lg" value="Corporation" key="corporation">Corporation</option>
					<option class="font-sans text-lg" value="LLC" key="llc">LLC</option>
				</FormKit>
				<div class="border-b-1 border-solid border-darkgreen/30 w-full"></div>
				<FormKit
					:type="textFloatingLabel"
					:name=" `${getVariableHandleById(answer?.variable?._ref, session.vars)}_FIRST_NAME`"
					label="First Name"
					v-model="profileFirstName"
					placeholder=""
					:classes="{
						outer: `$reset ${profileType === 'Sole Proprietor' ? '' : 'hidden' } input-wrapper input-floating relative input input-text mt-4 mb-4 w-full md:w-[calc(50%-8px)]`,
						wrapper: `$reset relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out`,
						label: `$reset label-floating absolute z-10 block text-h6 uppercase text-brightgreen font-sans left-4 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-500`,
						input: `$reset font-serif relative z-0 block py-3 px-3 w-full text-charcoal border border-brightgreen/0 rounded-[6px] placeholder:text-darkgreen/30 focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose`,
					}"	
				/>
				<Suspense>
				<FormKit
					:type="textFloatingLabel"
					:name="`${getVariableHandleById(answer?.variable?._ref, session.vars)}_MIDDLE_NAME`"
					label="Middle Name"
					placeholder=""
					v-model="profileMiddleName"
					:classes="{
						outer: `$reset ${profileType === 'Sole Proprietor' ? '' : 'hidden' } input-wrapper input-floating relative input input-text mt-4 mb-4 w-full md:w-[calc(50%-8px)]`,
						wrapper: `$reset relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out`,
						label: `$reset label-floating absolute z-10 block text-h6 uppercase text-brightgreen font-sans left-4 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-500`,
						input: `$reset font-serif relative z-0 block py-3 px-3 w-full text-charcoal border border-brightgreen/0 rounded-[6px] placeholder:text-darkgreen/30 focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose`,
					}"	
				/>
			</Suspense>
				<FormKit
					:type="textFloatingLabel"
					:name="`${getVariableHandleById(answer?.variable?._ref, session.vars)}_LAST_NAME`"
					label="Last Name"
					placeholder=""
					v-model="profileLastName"
					:classes="{
						outer: `$reset ${profileType === 'Sole Proprietor' ? '' : 'hidden' } input-wrapper input-floating relative input input-text mt-4 mb-4 w-full`,
						wrapper: `$reset relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out`,
						label: `$reset label-floating absolute z-10 block text-h6 uppercase text-brightgreen font-sans left-4 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-500`,
						input: `$reset font-serif relative z-0 block py-3 px-3 w-full text-charcoal border border-brightgreen/0 rounded-[6px] placeholder:text-darkgreen/30 focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose`,
					}"	
				/>
				<FormKit
					:type="textFloatingLabel"
					:name="`${getVariableHandleById(answer?.variable?._ref, session.vars)}_LEGAL_NAME`"
					label="Legal Name"
					placeholder=""
					v-model="profileLegalName"
					:classes="{
						outer: `$reset ${profileType !== '' && profileType !== 'Sole Proprietor' ? '' : 'hidden' } input-wrapper input-floating relative input input-text mt-4 mb-4 w-full`,
						wrapper: `$reset relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out`,
						label: `$reset label-floating absolute z-10 block text-h6 uppercase text-brightgreen font-sans left-4 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-500`,
						input: `$reset font-serif relative z-0 block py-3 px-3 w-full text-charcoal border border-brightgreen/0 rounded-[6px] placeholder:text-darkgreen/30 focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose`,
					}"	
				/>
				<FormKit
					:type="textFloatingLabel"
					:name="`${getVariableHandleById(answer?.variable?._ref, session.vars)}_DBA_NAME`"
					label="DBA Name"
					placeholder=""
					v-model="profileDBAName"
					:classes="{
						outer: `$reset ${profileType !== '' && profileType !== 'Sole Proprietor' ? '' : 'hidden' } input-wrapper input-floating relative input input-text mt-4 mb-4 w-full`,
						wrapper: `$reset relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out`,
						label: `$reset label-floating absolute z-10 block text-h6 uppercase text-brightgreen font-sans left-4 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-500`,
						input: `$reset font-serif relative z-0 block py-3 px-3 w-full text-charcoal border border-brightgreen/0 rounded-[6px] placeholder:text-darkgreen/30 focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose`,
					}"	
				/>
				<FormKit
					type="hidden"
					:name="`${getVariableHandleById(answer?.variable?._ref, session.vars)}_TITLE`"
					placeholder=""
					v-model="profileTitle"
					:classes="{
						outer: `$reset input-wrapper input-floating relative input input-text mt-4 mb-4 w-full`,
						wrapper: `$reset relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out`,
						label: `$reset label-floating absolute z-10 block text-h6 uppercase text-brightgreen font-sans left-4 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-500`,
						input: `$reset font-serif relative z-0 block py-3 px-3 w-full text-charcoal border border-brightgreen/0 rounded-[6px] placeholder:text-darkgreen/30 focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose`,
					}"	
				/>
				<FormKit
					type="button"
					name="title"
					label="Create Profile"
					:classes="{
						outer: `${ profileCreatedRecently ? 'opacity-50 pointer-events-none cursor-not-allowed' : '' } $reset  flex my-4 $reset relative p-[1px] rounded-full w-full md:w-1/2 border border-brightgreen ease-in-out w-full transition-all duration-1000 ease-in-out has-[:hover]:scale-y-[110%] has-[:focus]:scale-x-[105%] has-[:hover]:scale-x-[102%] has-[:focus]:scale-y-[105%]`,
						wrapper: `$reset relative p-[1px] rounded-full border border-black transition-all ease-in-out duration-1000 w-full has-[:hover]:border-offwhite has-[:focus]:border-offwhite`,
						input: `$reset block text-h6 uppercase text-darkgreen bg-offwhite font-sans transition-all ease-in-out duration-1000 w-full h-[32px] rounded-full hover:bg-brightgreen focus:bg-brightgreen hover:text-offwhite focus:text-offwhite`,
					}"	
					@click="createNewProfile()"
				/>
			</div>

	</div>
</template>		