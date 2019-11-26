<template>
  <div>
    <HomeTop :data="HomeInfo"></HomeTop>
    <YT-footer></YT-footer>
  </div>
</template>

<script>
import homeInfo from '../../../public/mocks/Home/Home';
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
      HomeInfo: homeInfo
    }
  }
}
</script>

<style scoped lang="scss">
</style>