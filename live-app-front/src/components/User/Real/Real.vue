<template>
    <div>
        <div class="top">
            <router-link :to="'/user'">
            <svg class="righterr" aria-hidden="true">
                <use xlink:href="#iconfanhui"></use>
            </svg>
            </router-link>
            <p class="real">实名认证</p>
        </div>
        <div class="enter">
            <p class="enters">提交成功后，开始认证</p>
        </div>
        <div class="name">
            <div>
                <p>真实姓名</p>
            </div>
            <div>
                <input type="text" placeholder="请输入真实姓名">
            </div>
        </div>
        <div class="identity">
            <div>
                <p>身份证号</p>
            </div>
            <div>
                <input type="text" placeholder="请输入身份证号">
            </div>
        </div>
        <div class="phone">
            <div>
                <p>手机号码</p>
            </div>
            <div>
                <input type="text" placeholder="请输入手机号码">
            </div>
        </div>
        <div class="apply">
            申请认证
        </div>
    </div>
</template>

<script>
export default {
    name:"Real"
}
</script>

<style lang="scss" scoped>
    .top{
        width: 100vw;
        height: 0.5rem;
        border-bottom: 0.01rem solid whitesmoke;
    }
    .righterr{
        width: 0.25rem;
        height: 0.25rem;
        position: absolute;
        top: 0.15rem;
        left: 0.2rem;
    }
    .real{
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.5rem;
    }
    .enter{
        width: 100vw;
        height: 0.4rem;
    }
    .enters{
        font-size: 0.13rem;
        margin-left: 0.2rem;
        color: grey;
        padding-top: 0.15rem;
    }
    .name{
        width: 100vw;
        height: 0.4rem;
        display: flex;
    }
    .identity{
        width: 100vw;
        height: 0.4rem;
        display: flex;
    }
    .phone{
        width: 100vw;
        height: 0.4rem;
        display: flex;
        border-bottom: 0.01rem solid whitesmoke;
    }
    .name div:nth-child(1){
        width: 1rem;
        height: 0.4rem;
    }
    .name div:nth-child(1) p{
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.4rem;
    }
    .name div:nth-child(2){
        width: 2.75rem;
        height: 0.4rem;
        
    }
    .name div:nth-child(2) input{
        width: 2.75rem;
        height: 0.4rem;
        border: none;
        outline: none;
        font-size: 0.16rem;
    }
    .identity div:nth-child(1){
        width: 1rem;
        height: 0.4rem;
    }
    .identity div:nth-child(1) p{
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.4rem;
    }
    .identity div:nth-child(2){
        width: 2.75rem;
        height: 0.4rem;
        
    }
    .identity div:nth-child(2) input{
        width: 2.75rem;
        height: 0.4rem;
        border: none;
        outline: none;
        font-size: 0.16rem;
    }
    .phone div:nth-child(1){
        width: 1rem;
        height: 0.4rem;
    }
    .phone div:nth-child(1) p{
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.4rem;
    }
    .phone div:nth-child(2){
        width: 2.75rem;
        height: 0.4rem;
    }
    .phone div:nth-child(2) input{
        width: 2.75rem;
        height: 0.4rem;
        border: none;
        outline: none;
        font-size: 0.16rem;
        border-bottom: 0.01rem solid whitesmoke;
    }
    .apply{
        font-size: 0.16rem;
        border-radius: 0.3rem;
        width: 3rem;
        height: 0.5rem;
        background-color: #E8E8E8;
        color: gray;
        margin-top: 0.4rem;
        margin-left: 0.4rem;
        text-align: center;
        line-height: 0.5rem;
    }
</style>