<template>
    <div>
        <div class="top">
          ggf
        </div>
        <swiper :options="swiperOption"
                    ref="mySwiper">
                <swiper-slide class="slide">dfdf</swiper-slide>
                <swiper-slide class="slide">
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
                        <div class="user"  >
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
                            <div>
                                <img src="../../assets/img/2.jpg">
                            </div>
                        </div>
<!--                        下面规定框-->

                    </div>
                    <div class="center">
                        <div class="left">
                            <svg class="icon" aria-hidden="true">
                                <use  xlink:href="#iconyouzi" ></use>
                            </svg>
                            <div>
                                魅力值：600亿
                            </div>
                        </div>
                        <div class="right">
                            <van-notice-bar mode="closeable" class="slidetar" >
                                dfdfdfdggfgfhghghghgjjhjhjhjjgjgjgjgj通知内容gffhghgjhjhhkhkjjkjk
                            </van-notice-bar>
                        </div>
                    </div>
                    <div class="bottom">
                       fgg
                        <div class="close">
                            <div>
                                <svg class="icon" aria-hidden="true">
                                    <use  xlink:href="#iconchat" ></use>
                                </svg>
                                <input type="text" placeholder="说点啥...">
                            </div>
                            <a class="share" @click="show=true">
                                <svg class="icon" aria-hidden="true">
                                    <use  xlink:href="#iconfanhuitubiao" ></use>
                                </svg>
                            </a>
                            <a class="gift" @click="giftshow=true">
                                <svg class="icon" aria-hidden="true">
                                    <use  xlink:href="#iconliwu1" ></use>
                                </svg>
                            </a>
                            <a class="goout">
                                <svg class="icon" aria-hidden="true">
                                    <use  xlink:href="#iconclose" ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </swiper-slide>
        </swiper>
        <van-action-sheet v-model="show" title="分享至" class="sharevant">
            <p>
                <a>
                    <svg class="icon" aria-hidden="true">
                        <use  xlink:href="#iconweixin" ></use>
                    </svg>
                    <span>微信</span>
                </a>
                <a>
                    <svg class="icon" aria-hidden="true">
                        <use  xlink:href="#iconQQ" ></use>
                    </svg>
                    <span>QQ</span>
                </a>
                <a>
                    <svg class="icon" aria-hidden="true">
                        <use  xlink:href="#iconweibo" ></use>
                    </svg>
                    <span>微博</span>
                </a>
                <a>
                    <svg class="icon" aria-hidden="true">
                        <use  xlink:href="#iconQQkongjian" ></use>
                    </svg>
                    <span>QQ空间</span>
                </a>
            </p>
        </van-action-sheet>
        <van-popup v-model="giftshow" position="bottom"  :overlay-style="{background:'transparent'}" class="giftvant" :round="true">
            <div class="giftstyle">
                <div class="gift-top">
                    <a @click="flag=true">
                        <svg class="icon" aria-hidden="true">
                            <use  xlink:href="#iconicon-test" ></use>
                        </svg>
                        礼物
                    </a>
                    <a @click="flag=false">
                        <svg class="icon" aria-hidden="true">
                            <use  xlink:href="#iconbeibao" ></use>
                        </svg>
                        背包
                    </a>
                </div>
                <div v-if="flag" class="left">
                    <div class="gift-left-center">
                        <van-notice-bar  class="gifttar" >
                            dfdfdfdggfgfhghghghgjjhjhjhjjgjgjgjgj
                        </van-notice-bar>
                        <div>
                            开通vip
                            <router-link to="user/nobility">
                                <svg class="icon" aria-hidden="true">
                                    <use  xlink:href="#iconSFAtubiao" ></use>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div v-else class="right">
                    fjhf
                </div>
            </div>
        </van-popup>
<!--        中间金蛋固定-->
        <div class="gold">
            <img src="../../assets/img/h3.png">
        </div>
        </div>
</template>

