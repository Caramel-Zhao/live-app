<template>
  <div class="user">
    <User-header></User-header>
    <User-personal></User-personal>
    <User-SystemMessages></User-SystemMessages>
    <User-Data></User-Data>
    <User-Nobility></User-Nobility>
    <User-Task></User-Task>
    <User-Award></User-Award>
    <User-Earnings></User-Earnings>
    <User-Phone></User-Phone>
    <User-Level></User-Level>
    <User-Real></User-Real>
    <User-Manage></User-Manage>
    <User-Service></User-Service>
<<<<<<< HEAD
    <User-footer></User-footer>
    </div>
=======
    <Footer />
>>>>>>> 5f1bca7d5e07c41711c3372384beadcb6ec5c5bf
  </div>
</template>

<script>
import header from "../../components/User/user/UserHeader"
import personal from "../../components/User/user/UserPersonal"
import SystemMessages from "../../components/User/user/SystemMessages"
import Data from "../../components/User/user/Data"
import Nobility from "../../components/User/user/Nobility"
import Task from "../../components/User/user/Task"
import Award from "../../components/User/user/Award"
import Earnings from "../../components/User/user/Earnings"
import Phone from "../../components/User/user/Phone"
import Level from "../../components/User/user/Level"
import Real from "../../components/User/user/Real"
import Manage from "../../components/User/user/Manage"
import Service from "../../components/User/user/Service"
import Footer from "../../components/Commom/Footer"
export default {
  name: "User",
  components: {
    "User-header": header,
    "User-personal": personal,
    "User-SystemMessages": SystemMessages,
    "User-Data": Data,
    "User-Nobility": Nobility,
    "User-Task": Task,
    "User-Award": Award,
    "User-Earnings": Earnings,
    "User-Phone": Phone,
    "User-Level": Level,
    "User-Real": Real,
    "User-Manage": Manage,
    "User-Service": Service,
<<<<<<< HEAD
    "User-footer":Footer
=======
    Footer
>>>>>>> 5f1bca7d5e07c41711c3372384beadcb6ec5c5bf
  },
  methods: {
    goHome () {
      this.$router.push("Home")
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 8rem;
}
</style>
