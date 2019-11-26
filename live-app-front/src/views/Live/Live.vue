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
                                <img :src="data.anchorid.userimage">
                            </div>
                            <div>
                                <p>{{data.anchorid.userid}}</p>
                                <span>总人气：{{data.audiences.length}}</span>
                            </div>
                        </div>
                        <div class="focus">
                            <span>关注+</span>
                        </div>
                        <div class="user" >
                            <div v-for="(n,i) in data.audiences">
                                <img :src="n.userimage">
                            </div>
                        </div>
                    </div>
                    <div class="center">
                        <div class="left">
                            <svg class="icon" aria-hidden="true">
                                <use  xlink:href="#iconyouzi" ></use>
                            </svg>
                            <div>
                                魅力值：{{data.anchorid.charsma}}
                            </div>
                        </div>
                        <div class="right">
                            <van-notice-bar  class="slidetar" >
                                欢迎来到主播秀秀秀悦兔号为643888的房间，快去关注它把
                            </van-notice-bar>
                        </div>
                    </div>
<!--                    弹出来的礼物-->
                    <div class="transgift " ref="o" >
                        <img :src="gift" class="animated  zoomIn">
                    </div>
                    <div class="bottom" >
                       <div class="chat">
                           <div class="left">
                               <p>悦兔直播，悦兔提倡绿色直播环境，对直播内容24小时监控，
                                   任何违法违规、聚集闹事、抹黑诋毁、低俗不良行为将被封禁，传播正能量，从你我做起！</p>
                               <span>风险提示：悦兔平台严禁主播及任何人以返现、返利等诱导性方式引诱用户送礼
                                   或消费行为，如若发现，封号处理！</span>
                                   <a v-for="(n,i) in 10">
                                       <span>
                                           <a>
                                                 <img src="../../assets/img/h3.png">
                                           </a>
                                           <i >
                                               张三是个小可爱
                                           </i>
                                           <a>主播好可爱</a>
                                       </span>
                                   </a>
                           </div>
                           <div class="right">

                           </div>
                       </div>
                        <div class="close" v-if="flagbottom">
                            <div>
                                <svg class="icon" aria-hidden="true">
                                    <use  xlink:href="#iconchat" ></use>
                                </svg>
                                <input type="text" placeholder="说点啥...">
                            </div>
                            <a class="share" @click="show=true">
                                <svg class="icon" aria-hidden="true">
                                    <use  xlink:href="#iconguanzhongshu" ></use>
                                </svg>
                            </a>
                            <a class="gift" @click="transhow" >
                                <svg class="icon" aria-hidden="true">
                                    <use  xlink:href="#iconliwu1" ></use>
                                </svg>
                            </a>
                            <a class="goout" href="javascript:history.back(-1)">
                                <svg class="icon" aria-hidden="true">
                                    <use  xlink:href="#iconclose" ></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="gold">
                        <img src="../../assets/img/h3.png">
                    </div>
                </swiper-slide>
        </swiper>
<!--        观众列表-->
        <van-action-sheet v-model="show" title="观众列表" class="sharevant">
            <div class="content">
                <a v-for="(n,i) in data.audiences">
                    <div>
                        <img :src="n.userimage">
                    </div>
                    <div>
                        <p>{{n.userid}}
                            <i>
                                <svg class="icon" aria-hidden="true">
                                   <use xlink:href="#iconxingxing"></use>
                               </svg>
                                 12
                            </i>
                        </p>
                        <span>ID:{{n.id}}</span>
                    </div>
                </a>
            </div>
        </van-action-sheet>
