<template>
	<header class="fixed top-0 left-0 right-0 z-20 px-4 py-6 bg-white shadow-sm md:px-10 md:py-8">
		<div class="flex justify-between">
			<span class="text-xl font-thin tracking-wider uppercase">Terceira Idade</span>
			<a class="text-lg cursor-pointer" href="#banner" v-smooth-scroll>Inicio</a>
		</div>
	</header>
</template>

<script>
	export default {
		methods: {
			scrollToTop() {
				window.scrollTo(0, 0);
			},
		},
	};
</script>
