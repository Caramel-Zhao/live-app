<template>
  <div class="phone-content">
      <div class="header">
          <router-link to="/user">
              <svg class="icon" aria-hidden="true">
                  <use class="icon1" xlink:href="#iconfanhui" ></use>
              </svg>
          </router-link>
          <div>绑定手机</div>
      </div>
      <div class="content">
        <div class="top">
            <div>
                <svg class="icon" aria-hidden="true">
                    <use class="icon1" xlink:href="#iconshouji1" ></use>
                </svg>
            </div>
            <div>
                <input type="search"  placeholder="输入手机号">
            </div>
        </div>
          <div class="center">
              <div>
                  <svg class="icon" aria-hidden="true">
                      <use class="icon1" xlink:href="#iconyanzhengma" ></use>
                  </svg>
              </div>
              <div>
                  <input type="text" placeholder="输入验证码">
              </div>
              <div @click="getApiData">
                  发送验证码
              </div>
          </div>
           <div class="bottom">进行绑定</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "Phone",
      methods:{
          getApiData(){

          }
      }
  }
</script>

<style lang="scss" scoped>
 .phone-content{
     background: url("../../assets/User/1.jpg") ;
     background-size: 100% 100%;
     color:#d8bf89;
     height: 6.8rem;
     .header{
         height: .5rem;
         line-height: .5rem;
         display: flex;
         svg{
             width: .3rem;
             height: .3rem;
             fill:#d8bf89;
             margin: .1rem;
         }
         div{
             margin-left: .5rem;
             font-size: .16rem;
         }
     }
     .content{
         width: 3.2rem;
         margin: 0 auto;
         .top{
             display: flex;
             height: .4rem;
             svg{
                 width: .2rem;
                 height: .2rem;
                 fill:white;
                 margin-left: .15rem;
                 margin-top: .08rem;
             }
             div:first-child{
                 border: .02rem solid #d8bf89;
                 border-radius:  .3rem 0 0 .3rem  ;
                 width: .45rem;

             }
             div:last-child{
                 border: .02rem solid #d8bf89;
                 border-left:none;
                 flex: 1;
                 border-radius: 0 .3rem .3rem 0 ;
                 input{
                     margin-top: .07rem;
                     font-size: .18rem;
                     width: 2.6rem;
                     border: none;
                     background-color:rgb(255,255,255,0);
                     padding-left: .1rem;
                     outline: none;
                     color:white;
                 }
             }
         }
         .center{
             height: .4rem;
             display: flex;
             margin-top: .2rem;
             svg{
                 width: .2rem;
                 height: .2rem;
                 fill:white;
                 margin-left: .15rem;
                 margin-top: .08rem;
             }
             div:first-child{
                 width: .45rem;
                 border: .02rem solid #d8bf89;
                 border-radius:  .3rem 0 0 .3rem  ;
             }
             div:nth-child(2){
                 border: .02rem solid #d8bf89;
                 border-left:none;
                 input{
                     margin-top: .07rem;
                     font-size: .18rem;
                     width: 1.4rem;
                     border: none;
                     background-color:rgb(255,255,255,0);
                     padding-left: .1rem;
                     outline: none;
                     color:white;
                 }
             }
             div:last-child{
                 border: .02rem solid #d8bf89;
                 border-left:none;
                 flex: 1;
                 font-size: .16rem;
                 line-height: .35rem;
                 box-sizing: border-box;
                 padding-left: .1rem;
                 border-radius: 0 .3rem .3rem 0 ;
             }
         }
         .bottom{
             width: 2.5rem;
             margin: .2rem auto;
             text-align: center;
             height: .4rem;
             line-height: .4rem;
             border: .02rem solid #d8bf89;
             font-size: .16rem;
             border-radius: .3rem;

         }
     }
 }

</style>