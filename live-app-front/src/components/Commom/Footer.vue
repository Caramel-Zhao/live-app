<template>
  <div class="footer">
    <router-link tag="span" to="/home"><i class="footer-index" :class="{'footer-index-active':$route.path === '/home'}"></i><span>首页</span></router-link>
    <div class="live-img" @click="show = true"><img src="../../assets/HomeImg/live.png" alt=""></div>
<!--    <van-overlay class="home-overlay" :show="show"  @click="show = false">-->
<!--      <div class="wrapper" @click.stop="show = false">-->
<!--        <div class="block">-->
<!--          <p><img src="../../assets/HomeImg/renzhen.jpg" alt=""></p>-->
<!--          <p>开播前需要实名认证</p>-->
<!--          <p class="home-sure">-->
<!--            <router-link tag="span" @click="show = false">稍后</router-link>-->
<!--            <router-link class="home-go" tag="span" to="/user/real">立即认证</router-link>-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </van-overlay>-->
    <van-popup v-model="show" position="bottom" :style="{ height: '25%' }" class="home-popup">
        <router-link tag="p" to="/startLive">开始直播</router-link>
        <p @click="show = false">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconclose"></use>
          </svg>
        </p>
    </van-popup>
    <router-link tag="span" to="/user"><i class="footer-user" :class="{'footer-user-active':$route.path === '/user'}"></i><span>我的</span></router-link>
  </div>
</template>
<script>
  import { Overlay ,Popup ,Icon } from 'vant';
  export default {
    name: "YT-footer",
    components: {
        [Overlay.name]:Overlay,
        [Popup.name]:Popup
    },
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer {
    font-size: 0.12rem;
    height: 0.5rem;
    border-top: 0.005rem solid #eee;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    text-align: center;
    background: #fff;
    z-index: 3;
  span {
      padding-top: 0.05rem;
      color: #ccc;
    i {
        display: block;
        padding-top: 0.05rem;
        height: 0.2rem;
        text-align: center;
        margin: 0 auto;
    }
    .footer-index {
        background: url("../../assets/HomeImg/footer.png") 0 -0.3rem no-repeat;
        background-size: 0.7rem 0.52rem;
    }
    .footer-user {
        background: url("../../assets/HomeImg/footer.png")  -0.48rem 0 no-repeat;
        background-size: 0.7rem 0.52rem;
    }
      .footer-index-active {
        background: url("../../assets/HomeImg/footer.png") 0 0 no-repeat;
        background-size: 0.7rem 0.52rem;
        +span{
          color: #000;
        }
    }
    .footer-user-active {
        background: url("../../assets/HomeImg/footer.png") -0.48rem -0.3rem no-repeat;
        background-size: 0.7rem 0.52rem;
      +span{
        color: #000;
      }
    }
  }
  .live-img {
      display: inline-block;
      width: 0.6rem;
      height: 0.55rem;
      position: relative;
      top: -0.2rem;
      border: 0.03rem solid #fff;
      border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 90%;
    height: 2.35rem;
    background-color: #fff;
    img{
      width:2.5rem;
      height:1.5rem;
    }
    p{
      margin-bottom: 0.15rem;
      font-size: 0.16rem;
    }
    .home-sure{
      display: flex;
      justify-content: space-around;
      color: #0F121B;
      .home-go{
        color: #ff7800;
      }
    }
  }
  .home-popup{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p{
      text-align: center;
      .icon{
        width: 0.25rem;
        height: 0.25rem;
      }
    }
  }
}
</style>