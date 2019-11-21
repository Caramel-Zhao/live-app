<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="n in 5"><a href="#"><img src="../../../assets/HomeImg/homeBanner.jpg" alt=""></a></swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendBanner",
    data() {
      return {
        swiperOption: {
          loop: true,
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true//修改swiper的父元素时，自动初始化swiper
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.swiper.slideTo(0, 1000, false)
    }
  }
</script>

<style lang="scss" scoped>
.swiper-slide{
  img{
    width: 100%;
  }
}
</style>