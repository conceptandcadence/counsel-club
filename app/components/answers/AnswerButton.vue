<script lang="ts" setup>
	import Button from '~/components/Button.vue'


	
	defineProps<{ title:string, variable:string }>()
</script>
<template>
	<div class="answer answer-text flex">
		<Button :title="title" :style="'primary'" :classes="'flex w-full mt-6 h-[52px]'" />
	</div>
</template>