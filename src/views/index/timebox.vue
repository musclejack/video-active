<template>
    <div class="time-box">
        <section class="task">
        <div v-for = "item in date"
        :class="[item.currentStage?'istime':'','task-item']">
            <i></i>
            <span class="desc" v-text="item.stageTitle"></span>
            <span class="date" v-html="item.stageSubtitle"></span>
        </div>
        </section> 
        <section class="gif">
        <div v-for="item in goods" class="gif-item">
            <img :src="item.goodImageUrl" />
<!--             <span class="price">{{item.goodPriceStr}}</span>
            <span class="title">{{item.goodTitle}}</span>
            <span class="numstr">{{item.goodNumStr}}</span> -->
        </div>
        </section>  
    </div>
</template>
<script>
    export default {
         props:{
            textdata:{
                type: Object,
                default: function () {
                    return {}
                }
            }
        },
        computed: {
            date: function () {
                if (!this.textdata.stages)  return []
                let output = []
                this.textdata.stages.forEach (item => {
                    output.push({
                        "currentStage": item.currentStage, 
                        "stageId": item.stageId, 
                        "stageImageUrl": item.stageImageUrl, 
                        "stageSubtitle": item.stageSubtitle.replace(',', '<br>'),
                        // item.stageSubtitle.length > 7?
                        //  item.stageSubtitle.replace(',', '<br>'):
                        //  item.stageSubtitle.split('').map((item, index) => index === 3? item+'<br/>':item).join(""), 
                        "stageTitle": item.stageTitle
                    })
                })
                return output
            },
            goods: function () {
                if (!this.textdata.stages)  return []
                let stages = this.textdata.stages
                for (var i = 0; i < stages.length; i++) {
                    if (stages[i].currentStage) return stages[i].goods
                }
            }
        }
    }
</script>
<style lang= "scss" scoped>
    .time-box{
        width: calc(100% - 1.2rem);
        /*font-size: 0.6rem;*/
        height: 6.8rem;
        margin: 0 auto;
        background-color: rgba(111, 236, 204, 1);
        border-radius: 0.28rem;
        border: 2px solid rgba(113, 27, 0, 1);
        position: absolute;
        z-index: 2;
        left: .55rem;
        color: rgba(113, 27, 0, 1);
        text-align: center;
        .task{
            /*padding-top: .95rem;*/
            border-radius: .98rem;
            background-color: rgba(163, 243, 222, 1);
            border: 2px solid rgba(113, 27, 0, 1);
            margin: 0 2px;
            margin-top: .95rem;
            height: 1.96rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            .task-item{
                width: 30%;
                height: 2.2rem;
                /*background-color: #eee;*/
                position: relative;
                i{
                    position: absolute;
                    top: 0.8rem;
                    width: 0.8rem;
                    height: 0.8rem;
                    border-radius: 50%;
                    background-color: #ffbe26;
                    display: block;
                    opacity: .5;
                    background: url('../../assets/image/timer.png') no-repeat center center;
                    background-size: 100% 100%;
                }
                .desc{
                    position: absolute;
                    max-width: 1.3rem;
                    display: block;
                    text-align: center;
                    left: 0.8rem;
                    font-size: 0.5rem;
                    line-height: 0.7rem;
                    top: calc(0.4rem + 2px);
                    /*height: 1.2rem;*/
                }
                .date{
                    position: absolute;
                    width: 4rem;
                    display: block;
                    text-align: center;
                    left: 1.8rem;
                    font-size: 0.5rem;
                    line-height: 0.7rem;
                    top: calc(0.4rem + 2px);
                    /*height: */
                }
            }
            .istime{
                /*color: #b83125;*/
                i{
                    opacity: 1;
                }
            }
        }
        .gif{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin: 0 6px;
            margin-top: .9rem;
            .gif-item{
                width: 2.31rem;
                height: 2.31rem;
                position: relative;
                border-radius: 4px;
                border: 2px solid rgba(113, 27, 0, 1);
                background-color: rgb(8, 171, 143);
                img{
                    display: block;
                    width: 100%;
                    /*height: 100%;*/
                    /*padding: .355rem;*/
                }
                span{
                    display: block;
                    margin: 0 auto;
                }
                .price{
                    width: 1.8rem;
                    font-size: .5rem;
                    background-color: rgb(240,95,50);
                    position: relative;
                    top: -.5rem;
                    margin-bottom: -.5rem;
                }
                .title{
                    font-size: .23rem;
                    color: #fff;
                }
                .numstr{
                    font-size: .24rem;
                }

                /*span{
                    display: block;
                    min-width: 0.7rem;
                    height: 0.7rem;
                    position: absolute;
                    border-radius: 0.35rem;
                    background: #b83125;
                    top: 0%;
                    right: 0%;
                    text-align: center;
                    transform: translate(50%,-50%);
                    z-index: 2;
                }*/
            }
        }
    }
</style>