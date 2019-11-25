<template>
    <div>
<!--        <div class="top">-->
<!--          ggf-->
<!--        </div>-->
        <swiper :options="swiperOption"
                    ref="mySwiper">
                <swiper-slide >dfdf</swiper-slide>
                <swiper-slide >
                    <div class="header">
                        <div class="infor">
                            <div>
                                <img src="../../assets/img/2.jpg">
                            </div>
                            <div>
                                <p>摇滚起来</p>
                                <span>总人气：23444</span>
                            </div>
                        </div>
                        <div class="focus">
                            <span>关注</span>
                        </div>
                        <div class="user">
                            <div>
                                <img src="../../assets/img/2.jpg">
                            </div>
                            <div>
                                <img src="../../assets/img/2.jpg">
                            </div>
                            <div>
                                <img src="../../assets/img/2.jpg">
                            </div>
                            <div>
                                <img src="../../assets/img/2.jpg">
                            </div>
                        </div>
<!--                        下面规定框-->
                    </div>

                </swiper-slide>
        </swiper>


        </div>
</template>

<script>
    export default {
        name: "Live",
        data() {
            return {
                swiperOption: {
                    touchReleaseOnEdges:true,
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // ...
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
    }
</script>

<style lang="scss" scoped>
    .header{
        height: .6rem;
        width: 3.75rem;
        background-color: #0CCECE;
        display: flex;
        .infor{
            display: flex;
          img{
              margin-top: .15rem;
              margin-left: .1rem;
              width: .3rem;
              height: .3rem;
              border-radius: 50%;
          }
            div:last-child{
                padding-left: .1rem;
                p{
                    margin-top: .15rem;
                    font-size: .14rem;
                }
                span{
                    display: block;
                    margin-top: .05rem;
                }
            }
        }
        .focus{
            line-height: .6rem;
            margin-left: .1rem;
            span{
                background-color: red;
                padding: .05rem .1rem;
                border-radius: .2rem;
            }
        }
        .user{
            padding-left: .1rem;
            display: flex;
            img{
                margin-top: .15rem;
                margin-left: .1rem;
                width: .3rem;
                height: .3rem;
                border-radius: .2rem;
            }
        }
    }


</style>
