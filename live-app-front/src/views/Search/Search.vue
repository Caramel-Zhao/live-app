<template>
 <div class="search-content">
   <div class="header">
     <router-link class="goback" to="/home">
       <svg class="icon" aria-hidden="true">
         <use class="icon1" xlink:href="#iconfanhui" ></use>
       </svg>
     </router-link>
     <div class="center">
       <input type="text" placeholder="用户昵称/ID">
       <a>
           <svg class="icon" aria-hidden="true">
             <use xlink:href="#iconshanchu2"></use>
           </svg>
       </a>
     </div>
     <div class="search">搜索</div>
   </div>
   <div class="intest">您可能感兴趣的用户</div>
   <user-item :data="data" v-if="data"></user-item>
 </div>
</template>

<script>
  import SearchApi from "../../apis/Search/SearchApi";
  import Useritem from "../../components/Search/Useritem";
  export default {
    name: "Search",
    data(){
      return{
        data:null
      }
    },
    components:{
      [Useritem.name]:Useritem
    },
    beforeMount() {
      this._initSearchData()
    },
    methods:{
      async _initSearchData(){
        let data=await SearchApi.getSearchData()
        this.data=data
        console.log(this.data)
      }
    }
  }
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  height: .5rem;
  overflow: hidden;
  .goback svg{
      width: .2rem;
      height: .2rem;
      fill:#a0a0a0;
      margin-top: .15rem;
      /*margin-top: .1rem;*/

    }
    >a{
      display: block;
      width: .4rem;
      text-align: center;

    }
   >.center{
     width: 2.8rem;
     line-height: .5rem;
     overflow: hidden;
     position: relative;
     input{
       font-size: .16rem;
       width: 2.2rem;
       padding-left: .2rem;
        border: none;
       outline: none;
       &::-webkit-input-placeholder{
         color: #9e9e9e;

       }
     }
     svg{
       width: .2rem;
       height: .2rem;
       fill:#9d9d9d;
       position: absolute;
       top:.14rem;
       /*margin-top: .1rem;*/
     }
   }
  .search{
    height: .24rem;
    line-height: .24rem;
    padding: 0rem .1rem;
    border:.02rem solid #d1a93a;
    margin-top: .1rem;
    border-radius: .15rem;
    color: #d1a93a;
  }

}
.intest{
  padding-left: .2rem;
  font-size: .16rem;
  border-bottom: .01rem solid #f3f3f3;
  padding-bottom: .1rem;
}
</style>