<script>
import { reactive, ref, provide, computed } from "vue";
import { session } from '~/utils'

const submitted = ref(false)

const flow = reactive({})

const CONSULTANT_TITLE = computed(() => {
	if (session?.variables?.CLIENT_DBA) {
		return `${session?.variables?.CLIENT_DBA}`
	}
	if (session?.variables?.CLIENT_LEGAL_NAME) {
		return `${session?.variables?.CLIENT_LEGAL_NAME}`
	}
	if (session?.variables?.CLIENT_FIRST_NAME && session?.variables?.CLIENT_MIDDLE_NAME && session?.variables?.CLIENT_LAST_NAME) {
		return `${session?.variables?.CLIENT_FIRST_NAME} ${session?.variables?.CLIENT_MIDDLE_NAME} ${session?.variables?.CLIENT_LAST_NAME}`
	}
	if (session?.variables?.CLIENT_FIRST_NAME && session?.variables?.CLIENT_LAST_NAME) {
		return `${session?.variables?.CLIENT_FIRST_NAME} ${session?.variables?.CLIENT_LAST_NAME}`
	}
	return `Untitled Profile`
})

export default {
  name: "ContractCreate",
	data() {
    return {
      session: session,
    };
  },
	props: {
		templates: {
			type: Array,
			required: true,
		},
		variables: {
			type: Array,
			required: true,
		},
		dataEntities: {
			type: Array,
			required: true,
		},
		flows: {
			type: Array,
			required: true,
		},
		stage: {
			type: Object,
			required: false,
		},
		settings: {
			type: Object,
			required: true,
		},
		profiles: {
			type: Array,
			required: true,
		},
	},
  components: {},
	methods: {
		parseFormEntries(entries, session, variables) {
			
			session.entries = entries
			if (session.entries) {
				for (const property in session.entries) {
					if (session.entries?.[property] !== '') {
						variables.forEach(variable => {
							const entryHandle = `${property?.replace(/[^a-zA-Z _]/g, '')}`
							const variableHandle = `${variable?.handle?.current?.replace(/[^a-zA-Z _]/g, '')}`
							if (entryHandle === variableHandle) {
								console.log(entryHandle, session.variables[entryHandle], )
								session.variables[entryHandle] = session.entries[property]
								//console.log(entryHandle, session.entries?.[property])
								console.log(CONSULTANT_TITLE)
							}
						})

					}
				}
			}
			
			return entries;
		},
		handleSubmit() {
			alert("form submitted");
		},
		async submitHandler () {
			// Let's pretend this is an ajax request:
			console.log('zzzz');
			await new Promise((r) => setTimeout(r, 1000))
			submitted.value = true
		},
		handleSelectFlow: function (flow) {

		},
	},

  setup(data) {

		console.log('datazzzz')
		console.log(data)

		session.vars = data.variables
		session.profiles = data.profiles

		if (data.stage) {
			Object.assign(session.stage, data.stage)
		}

		if ( data?.stage?.title?.includes('MSA') ) {
			session.template = data.templates[1]
		} else {
			session.template = data.templates[0]
		}


		//console.log('vars')
		//console.log(session.vars)

		//console.log('variables')
		//console.log(session.variables)

		//console.log('session')
		//console.log(session)
  }
};
</script>


