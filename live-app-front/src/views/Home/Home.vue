<template>
  <div>
    <HomeTop
        :dataCctv="cctvLiveItem"
        :dataAttentionLivingInfo="attentionLivingInfo"
        :dataReAttentionInfo="reAttentionInfo"
        :dataTalent="talentsInfo"
        :dataNear="nearByInfo"
        :dataRecommend="recommendInfo"
        :getFollow="getFollowData"
        :onRefreshR="onRefreshR"
        :onRefreshT="onRefreshT"
        :onRefreshN="onRefreshN"
        :onRefreshA="onRefreshA"
        :getSlide="getSlide"
        :change="changeData"
        :goLiveRoom="goLiveRoom"
    >
    </HomeTop>
    <YT-footer></YT-footer>
  </div>
</template>

<script>
  import HomeTop from "../../components/Home/HomeTop";
  import Footer from "../../components/Commom/Footer";
  import home from "../../apis/Home/home"
  import { mapGetters } from 'vuex'
  export default {
  name: "Home",
  components: {
    [Footer.name]: Footer,
    HomeTop
  },
  data () {
    return {
      cctvLiveItem:null,
      talentsInfo:null,
      nearByInfo:null,
      recommendInfo:null,
      attentionLivingInfo:null,
      reAttentionInfo:null,
      LiveRoomInfo:null
    }
  },
  methods:{
    //转换tag与vipclass
    changeItem(item){
      item.forEach((res) => {
        res.tag = this.getTag(res.tag);
        res.vipclass = this.getVipClass(res.vipclass)
      })
    },
    //关注接口
    async getFollowData(id,Aid){
      let getFollow = await home.getFollow(id,Aid);
      this.reAttentionInfo = getFollow.recommend;
      this.attentionLivingInfo = getFollow.allattention;
    },
    //换一批接口
    async changeData(id){
      let res = await home.getChangeInfo(id);
      this.reAttentionInfo = res.data;
    },
    //cctv接口
    async _initGetCctvInfo(){
      this.cctvLiveItem = await home.getCctvLiveInfo();
    },
    //主页面数据渲染接口
    // async _initGetHomeInfo(id){
    //   let homeInfo = await home.getHomeInfo(id);
    //   this.attentionLivingInfo = homeInfo.attention.attentionliving;
    //   this.reAttentionInfo = homeInfo.attention.recommend;
    //   this.talentsInfo = homeInfo.talent.talents;
    //   this.nearByInfo = homeInfo.near.nears;
    //   this.recommendInfo =  homeInfo.recommend;
    //   this.changeItem(this.talentsInfo);
    //   this.changeItem(this.nearByInfo);
    //   this.changeItem(this.recommendInfo.specialrecommend);
    //   this.changeItem(this.recommendInfo.generalrecommend);
    // },
    //关注页面刷新
    async _initGetAttentionInfo(id){
      let attentionInfo = await home.getAttentionInfo(id);
      this.attentionLivingInfo = attentionInfo.attentionliving;
      this.reAttentionInfo = attentionInfo.recommend;
    },
    onRefreshA(){
      this._initGetAttentionInfo(123456);
      // console.log("关注页面刷新成功")
    },
    //才艺页面刷新
    async _initGetTalentInfo(id){
      let talents = await home.getTalentsInfo(id);
      this.talentsInfo = talents.talents;
      this.changeItem(this.talentsInfo);
    },
    onRefreshT(){
      this._initGetTalentInfo(123456);
      // console.log("才艺页面刷新成功")
    },
    //附近页面刷新
    async _initGetNearByInfo(id){
      let nearBy = await home.getNearByInfo(id);
      this.nearByInfo = nearBy.nears;
      this.changeItem(this.nearByInfo);
    },
    onRefreshN(){
      this._initGetNearByInfo(123456);
      // console.log("附近页面刷新成功")
    },
    //推荐页面刷新
    async _initGetRecommendInfo(id){
      this.recommendInfo =  await home.getRecommendInfo(id);
      this.changeItem(this.recommendInfo.specialrecommend);
      this.changeItem(this.recommendInfo.generalrecommend);
    },
    onRefreshR(){
      this._initGetRecommendInfo(123456);
      // console.log("推荐页面刷新成功")
    },
    getTag(tag){
      switch (tag) {
        case "成熟知性":
          return "http://122.51.57.152:4000/images/meili.png";
          break;
        case "天籁之音":
          return "http://122.51.57.152:4000/images/xinxiu.png";
          break;
        case "美丽动人":
          return "http://122.51.57.152:4000/images/renqi.png";
          break;
        case "能歌善舞":
          return "http://122.51.57.152:4000/images/caiyi.png";
          break;
        case "温柔甜美":
          return "http://122.51.57.152:4000/images/renmeigetian.png";
          break;
        case "甜美可爱":
          return "http://122.51.57.152:4000/images/xingganrewu.png";
          break;
        case "知心小姐姐":
          return "http://122.51.57.152:4000/images/tianlanzhiyin.png";
          break;
        case "清纯甜美":
          return "http://122.51.57.152:4000/images/qingchun.png";
          break;
      }
    },
    getVipClass(vipClass){
      switch (vipClass) {
        case 1:
          return "#iconvip";
          break;
        case 2:
          return "#iconvip7";
          break;
        case 3:
          return "#iconvip8";
          break;
        case 4:
          return "#iconvip9";
          break;
        case 5:
          return "#iconvip10";
          break;
        case 6:
          return "#iconzhizunhuiyuan";
          break;
      }
    },
    //滑动页面加载数据
    getSlide(){
        if(this.slideIndex === 1){
          if(!this.recommendInfo){
            this._initGetRecommendInfo()
          }
        }else if(this.slideIndex === 2){
          if(!this.nearByInfo){
            this._initGetNearByInfo()
          }
        }else if(this.slideIndex === 3){
          if(!this.talentsInfo){
            this._initGetTalentInfo()
          }
        }else{
          this._initGetCctvInfo()
        }
    },
    goLiveRoom(id,studiono){
      this.$router.push('/live?userid='+id+'&studiono='+studiono);
    }
  },
  computed:{
    ...mapGetters({
      slideIndex:'GETSLIDE'
    })
  },

}
</script>

<style scoped lang="scss">
</style>