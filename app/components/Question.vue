<script lang="ts" setup>
import type { Question } from '~/types/Question'
import AnswerText from '~/components/answers/AnswerText.vue'
import AnswerLongText from '~/components/answers/AnswerLongText.vue'
import AnswerPhone from '~/components/answers/AnswerPhone.vue'
import AnswerEmail from '~/components/answers/AnswerEmail.vue'
import AnswerSelect from '~/components/answers/AnswerSelect.vue'
import AnswerCheckbox from '~/components/answers/AnswerCheckbox.vue'
import AnswerButton from '~/components/answers/AnswerButton.vue'
import AnswerEntity from '~/components/answers/AnswerEntity.vue'
import AnswerProfile from '~/components/answers/AnswerProfile.vue'
import AnswerMoney from '~/components/answers/AnswerMoney.vue'
import { getProfile, getProfiles, createProfile } from '~/utils'
import { session } from '~/utils'

import Button from '~/components/Button.vue'
import { PortableText } from '@portabletext/vue'
defineProps<{ session: Object, stage: Question }>()

/*
						<div class="w-full border border-darkgreen/30 rounded-b-[16px] px-12 py-10 border-t-0">
							<h2 class="font-headline text-lg align-center pb-6 w-full flex justify-center">Background IP</h2>
							<div class="content">
								<p class="font-serif text-xs mb-4">Let’s discuss intellectual property, often referred to as IP. When you create work product for a client, like a logo, code, photos, website or other materials, you are creating IP. When you create IP, you are the owner of it. You can then “sell” it to someone else and they become the owner. Or, you can let them “borrow” it through a license.</p>
								<p class="font-serif text-xs mb-4">Understanding IP ownership and crafting appropriate ownership terms is critical to your customer agreements.</p>
							</div>
							<Button :title="'learn More at the pro shop'" :style="'tertiary'" :classes="'w-full mt-8'" />
						</div>
*/
</script>

<style scoped>

</style>

