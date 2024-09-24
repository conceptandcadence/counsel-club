<script>
import { PortableText } from '@portabletext/vue'

const myPortableTextComponents = {
	/*
  types: {
    image: ({ value }) => h('img', { src: value.imageUrl }),
    callToAction: ({ value, isInline }, { slots }) =>
      isInline
        ? h('a', { href: value.url }, value.text)
        : h('div', { class: 'callToAction' }, value.text),
  },

  marks: {
    link: ({ value }, { slots }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return h('a', { href: value.href, rel }, slots.default?.());
    },
  },
	*/
};
import LOCALE from '~/locales/en.json'

export default {
	data() {
    return {
      LOCALE: LOCALE,
    };
  },
  props: {
    flow: {
      type: Object,
      required: true,
    },
  },
	methods: {
    selectFlow: function (flow) {
			this.$emit('selectFlow', flow);
			//console.log(flow)
    }
	},
	
	emits: ['selectFlow'],
  setup(props, ctx) {
    //ctx.emit('selectFlow')
  }
}
</script>

<template>
  <div class="flow w-1/3 px-12 flex-col justify-center items-center flex" v-if="flow">
    <img
      v-if="flow.thumb"
      class="flow-thumb transition-all duration-1000 w-2/3"
      :src="$urlFor(flow.thumb).width(1600).url()"
      alt="flow.title"
    />
		<h2 class="title text-center pt-12 pb-6 text-lg font-headline">{{ flow.title }}</h2>
		<div class="text-center text-xs mb-7">
			<SanityContent :blocks="flow.label" />
		</div>
		<a :href="'/create/' + flow.slug.current" class="flex w-full button-secondary group h-[40px] relative text-h6 uppercase font-sans justify-center items-center button py-2 px-4 rounded-[64px] transition-all duration-300 ease-in-out bg-offwhite md:py-2 md:px-3 background-offwhite border border-darkgreen after:content-[''] after:absolute after:border after:border-brightgreen after:rounded-[64px] after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] after:transition-all after:duration-300 after:ease-in-out after:pointer-none hover:bg-darkgreen hover:text-offwhite">Get Started</a>
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
