<template>
    <div class="lottery-last">
        <span class="title" v-text= "textdata.recentTitle+':'"></span>
        <i class="vol"></i>
        <ul :class="[init?'lunbo': '','warp-desc']">
            <li v-for = "item in textdata.recentData">{{'恭喜'+item.nickName+'中'+item.product}}<li>
        </ul>
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
        data () {
            return {
                init: false
            }
        },
        created () {
            this.init = true
        }
    }
</script>
<style lang= "scss">
    @mixin keyframes($a) {
      @keyframes #{$a} {
        @content;
      }
    }
    .lottery-last{
        /*color: #fff;*/
        margin: 0 .7rem;
        background-color:  rgba(16, 181, 159, 1);
        position: relative;
        margin-top: .7rem;
        font-size: .6rem;
        height: 1rem;
        margin: 1rem;
        overflow: hidden;
        border-radius: .5rem;
        border: 2px solid rgba(113, 27, 0, 1);
        color: #fff;
        .title{
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            line-height: 1rem;
            width: 3rem;
            text-align: center;
        }
        .vol{
            display: inline-block;
            width: 1rem;
            height: .85rem;
            margin: .1rem .8rem 0 3.1rem;
            overflow: hidden;
            vertical-align: top;
            background: url('../../assets/image/vol.png') no-repeat center center;
            background-size: 100% 100%;
        }

        .warp-desc{
            line-height: 1rem;
            margin: 0;
            padding: 0;
            margin-left: 4.4rem;
            white-space:nowrap;
            list-style-type: none;
            position: relative;
            animation:  lunbo 10s infinite linear;
            -webkit-animation: lunbo 10s infinite linear;
            @include keyframes(lunbo) {
                0% {
                    transform: translate(0, 0);
                }
                100% {
                    transform: translate(0, -100%);
                }
            }   
            
            li {
                height: 1rem;
            }
        }
    }
/*    @keyframes lunbo{

    }
    @-webkit-keyframes lunbo{

    }*/


/*@keyframes lunbo {
    
}*/


 

/*@-webkit-keyframes lunbo {
    0% {-webkit-transform: translate(0, 0)}
    50% {-webkit-transform: translate(0, -2rem)}
    100% {-webkit-transform: translate(0, -4rem)}
}
 
@keyframes lunbo {
    0% {-webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
    50% {-webkit-transform: translate(0, -2rem);
        transform: translate(0, -2rem);
    }
    100% {-webkit-transform: translate(0, -4rem);
        transform: translate(0, -4rem);
    }
}*/
/*@-webkit-keyframes lunbo {
    0%, 40%, 0100% { -webkit-transform: scaleY(0.4) } 
    20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes lunbo {
    0%, 40%, 100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }  20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
    }
}*/
</style>