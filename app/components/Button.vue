<script lang="ts" setup>
	defineProps<{ title: string, type: string, styles?: string, url?: string }>()
	import LOCALE from '~/locales/en.json'

	const randomColor = (e) => {
	const hex = Math
		.floor(Math.random()*16777215)
		.toString(16)
		e.target.setAttribute(
			'style',
			'background-color: #' + hex + '88;'
		)
	}
</script>
<template>
	<FormKit
		v-if="type === 'primary'"
		type="button"
		:name="title"
		:label="title"
		:classes="{
			outer: `$reset`,
			input: `$reset flex w-full group w-full mt-6 h-[52px] button-primary relative justify-center items-center button py-2 px-4 rounded-[64px] transition-all duration-300 ease-in-out bg-brightgreen md:py-2 md:px-3 background-brightgreen border border-brightgreen after:content-[''] after:absolute after:border after:border-brightgreen after:rounded-[64px] after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] after:transition-all after:duration-300 after:ease-in-out after:pointer-none hover:bg-offwhite focus:bg-offwhite hover:border-brightgreen focus:border-brightgreen hover:after:-top-[5px] hover:after:-bottom-[5px] hover:after:-left-[5px] hover:after:-right-[5px] focus:after:-top-[5px] focus:after:-bottom-[5px] focus:after:-left-[5px] focus:after:-right-[5px]`
		}"
		@click="$emit('click')"
		>
		<span class=" text-h6 uppercase transition-all duration-300 ease-in-out text-darkgreen hover:text-offwhite">{{ title }}</span>
	</FormKit>
	<FormKit
		v-if="type === 'secondary'"
		type="button"
		:name="title"
		:label="title"
		:classes="{
			outer: `$reset`,
			input: `$reset w-full button-secondary group relative flex justify-center items-center button py-2 px-4 rounded-[64px] transition-all duration-300 ease-in-out bg-offwhite md:py-2 md:px-3 background-offwhite border border-darkgreen after:content-[''] after:absolute after:border after:border-brightgreen after:rounded-[64px] after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] after:transition-all after:duration-300 after:ease-in-out after:pointer-none hover:bg-darkgreen`
		}"	
		@click="$emit('click')"
	>
		<span class="text-h6 uppercase transition-all duration-300 ease-in-out text-darkgreen group-hover:text-offwhite">{{ title }}</span>
	</FormKit>
	<FormKit
		v-if="type === 'tertiary'"
		type="button"
		:name="title"
		:label="title"
		:classes="{
			outer: `$reset`,
			input: `$reset w-full button-tertiary group relative flex justify-center items-center button py-2 px-4 rounded-[64px] transition-all duration-300 ease-in-out bg-darkblue md:py-2 md:px-3 background-darkblue border border-darkblue after:content-[''] after:absolute after:border after:border-darkblue after:rounded-[64px] after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] hover:after:-top-[5px] hover:after:-bottom-[5px] hover:after:-left-[5px] hover:after:-right-[5px] focus:after:-top-[5px] focus:after:-bottom-[5px] focus:after:-left-[5px] focus:after:-right-[5px] after:transition-all after:duration-300 after:ease-in-out after:pointer-none hover:bg-offwhite focus:bg-offwhite hover:border-darkgreen focus:border-darkgreen`
		}"		
		@click="$emit('click')"
		>
		<span class="text-h6 uppercase transition-all duration-300 ease-in-out text-darkgreen hover:text-offwhite">{{ title }}</span>
	</FormKit>
</template>

