<template>
  <ul class="nav-top ">
    <li class="nav-top-list" :key="index" v-for="(item,index) in data" ><a class="nav-top-list-active">{{item.HomeNav}}</a></li>
  </ul>
</template>

<script>
  export default {
    name: "HomeNav",
    props:["data"]
  }
</script>

<style lang="scss" scoped>
.nav-top{
 display: -webkit-box;
 justify-content: space-between;
 width: 100%;
 overflow: auto;
  .nav-top-list{
   width: 25%;
   text-align: center;
  }
  .nav-top-list-active{
    padding-bottom: 0.12rem;
    border-bottom: 0.02rem solid #00B7FF;
    font-size: 0.16rem;
  }
}
.nav-top::-webkit-scrollbar {
  display: none;
 }
</style>