<template>
  <div>
    <home-header v-if="HomeInfo" :data="HomeInfo"></home-header>
    <home-item v-if="HomeInfo" :data="HomeInfo"></home-item>
    <YT-footer></YT-footer>
  </div>
</template>

<script>
  import HomeItem from "../../components/Home/HomeItem";
  import HomeApi from  '../../apis/Home/home'
  import HomeHeader from "../../components/Home/HomeHeader";
import Footer from "../../components/Commom/Footer";
export default {
  name: "Home",
  components: {
   [Footer.name]: Footer,
    [HomeHeader.name]:HomeHeader,
    [HomeItem.name]:HomeItem

  },
  data(){
    return {
      HomeInfo:null
    }
  },
  methods:{
    async _initHomeDAta(){
      this.HomeInfo = await HomeApi.getHomeInfo();
      console.log(this.HomeInfo)
    }
  },
  mounted() {
    this._initHomeDAta()
  }
}
</script>

<style scoped lang="scss">

</style>