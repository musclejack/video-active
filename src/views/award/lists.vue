<template>
    <div style="width: 100%;">
        <div v-for="item in listData" v-if="listData.length">
            <send v-if="item.type === 1&&item.address" :send = "item"></send>
            <get v-if="item.type === 1&&!item.address" :get = "item"></get>
            <card v-if="item.type === 2" :card = "item"></card>
        </div>
        <div v-if="!listData.length">
            <none></none>
        </div>
    </div>
</template>
<script>
    import send from './send'
    import get from './get'
    import card from './card'
    import none from './none'
    export default {
        props: {
            listData : {
                type: Array,
                default: []
            }
        },
        components: {
            send,
            get,
            card,
            none
        }
    }
</script>
<style lang= 'scss'>

</style>