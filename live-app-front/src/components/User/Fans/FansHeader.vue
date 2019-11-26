<template>
    <div class="details">
        <img :src=data.userimage alt="">
        <a @click="$router.back(-1)">
        <svg class="lv" aria-hidden="true">
            <use xlink:href="#iconarrow-left"></use>
        </svg>
        </a>
        <div class="ranking">
            <svg class="lvv" aria-hidden="true">
                <use xlink:href="#iconaixin"></use>
            </svg>
            <p class="list">守护排行榜</p>
            <svg class="lvvv" aria-hidden="true">
                <use xlink:href="#iconarrow-right"></use>
            </svg>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:"FansHeader",
    computed: {
		...mapGetters({
			data: 'GETDATA',
		})
	},
    beforeMount(){
        this.$store.dispatch('INITDATA')  //给仓库触发事件
    }
}

</script>

<style lang="scss" scoped>
    .details{
        width: 100%;
        height: 2.25rem;
        img{
            width: 3.75rem;
            height: 2.25rem;
        }
    }
    .lv{
            width: 0.2rem;
            height: 0.2rem;
            position: absolute;
            top: 0.2rem;
            left: 0.15rem;
        }
    .ranking{
            width: 1.1rem;
            height: 0.3rem;
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 1.8rem;
            left: 0.1rem;
            border-radius: 0.15rem;
        }
    .lvv{
        font-size: 0;
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        left: 0.05rem;
        top: 0.07rem;
    }
    .list{
        position: absolute;
        left: 0.3rem;
        color: white;
        top: 0.1rem;
    }
    .lvvv{
        width: 0.25rem;
        height: 0.25rem;
        position: absolute;
        left: 0.85rem;
        top: 0.04rem;
    }
</style>