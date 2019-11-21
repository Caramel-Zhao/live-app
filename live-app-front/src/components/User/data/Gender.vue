<template>
    <div>
        <div class="Gender" @click="show = true">
            <div class="Gender-title">性别</div>
            <span class="sex">{{data}}</span>
        </div>
        <van-overlay :show="show" @click="show = false">
            <div class="wrapper" @click.stop="show = false">
                <div class="block">
                    <div class="man">
                        <div class="manLift">
                            <div class="manLift-icon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconnan1"></use>
                                </svg>
                            </div>
                            <span class="SpanSex">男</span>
                        </div>
                        <div class="manRight">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconanniu"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="woman">
                        <div class="womanLift">
                            <div class="womanLift-icon">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#iconnv"></use>
                                </svg>
                            </div>
                            <span class="SpanSex">女</span>
                        </div>
                        <div class="womanRight">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#iconanniu1"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
    import { Overlay } from 'vant';
    export default {
        name: "Gender",
        props:["data"],
        components: {
            [Overlay.name]:Overlay
        },
        data() {
            return {
                show: false
            }
        }

    }
</script>

<style scoped>
    .Gender{
        width: 100%;
        height: 0.45rem;
        background: white;
        margin-bottom: 0.01rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.1rem;
        box-sizing: border-box;
    }
    .sex{
        font-size: .18rem;
        color: #aaa;
    }
    .Gender-title{
        width: 0.65rem;
        height: 100%;
        font-size: 0.18rem;
        text-align: center;
        line-height: 0.45rem;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .block {
        width: 3.2rem;
        height: 1.2rem;
        background-color: #fff;
    }
    .man{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .manLift{
        width: 1rem;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .manRight{
        width: 0.3rem;
        height: 0.3rem;
        background: white;
        margin-right: 0.2rem;
    }
    .manLift-icon{
        width: 0.3rem;
        height: 0.3rem;
    }
    .SpanSex{
        font-size: 0.16rem;
    }
    .icon{
        width: 100%;
        height: 100%;
    }
    .woman{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .womanLift{
        width: 1rem;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .womanRight{
        width: 0.3rem;
        height: 0.3rem;
        background: white;
        margin-right: 0.2rem;
    }
    .womanLift-icon{
        width: 0.3rem;
        height: 0.3rem;
    }
</style>