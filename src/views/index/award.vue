<template>
    <div class="popbody">
        <h4 class="title">{{award.title}}</h4>
        <h5 class="desc">{{award.subTitle}}</h5>
        <div class="imgbox"><img :src ="award.imageUrl"/></div>
        <div class="footer"><span @click = "close">暂不领奖</span><span class="get" @click="go">立即领取</span></div>
    </div>
</template>
<script>
    export default {
        methods: {
            close () {
                this.$store.dispatch('setPop', false)
            },
            go () {
                this.$store.dispatch('setPop', false)
                this.$router.push({path:'/saveinfo',query: JSON.parse(JSON.stringify(this.award))})
            }
        },
        computed: {
            award () {
                return this.$store.state.award.lotteryItemData
            }
        }
    }
</script>
<style lang= "scss" scoped>
    .popbody{
        margin: 9.83rem auto;
        background-color: rgba(242, 255, 251, 1);
        border-radius: .4rem;
        border: 2px solid  rgba(118, 34, 0, 1);
        position: relative;
        font-weight: 600;
        width: 16.2rem;
        height: 12.23rem;
        color: #000;
        text-align: center;
        overflow: hidden;
        .title {
            padding-top: 1.5rem;
            font-size: .9rem;
            height: .9rem;
            line-height: .9rem;
            /*font-weight: 600;*/
        }
        .desc {
            padding-top: .82rem;
            font-size: .7.5rem;
            line-height: .8rem;
            height: .8rem;
            font-weight: 400;
            span {
                /*margin-left: */
                color: rgba(0, 167, 138, 1);
            }
        }
        .imgbox{
            width: 4rem;
            height: 4rem;
            margin: 0 auto;
            margin-top: .85rem;
            background-color: #eee;
            img{
                height: 100%;
                width: 100%;
            }
        }
        .footer{
            position: absolute;
            bottom: 0;
            height: 2.58rem;
            border-top: 1px solid #eee;
            width: 100%;
            span{
                display:  inline-block;
                line-height: 2.58rem;
                width: calc(50% - 1px);
                font-size: .8rem;
            }
            .get{
                color: rgba(0, 167, 138, 1);
                border-left: 1px solid #eee;
            }
        }
    }
</style>