<template>
  <ul class="home-recommend-list">
    <li v-for="n in data">
      <a href="#"><img src="../../../assets/HomeImg/list.jpg" alt=""></a>
      <div class="home-recommend-list-tag">
        <p><img src="../../../assets/HomeImg/meili.png" alt=""></p>
        <p><span>昵称<i>等级</i></span><span class="address"><svg class="icon" aria-hidden="true">
      <use xlink:href="#icondingwei2"></use>
    </svg>地址</span></p>
      </div>
      <span class="company">圆梦传媒</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "HomeRecommendList",
    props:{
      data:Number
    }
  }
</script>

<style lang="scss" scoped>
.home-recommend-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    width: 48%;
    height:1.85rem ;
    margin:0.03rem 0.035rem;
    position: relative;
    .home-recommend-list-tag{
      position: absolute;
      bottom: 0.1rem;
      left: 0.05rem;
      color: #000;
      width: 100%;
      p:nth-child(1){
        width: 0.7rem;
        text-align: center;
      }
      p:nth-child(2){
        margin-top: 0.1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-left: 0.05rem;
        .address{
          padding-right:0.15rem ;
        }
        .icon{
          width: 0.15rem;
          height: 0.15rem;
          vertical-align: middle;
          padding-right: 0.05rem;
        }
      }
    }
    img{
      width: 100%;
      height: 100%;
      border-radius: 0.05rem;
    }
    .company{
      display: inline-block;
      position: absolute;
      top: 0.1rem;
      right: 0.05rem;
      background: rgba(66,60,65,0.5);
      padding: 0.05rem;
      color: #fff;
      font-size: 0.12rem;
      border-radius: 0.1rem;
      text-align: center;
    }
  }
}
</style>