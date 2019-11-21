<template>
  <div>
    <PullRefresh v-model="isLoading" @refresh="onRefresh">
      <HomeWaiting :data="data.attentionliving"></HomeWaiting>
      <HomeAttentionList :data="data.recommendedattention"></HomeAttentionList>
    </PullRefresh>
  </div>
</template>

<script>
  import { PullRefresh } from 'vant';
  import HomeAttentionList from "../HomeAttention/HomeAttentionList";
  import HomeWaiting from "../HomeAttention/HomeWaiting";
  export default {
    name: "HomeAttention",
    props:["data"],
    components:{
      HomeAttentionList,
      HomeWaiting,
     PullRefresh,
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