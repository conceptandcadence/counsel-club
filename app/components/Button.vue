<script lang="ts" setup>
	defineProps<{ title?: string; style?: string, classes?: string, url?: string }>()
</script>
<template>
	<div :class="`button ${classes}`">
		<a v-if="url" :href="url" class="w-full block group">
			<div v-if="style === 'primary'" :class="`button-primary min-h-full relative flex justify-center items-center button py-2 px-4 rounded-[64px] transition-all duration-300 ease-in-out bg-brightgreen md:py-2 md:px-3 background-brightgreen border border-brightgreen after:content-[''] after:absolute after:border after:border-brightgreen after:rounded-[64px] after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] after:transition-colors after:duration-300 after:ease-in-out after:pointer-none group-hover:bg-offwhite focus:bg-offwhite group-hover:border-brightgreen group-focus:border-brightgreen`">
				<span class="text-h6 uppercase transition-all duration-300 ease-in-out text-offwhite group-hover:text-darkgreen">{{ title }}</span>
			</div>
			<div v-if="style === 'secondary'" :class="`button-secondary min-h-full relative flex justify-center items-center button py-2 px-4 rounded-[64px] transition-all duration-300 ease-in-out bg-offwhite md:py-2 md:px-3 background-offwhite border border-darkgreen after:content-[''] after:absolute after:border after:border-brightgreen after:rounded-[64px] after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] after:transition-colors after:duration-300 after:ease-in-out after:pointer-none group-hover:bg-darkgreen`">
				<span class="text-h6 uppercase transition-all duration-300 ease-in-out text-darkgreen group-hover:text-offwhite">{{ title }}</span>
			</div>
			<div v-if="style === 'tertiary'" :class="`button-tertiary min-h-full relative flex justify-center items-center button py-2 px-4 rounded-[64px] transition-all duration-300 ease-in-out bg-darkblue md:py-2 md:px-3 background-darkblue border border-darkblue after:content-[''] after:absolute after:border after:border-darkblue after:rounded-[64px] after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] after:transition-colors after:duration-300 after:ease-in-out after:pointer-none group-hover:bg-offwhite focus:bg-offwhite group-hover:border-darkgreen group-focus:border-darkgreen`">
				<span class="text-h6 uppercase transition-all duration-300 ease-in-out text-offwhite group-hover:text-darkgreen">{{ title }}</span>
			</div>
		</a>
		<button v-else class="w-full block group">
			<div v-if="style === 'primary'" :class="`button-primary min-h-full relative flex justify-center items-center button py-2 px-4 rounded-[64px] transition-all duration-300 ease-in-out bg-brightgreen md:py-2 md:px-3 background-brightgreen border border-brightgreen after:content-[''] after:absolute after:border after:border-brightgreen after:rounded-[64px] after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] after:transition-all after:duration-300 after:ease-in-out after:pointer-none group-hover:bg-offwhite focus:bg-offwhite group-hover:border-brightgreen group-focus:border-brightgreen group-hover:after:-top-[5px] group-hover:after:-bottom-[5px] group-hover:after:-left-[5px] group-hover:after:-right-[5px] group-focus:after:-top-[5px] group-focus:after:-bottom-[5px] group-focus:after:-left-[5px] group-focus:after:-right-[5px]`">
				<span class="text-h6 uppercase transition-all duration-300 ease-in-out text-offwhite group-hover:text-darkgreen">{{ title }}</span>
			</div>
			<div v-if="style === 'secondary'" :class="`button-secondary min-h-full relative flex justify-center items-center button py-2 px-4 rounded-[64px] transition-all duration-300 ease-in-out bg-offwhite md:py-2 md:px-3 background-offwhite border border-darkgreen after:content-[''] after:absolute after:border after:border-brightgreen after:rounded-[64px] after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] after:transition-all after:duration-300 after:ease-in-out after:pointer-none group-hover:bg-darkgreen`">
				<span class="text-h6 uppercase transition-all duration-300 ease-in-out text-darkgreen group-hover:text-offwhite">{{ title }}</span>
			</div>
			<div v-if="style === 'tertiary'" :class="`button-tertiary min-h-full relative flex justify-center items-center button py-2 px-4 rounded-[64px] transition-all duration-300 ease-in-out bg-darkblue md:py-2 md:px-3 background-darkblue border border-darkblue after:content-[''] after:absolute after:border after:border-darkblue after:rounded-[64px] after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] group-hover:after:-top-[5px] group-hover:after:-bottom-[5px] group-hover:after:-left-[5px] group-hover:after:-right-[5px] group-focus:after:-top-[5px] group-focus:after:-bottom-[5px] group-focus:after:-left-[5px] group-focus:after:-right-[5px] after:transition-all after:duration-300 after:ease-in-out after:pointer-none group-hover:bg-offwhite focus:bg-offwhite group-hover:border-darkgreen group-focus:border-darkgreen`">
				<span class="text-h6 uppercase transition-all duration-300 ease-in-out text-offwhite group-hover:text-darkgreen">{{ title }}</span>
			</div>
		</button>
	</div>
</template>