<template>
	<header class="fixed top-0 left-0 right-0 z-20 px-10 py-8 bg-white shadow-sm">
		<div class="flex justify-between">
			<span class="text-xl font-medium">Terceira Idade</span>
			<a class="text-lg cursor-pointer" href="#banner" v-smooth-scroll>Voltar ao inicio</a>
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
