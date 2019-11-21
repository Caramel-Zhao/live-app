<template>
  <div class="n-heade">
    <router-link :to="'/user'">
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconarrow-left"></use>
    </svg>
    </router-link>
    <h5>特权介绍</h5>
  </div>
</template>

<script>
export default {
    name:"NHeader"
}
</script>

<style scoped lang="scss">
    .n-heade{
        width: 100%;
        height: 0.5rem;
        background-color: black;
        display: flex;
        svg{
            width: 0.3rem;
            height: 0.2rem;
            margin-top: 0.15rem;
            margin-left: 0.1rem;
        }
        h5{
            color: white;
            font-size: 0.18rem;
            margin-left: 0.2rem;
            margin-top: 0.17rem;
            font-weight: 500;
        }   
    }
</style>