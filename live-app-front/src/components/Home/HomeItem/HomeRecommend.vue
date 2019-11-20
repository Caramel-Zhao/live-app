<template>
  <home-list :data="[13,14,15,16,17,18,19,20]"></home-list>
</template>

<script>
  import HomeList from "../HomeList";
  export default {
    name: "HomeRecommend",
    components:{
      [HomeList.name]:HomeList
    }
  }
</script>

<style lang="scss" scoped>

</style>