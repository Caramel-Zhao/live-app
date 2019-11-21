<template>
    <div>
        <admin-common title="黑名单管理"></admin-common>
        <Detail  tip="以下用户无法在当前房间发言或私聊" content="输入要解除拉黑的皇冠ID号" name="s1"></Detail>
    </div>
</template>

<script>
    import AdminCommon from "./Admincommon";
    import Detail from "./Detail"
    import Refresh from "./Refresh";
    export default {
        name: "Blacklist",
        components:{
            Detail,
            [AdminCommon.name]:AdminCommon,
            [Detail.name]:Detail,
            [Refresh.name]:Refresh
        }
    }
</script>

<style lang="scss" scoped>

</style>