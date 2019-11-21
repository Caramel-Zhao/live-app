<template>
    <div>
        <admin-common title="直播间管理"></admin-common>
        <div class="center">可进行管理的直播间列表</div>
        <div class="user">
            <div><img src="../../../assets/User/2.jpg"></div>
            <div>
                <p>躲猫猫_5 </p>
                <span>我的身份-房主</span>
            </div>
        </div>
        <div class="bottom">
            <router-link to="manager/admin">设备管理员</router-link>
            <router-link to="manager/nosay">禁言管理</router-link>
            <router-link to="manager/black">黑名单管理</router-link>
        </div>
    </div>
</template>

<script>
    import AdminCommon from "./Admincommon";
    export default {
        name: "ManagerPage",
        components:{
            [AdminCommon.name]:AdminCommon
        }
    }
</script>

<style lang="scss" scoped>
    .center{
        background-color: black;
        color: white;
        font-size: .14rem;
        height: .4rem;
        line-height: .4rem;
        padding-left: .4rem;
        margin-top: -.01rem;
    }
    .user{
        display: flex;
        margin-top: .15rem;
        img{
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            margin-left: .3rem;
        }
        div:last-child{
            margin-left: .15rem;
            p{
                font-size: .16rem;
                margin-top: .05rem;
            }
            span{
                color:#a600ff;
                display: block;
                margin-top: .05rem;
            }
        }
    }
    .bottom{
        width:3.15rem ;
        display: flex;
        margin: .05rem auto;
        justify-content: space-around;
        font-size: .16rem;
        a{
            background-color: #0bcdcc;
            padding: .08rem 0.05rem;
            border-radius: .2rem;
            color: white;
            text-decoration: none;
        }
        a:last-child{
            background-color: #a600ff;
        }
    }

</style>