<template>
  <ul class="home-lists">
    <li v-for="n in data">
      {{n}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "HomeList",
    props:["data"]
  }
</script>

<style lang="scss" scoped>
  .home-lists{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li{
      width: 50%;
      height:2rem;
      background: #ccc;
      text-align: center;
      line-height: 0.5rem;
    }
  }

</style>