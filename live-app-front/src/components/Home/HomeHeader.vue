<template>
  <div class="home-header">
    <home-search></home-search>
<!--    <home-nav v-if="data" :data="data"></home-nav>-->
    <home-rank></home-rank>
  </div>
</template>

<script>
  import HomeSearch from "./HomeHeader/HomeSearch";
  import HomeNav from "./HomeHeader/HomeNav";
  import HomeRank from "./HomeHeader/HomeRank";
  export default {
    name: "HomeHeader",
    props:["data"],
    components:{
      [HomeSearch.name]:HomeSearch,
      [HomeNav.name]:HomeNav,
      [HomeRank.name]:HomeRank
    }
  }
</script>

<style lang="scss" scoped>
.home-header{
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  height:0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.005rem solid #eee;
  width: 100%;
  background: #fff;
  font-size: 0.14rem;
  z-index: 2;
}
</style>