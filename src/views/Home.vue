<template>
	<div class="bg-gray-100">
		<header class="p-6">
			<div class="flex justify-between">
				<span class="text-lg font-bold uppercase">Terceira Idade</span>
				<div></div>
			</div>
		</header>
		<base-carousel></base-carousel>
		<main class="pt-10 pb-20 mx-auto">
			<div class="flex flex-col items-center gap-10 px-2">
				<div class="py-12 text-center">
					<h2 class="mb-2 text-xl font-thin tracking-wider uppercase">Dicas para a terceira idade</h2>
					<h1 class="font-serif text-5xl font-bold tracking-tight text-gray-700">
						Envelhecendo com qualidade de vida
					</h1>
				</div>
				<blog-item
					v-for="(post, index) in blog.posts"
					:key="index"
					:title="post.title"
					:id="post.id"
					:date="post.date"
					:content="post.content"
					:image="post.image"
					@postClicked="onPostClick"
				></blog-item>
			</div>
		</main>
		<BaseModal
			v-show="isModalVisible"
			@close="closeModal"
			:title="this.title"
			:id="this.id"
			:date="this.date"
			:content="this.content"
			:image="this.image"
		/>
	</div>
</template>

<script>
	import BlogItem from '../components/blog/BlogItem';
	import BaseModal from '../components/shared/BaseModal';
	import BaseCarousel from '../components/shared/BaseCarousel';
	import BlogPosts from '../repository/blog.json';

	export default {
		components: {
			'blog-item': BlogItem,
			'base-carousel': BaseCarousel,
			BaseModal,
		},

		data() {
			return {
				blog: BlogPosts,
				isModalVisible: false,
				title: '',
				id: 0,
				date: '',
				content: '',
				image: '',
			};
		},

		methods: {
			onPostClick(obj) {
				this.title = obj.title;
				this.id = obj.id;
				this.date = obj.date;
				this.content = obj.content;
				this.image = obj.image;

				this.showModal();
			},
			showModal() {
				this.isModalVisible = true;

				document.documentElement.style.overflow = 'hidden';
			},
			closeModal() {
				this.isModalVisible = false;

				document.documentElement.style.overflow = 'auto';
			},
		},
	};
</script>
