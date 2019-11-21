<template>
    <div class="box">
        <DataHeader :data="title.user"/>
        <HeadPortrait :data="dataInfo.userimage"/>
        <Name :userid="dataInfo.userid" :data="title.name"/>
        <Gender :data="dataInfo.sex" />
        <Birthday :data="dataInfo.birth" />
        <Signature :autograph="dataInfo.autograph" :data="title.Autograph" />
    </div>
</template>

<script>
    import DataHeader from "./DataHeader";
    import HeadPortrait from "./HeadPortrait";
    import Name from "./Name";
    import Gender from "./Gender";
    import Birthday from "./Birthday";
    import Signature from "./Signature";
    import { Overlay } from 'vant';
    import NamePage from "./NamePage";
    import AutographPage from "./AutographPage";
    export default {
        name: "DataPage",
        components: {
            DataHeader,
            HeadPortrait,
            Name,
            Gender,
            Birthday,
            Signature,
            Overlay,
            NamePage,
            AutographPage
        },
        data(){
            return {
                title: {
                    user: "编辑资料",
                    name: "昵称",
                    Autograph:"签名"
                },
                dataInfo: {
                    userimage:"/img/user_data_pic.03124231.png",
                    userid:"哈哈小蛋蛋",
                    sex:"男",
                    birth:"2019-11-20",
                    autograph:"今天睡地板，明天当老板"
                },
                nameFlag: false
            }
        }
    }
</script>

<style scoped>

</style>