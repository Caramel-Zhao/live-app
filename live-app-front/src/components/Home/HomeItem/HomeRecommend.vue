<template>
  <PullRefresh v-model="isLoading" @refresh="onRefresh">
    <HomeRecommendBanner :data="data.banner"></HomeRecommendBanner>
    <HomeList :data="data.specialrecommend"></HomeList>
    <HomeRecommendAdvertisement></HomeRecommendAdvertisement>
    <HomeList :data="data.generalrecommend"></HomeList>
  </PullRefresh>
</template>

<script>
  import { PullRefresh } from 'vant';
  import HomeRecommendAdvertisement from "../HomeRecomend/HomeRecommendAdvertisement";
  import HomeRecommendBanner from "../HomeRecomend/HomeRecommendBanner";
  import HomeList from "./HomeList";
  export default {
    name: "HomeRecommend",
    props:["data"],
    components:{
     HomeList,
      HomeRecommendBanner,
      HomeRecommendAdvertisement,
      PullRefresh
    },
    data() {
      return {
        isLoading: false
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>