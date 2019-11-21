<template>

    <div class="content">
    <van-tabs background="rgba(0,0,0,0)">
    <van-tab title="红V">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconvip1"></use>
        </svg>
        <p>贵族.红V</p>
    </van-tab>
    <van-tab title="紫V">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconvip2"></use>
        </svg>
         <p>贵族.紫V</p>
    </van-tab>
    <van-tab title="银冠">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconvip3"></use>
        </svg>
        <p>贵族.银冠</p>
    </van-tab>
    <van-tab title="皇冠">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconvip4"></use>
        </svg>
        <p>贵族.皇冠</p>
    </van-tab>
    <van-tab title="钻冠">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconvip5"></use>
        </svg>
        <p>贵族.钻冠</p>
    </van-tab>
    <van-tab title="至尊">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconvip6"></use>
        </svg>
        <p>贵族.至尊</p>
    </van-tab>
    </van-tabs>
    </div>

</template>

<script>
 import { Tab, Tabs } from 'vant';
export default {
    name:"NContent",
    components:{
      [Tab.name]:Tab,
      [Tabs.name]:Tabs
    }
}
</script>

<style scoped lang="scss">
    .content{
        width: 100%;
        height: 2.2rem;
        // background-color: red;
        // background: url(../../../../public/assets/xue/2.jpg);
        // background-repeat: no-repeat;
        // background-size: cover;
        p{
            font-size: 0.16rem;
            margin-left: 1.15rem;
            margin-top: -0.15rem;
            color: #C6B493;
        }
    }
</style>