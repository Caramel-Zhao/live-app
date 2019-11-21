<template>
  <PullRefresh v-model="isLoading" @refresh="onRefresh">
    <HomeList :data="8"></HomeList>
  </PullRefresh>
</template>

<script>
  import { PullRefresh } from 'vant';
  import HomeList from "./HomeList";
  export default {
    name: "HomeStar",
    components:{
      HomeList,
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