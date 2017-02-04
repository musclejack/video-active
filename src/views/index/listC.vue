<template>
    <ul>
        <li v-for="item in listData">
            <span class="name">{{item.nickName}}</span>
            <span class="good">{{item.product}}</span>
        </li>
    </ul>
</template>
<script>
    export default {
        computed: {
            listData () {
                return this.$store.state.lastAward.recentData
            }
        }
    }
</script>
<style lang= "scss" scoped>
    ul{
        list-style-type: none;
        padding: 0;
        padding-right: 1.3rem;
        padding-left: 1.3rem;
        li{
            height: 2.58rem;
            /*background-color: #ccc;*/
            text-align: left;
            /*line-height: 1.6rem;*/
            border-bottom: .2px solid #eee;
            .name{
                padding-top: .5rem;
                margin-left: .6rem;
                font-size: .6rem;
                display: block;
            };
            .good{
                padding-top: .28rem;
                margin-left: .6rem;
                font-size: .7rem;
                display: block;
            }
            &:last-child{
                margin-bottom: 2.58rem;
            }
        }
    }
</style>