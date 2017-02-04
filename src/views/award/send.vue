<template>
    <div class="list list-send">
        <div class="list-img">
            <img :src="send.imageUrl">
        </div> 
        <div class="list-content">
            <h4>{{send.title}}</h4>
                <span class="detail-info">收件信息</span>
                <a class="change" @click="change(send)">修改</a>
            <div class="content-desc">
                <span class="name">{{send.name}}</span>
                <span class="tel">{{send.telephone}}</span>
                <p>{{send.address}}</p>
            </div>
        </div>
    </div>  
</template>
<script>
    export default {
        props: {
            send: {
                type: Object,
                default: {}
            }
        },
        methods: {
            change(item){
                this.$router.push({path:'/saveinfo',query: item})
            }
        }
    }
</script>
<style lang= "scss" scoped>
/*@improt '../../scss/award.scss'*/
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
        .name{
            font-weight: 100;
        }
        .change{
            font-size: .7rem;
            position: absolute;
            right: 1.18rem;
            top: 1.85rem;
            color: rgba(21, 195, 155, 1);
            font-weight: 600;
        }
        h4{
            color: #000;
            font-weight: 900;
            font-size: .8rem;
            line-height: 1.1rem;
            margin: 0;
        }
        .detail-info{
            font-size: .7rem;
            font-weight: 600;
        }
        .tel{
            margin-left: .6rem;
            font-weight: 100;
        }
        p{
            font-size: .6rem;
            margin: 0;
        }
    }
}
</style>