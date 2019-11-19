<template>
  <div class="footer">
    <router-link tag="span" to="/home"><i></i>首页</router-link>
    <span class="live-img"><img src="../../assets/HomeImg/live.png" alt=""></span>
    <router-link tag="span" to="/user"><i></i>我的</router-link>
  </div>
</template>

<script>
  export default {
    name: "YT-footer",
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