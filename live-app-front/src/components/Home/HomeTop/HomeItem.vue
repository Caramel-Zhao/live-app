<template>
  <div class="home-item-list">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
        <swiper-slide class="home-slide"><HomeAttention/></swiper-slide>
        <swiper-slide class="home-slide"><HomeRecommend/></swiper-slide>
        <swiper-slide class="home-slide"><HomeNearBy/></swiper-slide>
        <swiper-slide class="home-slide"><HomeTalents/></swiper-slide>
        <swiper-slide class="home-slide"><HomeStar/></swiper-slide>
      <div class="swiper-pagination home-swiper-pagination"  slot="pagination" ></div>
    </swiper>
  </div>
</template>

<script>
  import HomeStar from "../HomeItem/HomeStar";
  import HomeRecommend from "../HomeItem/HomeRecommend";
  import HomeAttention from "../HomeItem/HomeAttention";
  import HomeNearBy from "../HomeItem/HomeNearBy";
  import HomeTalents from "../HomeItem/HomeTalents";
  export default {
    name: "HomeItem",
    props:["data"],
    components:{
      HomeNearBy,
      HomeAttention,
      HomeRecommend,
      HomeStar,
      HomeTalents,
    },
    data() {
      return {
        swiperOption: {
          loop: false,
          height: window.innerHeight,
          pagination: {
            el: '.home-swiper-pagination',
            // type : 'custom',
            // bulletElement : 'li', // 分页器的html
            clickable: true,  // 分页器点击
            renderBullet: function (index, className) {
              let text;
              switch (index) {
                case 0:
                  text = "关注";
                  break;
                case 1:
                  text = "推荐";
                  break;
                case 2:
                  text = "附近";
                  break;
                case 3:
                  text = "才艺";
                  break;
                case 4:
                  text = "新星";
                  break;
              }
              return '<span class="' + className + '">' + text + '</span>';
            },
            bulletClass : 'home-bullet',//需设置.my-bullet样式
            bulletActiveClass: 'home-bullet-active', //分页器内当前活动块的指示小点的类名。
          }
        }
      }
    }
  }
</script>

<style lang="scss" >
  .home-slide{
    margin-top: 0.5rem;
  }
  .swiper-slide{
    height:10px
  }
  .swiper-slide-active {
    height:auto
  }
  .home-swiper-pagination{
      display: flex;
      padding: 0.15rem 0.5rem 0.1rem;
      box-sizing: border-box;
      height: 0.62rem;
      justify-content: space-between;
      position: fixed;
      top: 0rem;
      background: #fff;
      z-index: 1;
    .home-bullet{
      width: auto;
      height: 0.2rem;
      display: inline-block;
      color: #ccc;
      font-size: 0.14rem;
      outline: none;
    }
    .home-bullet-active{
      border-bottom: 0.02rem solid #10dbeb;
      color: #111;
      font-size: 0.16rem;
    }
  }

</style>