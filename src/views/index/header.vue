<template>
    <div class="sign-wrap">
        <div :class = "[title.login?'head':'nohead','lazy-wrap']" ><img :src="title.userIcon"/></div>
        <span class="header-name">{{title.userName?title.userName:'请登录'}}</span>
        <span class="header-bean">{{title.userName?title.num:''}}</span>
        <span :class = "[title.login?'login':'','touch-btn']" v-touchbtn = "{color: '#c99014'}" v-tap="{handle: tapHandle}">{{title.login?'签到领豆':'点击登录'}}</span>
    </div>
</template>

<script>
    import config from '../../config'
    export default {
        data () {
            return {
            }
        },
        computed: {
            title () {
                return this.$store.state.userInfo||{}
            }
        },
        methods : {
            tapHandle (target) {
                if (this.title.login) return setTimeout(() => {this.sign = true})
                this.$http.get(config.url+'/userInfoLogin')
                .then(response => {
                    let alldata = JSON.parse(response.body)
                    if (alldata.code !== 200) return alert('接口错误')
                    this.$store.dispatch('setUserInfo', alldata.value)
                })
                .catch(error => {
                    console.log(error);
                })
            },
            onholdHandle () {
                console.log(22)
            }
        }
    }
</script>
<style lang ="scss" scoped>
.sign-wrap {
    background-color: rgba(255, 242, 221, 1);
    font-size: .7rem;
    height: 2rem;
    line-height: 2rem;
    color: rgba(141, 73, 51, 1);
    .lazy-wrap {
        display: inline-block;
        height: 1.33rem;
        width: 1.33rem;
        margin: .25rem .5rem .25rem 1rem;
        background-color: rgba(95, 231, 196, 1);
        border: 2px solid rgba(113, 27, 0, 1);
        border-radius: 50%;
        vertical-align: top;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .header-name{
        display: inline-block;
        line-height: 1.2rem
    }
    .header-bean{
        display: inline-block;
        padding-left: 1rem;
        line-height: 1.2rem
    }
    .touch-btn {
        background-color: rgba(255, 175, 45, 1);
        border: 2px solid rgba(113, 27, 0, 1);
        float: right;
        top: 0.65rem;
        width: 4rem;
        text-align: center;
        font-size: .6rem;
        /*height: 1.2rem;*/
        line-height: calc(1.2rem - 4px);
        margin: .4rem .5rem auto 1rem;
        border-radius: 0.8rem;
        outline: none;
        transition: background-color .5s;
        color: rgba(255, 82, 36, 1);
        /*vertical-align: middle;*/
/*        span{
            line-height: 1.2rem
        }*/
        /*line-height: 1.2rem;*/
    }
    .login{
        /*background-color: #F15757;*/

    }
}
</style>