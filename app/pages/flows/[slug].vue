<script setup lang="ts">
import { type Flow } from '~/types/Flow'
import { PortableText } from '@portabletext/vue'

const route = useRoute()

const query = groq`{'flow':*[ _type == "flow" && slug.current == $slug][0]{...,start->}, 'templates': *[_type == 'template'], 'variables': *[_type == 'variable'], 'dataEntities': *[_type == 'dataEntity'], 'flows': *[_type == 'flow'], 'settings': *[_type == 'settings'][0],}`
const { data: queryResult } = await useSanityQuery<Flow>(query, {
  slug: route.params.slug,
})
console.log(queryResult)

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
	<Composer :flow="queryResult?.flow" :templates="queryResult.templates" :variables="queryResult.variables" :dataEntities="queryResult.dataEntities" :flows="queryResult.flows" :settings="queryResult.settings" />
</template>