<!--        礼物列表-->
        <van-popup v-model="giftshow" position="bottom"  :overlay-style="{background:'transparent'}" class="giftvant" :round="true">
            <div class="giftstyle">
                <div class="gift-top">
                    <a @click="flag=true" :class="flag==true?'active ':''">
                        <svg class="icon" aria-hidden="true">
                            <use  xlink:href="#iconicon-test" ></use>
                        </svg>
                        礼物
                    </a>
                    <a @click="flag=false" :class="flag==false?'active ':''">
                        <svg class="icon" aria-hidden="true">
                            <use  xlink:href="#iconbeibao" ></use>
                        </svg>
                        背包
                    </a>
                </div>
                <div v-if="flag" class="left">
                    <div class="gift-left-center">
                        <svg class="icon" aria-hidden="true">
                            <use  xlink:href="#iconliwu2" ></use>
                        </svg>
                        <van-notice-bar  class="gifttar" >
                            dfdfdfdggfgfhghghghgjjhjhjhjjgjgjgjgj
                        </van-notice-bar>
                        <div class="openvip">
                            开通vip
                            <router-link to="user/nobility">
                                <svg class="icon" aria-hidden="true">
                                    <use  xlink:href="#iconSFAtubiao" ></use>
                                </svg>
                            </router-link>
                        </div>
                    </div>
        <!--                    礼物-->
                    <Gift :data="data.user.gifts" v-if="data.user" @gift="receivegift"></Gift>
                    <div class="togift">
                        <p>充值：0
                            <svg class="icon" aria-hidden="true">
                                <use  xlink:href="#iconxiangyou1" ></use>
                            </svg>
                        </p>
                        <span>
                            积分：0
                            <svg class="icon" aria-hidden="true">
                                <use  xlink:href="#iconxiangyou" ></use>
                            </svg>
                        </span>
                        <a @click="sendgift">
                            发送
                        </a>
                    </div>
                </div>
                <div v-else class="right">
                   <Gift></Gift>
                </div>
            </div>
        </van-popup>
        </div>
</template>

