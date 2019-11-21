<template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
       <slot name="s1"></slot>
    </van-pull-refresh>
</template>

<script>
    import { PullRefresh } from 'vant';
    export default {
        name: "Refresh",
        components:{
          [PullRefresh.name]:PullRefresh
        },
        data() {
            return {
                count: 0,
                isLoading: false
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    // this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            }
        }
    }
</script>

<style scoped>

</style>