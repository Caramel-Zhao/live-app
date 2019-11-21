<template>
  <div>
    <PullRefresh v-model="isLoading" @refresh="onRefresh">
      <HomeWaiting></HomeWaiting>
      <HomeAttentionList></HomeAttentionList>
    </PullRefresh>
  </div>
</template>

<script>
  import { PullRefresh } from 'vant';
  import HomeAttentionList from "../HomeAttention/HomeAttentionList";
  import HomeWaiting from "../HomeAttention/HomeWaiting";
  export default {
    name: "HomeAttention",
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