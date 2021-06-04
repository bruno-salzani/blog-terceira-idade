<template>
	<div class="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-90">
		<div
			class="absolute flex items-center justify-center w-10 h-10 rounded-full  top-5 right-5 hover:bg-white hover:bg-opacity-10"
		>
			<button class="text-white" type="button" @click="close">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-8 h-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
		<div class="max-w-2xl px-5 pt-6 pb-4 bg-white rounded-lg shadow">
			<div class="flex mb-4">
				<div class="flex flex-col mx-auto mb-2">
					<img
						class="object-cover max-w-xl mx-auto rounded-full w-44 h-44"
						:src="require(`@/assets/img/blog/${image}`)"
						alt=""
					/>
					<div class="mt-2 ml-2 text-center">
						<span class="block text-base font-medium leading-snug text-black">
							{{ title }}
						</span>
						<span class="ml-1 font-light text-gray-500">{{ date }}</span>
					</div>
				</div>
			</div>
			<p class="leading-snug text-justify text-gray-800 md:leading-normal">{{ content }}</p>
			<div class="flex items-center justify-between mt-5">
				<div class="flex">
					<span class="px-3 py-1 text-xs font-bold text-blue-600 uppercase bg-blue-200 rounded-full">
						Saude
					</span>
				</div>
				<div class="ml-1 font-light text-gray-500">
					<social-share :title="`${title}`" :id="id" :content="`${content}`"></social-share>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SocialShare from '../social/SocialShare';

	export default {
		name: 'BaseModal',

		components: {
			'social-share': SocialShare,
		},

		props: {
			title: {
				required: true,
				type: String,
			},
			id: {
				required: true,
				type: Number,
			},
			date: {
				required: true,
				type: String,
			},
			content: {
				required: true,
				type: String,
			},
			image: {
				required: true,
				type: String,
			},
		},

		methods: {
			close() {
				this.$emit('close');
			},
		},
	};
</script>
