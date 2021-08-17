<template>
	<div class="relative flex justify-center">
		<span
			class="fixed inset-0 z-20 flex items-center justify-center pt-6 overflow-y-auto bg-white  sm:bg-black sm:bg-opacity-90 md:px-0 sm:pt-0"
			@click="close"
		></span>
		<div class="fixed top-0 z-30 h-full max-w-2xl px-5 pt-6 pb-4 bg-white rounded-lg sm:top-32 sm:shadow sm:h-auto">
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
			<p class="text-justify text-gray-800">
				{{ content }}
			</p>
			<div class="flex items-center justify-between mt-5">
				<div class="flex pb-3 sm:pb-0">
					<post-category :category-id="category"></post-category>
				</div>
				<div class="pb-3 ml-1 font-light text-gray-500 sm:pb-0">
					<social-share :title="`${title}`" :id="id" :content="`${content}`"></social-share>
				</div>
			</div>
			<div
				class="absolute flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full cursor-pointer  top-2 right-2 sm:top-3 sm:right-3 hover:bg-gray-700"
				@click="close"
			>
				<button class="text-white focus:outline-none" type="button">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import SocialShare from '../social/SocialShare';
	import PostCategory from '../post/PostCategory';

	export default {
		name: 'BaseModal',

		components: {
			'social-share': SocialShare,
			'post-category': PostCategory,
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
			category: {
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
