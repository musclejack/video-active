<template>
    <div class="popbody">
        <h5 class="desc" v-html="desc"></h5>
        <div class="footer"><span @click = "close" v-touchbtn="{color: 'rgba(118, 34, 0, 1)'}">{{btn}}</span></div>
    </div>
</template>
<script>
    export default {
        props: ['desc','btn'],
        methods: {
            close () {
                this.$store.dispatch('setPop', false)
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
        width: 16rem;
        /*height: 5rem;*/
        color: #000;
        text-align: center;
        overflow: hidden;
        h5{
            margin-top: .5rem;
            margin-bottom: .5rem;
            font-size: .8rem;
        }
        .footer{
            /*position: absolute;*/
            bottom: 0;
            left: 0;
            height: 1.8rem;
            text-align: center;
            border-top: 1px solid #eee;
            width: 100%;
            span{
                font-size: .8rem;
                width: 5rem;
                display: block;
                margin: .2rem auto;
                height: 1.2rem;
                line-height: 1.2rem;
                border: 2px solid rgba(118, 34, 0, 1);
                border-radius: .7rem;
                background-color: rgba(255, 175, 45, 1);
            }
        }
    }
</style>