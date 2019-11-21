<template>
  <ul class="watchList">
    <li v-for="n in 6">
      <p><img src="../../../assets/HomeImg/list.jpg" alt="推荐关注列表"></p>
      <p>昵称</p>
      <p><i>
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icondingwei2"></use></svg></i>地址</p>
      <span class="home-button">关注</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "HomeWatchedList"
  }
</script>

<style lang="scss" scoped>
.watchList{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.1rem;
  box-sizing: border-box;
  justify-content: space-between;
  li{
    box-sizing: border-box;
    width: 32%;
    text-align: center;
    margin:0 0.01rem 0.06rem;
    background: #eee;
    padding: 0.1rem 0.15rem;
    img{
      width: 100%;
      border-radius: 50%;
    }
    p{
      margin-bottom: 0.1rem;
    }
    .icon{
      width: 0.15rem;
      height: 0.15rem;
      vertical-align: middle;
      margin-right: 0.05rem;
    }
    .home-button{
      display: inline-block;
      border-radius: 0.5rem;
      background: #5ee4d9;
      padding: 0.05rem 0.3rem;
      color: #fff;
    }
  }
}
</style>