<template>
    <div>
    <NobilityHeader/>
    <yt-NobilityContent></yt-NobilityContent>
    <NobilityFooter/>
    </div>
</template>

<script>
import NobilityHeader from "../../components/User/Nobility/NHeader"
import NobilityContent from "../../components/User/Nobility/NContent"
import NobilityFooter from "../../components/User/Nobility/NFooter"
  export default {
    name:"Nobility",
    components:{
      NobilityHeader,
      "yt-NobilityContent":NobilityContent,
      NobilityFooter
    }
  }
</script>

<style scoped lang="scss">
    
</style>