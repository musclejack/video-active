<template>
    <div class="list list-send">
        <div class="list-img">
            <img :src="get.imageUrl">
        </div> 
        <div class="list-content">
            <h4>{{get.title}}</h4>
            <span class="touch-btn" v-touchbtn = "{color: 'rgba(0,194,132,1)'}" v-tap="{handle: go(get)}">立即领取</span>
        </div>
    </div>  
</template>
<script>
    export default {
        props: {
            get: {
                type: Object,
                default: {}
            }
        },
        methods: {
            go (item) {
                
                return () => {this.$router.push({path:'/saveinfo',query: JSON.parse(JSON.stringify(item))})}
            }
        }
    }
</script>
<style lang= "scss" scoped>
    .list{
    width: 100%;
    position: relative;
    margin-bottom: .6rem;
    background-color: #fafafa;
    padding: .95rem 0;
    .list-img {
        position: absolute;
        background-color: #fafafa;
        height: 4.3rem;
        width: 4.25rem;
        top: .95rem;
        left: 1.1rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .list-content{
        height: 4.2rem;
        /*color: #a8a8a8;*/
        margin-left: 6.67rem;
        position: relative;
        line-height: 1rem;
        font-size: .6rem;
        h4{
            color: #000;
            font-weight: 900;
            font-size: .8rem;
            line-height: 1.1rem;
            margin-top: .5rem;
            margin-bottom: .63rem;
        }
        .touch-btn{
            display: block;
            width: 8.0rem;
            height: 1.68rem;
            line-height: 1.68rem;
            text-align: center;
            border-radius: .84rem;
            font-size: .8rem;
            font-weight: 600;
            background-color: rgba(21, 195, 155, 1);
            color: #fff;
        }
    }
}
</style>