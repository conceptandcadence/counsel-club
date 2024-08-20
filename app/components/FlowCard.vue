<script>
import { PortableText } from '@portabletext/vue'
import { MenuButton } from '@headlessui/vue'
export default {
  props: {
    flow: {
      type: Object,
      required: true,
    },
  },
	methods: {
    selectFlow: function (flow) {
      session.data.flow = flow
    }
	},
	emits: ['select-flow'],
  setup(props, ctx) {
    ctx.emit('select-flow')
  }
}

/*
		<MenuButton @click="$emit('select-flow',flow)" class="inline-flex w-full flex-col text-center rounded-md bg-black/0 px-3 py-2 text-xs font-semibold border border-black cursor-pointer hover:bg-black/10 text-black shadow-sm transition-all duration-300">
			<span class="block">Select</span>
		</MenuButton>
*/
</script>

<template>
  <div class="flow w-1/3 px-12 flex-col" v-if="flow">
    <img
      v-if="flow.thumb"
      class="flow-thumb transition-all duration-1000"
      :src="$urlFor(flow.thumb).width(1600).url()"
      alt="flow.title"
    />
		<h2 class="title text-center pt-12 pb-6 text-lg font-headline">{{ flow.title }}</h2>
		<PortableText :value="flow.label" />
		<a class="button button-secondary flex justify-center items-center py-4 px-6 w-full" :href="`/flows/${flow.slug.current}`">
			<span class="text-h6 uppercase">Get Started</span>		
		</a>
	</div>
</template>

<style scoped>
.flow img {
	box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.25);
}
.flow:hover img {
	box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.5);
	transform: scale3d(1.0125, 1.0125, 1.0125);
}
</style>
