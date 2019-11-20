<template>
  <home-list :data="[1,2,3,4,5,6,7,8,9,10,11,12]"></home-list>
</template>

<script>
  import HomeList from "../HomeList";
  export default {
    name: "HomeAttention",
    components:{
      [HomeList.name]:HomeList
    }
  }
</script>

<style lang="scss" scoped>

</style>