<template>
    <div class="box">
        <DataHeader />
        <HeadPortrait />
        <Name />
        <Gender />
        <Birthday />
        <Signature />
    </div>
</template>

<script>
    import DataHeader from "../../components/User/data/DataHeader";
    import HeadPortrait from "../../components/User/data/HeadPortrait";
    import Name from "../../components/User/data/Name";
    import Gender from "../../components/User/data/Gender";
    import Birthday from "../../components/User/data/Birthday";
    import Signature from "../../components/User/data/Signature";
    import { Overlay } from 'vant';
  export default {
    name: "Data",
      components: {
          DataHeader,
          HeadPortrait,
          Name,
          Gender,
          Birthday,
          Signature,
          Overlay
      }
  }
</script>

<style scoped>
    .box{
        background: #efefef;
        height: 100vh;
    }
</style>