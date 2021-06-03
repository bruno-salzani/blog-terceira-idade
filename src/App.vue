<template>
	<div>
		<the-header></the-header>
		<div>
			<router-view />
		</div>
	</div>
</template>

<script>
import TheHeader from '../src/components/TheHeader'

export default ({
	components: {
		'the-header': TheHeader
	}
})
	
</script>
