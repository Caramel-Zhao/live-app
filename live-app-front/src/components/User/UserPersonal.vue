<template>
    <div>
        <UserPersonal-Attention></UserPersonal-Attention>
        <UserPersonal-Fans></UserPersonal-Fans>
    </div>
</template>

<script>
import Attention from "./UserPersonal/Attention"
import Fans from "./UserPersonal/Fans"
export default {
    name:"UserPersonal",
    components:{
        "UserPersonal-Attention":Attention,
        "UserPersonal-Fans":Fans
    }
}
</script>

<style>

</style>