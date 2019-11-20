<template>
   <div class="swiper-container swiper-container2">
     <div class="swiper-wrapper">
       <div class="swiper-slide" :key="i" v-for="(n,i) in 3">
				<div class="cc">{{n}}</div>
			</div>
     </div>
     <div class="swiper-pagination swiper-pagination2"></div>
   </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/js/swiper'
export default {
  name: 'one',
   data(){
		return {
			transition: false
		}
  },
 mounted() {
    new Swiper(".swiper-container2", {
      // autoplay: true,   // 自动滑动
      loop: false,   // 手动滑动
      pagination: {
        el: '.swiper-pagination2',
      },
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container2{
	background-color: yellowgreen;
	height: 4rem;
	.swiper-slide{
		width:3.75rem;
		height: 4rem;
		line-height: 4rem;
		text-align: center;
		font-weight: bold;
	}
	.cc{
		width:3.75rem;
		height: 3rem;
	}
}

</style>
