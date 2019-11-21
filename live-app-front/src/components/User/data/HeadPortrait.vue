<template>
    <div class="portrait">
        <div class="portrait-title">头像</div>
        <div class="portrait-pic">
            <img :src=data alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeadPortrait",
        props:["data"]
    }
</script>

<style scoped>
    .portrait{
        width: 100%;
        height: 1rem;
        background: white;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.1rem;
    }
    .portrait-title{
        width: 0.65rem;
        height: 100%;
        /*background: red;*/
        font-size: 0.18rem;
        text-align: center;
        line-height: 1rem;
    }
    .portrait-pic{
        width: 1rem;
        height: 100%;
        /*background: red;*/
        font-size: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .portrait-pic img{
        width: 60%;
        height: 60%;
    }
</style>