<template>
    <div class="lottery">
        <div class="title"><h4 v-text="textdata.title"></h4></div>
        <div class="lottery-desc"><p>{{textdata.moreData?textdata.moreData.title:''}}</p><span @click="open">{{textdata.moreData?textdata.moreData.subTitle:''}}</span></div>
        <div class="stake">
            <div class="stake-item" v-for="(item, index) in textdata.contentData">
                <div class="stake-item-warp">
                    <h4 class="stake-item-title" v-text="item.title"></h4>
                    <div class="stake-item-img"><img :src="item.imageUrl"></div>
                    <p class="stake-item-desc"><span v-text="item.num"></span>每注<br/>本期已有<span v-text="item.totalNum"></span></p>
                </div>
                
                
                <span class="stake-item-old">我压了<span>{{skateNum[index]?skateNum[index].myNum:0}}</span>注</span>
                <span class="add" v-show="show[index].add" v-anmimatonEnd="{end: addEnd(index)}">+1</span>
                <span class="stake-item-btn" v-touchbtn = "{color: 'red'}" v-tap="{handle: add(index)}">立即押注</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            textdata:{
                type: Object,
                default: function () {
                    return {  }
                }
            }
        },
        data () {
            return {
                show: [
                    {add: false},
                    {add: false}
                ]
            }
        },
        computed: {
            skateNum () {
                return this.$store.state.userInfo.pressInjectData||{}
            }
        },
        methods: {
            add (index) {
                return (el) => {
                    if(!this.$store.state.userInfo.login) return alert('未登录')
                    this.show[index].add = true
                    setTimeout(()=>{
                        this.show[index].add = false
                        this.$store.dispatch('addPress', index)
                    }, 450)
                }  
            },
            addEnd (index) {
                return () => {
                                              

                }
            },
            open () {
                this.$store.dispatch('setPop', 'skate')
            }
        }
    }
</script>
<style lang= "scss">

    .lottery{
        width: 100%;
        .title{
            color: #fff;
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
                    width: 5.5rem;
                    height: 1px;
                    background-color: #fff;
                    position: absolute;
                    left: 0;
                    top: 1.2rem;
                    z-index: 1;
                }
                &:before{
                    content: '';
                    width: 5.5rem;
                    height: 1px;
                    background-color: #fff;
                    position: absolute;
                    right: 0;
                    top: 1.2rem;
                    z-index: 1;
                }
            }
        }
        .lottery-desc{
            width: 90%;
            margin: 0 auto;
            background-color: rgba(16, 181, 159, 1);
            border-radius: .5rem;
            border: 2px solid rgba(113, 27, 0, 1);
            /*height: 1.4rem;*/
            position: relative;
            line-height: 1rem;
            p{
                word-spacing: none;
                font-size: 0.6rem;

                /*padding-top: 0.35rem;*/
                padding-left: .4rem;
                color: #eee; 
            }
            span{
                position: absolute;
                /*display: block;*/
                right: .5rem;
                top: 0;
                font-size: .5rem;
                line-height: 1rem;
                vertical-align: middle;
                color: rgba(204, 36, 35, 1);
                
            }
        }
        .stake{
            width: 90%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            .stake-item{
                
                margin: 0.86rem .75rem;
                margin-bottom: 0;
                /*border: 1px solid #db574b;*/
                text-align: center;
                position: relative;
                .stake-item-warp{
                    width: 5.1rem;
                    height: 6.9rem;
                    display: block;
                    border-radius: 2px;
                    background-color: rgba(250, 181, 38, 1);
                    /*padding-bottom: 1rem;*/
                    .stake-item-title{
                        height: .5rem;
                        line-height: .5rem;
                        padding-top: .8rem;
                        font-size: .53rem;
                        font-weight: 600;

                    }
                    .stake-item-desc{
                        font-size: .42rem;
                        span{
                            color: #db574b;
                        }
                    }
                    .stake-item-img{

                        width: 2.81rem;
                        height: 3.4rem;
                        margin: .32rem auto;
                        img{
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .stake-item-old{
                    font-size: 0.41rem;
                    color: #fff;
                    span{
                        color: #fff;
                    }
                }
                .stake-item-btn{
                    display: block;
                    width: 5.15rem;
                    height: 1.55rem;
                    line-height: 1.55rem;
                    font-size: 0.7rem;
                    margin: 0 auto;
                    color: #fff;
                    background-color: #000;
                    border-radius: .78rem;
                }
                .add{
                    position: absolute;
                    animation:  add .5s  linear;
                    -webkit-animation: add .5s  linear;
                    color: #db574b;
                    display: block;
                    left: 50%;
                    transform: translate(-50%, 0);
                    @keyframes add {
                        0% {transform: translate(-50%, 0);opacity: 1;}
                        100% {transform: translate(-50%, -3rem);opacity: 0;}
                    }
/**/
                }

            }
        }
    }

    
</style>