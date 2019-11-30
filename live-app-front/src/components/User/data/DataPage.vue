<template>
  <div class="box" v-if="data.data">
    <DataHeader :data="title.user" :click="change"/>
    <HeadPortrait :data="data.data.userimage"
                  :change="handleFile" />
    <Name :userid="data.data.userid"
          :data="title.name" />
    <Gender :data="data.data.sex" />
    <Birthday :birData="birData"
              :data="data.data.birth"
              :change="handleToGetValue"
              :click="getValue"
              :showPopup="showPopup"
              :Del="Del" />
    <Signature :autograph="data.data.autograph"
               :data="title.Autograph" />
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
import DataApi from "../../../apis/data/DataApi";
import { mapGetters } from "vuex"
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
  data () {
    return {
      title: {
        user: "编辑资料",
        name: "昵称",
        Autograph: "签名"
      },
      birData: {
        bir: [],
        height: 30,
        show: false,
        minDate: new Date(1980, 1, 1),
        currentDate: new Date(),
        birth: "1998-0-0"
      },
      // datainfo:{
      //   "userimage":"/assets/xue/user_data_pic.png",
      //   "userid":"哈哈小蛋蛋",
      //   "sex":"男",
      //   "birth":"2019-11-20",
      //   "autograph":"今天睡地板，明天当老板"
      // },
      nameFlag: false
    }
  },
  methods: {
    getValue () {
      this.data.data.birth = this.birData.bir.join("-")
      this.birData.show = false;
    },
    handleToGetValue (value) {
      this.birData.bir = value.getValues()
    },
    showPopup () {
      this.birData.show = true;
    },
    Del () {
      this.birData.show = false;
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target
        this.data.data.userimage = res.result
      }
      reader.readAsDataURL(file)
    },
    async change(){
      let sex = "";
      if(this.data.data.sex === "男" ){
        sex = "#iconnan1"
      } else {
        sex = "#iconnv1"
      }
      let res = await DataApi.getDataInfo("534334",this.data.data.userid,this.data.data.userimage.sex,this.data.data.birth,this.data.data.autograph)
      console.log(res)
      if(res.status === 0){
        console.log(res.msg)
      }
    }
  },
  computed: {
    ...mapGetters({
      data:"GETDATA"
    })
  },
  beforeMount() {
    this.$store.dispatch('INITDATA')
    // console.log(this.data.data)
  }
}
</script>

<style scoped>
</style>