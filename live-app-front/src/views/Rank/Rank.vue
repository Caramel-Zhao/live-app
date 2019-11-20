<template>
	<div>
		<h1>rank</h1>
		<swiper></swiper>
	</div>
  
</template>

<script>
	import Swiper from './Star'
  export default {
    name: "Rank",
		components: {
			"swiper": Swiper,
		}
  }
</script>

<style scoped>
h1{
	font-size: 0.2rem;
	z-index: -1;
}
</style>