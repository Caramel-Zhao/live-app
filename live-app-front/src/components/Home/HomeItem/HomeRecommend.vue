<template>
  <PullRefresh v-model="isLoading" @refresh="onRefresh">
    <HomeRecommendBanner></HomeRecommendBanner>
    <HomeList :data="4"></HomeList>
    <HomeRecommendAdvertisement></HomeRecommendAdvertisement>
    <HomeList :data="4"></HomeList>
  </PullRefresh>
</template>

<script>
  import { PullRefresh } from 'vant';
  import HomeRecommendAdvertisement from "../HomeRecomend/HomeRecommendAdvertisement";
  import HomeRecommendBanner from "../HomeRecomend/HomeRecommendBanner";
  import HomeList from "./HomeList";
  export default {
    name: "HomeRecommend",
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