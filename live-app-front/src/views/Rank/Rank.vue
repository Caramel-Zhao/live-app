<template>
  <div class="Ra-con">
    <router-link to="/home">
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#iconfanhuitubiao"></use>
      </svg>
    </router-link>
    <swiper></swiper>
  </div>
</template>
<script>
import BigRank from './BigRank'
export default {
  name: "Rank",
  components: {
    "swiper": BigRank,
  }
}
</script>

<style scoped lang="scss">
.Ra-con {
  background: url(../../../public/assets/RankImg/bg.jpg);
  background-size: 100%;
  svg {
    width: 0.2rem;
    height: 0.2rem;
    fill: white;
    position: absolute;
    top: 0.17rem;
    left: 0.1rem;
    z-index: 999;
  }
}
</style>