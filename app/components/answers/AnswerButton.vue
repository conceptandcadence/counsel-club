<script lang="ts" setup>
	import { plugin, defaultConfig } from '@formkit/vue'
	import { buttonContinue } from '~/inputs/buttonContinue.ts'
	import { defineComponent } from "vue";
	import { getStage, session } from '~/utils'

	import type { Answer } from '~/types/Answer';
	
	const emit = defineEmits<{
		navigateToStage: [id: string]
		navigateToURL: [id: string]
		setVariable: {[id: string],[value: any]}
	}>()
	

	const navigateToStage = (id:string) => {
		if (id) {
			const stage = getStage(id).then(stage => {
				//session.stage.test.value = 'example'
				//Object.assign(session.stage, stage)
				session.stage = stage
				console.log('navigateToStage')
				console.log(stage)
				console.log('session')
				console.log(session.stage.value)
			})
		}
	}

	defineComponent({
		methods: {
			answerButtonClick: function (answer) {
				console.log(answer)
			}
		}
	});

	const config = defaultConfig({
		inputs: {
			buttonContinue,
		},
	});

	
	const actionNavigate = (action) => {
		if (action?.destination?._ref) {
			console.log('session', session)
			navigateToStage(action?.destination?._ref)
		}
	}

	const actionURL = (action) => {
		if (action) {
			window.location.href = action.destination
		}
	}

	const actionVariable = (action) => {
		if (action) {
			const variable = getVariableById(action?.variable?._ref, session.vars)
			console.log(`Set ${variable.handle.current} to "${action.value}"`)
			const HANDLE = variable?.handle?.current
			if (HANDLE) {
				if (session.variables?.[HANDLE]) {
					Object.assign(session.variables[HANDLE], action?.value)
				}
				if (!session.variables?.[HANDLE]) {
					session.variables[HANDLE] = action.value
				}
			}
			console.log(session.variables)
		}
	}

	const handleActions = (actions) => {
		if (actions) {
			actions.forEach(action => {

				switch(action._type) { 
					case 'action.navigate': {
						console.log('action.navigate', action) 
						actionNavigate(action)
							break; 
					} 
					case 'action.url': { 
						console.log('action.url', action)
						actionURL(action)
							break; 
					} 
					case 'action.variable': { 
							console.log('action.variable', action)
							actionVariable(action)
							break; 
					} 
				} 

			});	
		}
	}
	
	defineProps<{ answer:Answer, actions?:Array }>()
</script>
<template>
	<div class="answer answer-text flex">
		<FormKit
      :type="buttonContinue"
      :name="answer.title"
      :label="answer.title"
			:classes="{
				outer: `$reset flex mt-6 $reset relative p-[1px] rounded-full border border-brightgreen ease-in-out w-full transition-all duration-1000 ease-in-out has-[:hover]:scale-y-[110%] has-[:focus]:scale-x-[105%] has-[:hover]:scale-x-[102%] has-[:focus]:scale-y-[105%]`,
				wrapper: `$reset relative p-[1px] rounded-full border border-black transition-all ease-in-out duration-1000 w-full has-[:hover]:border-offwhite has-[:focus]:border-offwhite`,
				input: `$reset block text-h6 uppercase text-offwhite bg-brightgreen font-sans transition-all ease-in-out duration-1000 w-full h-[42px] rounded-full hover:bg-darkgreen focus:bg-darkgreen`,
			}"	
			@click="handleActions(actions)"
    />
	</div>
</template>