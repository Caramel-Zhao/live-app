<template>
    <div class="cover">
        <div class="top">
            <svg class="righter" aria-hidden="true">
                <use xlink:href="#iconfanhui"></use>
            </svg>
            <p class="lv">等级</p>
        </div>
        <div class="next">
            <div>
                <img src="../../../assets/img/2.jpg" alt="">
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Level"
}
</script>

<style lang="scss" scoped>
    .cover{
        width:100vw;
        height:100vh;
    }
    .cover::before{    
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100vw;
        height:100vh;
        background:transparent url(../../../../public/assets/HomeImg/112.jpg);
        filter:blur(0.03rem);
        z-index:-1;
        background-size:cover;
    }
    .top{
        width: 100vw;
        height: 0.5rem;
    }
    .righter{
        width: 0.3;
        height: 0.3rem;
        position: absolute;
        top: 0.1rem;
        left:-1rem
    }
    .lv{
        font-size: 0.16rem;
        color: #E1C192;
        position: absolute;
        top: 0.17rem;
        left: 1rem;
    }
    .next{
        width: 100vw;
        height: 2rem;
        background-color: red;
    }
    .next div:nth-child(1){
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        position: absolute;
        top: 0.7rem;
        left: 1.4rem;
        background-color: pink;
        font-size: 0;
    }
    .next div:nth-child(1) img{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
    }
</style>