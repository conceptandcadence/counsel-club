<script lang="ts" setup>
import type { Question } from '~/types/Question.vue'
import AnswerText from '~/components/answers/AnswerText.vue'
import AnswerLongText from '~/components/answers/AnswerLongText.vue'
import AnswerPhone from '~/components/answers/AnswerPhone.vue'
import AnswerEmail from '~/components/answers/AnswerEmail.vue'
import AnswerSelect from '~/components/answers/AnswerSelect.vue'
import AnswerCheckbox from '~/components/answers/AnswerCheckbox.vue'
import AnswerButton from '~/components/answers/AnswerButton.vue'
import AnswerEntity from '~/components/answers/AnswerEntity.vue'

import Button from '~/components/Button.vue'

defineProps<{ stage: Question }>()
</script>

<template>
  <div class="stage w-full py-12 flex flex-col md:flex-row" v-if="stage">
		<div class="main md:w-1/2">
			<div class="question">
				<p class="font-headline text-2xl mb-8">{{ stage.label[0].children[0].text }}</p>
				<p class="font-serif text-xs">If you have saved a business entity previously, you may select it below to load all its data. Otherwise, enter your name below.</p>
			</div>
			<ul class="actions pt-6">
				<li v-if="stage.answers" v-for="answer in stage.answers" :key="answer._key" >
					<div v-if="answer._type == 'answer.text'">
						<AnswerText  :title="answer.title" :variable="answer.variable" />
					</div>

					<div v-if="answer._type == 'answer.longtext'">
						<AnswerLongText  :title="answer.title" :variable="answer.variable" />
					</div>

					<div v-if="answer._type == 'answer.phone'">
						<AnswerPhone  :title="answer.title" :variable="answer.variable" />
					</div>

					<div v-if="answer._type == 'answer.email'">
						<AnswerEmail :title="answer.title" :variable="answer.variable" />
					</div>

					<div v-if="answer._type == 'answer.select'">
						<AnswerSelect :title="answer.title" :variable="answer.variable" />
					</div>

					<div v-if="answer._type == 'answer.checkbox'">
						<AnswerCheckbox :title="answer.title" :variable="answer.variable" />
					</div>

					<div v-if="answer._type == 'answer.button'">
						<AnswerButton :title="answer.title" :variable="answer.variable" />
					</div>

					<div v-if="answer._type == 'answer.entity'">
						<AnswerEntity :title="answer.title" :variable="answer.variable" />
					</div>

				</li>
			</ul>
		</div>
		<div class="supplemental flex flex-col mt-12 md:mt-0 md:w-1/2 md:justify-end md:flex-row">
			<div class="protip md:w-2/3">
				<div class="protip-header w-full border border-darkblue p-[2px]">
					<div class="w-full border border-darkblue p-[2px] -my-[6px]">
						<div class="w-full border border-darkblue py-[6px] -my-[6px]">
							<div class="w-full bg-pink text-darkblue p-3 text-h6 font-sans uppercase flex justify-center items-center">
								
								<div class="flex justify-center items-center">
									<img class="w-[18px] h-[18px] mr-2" src="/ico-pro-sm.svg" alt="Pro Shop Icon" />
									<span>pro tip</span>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div class="protip-body w-full border border-darkblue rounded-b-[20px] p-[2px] border-t-0">
					<div class="w-full border border-darkblue rounded-b-[18px] p-[2px] border-t-0">
						<div class="w-full border border-darkblue rounded-b-[16px] px-12 py-10 border-t-0">
							<h2 class="font-headline text-lg align-center pb-6 w-full flex justify-center">Background IP</h2>
							<div class="content">
								<p class="font-serif text-xs mb-4">Let’s discuss intellectual property, often referred to as IP. When you create work product for a client, like a logo, code, photos, website or other materials, you are creating IP. When you create IP, you are the owner of it. You can then “sell” it to someone else and they become the owner. Or, you can let them “borrow” it through a license.</p>
								<p class="font-serif text-xs mb-4">Understanding IP ownership and crafting appropriate ownership terms is critical to your customer agreements.</p>
							</div>
							<Button :title="'learn More at the pro shop'" :style="'tertiary'" :classes="'w-full mt-8'" />
						</div>
					</div>
				</div>
			</div>
		</div>
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
