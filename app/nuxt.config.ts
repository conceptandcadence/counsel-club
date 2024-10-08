// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
		'@nuxtjs/sanity', 
		'@formkit/nuxt',
		'@pinia/nuxt',
		//"@nuxt/ui",
	],
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-03-15',
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },
	devtools: { enabled: true },
	css: ['~/public/main.css'],
  postcss: {
    plugins: {
			tailwindcss: {},
      autoprefixer: {},
      'postcss-nested': {},
    },
  },
	routeRules: {
    "/": {
      redirect: "/create/",
    },
  },
})