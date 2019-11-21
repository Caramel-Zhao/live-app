<template>
  <div>
      <div class="top">
        <router-link :to="'/user/fans'">
            <svg class="righter" aria-hidden="true">
                <use xlink:href="#iconarrow-left"></use>
            </svg>
        </router-link>
        <p class="ranking">守护排行榜</p>
      </div>
      <div class="next">
          <svg class="righterr" aria-hidden="true">
            <use xlink:href="#iconjifen"></use>
        </svg>
        <span class="integral">积分</span>
        <span class="zero">0</span>
      </div>
      <div class="footer">
        <van-tabs>
            <van-tab title="日榜"></van-tab>
            <van-tab title="周榜"></van-tab>
            <van-tab title="月榜"></van-tab>
            <van-tab title="总榜"></van-tab>
        </van-tabs>
      </div>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
    name:"ranking",
    components:{
        [Tab.name]:Tab,
        [Tabs.name]:Tabs
    }
}
</script>

<style lang="scss" scoped>
    .top{
        width: 100vw;
        height: 0.5rem;
        background-color: #00FFFF;
    }
    .righter{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        top: 0.15rem;
        left: 0.2rem;
    }
    .ranking{
        font-size: 0.16rem;
        position: absolute;
        top: 0.15rem;
        left: 0.8rem;
        color: white;
    }
    .next{
        width: 100vw;
        height: 1.5rem;
    }
    .footer{
        width: 100vw;
        height: 0.5rem;
        border-top: 0.01rem solid gainsboro;
        border-bottom: 0.01rem solid gainsboro;
    }
    .righterr{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        top: 0.8rem;
        left: 1.5rem;
    }
    .integral{
        font-size: 0.14rem;
        color: #cccccc;
        position: absolute;
        top: 0.83rem;
        left: 1.8rem;
    }
    .zero{
        font-size: 0.5rem;
        // font-weight: 600;
        position: absolute;
        top: 1.2rem;
        left: 1.65rem;
    }
</style>