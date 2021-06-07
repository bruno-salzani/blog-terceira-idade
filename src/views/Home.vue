<template>
	<div class="pt-16 mt-2 bg-gray-100 md:pt-20" id="banner">
		<div class="fixed-grid">
			<banner-item
				v-for="(post, index) in fixedPosts"
				:key="index"
				v-bind="post"
				:class="'post-' + (index + 1)"
				@postClicked="onPostClick"
			></banner-item>
		</div>
		<main class="pb-16 mx-auto">
			<div class="flex flex-col items-center space-y-8 md:space-y-10">
				<div class="py-10 text-center md:py-20">
					<h2 class="mb-2 font-thin tracking-wider uppercase md:text-xl">Dicas para a terceira idade</h2>
					<h1 class="font-serif text-2xl font-bold tracking-tight text-gray-700 lg:text-5xl md:text-4xl">
						Envelhecendo com qualidade de vida
					</h1>
					<span class="px-6 border-b-2 border-gray-700 md:border-b-4 lg:px-10 md:px-8"></span>
				</div>
				<base-post
					v-for="(post, index) in posts"
					:key="index"
					v-bind="post"
					@postClicked="onPostClick"
				></base-post>
			</div>
		</main>
		<BaseModal v-if="selected != null" v-bind="selected" @close="closeModal" />
	</div>
</template>

<script>
	import BlogPosts from '../repository/blog.json';
	import BasePost from '../components/post/BasePost';
	import BannerItem from '../components/banner/BannerItem';
	import BaseModal from '../components/modal/BaseModal';

	export default {
		name: 'Home',

		components: {
			'base-post': BasePost,
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

	@media (max-width: 768px) {
		.fixed-grid {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: theme('spacing.52') theme('spacing.52');
			grid-template-areas:
				'post1 post2'
				'post3';
		}
	}
</style>
