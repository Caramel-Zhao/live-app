<template>
    <home-list :data="[21,22,23,24,25,26,27,28,29,30]"></home-list>
</template>

<script>
  import HomeList from "../HomeList";
  export default {
    name: "HomeNearBy",
    components:{
      [HomeList.name]:HomeList
    }
  }
</script>

<style lang="scss" scoped>
    /*.home-near {*/
    /*  li{*/
    /*  background: red;*/
    /*}*/
    /*}*/
</style>