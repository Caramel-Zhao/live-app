<template>
  <router-link tag="span" to="/rank">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#iconjiangbei"></use>
    </svg>
  </router-link>
</template>

<script>
  export default {
    name: "HomeRank"
  }
</script>

<style lang="scss" scoped>
  .icon{
    width: 0.45rem;
    height: 0.35rem;
  }
</style>