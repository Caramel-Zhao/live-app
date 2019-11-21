<template>
  <div class="home-top">
    <HomeSearch class="home-search"></HomeSearch>
    <HomeRank class="home-rank"></HomeRank>
    <HomeItem class="home-item" :data="data"></HomeItem>
  </div>
</template>

<script>
  import HomeRank from "./HomeHeader/HomeRank";
  import HomeSearch from "./HomeHeader/HomeSearch";
  import HomeItem from "./HomeTop/HomeItem";
  export default {
    name: "HomeTop",
    props:["data"],
    components:{
      HomeItem,
      HomeSearch,
      HomeRank
    }
  }
</script>

<style scoped>
  .home-top{
    margin-bottom: 0.5rem;
  }
  .home-search{
    position: fixed;
    top: 0;
    z-index:2;
    background: #fff;
  }
  .home-rank{
    position: fixed;
    right: 0;
    z-index: 2;
    top: 0;
    background: #fff;
  }
</style>