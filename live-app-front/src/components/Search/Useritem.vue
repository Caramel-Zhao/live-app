<template>
    <div class="user-list">
        <div class="user-item" v-for="(n,i) in data">
            <div class="left">
                <img :src="n.UserImg">
            </div>
            <div class="center">
                <div class="top">
                    <span class="title">{{n.UserName}}</span>
                    <i>{{n.Grade}}</i>
                    <span><img src="../../assets/img/h8.png"></span>
                </div>
                <div class="bottom">
                    <img src="../../assets/img/h8.png">
                    <span>{{n.fens}}</span>
                </div>
            </div>
            <div class="right">
                <img src="../../assets/img/h8.png">
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "UserItem",
        props:["data"]
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
                text-align: center;
                background-color: #00B7FF;
                border-radius: .1rem;
                color: white;
                font-size: .12rem;
                margin-left: .1rem;
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