<template>
    <div class="game">
        <m-title :title = "textdata.title" :subtitle = "textdata.subtitle"></m-title>
        <div class="game-body">
            <img :src="textdata.imageUrl"/>
            <div class="game-btn-box">
                <!-- <p>今天还有 <span>1</span> 次机会<p> -->
                <button class="game-btn" v-touchbtn="{color: '#eee'}">{{textdata.buttonTitle}}</button>
            </div>
        </div>
    </div>
</template>
<script>
    import mTitle from './title'
    export default {
        components: {
            mTitle
        },
        props: {
            textdata:{
                type: Object,
                default: function () {
                    return {  }
                }
            }
        }
    }
</script>
<style lang= 'scss' scoped>
    .game{
        width: 100%;
        margin-bottom: 1.1rem;
        color: #fff;
        .game-body{
            /*width: 100%;*/
            margin: 0 .83rem;
            position: relative;
            border: 2px solid rgba(113, 27, 0, 1);
            border-radius: .1rem;
            img{
                display: block;
                width: 100%;
                height: 5.87rem;
                margin: 0 auto;
            }
            .game-btn-box{
                font-size: 0.6rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                p{

                }
                span{
                    color: #db574b;
                }
                button{
                    width: 4.33rem;
                    height: 1.2rem;
                    display: block;
                    outline: none;
                    background-color: rgba(255, 175, 45, 1);
                    border: 2px solid  rgba(113, 27, 0, 1);
                    border-radius: 0.6rem;
                    margin: 0 auto;
                    margin-top: 0.3rem;
                }
            }

        }
    }
</style>