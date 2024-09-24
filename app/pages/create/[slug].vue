<script setup lang="ts">
const route = useRoute()
const query = groq`{'flow': *[_type == "flow" && slug.current == $slug][0]{..., start->{...}}, 'templates': *[_type == 'template'], 'variables': *[_type == 'variable'], 'profiles': *[_type == 'profile'], 'flows': *[_type == 'flow']{..., start->{...}}, 'settings': *[_type == 'settings'][0], 'profiles': *[_type == 'profile']}`
const { data: queryResult } = await useSanityQuery(query, {
  slug: route.params.slug,
})
</script>
<template>
	<ContractCreate :stage="queryResult?.flow?.start" :templates="queryResult.templates" :variables="queryResult.variables" :dataEntities="queryResult.dataEntities" :flows="queryResult.flows" :settings="queryResult.settings" :profiles="queryResult.profiles" />
</template>
