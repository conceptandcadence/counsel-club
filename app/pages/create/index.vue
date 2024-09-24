<script setup lang="ts">
const query = groq`{'templates': *[_type == 'template'], 'variables': *[_type == 'variable'], 'profiles': *[_type == 'profile'], 'flows': *[_type == 'flow']{..., start->{...}}, 'settings': *[_type == 'settings'][0],}`
const { data: queryResult } = await useSanityQuery(query)

import User from '@/store/models/User';
import { useRepo } from 'pinia-orm';
import { useNuxtApp } from '#imports';

const nuxtApp = useNuxtApp(); // workaround
const userRepo = useRepo(User, nuxtApp.$pinia); // workaround
// const userRepo = useRepo(User);
const users = userRepo.all();

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
	<ContractFlows :flow="queryResult?.flow" :templates="queryResult.templates" :variables="queryResult.variables" :dataEntities="queryResult.dataEntities" :flows="queryResult.flows" :settings="queryResult.settings" />
</template>
