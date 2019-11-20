<template>
  <div class="home-item-list">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <home-attention class="swiper-slide" ></home-attention>
      <home-recommend class="swiper-slide"></home-recommend>
      <home-near-by class="swiper-slide"></home-near-by>
      <home-star class="swiper-slide"></home-star>
    </swiper>
<!--    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">-->
<!--      <swiper-slide class="slide-1">1</swiper-slide>-->
<!--      <swiper-slide class="slide-2">2</swiper-slide>-->
<!--      <swiper-slide class="slide-3">3</swiper-slide>-->
<!--      <swiper-slide class="slide-4">4</swiper-slide>-->
<!--      <swiper-slide class="slide-5">5</swiper-slide>-->
<!--      <home-nav v-if="data" :data="data" class="swiper-slide"></home-nav>-->
<!--      <ul class="nav-top">-->
<!--        <li :key="index" v-for="(item,index) in data" class="swiper-slide"><a>{{item.HomeNav}}</a></li>-->
<!--      </ul>-->
<!--    </swiper>-->
  </div>
</template>

<script>
  // import HomeNav from "./HomeHeader/HomeNav";
  import HomeStar from "./HomeItem/HomeStar";
  import HomeRecommend from "./HomeItem/HomeRecommend";
  import HomeAttention from "./HomeItem/HomeAttention";
  import HomeNearBy from "./HomeItem/HomeNearBy";
  export default {
    name: "HomeItem",
    props:["data"],
    components:{
      [HomeNearBy.name]:HomeNearBy,
      [HomeAttention.name]:HomeAttention,
      [HomeRecommend.name]:HomeRecommend,
      [HomeStar.name]:HomeStar,
      // [HomeNav.name]:HomeNav
    },
    data() {
      return {
        swiperOption: {
          loop: false,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
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
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="scss" >
  .home-item-list{
    margin: 0.5rem 0;
  }
  .swiper-pagination{
    position: fixed
    z-index:555;
  }
</style>