<template>
  <div class="stage w-full md:py-12 flex flex-col md:flex-row" v-if="stage">
		<div class="main md:w-1/2">

			<div class="question">
				<span class="text-h6 mb-4 font-sans uppercase tracking-wider block text-darkgreen/30">{{ stage.title }} | <a :href="`https://admin.counsel-club.com/structure/question;${stage?._id}`" target="_blank">Edit This Entry</a></span>
				<h1 v-if="stage.heading" class="font-headline text-2xl align-left pb-6 text-mediumgreen">{{ stage.heading }}</h1>
					<div>
					</div>
					<Suspense>
				<SanityContent :blocks="stage.label" />
			</Suspense>
			</div>
			<ul class="actions pt-6 flex flex-wrap justify-between">
				<li v-if="stage.answers" v-for="answer in stage.answers" :key="answer._key" :class="`${ answer?.short ? 'w-[calc(50%-8px)]' : 'w-full' }`" >
					<div v-if="answer._type == 'answer.text'">
						<Suspense>
							<AnswerText :answer="answer" />
						</Suspense>
					</div>

					<div v-if="answer._type == 'answer.longtext'">
						<AnswerLongText :answer="answer" />
					</div>

					<div v-if="answer._type == 'answer.phone'">
						<AnswerPhone :title="answer.title" :variable="answer.variable" />
					</div>

					<div v-if="answer._type == 'answer.email'">
						<AnswerEmail :title="answer.title" :variable="answer.variable" />
					</div>

					<div v-if="answer._type == 'answer.select'">
						<AnswerSelect :answer="answer" />
					</div>

					<div v-if="answer._type == 'answer.checkbox'">
						<AnswerCheckbox :answer="answer" />
					</div>

					<div v-if="answer._type == 'answer.button'">
						<AnswerButton :answer="answer" :actions="answer.actions" @navigate="navigate" />
					</div>

					<div v-if="answer._type == 'answer.entity'">
						<AnswerEntity :title="answer.title" :variable="answer.variable" />
					</div>

					<div v-if="answer._type == 'answer.profile'">
						<AnswerProfile :session="session" :answer="answer" />
					</div>

					<div v-if="answer._type == 'answer.money'">
						<AnswerMoney :session="session" :answer="answer" />
					</div>

				</li>
			</ul>
		</div>
		<div class="supplemental flex flex-col mt-12 md:mt-0 md:w-1/2 md:items-end">
			
			<div v-if="stage.education && stage.education.length > 0" class="protip md:w-2/3 lex justify-center items-center flex-co mb-10">
				<div class="protip-header w-full border border-darkblue p-[2px]">
					<div class="w-full border border-darkblue p-[2px] -my-[6px]">
						<div class="w-full border border-darkblue py-[6px] -my-[6px]">
							<div class="w-full bg-pink text-offwhite p-3 text-h6 font-sans uppercase flex justify-center items-center">
								<div class="flex justify-center items-center">
									<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2 fill-darkblue">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8148 13.2914C14.8734 13.3078 14.9347 13.3179 14.9981 13.3194L15.015 13.3196L15.0321 13.3194C15.0955 13.3179 15.1567 13.3078 15.2152 13.2914C15.2359 13.4267 15.2546 13.5615 15.271 13.6899C15.2774 13.7405 15.2835 13.7902 15.2893 13.8384C15.2689 13.6676 15.244 13.4799 15.2152 13.2913C15.1514 13.3092 15.0845 13.3195 15.015 13.3195C14.9455 13.3195 14.8786 13.3092 14.8148 13.2913C14.7289 13.853 14.6781 14.4063 14.6781 14.5323C14.6781 14.5389 14.6783 14.5454 14.6787 14.5518C14.6783 14.5454 14.6781 14.5389 14.6781 14.5324C14.6781 14.4367 14.7074 14.0948 14.7591 13.6899C14.7755 13.5615 14.7941 13.4267 14.8148 13.2914ZM15.7549 12.5348C15.7557 12.5492 15.7562 12.5637 15.7562 12.5783C15.7562 12.7574 15.6923 12.9218 15.5861 13.0501C15.5861 13.0502 15.5861 13.0502 15.5861 13.0502C15.6923 12.9219 15.7562 12.7575 15.7562 12.5784C15.7562 12.5638 15.7557 12.5492 15.7549 12.5348ZM15.7443 14.3181C15.7521 14.4159 15.7562 14.4903 15.7562 14.5323C15.7562 14.9409 15.4236 15.2734 15.015 15.2734C14.6399 15.2734 14.3289 14.9933 14.2804 14.6313C14.3289 14.9933 14.6399 15.2735 15.015 15.2735C15.4237 15.2735 15.7562 14.941 15.7562 14.5324C15.7562 14.4904 15.7521 14.416 15.7443 14.3181ZM14.4439 13.0502C14.4439 13.0502 14.4439 13.0502 14.4439 13.0501C14.3577 12.946 14.2993 12.818 14.2804 12.6775C14.2993 12.818 14.3577 12.9461 14.4439 13.0502ZM14.8084 7.88726L14.8084 7.88717L13.667 8.48927L13.667 10.7052L9.26536 13.521L4.54885 10.7052V10.7053L9.26536 13.5211L13.667 10.7053L13.667 8.48936L14.8084 7.88726ZM4.54884 8.27051V8.27042L0.467868 6.12553L0.46778 6.12558L4.54884 8.27051ZM15.2127 11.8647L15.2127 7.66842L18.0629 6.12558L18.0629 6.12553L15.2127 7.66832V11.8647ZM14.5928 7.54419L14.5929 7.54414L13.842 7.13768L14.5928 7.54419ZM9.26536 1.82304L1.31711 6.12553L1.31702 6.12548L9.26536 1.82294L17.2137 6.12548L17.2136 6.12553L9.26536 1.82304ZM9.26536 9.97321L2.15729 6.12558L9.26536 2.27788L16.3734 6.12557L15.0174 6.85957L11.5883 5.00333C11.495 4.95283 11.3855 4.94146 11.2838 4.97173C11.1821 5.002 11.0966 5.07142 11.0461 5.16473L10.8537 5.52023C10.7486 5.7145 10.8209 5.9572 11.0151 6.06236L13.7526 7.54423L9.26536 9.97321ZM13.2627 8.70821L9.26536 10.8878L4.95312 8.48936V10.4757L4.95311 10.4757V8.48927L9.26536 10.8877L13.2627 8.70811L13.2627 8.70821ZM5.35312 10.2487V9.16954L9.07094 11.2373C9.19079 11.304 9.33644 11.3046 9.45685 11.239L12.8627 9.38191L12.8627 10.2576L9.25737 12.5796L5.35312 10.2487ZM4.14885 10.7053V8.51217L0.281684 6.47965C0.150929 6.41093 0.0686912 6.27574 0.0677871 6.12803C0.066883 5.98031 0.14746 5.84413 0.277364 5.77381L9.07495 1.01161C9.19375 0.947302 9.33698 0.947302 9.45578 1.01161L18.2534 5.77381C18.3825 5.84371 18.4629 5.97874 18.4629 6.12558C18.4629 6.27242 18.3825 6.40745 18.2534 6.47735L15.6127 7.90674V11.6074C15.9379 11.8079 16.1562 12.167 16.1562 12.5784C16.1562 12.7838 16.1014 12.977 16.0062 13.1436C16.0972 13.7325 16.1562 14.3476 16.1562 14.5324C16.1562 15.1619 15.6446 15.6735 15.015 15.6735C14.3854 15.6735 13.8738 15.1619 13.8738 14.5324C13.8738 14.3477 13.9328 13.7326 14.0238 13.1436C13.9286 12.977 13.8738 12.7838 13.8738 12.5784C13.8738 12.1708 14.088 11.8143 14.4084 11.6127V8.5505L14.067 8.73061L14.067 10.7053C14.067 10.8417 13.9974 10.9687 13.8825 11.0422L9.48092 13.858C9.35327 13.9397 9.19043 13.9422 9.06032 13.8645L4.3438 11.0487C4.22289 10.9765 4.14885 10.8461 4.14885 10.7053ZM15.015 12.6416C14.9798 12.6416 14.9519 12.6136 14.9519 12.5784C14.9519 12.5433 14.9798 12.5153 15.015 12.5153C15.0501 12.5153 15.0781 12.5433 15.0781 12.5784C15.0781 12.6136 15.0501 12.6416 15.015 12.6416ZM15.3513 12.5589C15.3412 12.3822 15.1942 12.2416 15.015 12.2416C14.8292 12.2416 14.6781 12.3927 14.6781 12.5784C14.6781 12.5784 14.6781 12.5784 14.6781 12.5784C14.6781 12.3926 14.8292 12.2415 15.015 12.2415C15.1942 12.2415 15.3412 12.3822 15.3513 12.5589Z"/>
									</svg>
									<span class="text-darkblue">pro tip</span>									
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="protip-body w-full border border-darkblue rounded-b-[20px] p-[2px] border-t-0">
					<div class="w-full border border-darkblue rounded-b-[18px] p-[2px] border-t-0">
						<div class="w-full border border-darkblue rounded-b-[16px] p-0 border-t-0">

							<div v-if="stage.education" class="p-4 text-xs rte">
								<SanityContent :blocks="stage.education" />
							</div>

						</div>
					</div>
				</div>
			</div>
			
			<div class="protip md:w-2/3">
				<div class="protip-header w-full border border-darkgreen/30 p-[2px]">
					<div class="w-full border border-darkgreen/30 p-[2px] -my-[6px]">
						<div class="w-full border border-darkgreen/30 py-[6px] -my-[6px]">
							<div class="w-full bg-brightgreen text-offwhite p-3 text-h6 font-sans uppercase flex justify-center items-center">
								<div>
									summary
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="protip-body w-full border border-darkgreen/30 rounded-b-[20px] p-[2px] border-t-0">
					<div class="w-full border border-darkgreen/30 rounded-b-[18px] p-[2px] border-t-0">
						<div class="w-full border border-darkgreen/30 rounded-b-[16px] p-0 border-t-0">


							<div v-if="session?.variables">
								<ul class="pt-2">
									<li v-for="(variable, index) in session.variables" class="variable flex justify-between items-center [&:not(:last-child)]:border-b border-darkgreen/30 max-w-[100%] overflow-hidden">
										<span class="w-1/2 text-2xs p-3  text-brightgreen font-sans border-r border-darkgreen/5 overflow-ellipsis" >{{ index?.replaceAll('_',' ') }}</span>
										<span class="w-1/2 text-xs p-3 italic text-darkgreen/70 overflow-ellipsis">{{ variable }}</span>
									 </li>
								</ul>
							</div>

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
