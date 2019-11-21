<template>
  <div>
    <HomeAttentionListHeader />
    <HomeWatchedList :data="data"/>
  </div>
</template>

<script>
  import HomeWatchedList from "./HomeWatchedList";
  import HomeAttentionListHeader from "./HomeWatchedListHeader";
  export default {
    name: "HomeAttentionList",
    props:["data"],
    components:{
      HomeAttentionListHeader,
      HomeWatchedList
    }
  }
</script>

<style lang="scss" scoped>

</style>