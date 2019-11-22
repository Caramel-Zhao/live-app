<template>
  <ul class="home-recommend-list">
      <li :key="index" v-for="(item,index) in data" >
        <img :src=item.images alt="" v-lazy="item.images">
        <div class="home-recommend-list-tag">
          <p v-if="item.tag" class="tag"><img :src=item.tag alt="魅力主播"></p>
          <p class="vipclass"><span>{{item.userid}}<i v-if="item.vipclass" class="vipclass-img"><img :src=item.vipclass alt="等级"></i></span><span class="address">
          <svg class="icon" aria-hidden="true">
        <use xlink:href="#icondingwei2"></use>
        </svg>{{item.location}}</span></p>
        </div>
        <span class="company" v-if="item.company">{{item.company}}</span>
      </li>
  </ul>
</template>

<script>
  import Vue from 'vue'
  import { Lazyload } from 'vant';
  Vue.use(Lazyload,{
    // lazyComponent: true,
    loading:"assets/HomeImg/loading.png"
  });
  export default {
    name: "HomeRecommendList",
    props:["data"],
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
      color: #fff;
      width: 100%;
      .tag{
        width: 0.7rem;
        text-align: center;
      }
      .vipclass{
        margin-top: 0.1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-left: 0.05rem;
        .vipclass-img{
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          vertical-align: middle;
        }
        .address{
          padding-right:0.15rem ;
        }
        .icon{
          width: 0.15rem;
          height: 0.15rem;
          vertical-align: middle;
          padding-right: 0.05rem;
          fill: #fff;
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