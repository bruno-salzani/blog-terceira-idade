<template>
	<div class="relative h-full overflow-hidden bg-black cursor-pointer group" @click="onPostClick">
		<img class="object-cover w-full h-full opacity-70 group-hover:opacity-60 " :src="require(`@/assets/img/blog/${image}`)" alt="">
		<div class="absolute bottom-0 left-0 p-4">
			<h3 class="font-bold text-white">{{ title }}</h3>
			<span class="text-gray-100">{{ date }}</span>
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
			image: {
				required: true,
				type: String,
			},
		},

		methods: {
			onPostClick() {
				this.$emit('postClicked', this.id);
			},
		},
	}
</script>
