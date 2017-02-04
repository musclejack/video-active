<template>
    <div class="video">
        <m-title :title="textdata.title" :subtitle="textdata.subtitle"></m-title>
        <div class="video-list">
            <div v-for="item in textdata.videos"
            class="video-item"><a @click="more(item.httpUrl)"><img :src="item.imageUrl"><span v-text="item.title"></span></a></div>


            <!-- <div class="video-item"><a href=""><img src="../assets/logo.png"><span>这是电影名字</span></a></div>
            <div class="video-item"><a href=""><img src="../assets/logo.png"><span>这是电影名字</span></a></div>
            <div class="video-item"><a href=""><img src="../assets/logo.png"><span>这是电影名字</span></a></div>
            <div class="video-item"><a href=""><img src="../assets/logo.png"><span>这是电影名字</span></a></div> -->
        <!--     <div class="video-item"><a href=""><img src="../assets/logo.png"><span>这是电影名字</span></a></div>
            <div class="video-item"><a href=""><img src="../assets/logo.png"><span>这是电影名字</span></a></div> -->
        </div>
        <div class="more"><button class="more-btn" @click="more(textdata.more.httpUrl)" v-text="textdata.more?textdata.more.title:''" v-touchbtn="{color: '#eee'}"></button></div>
    </div>
</template>
<script>
    import mTitle from './title'
    export default {
        props:{
            textdata:{
                type: Object,
                default: function () {
                    return { }
                }
            }
        },
        components: {
            mTitle
        },
        methods: {
            more (url) {
                window.location = url
            }
        }
    }
</script>
<style lang= "scss" scoped>
    .video{
        width: 100%;
        color: #fff;
        .video-list{
            /*width: 90%;*/
            margin: 0 .9rem;
            display: flex;
            flex-direction: row;
            /*align-items: center;*/
            justify-content: space-around;
            flex-wrap: wrap;
            .video-item{
                width: 5.2rem;
                padding-bottom: 1rem;
                a{
                    display: block;
                    text-align: center;
                    width: 100%;
                    img{
                        width: 100%;
                        height: 2.88rem;
                        display: block;
                    }
                    span{
                        margin-top: .35rem;
                        font-size: 0.6rem;
                        display: block;
                        width: 100%;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                }
            }
        }
        .more{
            width: 100%;
            text-align: center;
            /*margin-top: 1.1rem;*/
            .more-btn{
                height: 1.55rem;
                width: 5.65rem;
                /*display: block;*/
                margin: 0 auto;
                color: #fff;
                line-height: calc(1.55rem - 4px);
                font-weight: 600;
                background-color: rgba(255, 175, 45, 1);
                border: 2px solid rgba(113, 27, 0, 1);
                border-radius: .753rem;
                font-size: .7rem;
            }
        }
    }
</style>