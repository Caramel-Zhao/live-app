<template>
  <div>
        <FansHeader :data="header.pic"/>
        <FansContent />
        <FansFooter />
  </div>

</template>

<script>
import FansHeader from "../../components/User/Fans/FansHeader"
import FansContent from "../../components/User/Fans/FansContent"
import FansFooter from "../../components/User/Fans/FansFooter"
  export default {
    name: "Fans",
    components:{
      FansHeader,
      FansContent,
      FansFooter
    },
    data(){
      return {
        header:{
          pic:"http://122.51.57.152:4000/images/112.jpg"
        }
      }
    }
  }
</script>

<style scoped>

</style>