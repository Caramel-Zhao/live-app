<template>
 <div class="search-content">
   <div class="header">
     <router-link class="goback" to="/home">
       <svg class="icon" aria-hidden="true">
         <use class="icon1" xlink:href="#iconfanhui" ></use>
       </svg>
     </router-link>
     <div class="center">
       <input type="text" placeholder="用户昵称/ID" v-model="sea">
       <a>
           <svg class="icon" aria-hidden="true" @click="del">
             <use xlink:href="#iconshanchu2"></use>
           </svg>
       </a>
     </div>
     <div class="search" @click="search">搜索</div>
   </div>
	 <div class="roll" v-if="show">
			<div class="intest">您可能感兴趣的用户</div>
			<user-item :data="data" :live="show" v-if="data"></user-item>
	 </div>
   <div class="roll" v-else>
   			<div class="intest">结果</div>
   			<user-item :data="searchdata" :live="show" v-if="searchdata"></user-item>
   </div>
 </div>
</template>

<script>
  import SearchApi from "../../apis/Search/SearchApi";
  import Useritem from "../../components/Search/Useritem";
  export default {
    name: "Search",
    data(){
      return{
          data:null,
          sea:null,
          searchdata:[],
					show:true,
      }
    },
    components:{
      [Useritem.name]:Useritem
    },
    beforeMount() {
			// this.AllData();
      let a=require("../../../public/mocks/Search/Search")
      this.data=a
    },
    methods:{
// 		async _getdata(){
// 			let a = await SearchApi.getSearchData("454454",this.sea)
// 			this.searchdata[0] = a;
// 			console.log(a)
// 		},
// 		search(){
// 			this.show = false;
// 			this._getdata()	
// 		},

	// 获取感兴趣的信息
// 		async AllData(){  
// 			let a=await SearchApi.getData("454454")
// 			this.data=a.data.new;
// 			this.data.forEach((item) =>{
// 			  item.vipid = this.getVipClass(item.vipid)
// 			});
// 			console.log(this.data[1].vipid)
// 			console.log(this.data)
// 		},
		del(){
			this.show = true;
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
		search(){
				this.show = false;
				let a = {
					"userimage":"http://122.51.57.152:4000/images/list.jpg",
					"username":"丽丽",
					"user_fans":13,
					"vipclass":"#iconzhizunhuiyuan",
					"focus":false,
					"live":false,
					"userid":""
				}
				this.searchdata[0] = a;
			}
	 }
  }
</script>

<style lang="scss" scoped>
.header{
  display: flex;
	width: 3.75rem;
  height: .5rem;
  overflow: hidden;
	position: fixed;
	top: 0rem;
	background-color: #fff;
	z-index: 2;
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
.roll{
	margin-top: 0.5rem;
}
</style>