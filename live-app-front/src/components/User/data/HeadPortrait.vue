<template>
    <div class="portrait" @click.stop="uploadHeadImg">
        <div class="portrait-title" >头像</div>
        <div class="portrait-pic">
            <img :src="userInfo.avatar" alt="">
        </div>
        <input type="file"  @change="handleFile" class="hiddenInput"/>
    </div>
</template>

<script>
    export default {
        name: "HeadPortrait",
        props:["data"],
        data() {
            return{
                userInfo: {
                    avatar: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg'
                }
            }
            // 初始图片
        },
        methods:{
            uploadHeadImg: function () {
                this.$el.querySelector('.hiddenInput').click()
            },
            // 将头像显示
            handleFile: function (e) {
                let $target = e.target || e.srcElement
                let file = $target.files[0]
                var reader = new FileReader()
                reader.onload = (data) => {
                    let res = data.target || data.srcElement
                    this.userInfo.avatar = res.result
                }
                reader.readAsDataURL(file)
            },
        }
    }
</script>

<style scoped>
    .hiddenInput{
        display: none;
    }
    .portrait{
        width: 100%;
        height: 1rem;
        background: white;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.1rem;
    }
    .portrait-title{
        width: 0.65rem;
        height: 100%;
        /*background: red;*/
        font-size: 0.18rem;
        text-align: center;
        line-height: 1rem;
    }
    .portrait-pic{
        width: 1rem;
        height: 100%;
        /*background: red;*/
        font-size: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .portrait-pic img{
        width: 60%;
        height: 60%;
    }
</style>