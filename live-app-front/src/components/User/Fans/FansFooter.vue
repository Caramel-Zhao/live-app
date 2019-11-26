<template>
    <van-tabs class="van"  color="aqua" swipeable>
        <van-tab title="关注">
            <div class="lister-one">
                <div>
                    <img src="http://122.51.57.152:4000/images/111.png" alt="">
                </div>
                <div>
                    <p>一元钱</p>
                    <p>一个伟大的签名正在酝酿中</p>
                </div>
                <div>
                    <svg class="righter" aria-hidden="true">
                        <use xlink:href="#iconjiantou"></use>
                    </svg>
                </div>
            </div>
        </van-tab>
        <van-tab title="粉丝">
            <div class="lister-one">
                <div>
                    <img src="http://122.51.57.152:4000/images/111.png" alt="">
                </div>
                <div>
                    <p>五角钱</p>
                    <p>一个伟大的签名正在酝酿中</p>
                </div>
                <div>
                    <svg class="righter" aria-hidden="true">
                        <use xlink:href="#iconjiantou"></use>
                    </svg>
                </div>
            </div>
        </van-tab>
    </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
    name:"FansFooter",
    components: {
        [Tabs.name]: Tabs,
        [Tab.name]: Tab
    },
    data(){
        return {
            swipeable:"true"
        }
    }
}
</script>

<style lang="scss" scoped>
    .focus{
        width: 100%;
        height: 1.8rem;
    }
    
    .lister{
        width: 100vw;
    }
    .lister-one{
        width: 100vw;
        height: 0.8rem;
        display: flex;
    }
    .lister-one div:nth-child(1){
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        text-align: center;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
    }
    .lister-one div:nth-child(1) img{
        width:100%;
        
    }
    .lister-one div:nth-child(2){
        width: 2.5rem;
        height: 0.8rem;
    }
    .lister-one div:nth-child(2) p:nth-child(1){
        font-size: 0.14rem;
        margin-top: 0.2rem;
        margin-left: 0.1rem;
    }
    .lister-one div:nth-child(2) p:nth-child(2){
        font-size: 0.12rem;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
        color: #cccccc;
    }
    .lister-one div:nth-child(3){
        width: 0.65rem;
        height: 0.8rem;
    }
    .righter{
        width: 0.2rem;
        height: 0.2rem;
        margin-top: 0.3rem;
        margin-left: 0.2rem;
    }
</style>