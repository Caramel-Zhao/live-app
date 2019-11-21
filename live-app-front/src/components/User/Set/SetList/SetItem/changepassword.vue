<template>
  <div>
    <div class="header">
      <router-link :to="'/user/setting'">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarrow-left"></use>
        </svg>
      </router-link>
      <h3>修改密码</h3>
    </div>
    <div class="set-content">
      <input type="password" placeholder="请输入原密码" class="inp">
      <input type="password" placeholder="请输入新原密码" class="inp">
      <input type="text" placeholder="请输入手机号" class="inp">
      <input type="text" placeholder="输入验证码" class="verification">
      <button class="btn-verification">发送验证码</button>
      <button class="btn">确认修改</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"changepassword"
}
</script>

<style scoped lang="scss">
     .header{
        width:100%;
        height:0.5rem;
        background-color: #0CCECE;
        font-size: 0;
        display: flex;
        svg{
            width: 0.3rem;
            height: 0.2rem;
            margin-top: 0.14rem;
            margin-left: 0.1rem;
        }
        h3{
            color: white;
            font-size: 0.18rem;
            margin-left: 1.1rem;
            margin-top: 0.15rem;
        }   
    }
    .set-content{
      margin-top: 0.4rem;
      .inp{
        display:block;
        width: 2.8rem;
        height: 0.35rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.1rem;
        border-radius: 0.5rem;
        border: 0.01rem solid #E6E6E6;
        padding-left: 0.2rem;
        outline: none;
      }
      .verification{
        width: 1.5rem;
        height: 0.35rem;
        border-radius: 0.5rem;
        border: 0.01rem solid #E6E6E6;
        padding-left: 0.2rem;
        margin-top: 0.1rem;
        margin-left: 0.37rem;
        outline: none;
      }
      .btn-verification{
         outline: none;
         width: 1rem;
         height: 0.35rem;
         border-radius: 0.5rem;
         margin-left: 0.1rem;
         border: none;
         color: white;
         background-color: #959595;
      }
      .btn{
        border-radius: 0.5rem;
        display:block;
        width: 2.8rem;
        height: 0.35rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.2rem;
        border: none;
        color: white;
        background-color: #959595;
        font-size: 0.16rem;
        outline: none;
      }
    }
</style>