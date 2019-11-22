<template>
    <div class="box">
        <DataHeader :data="title.user"/>
        <HeadPortrait :data="dataInfo.userimage"/>
        <Name :userid="dataInfo.userid" :data="title.name"/>
        <Gender :data="dataInfo.sex" />
        <Birthday :birData="birData" :data="dataInfo.birth" :change="handleToGetValue" :click="getValue" :showPopup="showPopup" :Del="Del" />
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
                birData:{
                    bir: [],
                    height: 30,
                    show: false,
                    minDate: new Date(1980,1,1),
                    currentDate: new Date(),
                    birth: "1998-0-0"
                },
                dataInfo: {
                    userimage:"../../assets/User/user_data_pic.03124231.png",
                    userid:"哈哈小蛋蛋",
                    sex:"男",
                    birth:"2019-11-20",
                    autograph:"今天睡地板，明天当老板"
                },
                nameFlag: false
            }
        },
        methods: {
            getValue() {
                this.dataInfo.birth = this.birData.bir.join("-")
                this.birData.show = false;
            },
            handleToGetValue(value){
                this.birData.bir = value.getValues()
            },
            showPopup() {
                this.birData.show = true;
            },
            Del() {
                this.birData.show = false;
            }
        }
    }
</script>

<style scoped>

</style>