<template>
    <div>
      <set-header></set-header>
    <router-view></router-view>
    </div>
</template>

<script>
  import setheader from "../../components/User/Set/SetHeader"
  export default {
    name: "Setting",
    components:{
      "set-header":setheader,
    }
  }
</script>

<style scoped>

</style>