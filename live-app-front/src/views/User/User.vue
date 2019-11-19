<template>
  <div>
    <h1>user page</h1>
    <YT-footer></YT-footer>
  </div>
</template>

<script>
  import Footer from "../../components/Commom/Footer";
export default {
  name: "User",
  components: {
    [Footer.name]:Footer
  }
}
</script>

<style scoped>
</style>