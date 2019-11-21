<template>
    <div>
        <div class="Birthday" @click="showPopup">
            <div class="Birthday-title">生日</div>
            <span class="birth">{{data}}</span>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
            <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    :min-date="minDate"
                    :item-height="height"
            />
        </van-popup>
    </div>
</template>

<script>
    import { Popup, DatetimePicker } from 'vant';
    export default {
        name: "Birthday",
        props:["data"],
        components: {
            [Popup.name]:Popup,
            [DatetimePicker.name]:DatetimePicker
        },
        data() {
            return {
                height: 30,
                show: false,
                minDate: new Date(),
                currentDate: new Date()
            }
        },

        methods: {
            showPopup() {
                this.show = true;
            }
        }
    }
</script>

<style scoped>
    .Birthday{
        width: 100%;
        height: 0.45rem;
        background: white;
        margin-bottom: 0.01rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.1rem;
        box-sizing: border-box;
    }
    .birth{
        font-size: .18rem;
        color: #aaa;
    }
    .Birthday-title{
        width: 0.65rem;
        height: 100%;
        font-size: 0.18rem;
        text-align: center;
        line-height: 0.45rem;
    }
</style>