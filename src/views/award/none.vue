<template>
    <div class="none">
        <span>
            还没有中奖呢
        </span>

        <span class="touch-btn" v-touchbtn = "{color: 'rgba(0,194,132,1)'}" v-tap="{handle: back}">
            返回活动页面
        </span>
    </div>
</template>
<script>
    export default {
        methods: {
            back () {
                this.$router.back(-1)
            }
        }
    }
</script>
<style lang= "scss" scoped>
    .none{
        width: 100%;
        text-align: center;
        padding-top: 6rem;
        span{
            display: block;
            font-size: .7rem;
        }
        .touch-btn{
            display: block;
            width: 8.0rem;
            height: 1.68rem;
            line-height: 1.68rem;
            text-align: center;
            margin: 0 auto;
            margin-top: 2rem;
            border-radius: .84rem;
            font-size: .8rem;
            font-weight: 600;
            background-color: rgba(21, 195, 155, 1);
            color: #fff;
        }
    }

</style>