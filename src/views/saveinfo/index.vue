<template>
    <div id="saveinfo">
        <div class="save-img"><img :src="info.imageUrl"></div>
        <label :class="[focus.nonename||nonename?'':'nonewarn',currentfocus == 'nonename'?'focus':'']"><span>联系人</span><input class="focus" autofocus="autofocus" v-model="info.name" v-focus="{handle: change('nonename')}"/></label>
        <label :class="[focus.tel||tel?'':'telwarn',currentfocus == 'tel'?'focus':'']"><span>手机号码</span><input v-model="info.telephone" v-focus="{handle: change('tel')}"/></label>
        <label :class="[focus.noneaddr||noneaddr?'':'nonewarn',currentfocus == 'noneaddr'?'focus':'']"><span>收货地址</span><input v-model="info.address" v-focus="{handle: change('noneaddr')}"/></label>
        <span v-tap="{handle: click}" :class = "[tel&&noneaddr&&nonename?'': 'disable','btn']">{{tel&&noneaddr&&nonename?"确认领取":"请填写正确信息"}}</span>
        <load  v-if="ispop === 'load'"></load>
        <pop v-if="ispop === 'savesuc'||ispop === 'saveerr'">
            <not-award v-if="ispop === 'savesuc'" desc='信息保存成功啦' btn="确定"></not-award>
            <not-award v-if="ispop === 'saveerr'" desc='好惨..信息保存失败!再试一次或者联系客服' btn="确定"></not-award>
            
        </pop>
        
    </div>
</template>
<script>
    import config from '../../config'
    import notAward from '../../components/not-award'
    import load from '../../components/load'
    import pop from '../../components/pop'
    export default {
        components: {
            notAward,
            load,
            pop
        },
        data () {
            return {
                info: {
                    name: '',
                    telephone: '',
                    address: ''
                },
                focus: {
                    nonename: true,
                    tel: true,
                    noneaddr: true,
                },
                currentfocus: ''
            }
        },
        methods: {
            click () {
                console.log(11)
                if (!(this.tel&&this.nonename&&this.noneaddr)) return

                // setTimeout(() => this.$router.go(-1))
                if (this.$store.state.ispop) return
                    console.log(22)
                this.$store.dispatch('setPop', 'load')
                this.$http.get(config.url+'/saveinfo')
                .then(function (response) {
                    let alldata = JSON.parse(response.body)
                    if (alldata.code !== 200) return alert('接口错误')
                    setTimeout(() => {
                        alldata.value.status?this.$store.dispatch('setPop', 'savesuc'):this.$store.dispatch('setPop', 'saveerr')
                    }, 500)
                    // this.$store.dispatch('setPop', 'saveerr')
                })
                .catch(function (error) {
                    console.log(error);
                })
            },
            change (index) {

                return () => {
                    this.currentfocus = index
                    this.focus[index] = false
                }

            }
        },
        computed: {
            tel () {

                return /0?(13|14|15|18)[0-9]{9}/.test(this.info.telephone)
            },
            nonename () {

                return this.info.name
            },
            noneaddr () {

                return this.info.address
            },
            ispop () {//
                return this.$store.state.ispop
            }
        },
        created () {
            this.info.name = this.$route.query.name
            this.info.telephone = this.$route.query.telephone
            this.info.address = this.$route.query.address
            this.info.imageUrl = this.$route.query.imageUrl
        }
    }
</script>
<style lang= "scss" scoped>
    #saveinfo{
        height: 100%;
        width: 100%;
        background-color: rgb(240, 240, 240);
        overflow-y: auto;
    }
    .save-img{
        width: 4rem;
        height: 5rem;
        margin: 1.2rem auto;
        background-color: #eee;
        img{
            width: 100%;
            height: 100%;
        }
    }

    .telwarn{
        border-bottom-color: rgba(226, 40, 0, 1);
        &:after{
            display: block;
            content: "请填写正确的号码";
            position: absolute;
            bottom: -1.4rem;
            font-size: .6rem;
            left: .6rem;
            color:  rgba(226, 40, 0, 1);
        };
    }
    .nonewarn{
        border-bottom-color: rgba(226, 40, 0, 1);
        &:after{
            display: block;
            content: "此项不为空";
            position: absolute;
            bottom: -1.4rem;
            font-size: .6rem;
            left: .6rem;
            color:  rgba(226, 40, 0, 1);
        };
    }

    .focus{
        border-bottom-color: rgba(21, 195, 155, 1);
        &:after{
            display: none;
        }
    }
    label{
        display: block;
        display: flex;
        height: 2.3rem;
        margin: 0 1.1rem;
        border-bottom: 1px solid transparent;
        line-height: 2rem;
        font-size: .7rem;
        position: relative;
        transition: border-color 1s;
        span{
            width: 4rem;
            position: absolute;
            bottom: .55rem;
            left: .6rem;
            line-height: .7rem;
        }
        input{
            margin-left: 4.77rem;
            margin-top: 1.0rem;
            border: none;
            outline: none;
            font-size: .7rem;
            height: .7rem;
            background-color: rgb(240, 240, 240);
        }
    }
    .btn{
        font-size: .9rem;
        display: block;
        text-align: center;
        color: #fff;
        line-height: 1.9rem;
        width: 11.6rem;
        height: 1.9rem;
        margin: 0 auto;
        margin-top: 1.73rem;
        border-radius: .95rem;
        background-color: rgba(21, 195, 155, 1);
    }
    .disable{
        background-color: #687e8f;
    }
</style>