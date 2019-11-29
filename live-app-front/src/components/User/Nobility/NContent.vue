<template>
  <div class="content" v-if="data.nobility">
    <van-tabs background="rgba(0,0,0,0)"
              color="#D8B186"
              title-inactive-color="#FFFFFF"
              title-active-color="#D8B186"
              v-model="select"
              @click="onClick"
          >
      <van-tab :title=data.nobility.titleList[0].tltle>
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#iconvip1-copy"></use>
        </svg>
        <p>{{data.nobility.titleList[0].name}}</p>
        <div class="List">
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconzuanshi-"></use>
            </svg>
            <span>幸运道具</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconxiaoxi-copy"></use>
            </svg>
            <span>悄悄话</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconyaoqinglianmai"></use>
            </svg>
            <span class="colors">连麦</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconmofabang"></use>
            </svg>
            <span class="colors">进场特效</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconjinyancopy"></use>
            </svg>
            <span class="colors">防禁言</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconsimizhibo"></use>
            </svg>
            <span class="colors">私密直播</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkick-user"></use>
            </svg>
            <span class="colors">防踢</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkefu1"></use>
            </svg>
            <span class="colors">专属客服</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icontexiao"></use>
            </svg>
            <span class="colors">高级进场特效</span>
          </div>
        </div>
      </van-tab>
      <van-tab :title=data.nobility.titleList[1].tltle>
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#iconvip2-copy"></use>
        </svg>
        <p>{{data.nobility.titleList[1].name}}</p>
        <div class="List">
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconzuanshi-"></use>
            </svg>
            <span>幸运道具</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconxiaoxi-copy"></use>
            </svg>
            <span>悄悄话</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconyaoqinglianmai-copy"></use>
            </svg>
            <span>连麦</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconmofabang"></use>
            </svg>
            <span class="colors">进场特效</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconjinyancopy"></use>
            </svg>
            <span class="colors">防禁言</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconsimizhibo"></use>
            </svg>
            <span class="colors">私密直播</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkick-user"></use>
            </svg>
            <span class="colors">防踢</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkefu1"></use>
            </svg>
            <span class="colors">专属客服</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icontexiao"></use>
            </svg>
            <span class="colors">高级进场特效</span>
          </div>
        </div>
      </van-tab>
      <van-tab :title=data.nobility.titleList[2].tltle>
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#iconvip3"></use>
        </svg>
        <p>{{data.nobility.titleList[2].name}}</p>
        <div class="List">
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconzuanshi-"></use>
            </svg>
            <span>幸运道具</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconxiaoxi-copy"></use>
            </svg>
            <span>悄悄话</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconyaoqinglianmai-copy"></use>
            </svg>
            <span>连麦</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconmofabang-copy"></use>
            </svg>
            <span>进场特效</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconjinyancopy-copy"></use>
            </svg>
            <span>防禁言</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconsimizhibo-copy"></use>
            </svg>
            <span>私密直播</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkick-user"></use>
            </svg>
            <span class="colors">防踢</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkefu1"></use>
            </svg>
            <span class="colors">专属客服</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icontexiao"></use>
            </svg>
            <span class="colors">高级进场特效</span>
          </div>
        </div>
      </van-tab>
      <van-tab :title=data.nobility.titleList[3].tltle>
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#iconvip4-copy"></use>
        </svg>
        <p>{{data.nobility.titleList[3].name}}</p>
        <div class="List">
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconzuanshi-"></use>
            </svg>
            <span>幸运道具</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconxiaoxi-copy"></use>
            </svg>
            <span>悄悄话</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconyaoqinglianmai-copy"></use>
            </svg>
            <span>连麦</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconmofabang-copy"></use>
            </svg>
            <span>进场特效</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconjinyancopy-copy"></use>
            </svg>
            <span>防禁言</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconsimizhibo-copy"></use>
            </svg>
            <span>私密直播</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkick-user-copy"></use>
            </svg>
            <span>防踢</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkefu1"></use>
            </svg>
            <span class="colors">专属客服</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icontexiao"></use>
            </svg>
            <span class="colors">高级进场特效</span>
          </div>
        </div>
      </van-tab>
      <van-tab :title=data.nobility.titleList[4].tltle>
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#iconv5"></use>
        </svg>
        <p>{{data.nobility.titleList[4].name}}</p>
        <div class="List">
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconzuanshi-"></use>
            </svg>
            <span>幸运道具</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconxiaoxi-copy"></use>
            </svg>
            <span>悄悄话</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconyaoqinglianmai-copy"></use>
            </svg>
            <span>连麦</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconmofabang-copy"></use>
            </svg>
            <span>进场特效</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconjinyancopy-copy"></use>
            </svg>
            <span>防禁言</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconsimizhibo-copy"></use>
            </svg>
            <span>私密直播</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkick-user-copy"></use>
            </svg>
            <span>防踢</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkefu1-copy"></use>
            </svg>
            <span>专属客服</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icontexiao"></use>
            </svg>
            <span class="colors">高级进场特效</span>
          </div>
        </div>
      </van-tab>
      <van-tab :title=data.nobility.titleList[5].tltle>
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#iconvip6-copy"></use>
        </svg>
        <p>{{data.nobility.titleList[5].name}}</p>
        <div class="List"> 
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconzuanshi-"></use>
            </svg>
            <span>幸运道具</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconxiaoxi-copy"></use>
            </svg>
            <span>悄悄话</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconyaoqinglianmai-copy"></use>
            </svg>
            <span>连麦</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconmofabang-copy"></use>
            </svg>
            <span>进场特效</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconjinyancopy-copy"></use>
            </svg>
            <span>防禁言</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconsimizhibo-copy"></use>
            </svg>
            <span>私密直播</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkick-user-copy"></use>
            </svg>
            <span>防踢</span>
          </div>
          <div class="borders">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#iconkefu1-copy"></use>
            </svg>
            <span>专属客服</span>
          </div>
          <div class="borders-bottom">
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icontexiao-copy"></use>
            </svg>
            <span>高级进场特效</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>

</template>

<script>
import { Tab, Tabs } from 'vant';
import {mapGetters} from "vuex";
export default {
  name: "NContent",
  data () {
    return {   
      select:0
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  computed: {
		...mapGetters({
			data: 'GETDATA',
		})
  },
   methods: {
    onClick(name, title) {
      this.$store.dispatch("VIP",name)
    }
  },
    beforeMount(){
        this.$store.dispatch('INITDATA')  //给仓库触发事件
        this.$store.dispatch("VIP",this.select)
    }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 5.8rem;
  //  background-color: red;
  background: url(http://122.51.57.152:4000/images/bei.png);
  background-repeat: no-repeat;
  background-size: contain;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1.2rem;
  }
  p {
    font-size: 0.16rem;
    margin-left: 1.6rem;
    margin-top: -0.15rem;
    color: #c6b493;
  }
  .List {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0.2rem;
    div {
      width: 1.235rem;
      height: 1.2rem;
      svg {
        width: 0.5rem;
        height: 0.5rem;
        margin-left: 0.35rem;
        margin-top: 0.2rem;
      }
      span {
        display: block;
        text-align: center;
        margin-top: 0.1rem;
      }
    }
  }
  .colors {
    color: #cdcdcd;
  }
  .borders {
    border-right: 0.01rem solid #cdcdcd;
    border-bottom: 0.01rem solid #cdcdcd;
  }
  .borders-bottom {
    border-bottom: 0.01rem solid #cdcdcd;
  }
}
.aaa {
  border: none;
}
</style>