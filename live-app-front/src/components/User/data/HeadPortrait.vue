<template>
    <div class="portrait" >
        <div class="portrait-title" >头像</div>
        <div class="portrait-pic">
            <img src="http://122.51.57.152:4000/images/user_data_pic.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeadPortrait",
        props:["data"],
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