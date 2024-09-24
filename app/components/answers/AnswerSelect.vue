<script lang="ts" setup>
	defineProps<{ answer:Object }>()
	import { session } from '~/utils'

</script>
<template>
	<div class="answer answer-select">
		<FormKit
			type="select"
      :label="answer?.title"
      :name="`${getVariableHandleById(answer?.variable?._ref, session.vars)}`"
			:options="answer.options.split(/\r?\n/)"
			:classes="{
				outer: `$reset input-wrapper input-floating relative input input-text mt-8 mb-4 w-full`,
				wrapper: `$reset relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out flex justify-end`,
				label: `$reset label-floating absolute z-10 block text-h6 uppercase text-brightgreen font-sans left-4 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-500`,
				input: `$reset font-serif relative z-0 block py-3 px-3 w-full text-charcoal border border-brightgreen/0 rounded-[6px] placeholder:text-darkgreen/30 focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose`,
			}"	
		/>
	</div>
</template>



