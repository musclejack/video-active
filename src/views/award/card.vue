<template>
    <div class="list list-send">
        <div class="list-img">
            <img :src="card.imageUrl">
        </div> 
        <div class="list-content">
            <h4>{{card.title}}</h4>
                <span class="detail-info">使用说明</span>
                <!-- <a class="change">修改</a> -->
            <div class="content-desc">
            <p>{{card.description1}}</p>
                <p>{{card.description2}}</p>
            </div>
        </div>
    </div> 
</template>
<script>
    export default {
        props: {
            card: {
                type: Object,
                default: {}
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
        color: #a8a8a8;
        margin-left: 6.67rem;
        position: relative;
        line-height: 1rem;
        font-size: .6rem;
        .detail-info{
            font-size: .7rem;
            font-weight: 600;
        }
        h4{
            color: #000;
            font-weight: 900;
            font-size: .8rem;
            line-height: 1.1rem;
            margin: 0;
        }
        p{
            font-size: .6rem;
            margin: 0;
        }
    }
}
</style>