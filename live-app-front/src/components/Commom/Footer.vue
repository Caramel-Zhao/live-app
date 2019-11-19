<template>
  <div class="footer">
    <span><i></i>首页</span>
    <span class="live-img"><img src="../../assets/HomeImg/live.png" alt=""></span>
    <span @click="goUser"><i></i>我的</span>
  </div>
</template>

<script>
  export default {
    name: "HomeFooter",
    methods:{
      goUser(){
        this.$router.push("user")
      }
    }
  }
</script>

<style lang="scss" scoped>
 .footer {
   font-size: 0.12rem;
   height: 0.4rem;
   border-top: 0.005rem solid #eee;
   position: fixed;
   bottom: 0rem;
   display: flex;
   justify-content: space-around;
   width: 100%;
   line-height: 0.4rem;
   .live-img{
     display: inline-block;
     width: 0.9rem;
     height: 0.9rem;
     position: relative;
     top: -0.3rem;
     img{
       width: 100%;
       height: 100%;
     }
   }
 }
</style>