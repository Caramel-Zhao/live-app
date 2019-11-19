<template>
    <div>
        <UserHeader-My></UserHeader-My>
        <UserHeader-Set></UserHeader-Set>
    </div>
</template>

<script>
import My from "./UserHeader/My"
import Set from "./UserHeader/Set"
export default {
    name:"UserHeader",
    components:{
        "UserHeader-My":My,
        "UserHeader-Set":Set
    }
}
</script>

<style>

</style>