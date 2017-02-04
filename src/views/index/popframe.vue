<template>
    <div class="awardlist" :style="styleobj">
        <header class="header"><h4 class="title">{{title}}</h4></header>
        <div class="list-box">
            <slot></slot>
        </div>
        <footer>
            <span class="ok-btn" @click="close" v-touchbtn = "{color: '#c99014'}">确定</span>
        </footer>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            styleobj: {
                type: Object,
                default: {}
            }
        },
        methods: {
            close () {
                this.$store.dispatch('setPop', false)
            }
        }
    }
</script>
<style lang= "scss" scoped>
    .awardlist{
        width: 16.2rem;
        height: 19.9rem;
        margin: 0 auto;
        margin-top: 5rem;
        position: relative;
        overflow: hidden;
        background-color: rgba(242, 255, 251, 1);
        border: 2px solid rgba(113, 27, 0, 1);
        border-radius: 6px;
        color: #000;
        footer{
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2.58rem;
            width: 100%;
            background-color: rgba(242, 255, 251, 1);
            border-radius: 0 0 6px 6px;
            text-align: center;
            font-size: .9rem;
            line-height: 2.58rem;
            border-top: 1px solid #eee;
            color: rgba(21, 195, 155, 1);
            z-index: 0;
            .ok-btn{
                display: block;
                height: 1.4rem;
                width: 5rem;
                margin: 0 auto;
                margin-top: .59rem;
                color: #fff;
                line-height: calc(1.55rem - 4px);
                font-weight: 600;
                background-color: rgba(255, 175, 45, 1);
                border: 2px solid rgba(113, 27, 0, 1);
                border-radius: .753rem;
                font-size: .7rem;
            }
        }
        .header{
            position: absolute;
            top: 0;
            background-color: rgba(242, 255, 251, 1);
            width: 100%;
            height: 3rem;
            border-bottom: 1px solid #eee;
            z-index: 2;
            border-radius: 6px 6px 0 0;
            text-align: center;
            .title {
                width: 100%;
                padding: 0;
                margin: 0;
                padding-top: 1.53rem;
                font-size: .9rem;
                font-weight: 600;
            }
        }
        .list-box{
            padding-top: 3rem;
            max-height: calc(100% - 3rem);
            overflow: auto;
        }
    }

</style>
