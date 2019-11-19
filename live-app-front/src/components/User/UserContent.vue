<template>
    <div>
        <UserContent-SystemMessages></UserContent-SystemMessages>
        <UserContent-Data></UserContent-Data>
        <UserContent-Nobility></UserContent-Nobility>
        <UserContent-Task></UserContent-Task>
        <UserContent-Earnings></UserContent-Earnings>
        <UserContent-Phone></UserContent-Phone>
        <UserContent-Live></UserContent-Live>
        <UserContent-Authentication></UserContent-Authentication>
        <UserContent-Manage></UserContent-Manage>
    </div>
</template>

<script>
import SystemMessages from "./UserContent/SystemMessages"
import Data from "./UserContent/Data"
import Nobility from "./UserContent/Nobility"
import Task from "./UserContent/Task"
import Earnings from "./UserContent/Earnings"
import Phone from "./UserContent/Phone"
import Live from "./UserContent/Live"
import Authentication from "./UserContent/Authentication"
import Manage from "./UserContent/Manage"

export default {
    name:"UserContent",
    components:{
        "UserContent-SystemMessages":SystemMessages,
        "UserContent-Data":Data,
        "UserContent-Nobility":Nobility,
        "UserContent-Task":Task,
        "UserContent-Earnings":Earnings,
        "UserContent-Phone":Phone,
        "UserContent-Live":Live,
        "UserContent-Authentication":Authentication,
        "UserContent-Manage":Manage
    }
}
</script>

<style>

</style>