<script>
    import { NoticeBar } from 'vant';
    import { ActionSheet } from 'vant';
    import { Popup } from 'vant';
    import { Dialog } from 'vant';
    import Gift from "../../components/live/Gift";
    export default {
        name: "Live",
        data() {
            return {
                time:null,
                gift:null,
                gifttemp:null,
                data:null,
                flagbottom:true,
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
        beforeMount() {
            // this._initSearchData()
            let a=require("../../../public/mocks/Live/Live")
            this.data=a
            console.log(this.data)
        },

        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        components:{
            Gift,
            [NoticeBar.name]:NoticeBar,
            [ActionSheet.name]:ActionSheet,
            [Popup.name]:Popup,
            [Dialog.Component.name]: Dialog.Component,
            [Gift.name]:Gift
        },
        methods:{
            receivegift(a){
                this.gifttemp=a
                console.log(this.gift)
            },
            transhow(){
                this.giftshow=true;
                this.flagbottom=!this.giftshow
            },
            sendgift(){

                // Dialog.confirm({
                //     title: '余额不足',
                //     message: '当前金币不足了呢，点击马上充值体验精彩！',
                //     confirmButtonText:'前往充值',
                // }).then(() => {
                //     // on confirm
                // }).catch(() => {
                //     // on cancel
                // });

                clearTimeout(this.time)
                this.gift=this.gifttemp
                this.$refs.o.style.display="block"
                  this.time=setTimeout(()=>{
                        this.$refs.o.style.display="none"
                    },3000)
            }
        },
        watch:{
            giftshow:{
                handler(){
                    this.flagbottom=!this.giftshow
                }
            }
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
        align-items: center;
        .infor{
            margin-left: .05rem;
            display: flex;
            background-color:$bgcolor;
            align-items: center;
            height: .4rem;
            width: 1.4rem;
            border-radius: .2rem;
            color: white;
          img{
              width: .3rem;
              height: .3rem;
              border-radius: 50%;
              margin-left: .1rem;
          }
            div:last-child{
                margin-left: .1rem;
                flex: 1;
                p{
                    font-size: .14rem;
                    width: .7rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow:ellipsis;
                }
                span{
                    display: block;

                }
            }
        }
        .focus{
            line-height: .6rem;
            margin-left: .05rem;
            span{
                background-color: white;
                padding: 0.05rem .07rem;
                border-radius: .2rem;
                color: #15e1d6;
            }
        }
        .user{
            display: flex;
            overflow-x: scroll;
            width: 1.6rem;
            &::-webkit-scrollbar{
                display:none;
            }
            img{
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
        align-items: center;
        .left{
            display: flex;
            color: white;
            background-color: $bgcolor ;
            margin-left: .05rem;
            display: flex;
            align-items: center;
            height: .26rem;
            padding: 0 .05rem;
            border-radius: .2rem;
           svg{
               width: .2rem;
               height: .2rem;
               margin-right: .05rem;
           }
        }
        .right{
            width: 2.5rem;
            .slidetar{
                height: .24rem;
                margin-left: .2rem;
                background-color: $bgcolor;
                border-radius: .2rem;
                color: white;
            }
        }
    }
    .transgift{
        width: 100vw;
        height: 50vh;
        background-color: lightgoldenrodyellow;
        position: absolute;
        display: none;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .bottom{
        width:100%;
        height:2.5rem;
        background-color: #a600ff;
        position: absolute;
        bottom: 0;
        .chat{
            display: flex;
            .left{
                width: 72%;
                height: 2rem;
                overflow-y: scroll;
                &::-webkit-scrollbar{
                      display:none;
                  }
              p{
                  background-color:$bgcolor;
                  margin: .05rem;
                  padding: .05rem;
                  border-radius: .1rem;
                  color: #0FE3ED;
                  line-height: .14rem;
              }
              >span{
                  display: block;
                  background-color:$bgcolor;
                  margin: .05rem;
                  padding: .05rem;
                  border-radius: .1rem;
                  color: #0FE3ED;
                  line-height: .14rem;
                }
                    >a{
                        width: auto;
                       color: white;
                       display: block;
                        >span{
                            background-color: $bgcolor;
                            border-radius: .1rem;
                            padding: .05rem .05rem;
                            margin-left: .1rem;
                             i{
                                 color: #0CCECE;
                             }
                              a{
                                  display: inline-block;
                                  padding: .07rem .05rem;

                                  img{
                                      width: .15rem;
                                      height: .15rem;
                                  }
                          }
                        }

                    }

            }
            .right{

            }
        }
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
        .content{
            height:3rem ;
            overflow-y: scroll;
            &::-webkit-scrollbar{
                display:none;
            }
        }
        a {
            display: flex;
            align-items: center;
            height: .6rem;
            border-bottom: .01rem solid #d9d3d3;
           div:first-child{
               img{
                   width: .4rem;
                   height: .4rem;
                   margin-left: .1rem;
                   border-radius: 50%;
               }
           }
            div:last-child{
                margin-left: .2rem;
                p{
                    font-size: .14rem;
                    display: flex;
                    align-items: center;
                    height: .2rem;
                    i{
                        display: flex;
                        padding:0 .05rem;
                        margin-left: .1rem;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(to right,#48f5f3,#03ceca);
                        border-radius: .1rem;
                        color: white;
                        font-size: .12rem;
                        svg{
                            width: .15rem;
                            height: .15rem;
                        }
                    }
                }
               span{
                  font-size: .16rem;
               }
            }
        }
    }

    .giftvant{
        background-color: rgba(#000, .3);
        .giftstyle {
            width: 100%;
            height: 2.67rem;
            background-color: rgba(#000, .1);
            .gift-top {
                display: flex;
                .active{
                    background-color: rgba(#fff,.5);
                    color: yellow;
                }
                a{
                    display: flex;
                    height: .3rem;
                    align-items: center;
                    margin-left: .15rem;
                    border-radius: .2rem;
                    padding: 0 .1rem;
                    background-color: rgba(#fff, .3);
                    margin-top: .05rem;
                    color: white;
                    svg{
                        width: .15rem;
                        height: .15rem;

                    }
                }
            }
            .left {

                .gift-left-center {
                    display: flex;
                    align-items: center;
                    border-bottom: .01rem solid rgba(255,255,255,.3);
                    height: .3rem;
                    svg {
                        width: .2rem;
                        height: .2rem;
                        margin-left: .1rem;
                    }
                    .gifttar {
                        width: 2rem;
                        height: .24rem;
                        line-height: .24rem;
                        background-color: transparent;
                        border-radius: .2rem;
                        color: yellowgreen;
                        margin-left: .1rem;
                    }
                   .openvip{
                        margin-left: .35rem;
                        color: white;
                        display: flex;
                        align-items: center;
                        svg {
                            width: .1rem;
                            height: .1rem;
                        }
                    }
                }
                .togift{
                    color: white;
                    display: flex;
                    align-items: center;
                    height: .4rem;
                    font-size: .14rem;
                    svg{
                        width: .15rem;
                        height: .15rem;
                    }
                    p{
                        display: flex;
                        align-items: center;
                        width: .8rem;
                        justify-content: center;
                        color: #f4ea2a;
                        svg{

                        }
                    }
                    span{
                        display: flex;
                        align-items: center;
                        width: .8rem;
                        justify-content: center;
                    }
                    a{
                        background-color: #0CCECE;
                        padding:.05rem .15rem;
                        margin-left: 1.4rem;
                        border-radius: .2rem;
                    }
                }
            }
            .right{
                display: flex;
                flex-wrap: wrap;

                a{
                 width: 25%;
                 height: .8rem;
                  text-align: center;
                    img{
                        width: .4rem;
                        height: .4rem;
                        margin-top: .2rem;
                    }
                }
            }
        }
    }
    .gold{
        position: absolute;
        top:1rem;
        right:0.1rem;
        img{
            width: .2rem;
            height: .2rem;
        }
    }
</style>
