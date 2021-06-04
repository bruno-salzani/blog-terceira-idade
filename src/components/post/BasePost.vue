<template>
	<div class="flex max-w-5xl bg-white rounded-sm shadow cursor-pointer" @click="onPostClick">
		<div>
			<img class="object-cover max-w-xl mx-auto w-52 h-52" :src="require(`@/assets/img/blog/${image}`)" alt="" />
		</div>
		<div class="px-4">
			<div class="mt-4 mb-3">
				<span class="block text-base font-medium leading-snug text-black">
					{{ title }}
				</span>
				<span class="text-sm font-light text-gray-500">{{ date }}</span>
			</div>
			<p class="overflow-hidden text-justify text-gray-800" max-lenght>
				{{ content }}
			</p>
			<div class="flex items-baseline justify-between pt-2 mt-5 border-t">
				<div class="flex">
					<post-category :categoryId="category"></post-category>
				</div>
				<div class="ml-1 font-light text-gray-500">{{ views }} Vizualizações</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PostCategory from '../post/PostCategory';

	export default {
		props: {
			id: {
				required: true,
				type: Number,
			},
			title: {
				required: true,
				type: String,
			},
			category: {
				required: true,
				type: Number,
			},
			views: {
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

		components: {
			'post-category': PostCategory,
		},

		methods: {
			onPostClick() {
				this.$emit('postClicked', this.id);
			},
		},
	};
</script>

<style scoped>
	p {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
</style>
