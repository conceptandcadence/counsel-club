<script lang="ts" setup>

	defineProps<{ variable: string, title: string,  }>()
</script>
<template>
	<div class="input-wrapper input-floating relative input input-text mt-8 mb-4">
		<div class="relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out">
			<input type="text" :name="`input-${title}`" :id="`input-${variable}`" autocomplete="`input-${title}`" placeholder="" class="font-serif relative z-0 block py-3 px-3 w-full text-charcoal border border-brightgreen/0 rounded-[6px] placeholder:text-darkgreen/30 focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose" />
			<label :for="`input-${variable}`" class="label-floating absolute z-10 block text-h6 uppercase text-brightgreen font-sans left-4 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-500">{{ title }}</label>
		</div>
	</div>
</template>