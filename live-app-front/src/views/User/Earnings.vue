<template>
    <div class="box">
        <EHeader />
    </div>
</template>

<script>
    import EHeader from "../../components/User/Earnings/EHeader";
  export default {
    name: "Earnings",
      components: {
        EHeader
      }
  }
</script>

<style scoped>
    .box{
        width: 100%;
        height: 100vh;
        background-image: url("../../assets/User/Earnings_backgroundImg.jpg");
        background-size: 100% 100%;
    }
</style>