<script>
    import { NoticeBar } from 'vant';
    import { ActionSheet } from 'vant';
    import { Popup } from 'vant';
    export default {
        name: "Live",
        data() {
            return {
                show:false,
                giftshow:false,
                flag:true,
                swiperOption: {
                    noSwiping : true,
                    noSwipingSelector: '.user',
                    touchReleaseOnEdges:true,
                    initialSlide :2,
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
        components:{
            [NoticeBar.name]:NoticeBar,
            [ActionSheet.name]:ActionSheet,
            [Popup.name]:Popup,
        }
    }
</script>

<style lang="scss" scoped>
    $bgcolor:rgb(8,8,8,0.3);
    .top{
        position: absolute;
        top: 0;
        background-color:rgba(#a600ff,.2) ;
        height: 100vh;
        width: 100%;
    }
    .slide{
        background-color: rgba(3,255,255,.3);
        height: 100vh;
        /*position: absolute;*/
        /*top: 0;*/
    }
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
            margin-left: .1rem;
            display: flex;
            overflow-x: scroll;
            width: 1.5rem;
            &::-webkit-scrollbar{
                display:none;
            }
            img{
                margin-top: .15rem;
                margin-left: .05rem;
                width: .3rem;
                height: .3rem;
                border-radius: .2rem;
            }
        }
    }
    .center{
        height: .3rem;
        background-color: yellow;
        display: flex;
        .left{
            display: flex;
            line-height: .3rem;
           svg{
               width: .2rem;
               height: .2rem;
               margin: .05rem;
           }
        }
        .right{
            width: 2.5rem;
            .slidetar{
                height: .24rem;
                margin-left: .2rem;
                background-color: pink;
                border-radius: .2rem;
                margin-top: .03rem;
            }
        }
    }
    .bottom{
        width:100%;
        height:2.5rem;
        background-color: #a600ff;
        position: absolute;
        bottom: 0;
        .close {
            width: 100%;
            height: .4rem;
            background-color: salmon;
            position: absolute;
            bottom: .1rem;
            display: flex;
            box-sizing: border-box;
            div:first-child{
                width: 1rem;
                margin-left: .1rem;
                height: .24rem;
                background-color:$bgcolor;
                display: flex;
                border-radius: .2rem;
                margin-top: .1rem;
                svg{
                    width: .2rem;
                    height: .2rem;
                    margin-top: .03rem;
                    margin-left: .1rem;
                    fill: white;
                }
                input{
                    width: .7rem;
                    border: none;
                    background-color:rgb(255,255,255,0);
                    margin-left: .05rem;
                    &::placeholder{
                        color: white;
                    }

                }
            }
           .share{
               margin-left: 1.2rem;
               border-radius: 50%;
               background-color:$bgcolor;
               svg{
                   fill:white;
               }

           }
            .gift{
                /*background-color:*/
                background: linear-gradient(to right,#48f5f3,#03ceca);
                border-radius: 50%;
            }
            .goout{
                border-radius: 50%;
                background-color:$bgcolor;
                fill: white;
            }
           a{
               margin-left: .2rem;
               width: .3rem;
               height: .3rem;
               text-align: center;
               margin-top: .05rem;
               svg{
                   width: .2rem;
                   height: .2rem;
                   margin-top: .05rem;
               }
           }
        }
    }
    .sharevant {
        p {
            height: 1.5rem;
            border-top: .001rem solid #C4C4C6;
            padding-top: .2rem;
            display: flex;
            justify-content: space-around;
           a{
               text-align: center;
               span{
                   display: block;
                   margin-top: .1rem;
                   font-size: .14rem;
               }
           }
            svg {
                width: .4rem;
                height: .4rem;
                display: block;
                margin-bottom: .1rem;
            }
        }
    }

    .giftvant{
        background-color: rgba(#000, .3);
        .giftstyle {
            width: 100%;
            height: 3rem;
            background-color: rgba(#000, .1);
            .gift-top {
                display: flex;
                a{
                    display: flex;
                    height: .3rem;
                    align-items: center;
                    margin-left: .15rem;
                    svg{
                        width: .2rem;
                        height: .2rem;

                    }
                }
            }
            .left {
                .gift-left-center {
                    display: flex;
                    svg {
                        width: .1rem;
                        height: .1rem;
                    }
                    .gifttar {
                        width: 2rem;
                        height: .24rem;
                        line-height: .24rem;
                        margin-left: .2rem;
                        background-color: pink;
                        border-radius: .2rem;
                        margin-top: .03rem;
                    }

                    div {
                        line-height: .3rem;
                        margin-left: .6rem;
                        color: white;
                    }
                }
            }
        }
    }
    .gold{
        position: absolute;
        top:1rem;
        right:0.2rem;
        img{
            width: .4rem;
            height: .4rem;
        }
    }
</style>
