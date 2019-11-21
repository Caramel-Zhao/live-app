<template>
  <div>
    <HomeAttentionListHeader />
    <HomeWatchedList/>
  </div>
</template>

<script>
  import HomeWatchedList from "./HomeWatchedList";
  import HomeAttentionListHeader from "./HomeWatchedListHeader";
  export default {
    name: "HomeAttentionList",
    components:{
      HomeAttentionListHeader,
      HomeWatchedList
    }
  }
</script>

<style lang="scss" scoped>

</style>