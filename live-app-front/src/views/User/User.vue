<template>
    <div>
      <User-header></User-header>
      <User-personal></User-personal>
      <User-content></User-content>
    </div>
</template>

<script>
import header from "../../components/User/UserHeader"
import personal from "../../components/User/UserPersonal"
import content from "../../components/User/UserContent"
export default {
  name: "User",
  components:{
    "User-header":header,
    "User-personal":personal,
    "User-content":content
  }
}
</script>

<style scoped>
</style>