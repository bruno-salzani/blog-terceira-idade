<template>
	<div class="w-full">
		<VueSlickCarousel v-bind="settings">
			<div class="overflow-hidden">
				<img class="object-cover w-full h-96" :src="require(`@/assets/img/bg.jpg`)" alt="" />
			</div>
			<div class="overflow-hidden">
				<img class="object-cover w-full h-96" :src="require(`@/assets/img/bg.jpg`)" alt="" />
			</div>
			<div class="overflow-hidden">
				<img class="object-cover w-full h-96" :src="require(`@/assets/img/bg.jpg`)" alt="" />
			</div>
		</VueSlickCarousel>
	</div>
</template>

<script>
	import VueSlickCarousel from 'vue-slick-carousel';
	import 'vue-slick-carousel/dist/vue-slick-carousel.css';
	import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

	export default {
		name: 'MyComponent',
		components: { VueSlickCarousel },

		data() {
			return {
				settings: {
					arrows: false,
					dots: true,
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					speed: 2000,
					autoplaySpeed: 20000,
					cssEase: 'linear',
				},
			};
		},
	};
</script>
