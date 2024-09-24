<script setup lang="ts">
import Composer from '~/components/Composer.vue'

const query = groq`{'templates': *[_type == 'template'], 'variables': *[_type == 'variable'], 'profiles': *[_type == 'profile'], 'flows': *[_type == 'flow']}`
const { data: queryResult } = await useSanityQuery(query)
</script>

<style>
.unknown__pt__mark__annotationVariable {
	border: solid 1px rgba(0, 0, 0, 1);
	border-radius: 100px;
	background-color:rgba(0, 255, 38, 0.8);
	cursor: pointer;
	font-size: 15px;
	padding: 4px 8px 4px 4px;
	letter-spacing: 0.25px;
	transition: all 0.25s ease-in-out;
	line-height: 1;
	display: inline-block;
}

.unknown__pt__mark__annotationVariable:hover {
	background-color:rgba(0, 255, 38, 1);
	border-color:rgba(0, 0, 0, 1);
}

.unknown__pt__mark__annotationVariable {
	color: #000000;
}

.unknown__pt__mark__annotationVariable [aria-label="Annotation object"] {
	transition: all 0.25s ease-in-out;
	display: inline-block;
}
</style>

<template>
	<Composer :query="queryResult" />
</template>
