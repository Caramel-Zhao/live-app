<template>
    <div>
        <div class="Gender" @click="show = true">
            <div class="Gender-title">性别</div>
            <span class="sex">{{data}}</span>
        </div>
        <van-overlay :show="show" @click="show = false">
            <div class="wrapper" @click.stop="show = true">
                <div class="block">
<!--                    <div class="man">-->
<!--                        <div class="manLift">-->
<!--                            <div class="manLift-icon">-->
<!--                                <svg class="icon" aria-hidden="true">-->
<!--                                    <use xlink:href="#iconnan1"></use>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                            <span class="SpanSex">男</span>-->
<!--                        </div>-->
<!--                        <div class="manRight">-->
<!--                            <svg class="icon" aria-hidden="true">-->
<!--                                <use xlink:href="#iconanniu"></use>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="woman">-->
<!--                        <div class="womanLift">-->
<!--                            <div class="womanLift-icon">-->
<!--                                <svg class="icon" aria-hidden="true">-->
<!--                                    <use xlink:href="#iconnv"></use>-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                            <span class="SpanSex">女</span>-->
<!--                        </div>-->
<!--                        <div class="womanRight">-->
<!--                            <svg class="icon" aria-hidden="true">-->
<!--                                <use xlink:href="#iconanniu1"></use>-->
<!--                            </svg>-->
<!--                        </div>-->
<!--                    </div>-->
                    <van-radio-group v-model="radio">
                        <van-radio name="1">
                            男
                            <img
                                    slot="icon"
                                    slot-scope="props"
                                    :src="props.checked ? activeIcon : inactiveIcon"
                            >
                        </van-radio>
                        <van-radio name="2">
                            女
                            <img
                                    slot="icon"
                                    slot-scope="props"
                                    :src="props.checked ? activeIcon : inactiveIcon"
                            >
                        </van-radio>
                    </van-radio-group>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
    import { Overlay, RadioGroup, Radio, Cell, CellGroup } from 'vant';
    export default {
        name: "Gender",
        props:["data"],
        components: {
            [Overlay.name]:Overlay,
            [RadioGroup.name]:RadioGroup,
            [Radio.name]:Radio,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup
        },
        data() {
            return {
                show: false,
                radio: '1',
                activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
                inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png'
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




    .van-radio{
        height: 0.6rem;
    }
    .van-radio__icon img{
        width: 0.3rem;
        padding-left: 0.2rem;
    }
</style>