<template>
	<div class="composer p-6 pt-12 bg-offwhite lg:flex flex-col mt-[60px] md:mt-[120px] lg:px-12 font-serif text-sm">

		<nav class="navigation-menu z-50 flex w-full justify-between items-center flex-wrap fixed top-0 left-0 bg-offwhite/100">

			<div class="navigation-primary flex w-full justify-between items-center relative">

				<ul class="contract-menu flex w-auto px-6 justify-start items-center md:w-[40%] lg:px-12">
					<li class="contract-data-item flex justify-between min-w-[150px] items-center py-3 md:py-6 md:hidden">
						<button class="flex py-2 sm:mr-5"> 
							<span class="text-h6 font-sans uppercase">Menu</span>
						</button>
					</li>
					<li v-for="link in settings.menuPrimary.links" :link="link" class="contract-data-item group hidden justify-start items-center py-6 md:flex">
						<a class="flex sm:mr-5" href="#">
							<span class="text-h6 uppercase font-sans">{{ link.title }}</span>
						</a>
					</li>
				</ul>

				<div class="contract-data-item flex justify-between items-center py-3 md:py-6 ">
					<a href="/create">
						<img class="logos__entry w-full max-w-[200px]" src="/logo-main.svg" alt="Nuxt Logo" />
					</a>
				</div>

				<ul class="contract-menu flex w-auto px-6 justify-end items-center md:w-[40%] lg:px-12">
					<li v-for="link in settings.menuSecondary.links" :link="link" class="contract-data-item group hidden justify-end items-center py-6 sm:hidden lg:flex">
						<a class="flex sm:ml-5" href="#">
							<span class="text-h6 uppercase font-sans">{{ link.title }}</span>
						</a>
					</li>
					<li class="contract-data-item flex justify-end items-center py-3 md:py-6 min-w-[150px]">
						<a class="relative flex button button-secondary py-2 px-6 md:py-4 md:px-6 sm:ml-5" href="/create"> 
							<span class="text-h6 uppercase font-sans">Get Started</span>
						</a>
						<Button :title="'Get Started'" :style="'secondary'" :classes="'sm:ml-5'" :url="'/create'" />
					</li>
				</ul>

			</div>

			<div class="navigation-secondary w-full justify-between items-center relative overflow-hidden">
				<ul class="contract-menu block w-[200vw] px-6 justify-start items-stretch lg:px-12">
					<li class="contract-data-item group hidden md:inline-flex justify-between items-center pb-[7px] px-6 hover:px-8 hover:border-darkgreen/80 transition-all duration-1000 ease-in-out border-l border-darkgreen/30 min-w-1/2 md:min-w-[100px] border-b border-darkgreen/30">
						<button class="flex pb-2"> 
							<span class="text-cite font-serif italic decoration-none text-black">Section 1 of 8</span>
						</button>
					</li>
					<li class="contract-data-item group hidden md:inline-flex justify-between items-center pb-2 px-6 hover:px-8 hover:border-darkgreen/80 transition-all duration-1000 ease-in-out border-l border-darkgreen/30 min-w-1/2 border-b border-darkgreen/30 md:min-w-[calc(50vw-148px)]">
						<button class="flex pb-2"> 
							<span class="text-h6 font-sans uppercase text-brightgreen">Basic Information</span>
						</button>
					</li>
					<li class="contract-data-item group hidden md:inline-flex justify-between items-center pb-2 px-6 hover:px-8 hover:border-darkgreen/80 transition-all duration-1000 ease-in-out w-auto border-l border-darkgreen/30 border-b border-darkgreen/30">
						<button class="flex pb-2"> 
							<span class="text-h6 font-sans uppercase text-charcoal/50 group-hover:text-charcoal/100 transition-colors duration-300 ease-in-out">Confidential Information</span>
						</button>
					</li>
					<li class="contract-data-item group hidden md:inline-flex justify-between items-center pb-2 px-6 hover:px-8 hover:border-darkgreen/80 transition-all duration-1000 ease-in-out w-auto border-l border-darkgreen/30 border-b border-darkgreen/30">
						<button class="flex pb-2"> 
							<span class="text-h6 font-sans uppercase text-charcoal/50 group-hover:text-charcoal/100 transition-colors duration-300 ease-in-out">NDA Type</span>
						</button>
					</li>
					<li class="contract-data-item group hidden md:inline-flex justify-between items-center pb-2 px-6 hover:px-8 hover:border-darkgreen/80 transition-all duration-1000 ease-in-out w-auto border-l border-darkgreen/30 border-b border-darkgreen/30">
						<button class="flex pb-2"> 
							<span class="text-h6 font-sans uppercase text-charcoal/50 group-hover:text-charcoal/100 transition-colors duration-300 ease-in-out">Purpose</span>
						</button>
					</li>
					<li class="contract-data-item group hidden md:inline-flex justify-between items-center pb-2 px-6 hover:px-8 hover:border-darkgreen/80 transition-all duration-1000 ease-in-out w-auto border-l border-darkgreen/30 border-b border-darkgreen/30">
						<button class="flex pb-2"> 
							<span class="text-h6 font-sans uppercase text-charcoal/50 group-hover:text-charcoal/100 transition-colors duration-300 ease-in-out">Term Length</span>
						</button>
					</li>
					<li class="contract-data-item group hidden md:inline-flex justify-between items-center pb-2 px-6 hover:px-8 hover:border-darkgreen/80 transition-all duration-1000 ease-in-out w-auto border-l border-darkgreen/30 border-b border-r">
						<button class="flex md:pb-2"> 
							<span class="text-h6 font-sans uppercase text-charcoal/50 group-hover:text-charcoal/100 transition-colors duration-300 ease-in-out">Representatives</span>
						</button>
					</li>
				</ul>
			</div>
		</nav>

		<FormKit
			type="form"
			id="contract-create"
			:form-class="submitted ? 'hide' : 'show'"
			submit-label="Register"
			@submit="submitHandler"
			:actions="false"
			#default="{ value }"
			class="results w-full flex"

		>
			
			<div v-if="session.stage" class="stage-container w-full flex justify-center">
				<Question :session="session" :stage="session.stage" @answer-button-click="handleSelectFlow" />
			</div>

			<div class=" contract-frame bg-white rounded-md p-12 mt-[160px] border border-darkgreen max-w-[800px] mx-auto min-h-[100vmin]">
				<SanityContent :blocks="session.template.body" />
			</div>

			<div class="hidden contract rounded-md mt-[160px] border-darkgreen max-w-[800px] mx-auto">
				<span class="text-h6 uppercase font-sans border-b pb-1 mb-3 min-w-[100px] block">FORM DATA</span>
				<div>{{ parseFormEntries(value, session, variables) }}</div>
			</div>

		</FormKit>
	</div>
</template>