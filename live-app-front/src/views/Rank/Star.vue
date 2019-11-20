<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide  class="ss">I'm Slide 1</swiper-slide>
    <swiper-slide  class="ss">I'm Slide 2</swiper-slide>
    <swiper-slide  class="ss">I'm Slide 3</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'Star',
    data() {
      return {
        swiperOption: {
          // 所有的参数同 swiper 官方 api 参数
          // ...
					pagination: {
            el: '.swiper-pagination',
						// type : 'custom',
						// bulletElement : 'li', // 分页器的html
						clickable :true,  // 分页器点击
						renderBullet: function (index, className) {
							let text;
							switch(index){
								case 0:text='壹';break;
								case 1:text='贰';break;
								case 2:text='叁';break;
							}
							return '<span class="' + className + '">' + text + '</span>';
						},
						bulletClass : 'my-bullet',//需设置.my-bullet样式
						bulletActiveClass: 'my-bullet-active', //分页器内当前活动块的指示小点的类名。
          }
        }
      }
    },  
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(1, 1000, true)
    }
  }
</script>
<style>
.my-bullet{
		font-size: 0.2rem;
		margin: 0.2rem;
		position: relative;
		bottom: 2.3rem;
		padding: 0.07rem 0.3rem;
		z-index: 999;
		outline: none;
}
.my-bullet-active{
	color: #00B7FF;
	border-bottom:  0.05rem solid #00B7FF;
}
.ss{
	margin-top: 0.7rem;
}
</style>