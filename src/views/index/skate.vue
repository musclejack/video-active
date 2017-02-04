<template>
    <div class="skates">
        <div v-for="item in skates" class="item">
            <div class="img"><img :src="item.imageUrl"></div>
            <div class="desc">
                <h4>{{item.title}} <span>{{item.num}}注</span></h4>
                <h5>{{date(item.time)}}</h5>
                
            </div>
            <div class="status">
                {{status(item.status)}}
            </div>
        </div>
    </div>
</template>
<script>
import config from '../../config'
    export default {
        data () {
            return {
                skates: []
            }
        },
        methods: {
            date (index) {
                let newdate = new Date(index)
                return (newdate.getMonth()+1)+'月'+newdate.getDate()+'日 '+newdate.getHours()+'.'+newdate.getMinutes()
            },
            status (index) {
                switch (index) {
                    case -1:
                        return '未开奖'
                    case 0:
                        return '未中奖'
                    case 1:
                        return '中奖'
                    default:
                        // statements_def
                        break;
                }
            }
        },
        beforeCreate () {
            this.$http.get(config.url+'/skate')
            .then(response => {
                let alldata = JSON.parse(response.body)
                if (alldata.code !== 200) return alert('接口错误')
                this.skates = alldata.value.data
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
</script>
<style lang= "scss">
    .skates{
        margin: 0 1.15rem;
        .item{
            height: 4.73rem;
            width: 100%;
            overflow: hidden;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            position: relative;
            /*justify-content: space-between;*/
            .img{
                width: 1.81rem;
                height: 1.81rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .desc{
                margin-left: .8rem;
                h4{
                    font-size: .8rem;
                    position: relative;
                    line-height: 1rem;
                    span{
                        margin: .1rem auto;
                        background-color: rgba(231, 74, 55, 1);
                        color: #fff;
                        font-size: .5rem;
                        line-height: .8rem;
                        display: block;
                        /*width: 2re*/
                        position: absolute;
                        top: 0;
                        right: -1rem;
                        border-radius: 2px;
                    }
                }
                h5{
                    font-size: .7rem;
                    color: #999;
                }
            }
            .status{
                position: absolute;
                right: 0;
                font-size: .8rem;
                display: block;
                height: .8rem;
                top: 1.93rem;
            }
            &:last-child{
                margin-bottom: 2.58rem;
            };
        }
    }
    
</style>