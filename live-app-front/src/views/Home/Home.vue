<template>
  <div>
    <HomeTop :data="HomeInfo"></HomeTop>
    <YT-footer></YT-footer>
  </div>
</template>

<script>
import HomeApi from '../../apis/Home/home'
import HomeTop from "../../components/Home/HomeTop";
import Footer from "../../components/Commom/Footer";
export default {
  name: "Home",
  components: {
    [Footer.name]: Footer,
    HomeTop
  },
  data () {
    return {
      HomeInfo: null
    }
  },
  methods: {
    async _initHomeDAta () {
      this.HomeInfo = await HomeApi.getHomeInfo();
      console.log(this.HomeInfo)
    }
  },
  mounted () {
    this._initHomeDAta()
  }
}
</script>

<style scoped lang="scss">
</style>