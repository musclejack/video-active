<template>
    <div id="award">
        <lists :listData = "listData"></lists>
        <init-load v-if = "ispop === 'initloadaward'" bgcolor='rgb(240, 240, 240)'></init-load>
    </div>
</template>
<script>
    import config from '../../config'
    import lists from './lists'
    import initLoad from '../../components/init-load'
    export default {
        data () {
            return {
                listData: []
            }
        },
        components: {
            lists,
            initLoad
        },
        computed: {
            ispop () {
                return this.$store.state.ispop
            }
        },
        beforeCreate () {
            
            this.$store.dispatch('setPop', 'initloadaward') 
            let self = this
            this.$http.get(config.url+'/award')
            .then(function (response) {
                this.$store.dispatch('setPop', null)
                let alldata = JSON.parse(response.body)
                if (alldata.code !== 200) return alert('接口错误')
                self.listData = alldata.value.data
                // setTimeout(() => {}, 500)
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
</script>
<style lang= "scss" scoped>
    /*@improt "../../scss/base.scss";*/
    #award{
        width: 100%;
        height: 100%;
        background-color: rgb(240, 240, 240);
        overflow-y: auto;
    }
</style>