<template>
    <div>
        <Earnings-header></Earnings-header>
        <Earnings-content></Earnings-content>
        <Earnings-next></Earnings-next>
        <Earnings-footer></Earnings-footer>
    </div>
</template>

<script>
    import header from "../../components/User/earnings/EarningsHeader"
    import content from "../../components/User/earnings/EarningContent"
    import next from "../../components/User/earnings/EarningsNext"
    import footer from "../../components/User/earnings/EarningsFooter"
  export default {
    name: "Earnings",
    components:{
      "Earnings-header":header,
      "Earnings-content":content,
      "Earnings-next":next,
      "Earnings-footer":footer
    }
  }
</script>

<style scoped>

</style>