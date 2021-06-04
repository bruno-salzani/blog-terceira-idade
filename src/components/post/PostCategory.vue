<template>
	<span class="px-3 py-1 text-xs font-bold uppercase rounded-full" :class="style">
		{{ category }}
	</span>
</template>

<script>
	export default {
		props: {
			categoryId: {
				required: true,
				type: Number,
			},
		},

		computed: {
			category() {
				if (this.categoryId == 1) return 'Saude';
				if (this.categoryId == 2) return 'Cuidados';
				if (this.categoryId == 3) return 'Bem Estar';
				else return 'Saude';
			},
			style() {
				if (this.categoryId == 1) return 'text-blue-500 bg-blue-200';
				if (this.categoryId == 2) return 'text-yellow-500 bg-yellow-200';
				if (this.categoryId == 3) return 'text-green-500 bg-green-200';
				else return 'text-blue-500 bg-blue-200';
			},
		},
	};
</script>
