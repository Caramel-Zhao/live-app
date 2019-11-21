<template>
    <div class="box">
        <DataHeader :data="this.$route.params.data" />
        <input type="text" v-model="text" class="txt">
    </div>
</template>

<script>
    import DataHeader from "./DataHeader";
    export default {
        name: "AutographPage",
        components: {
            DataHeader
        },
        data(){
            return {
                text:'今天睡地板，明天当老板'
            }
        }
    }
</script>

<style scoped>
    .txt{
        width: 100vw;
        height: 0.5rem;
        margin-top: 0.03rem;
        border: none;
        padding-left: 0.1rem;
        box-sizing: border-box;
        font-size: 0.16rem;
        /*color: #aaa;*/
    }
</style>