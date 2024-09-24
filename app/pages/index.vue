<script setup lang="ts">
import { type Post } from '~/types/Post'

const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`
const { data: posts } = await useSanityQuery<Post[]>(query)
window.location.href = `${window.location.origin}/create/`
</script>

<template>
  <section>

  </section>
</template>
