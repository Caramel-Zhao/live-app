<template>
  <home-list :data="[33,34,35,36,37,38,39,40,41]"></home-list>
</template>

<script>
  import HomeList from "../HomeList";
  export default {
    name: "HomeStar",
    components:{
      [HomeList.name]:HomeList
    }
  }
</script>

<style lang="scss" scoped>

</style>