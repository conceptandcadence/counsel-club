<script lang="ts" setup>
	import InputText from '~/components/inputs/InputText'

	defineProps<{ title:string, variable:string }>()
</script>
<template>
	<div class="answer answer-text">
		<InputText :title="title" :variable="variable" />
	</div>
</template>