<template>
  <div class="footer">
    <router-link tag="span"
                 to="/home"><i class="footer-index"></i>首页</router-link>
    <div class="live-img"><img src="../../assets/HomeImg/play.png"
           alt=""></div>
    <router-link tag="span"
                 to="/user"><i class="footer-user"></i>我的</router-link>
  </div>
</template>

<script>
export default {
  name: "YT-footer",
}
</script>

<style lang="scss" scoped>
.footer {
  font-size: 0.12rem;
  height: 0.5rem;
  border-top: 0.005rem solid #eee;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  background: #fff;
  z-index: 1;
  span {
    padding-top: 0.05rem;
    i {
      display: block;
      padding-top: 0.05rem;
      height: 0.2rem;
      text-align: center;
      margin: 0 auto;
    }
    .footer-index {
      background: url("../../assets/HomeImg/footer.png") 0 0 no-repeat;
      background-size: 0.7rem 0.5rem;
    }
    .footer-user {
      background: url("../../assets/HomeImg/footer.png") -54px 0px no-repeat;
      background-size: 0.7rem 0.5rem;
    }
    .footer-index-active {
      background: url("../../assets/HomeImg/footer.png") -30px 0px no-repeat;
      background-size: 0.7rem 0.5rem;
    }
    .footer-user-active {
      background: url("../../assets/HomeImg/footer.png") -54px -30px no-repeat;
      background-size: 0.7rem 0.5rem;
    }
  }
  .live-img {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    position: relative;
    top: -0.25rem;
    border: 0.03rem solid #fff;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>