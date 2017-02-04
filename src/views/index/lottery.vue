<template>
    <div class="lottery">
        <div class="title"><h4>每次抽奖消耗 20 颗v豆</h4></div>
        <section>
            <div v-for="(item, index) in textdata.flops" @click="handle" :class="[show ?'active':'','lottery-item']"><img :src="img||item.imageUrl"></div>
        </section>
    </div>
</template>
<script>
    import config from '../../config'
    export default {
        props: {
            textdata:{
                type: Object,
                default: function () {
                    return {}
                }
            }
        },
        data () {
            return {
                show: null,
                loaded: null,
                anmimatonEnd: null,
                img: null
            }
        },
        watch: {

        },
        methods: {
            handle (index) {
                if (this.show) return
                    console.log(21212)
                if(!this.$store.state.userInfo.login) return alert('点击签到按钮登录先')
                this.show = true
                this.$http.get(config.url+'/lottery')
                .then(response => {
                    let alldata = JSON.parse(response.body)
                    if (alldata.code !== 200) return alert('接口错误')
                    this.$store.dispatch('setAward', alldata.value)
                    this.loaded = true
                    setTimeout(() => {
                        let pop = this.$store.state.award.status?'award':'notAward'
                        this.show = null
                        this.img = '/static/image/card-翻开.png'
                        setTimeout(() => { this.$store.dispatch('setPop', pop),this.img = null}, 1000)
                    } , 2500)
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>
<style lang= "scss" scoped>
    .lottery{
        width: 100%;
        .title{
            /*color: rgba(255, 232, 155, 1);*/
            color: #eee;
            text-align: center;
            position: relative;
            padding: .75rem 0 ;
            /*width: 90%;*/
            margin: 0 .9rem;
            height: .7rem;
            line-height: .7rem;
            z-index: 3;
            h4{
                /*position: absolute;*/
                z-index: 2;
                display: inline-block;
                font-size: 0.5rem;
                /*color: #da9494;*/
                background-color: transparent;
                z-index: 3;
                margin: 0 auto;
                padding: 0 1rem 0 1rem;
                &:after{
                    content: '';
                    width: 4rem;
                    height: 1px;
                    background-color: #eee;
                    position: absolute;
                    left: 0;
                    top: 1.2rem;
                    z-index: 1;
                }
                &:before{
                    content: '';
                    width: 4rem;
                    height: 1px;
                    background-color: #eee;
                    position: absolute;
                    right: 0;
                    top: 1.2rem;
                    z-index: 1;
                }
            }
        }
        section{
            /*width: 100%;*/
            margin: 0 .65rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .lottery-item{
                border-radius: .1rem;
                /*border: 2px solid rgba(113, 27, 0, 1);*/
                
                width: 5.13rem;
                height: 6.96rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .active{
                animation: shake 1s 3 ease-in-out;
                -webkit-animation: shake 1s 3 ease-in-out;
            }
        } 
    }

/**/
@keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

</style>