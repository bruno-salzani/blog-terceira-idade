<template>
	<div class="bg-gray-100">
		<div>
			<div class="fixed-grid">
				<banner-item
					v-for="(post, index) in fixedPosts"
					:key="index"
					v-bind="post"
					:class="'post-' + (index + 1)"
					@postClicked="onPostClick"
				></banner-item>
			</div>
		</div>
		<main class="pb-20 mx-auto">
			<div class="flex flex-col items-center gap-10 px-2">
				<div class="py-20 text-center">
					<h2 class="mb-2 text-xl font-thin tracking-wider uppercase">Dicas para a terceira idade</h2>
					<h1 class="font-serif text-5xl font-bold tracking-tight text-gray-700">
						Envelhecendo com qualidade de vida
					</h1>
					<span class="px-10 border-b-4 border-gray-700"></span>
				</div>
				<blog-item
					v-for="(post, index) in posts"
					:key="index"
					v-bind="post"
					@postClicked="onPostClick"
				></blog-item>
			</div>
		</main>
		<BaseModal v-if="selected != null" v-bind="selected" @close="closeModal" />
	</div>
</template>

<script>
	import BlogItem from '../components/blog/BlogItem';
	import BannerItem from '../components/shared/BannerItem';
	import BaseModal from '../components/shared/BaseModal';
	import BlogPosts from '../repository/blog.json';

	export default {
		name: 'Home',

		components: {
			'blog-item': BlogItem,
			'banner-item': BannerItem,
			BaseModal,
		},

		data() {
			return {
				posts: BlogPosts.posts,
				selected: null,
				fixed: [1, 2, 3, 4, 5],
			};
		},

		computed: {
			fixedPosts: function () {
				return this.posts.filter(post => this.fixed.includes(post.id));
			},
		},

		methods: {
			onPostClick(id) {
				this.selected = this.posts.find(post => post.id == id);

				document.documentElement.style.overflow = 'hidden';
			},
			closeModal() {
				this.selected = null;
				document.documentElement.style.overflow = 'auto';
			},
		},

		mounted() {
			this.selected = this.posts.find(post => post.id == this.$route.query.post);
		},
	};
</script>

<style lang="postcss" scoped>
	.fixed-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: theme('spacing.72') theme('spacing.72');
		grid-template-areas:
			'post1 post2 post3'
			'post4 post2 post5';
	}

	.post-1 {
		grid-area: post1;
	}
	.post-2 {
		grid-area: post2;
	}
	.post-3 {
		grid-area: post3;
	}
	.post-4 {
		grid-area: post4;
	}
	.post-5 {
		grid-area: post5;
	}
</style>
