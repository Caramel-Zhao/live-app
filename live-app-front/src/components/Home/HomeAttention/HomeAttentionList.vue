<template>
  <div>
    <HomeAttentionListHeader />
    <HomeRecommendList :data="data"/>
  </div>
</template>

<script>
  import HomeRecommendList from "./HomeRecommendList";
  import HomeAttentionListHeader from "./HomeWatchedListHeader";
  export default {
    name: "HomeAttentionList",
    props:["data"],
    components:{
      HomeAttentionListHeader,
      HomeRecommendList
    }
  }
</script>

<style lang="scss" scoped>

</style>