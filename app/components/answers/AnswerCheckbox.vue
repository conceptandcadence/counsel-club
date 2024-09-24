<script lang="ts" setup>
	defineProps<{ answer:Object }>()
	//relative p-[1px] rounded-md border border-darkgreen/30 has-[:focus]:border-darkgreen/100 transition-colors ease-in-out
</script>
<template>
	<div class="answer answer-checkbox">
		<FormKit
      type="checkbox"
      :label="answer?.title"
      :name="`${getVariableHandleById(answer?.variable?._ref, session.vars)}`"
      :value="false"
			:classes="{
				outer: `$reset p-[1px] rounded-md border border-darkgreen/30 input-wrapper input-floating relative input input-text mt-6`,
				wrapper: `$reset p-4  flex w-full flex-row-reverse items-center justify-between`,
				label: `$reset text-h6 uppercase text-brightgreen font-sans transition-all ease-in-out duration-500   `,
				input: `$reset text-charcoal border border-brightgreen/30 rounded-[4px] bg-offwhite placeholder:text-darkgreen focus:border-brightgreen/100 sm:text-xs sm:leading-6 ring-0 focus:ring-0 transition-colors ease-in-out leading-loose`,
			}"	
    />
	</div>
</template>
