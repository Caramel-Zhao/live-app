<template>
    <div class="box">
        <message />
        <Vedio/>
    </div>
</template>

<script>
    import message from "../../components/User/Message/message";
    import Vedio from "../../components/live/Vedio";
  export default {
    name: "Message",
      components: {
          message,
          Vedio
      }
  }
</script>

<style scoped>
    .box{
        background: #efefef;
        height: 100vh;
    }
</style>