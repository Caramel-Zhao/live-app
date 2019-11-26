<template>
    <div class="user-list">
        <div class="user-item" v-for="(n,i) in data">
            <div class="left">
                <img :src="n.userimage">
            </div>
            <div class="center">
                <div class="top">
                    <span class="title">{{n.userid}}</span>
                    <i>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxingxing"></use>
                        </svg>
                        {{n.vipclass}}</i>
                    <span><img src="http://122.51.57.152:4000/images/h8.png"></span>
                </div>
                <div class="bottom">
                    <img src="http://122.51.57.152:4000/images/h8.png">
                    <span>12</span>
                </div>
            </div>
            <div class="right">
                <img src="http://122.51.57.152:4000/images/h8.png" v-if="n.focus">
                <img src="http://122.51.57.152:4000/images/2.jpg" v-else>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "UserItem",
        props:["data","flag"]
    }
</script>

<style lang="scss" scoped>
.user-item{
    height: .75rem;
    display: flex;
    .left{
        img{
            width: .5rem;
            height: .5rem;
            margin: .1rem;
            border-radius: 50%;
        }
    }
    .right{
        img{
            width:.6rem;
            height: .4rem;
            margin-top: .16rem;
        }
    }
    .center{
        width: 2.2rem;
        .top{
            margin-top: .1rem;
            display: flex;
            .title{
                font-size: .16rem;
                display: block;
                width: 1rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            i{
                display: block;
                width: .4rem;
                height: .15rem;
                line-height: .15rem;
                background: linear-gradient(to right,#48f5f3,#03ceca);
                border-radius: .1rem;
                color: white;
                font-size: .12rem;
                margin-left: .1rem;
                padding-left: .2rem;
                position: relative;
                box-sizing: border-box;
                svg{
                    width: .15rem;
                    height: .15rem;
                    position: absolute;
                    left: .05rem;
                }
            }
            img{
                width: .2rem;
                height: .2rem;
                margin-left: .05rem;
            }

        }
        .bottom{
            display: flex;
            line-height: .3rem;
            img{
                width: .3rem;
                height: .3rem;
            }
            span{
                color: #8e8e8e;
            }
        }
    }
}
</style>