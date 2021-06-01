<template>
	<div
		class="max-w-6xl px-5 pt-6 pb-4 bg-white rounded-lg shadow cursor-pointer dark:bg-gray-800"
		@click="onPostClick"
	>
		<div class="flex mb-4">
			<div class="flex flex-col mx-auto mb-2">
				<img
					class="object-cover w-40 h-40 max-w-xl mx-auto rounded-full"
					:src="require(`@/assets/img/blog/${image}`)"
					alt=""
				/>
				<div class="mt-2 ml-2 leading-none text-center">
					<span class="block text-base font-medium leading-snug text-black dark:text-gray-100">
						{{ title }}
					</span>
					<span class="ml-1 text-sm font-light text-gray-500 dark:text-gray-400">{{ date }}</span>
				</div>
			</div>
		</div>
		<p class="leading-snug text-justify text-gray-800 dark:text-gray-100 md:leading-normal">{{ content }}</p>
		<div class="flex items-center justify-between mt-5">
			<div class="flex">
				<span class="px-3 py-1 text-xs font-bold text-blue-600 uppercase bg-blue-200 rounded-full">
					Saude
				</span>
			</div>
			<div class="ml-1 font-light text-gray-500 dark:text-gray-400">Compartilhar</div>
		</div>
	</div>
</template>

<script>
	export default {
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

		data() {
			return {
				BlogItem: {
					title: this.title,
					id: this.id,
					date: this.date,
					content: this.content,
					image: this.image,
				},
			};
		},

		methods: {
			onPostClick() {
				this.$emit('postClicked', this.BlogItem);
			},
		},
	};
</script>
