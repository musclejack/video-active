<template>
    <div class="footer">
        <span class="foot-item"><router-link :to="{ path: 'award' }">我的奖品</router-link</span>
        
        <span class="foot-item-mid" @click="openInstrPop">活动说明</span>
        
        <span class="foot-item" @click="openListPop">{{title}}</span>
        
    </div>
</template>
<script>
    import config from '../../config'
    export default {
        data () {
            return {
            }
        },
        computed: {
            title () {
                return this.$store.state.lastAward.recentTitle
            }
        },
        methods: {
            openListPop () {
                this.$store.dispatch('setPop', 'list')
            },
            openInstrPop () {
                this.$store.dispatch('setPop', 'instruction')
            }
        },
        created () {
            this.$http.get(config.url+'/lastAward')
            .then(response => {
                let alldata = JSON.parse(response.body)
                if (alldata.code !== 200) return alert('接口错误')
                // console.log(alldata.value)
                this.$store.dispatch('setLastAward', alldata.value)
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
</script>
<style lang= "scss" scoped>
    .footer{
        margin: 1rem 0 1rem 0;
        width: 100%;
        font-size: 0.7rem;
        text-align: center;
        color: #fff;

        a{
            color: #fff;
        }
        .foot-item-mid{
            border-left: 2px solid #fff;
            border-right: 2px solid #fff;
            padding: 0 .78rem;
            margin: 0 .78rem;
        }
    }
</style>