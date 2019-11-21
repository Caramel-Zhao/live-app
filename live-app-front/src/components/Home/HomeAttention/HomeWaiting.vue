<template>
  <div class="waiting">
    <p>-你关注的主播还未开播-</p>
    <p><img src="../../../assets/HomeImg/waiting.jpg" alt=""></p>
  </div>
</template>

<script>
  export default {
    name: "HomeWaiting"
  }
</script>

<style lang="scss" scoped>
.waiting{
  width: 100%;
  text-align: center;
  p:nth-child(1){
    padding: 0 0 0.1rem;
  }
  img{
    width: 100%;
  }
}
</style>