<template>
    <div class="box">
        <DataHeader :data="this.$route.params.data" />
        <input type="text" v-model="text" class="txt">
    </div>
</template>

<script>
    import DataHeader from "./DataHeader";
    export default {
        name: "NamePage",
        components: {
            DataHeader
        },
        data(){
            return {
                text:'哈哈小蛋蛋'
            }
        }
    }
</script>

<style scoped>
    .txt{
        width: 100vw;
        height: 0.35rem;
        margin-top: 0.03rem;
        border: none;
        padding-left: 0.1rem;
        box-sizing: border-box;
        font-size: 0.16rem;
        /*color: #aaa;*/
    }
</style>