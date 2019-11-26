<template>
    <div class="start-live">
      <div class="start-item">
        <p class="start-live-back">
          <span>
            <svg class="icon icon1" aria-hidden="true">
              <use xlink:href="#iconzhuanhuanshexiangtou-copy-copy"></use>
            </svg>
          </span>
          <span @click="goBack">
             <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconfanhuitubiao"></use>
            </svg>
          </span>
        </p>
        <div class="start-live-title">
          <p>输入悄悄话,进入房间</p>
          <input type="text">
        </div>
        <router-link tag="span" to="/live"  class="start-button">开启视频直播</router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: "StartLive",
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
.start-live{
  margin: 0 auto;
  .start-item{
    .start-button{
      position: absolute;
      bottom: 0.8rem;
      left: 0.4rem;
      background: #0bcdcc;
      padding: 0.15rem 1rem;
      color: #fff;
      border-radius: 0.5rem;
      font-size: 0.16rem;
    }
    .start-live-title{
      text-align: center;
      box-sizing: border-box;
      position: absolute;
      top: 1.2rem;
      left: 0.2rem;
      padding: 0.4rem 0rem 0.6rem;
      background:rgba(2, 0, 0, 0.04);
      border-radius: 0.15rem;
      width: 90%;
      font-size: 0.16rem;
      input{
        border: none;
        background: transparent;
        border-bottom: 0.001rem solid #fff;
        outline: none;
        padding-top: 0.3rem;
        width: 90%;
        text-align: center;
      }
    }
    .start-live-back{
      padding: 0.1rem 0.2rem;
      display: flex;
      justify-content: space-between;
      .icon{
        width: 0.25rem;
        height: 0.25rem;
        fill: #ccc;
      }
      .icon1{
        width: 0.35rem;
        height: 0.35rem;
      }
    }

  }

}
</style>