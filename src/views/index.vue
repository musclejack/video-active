<template>
    <div id="app"><!-- height:13.7rem;margin-top: 9rem; -->
        <m-header></m-header>
        <transition name= "slide-left" mode="out-in">
            <router-view></router-view>
        </transition>
        <init-load  v-if="ispop === 'initload'" bgcolor='#15c39b'></init-load>
    </div>
</template>

<script>
import mHeader from '../components/header'
import config from '../config'
import initLoad from '../components/init-load'
export default {
    components: {
        mHeader,
        initLoad
    },
    watch: {
        '$route': function (newdata, olddata) {

        }
    },
    computed: {
        ispop () {//
            return this.$store.state.ispop
        }
    },
    beforeCreate () {
        document.documentElement.style.fontSize = window.screen.width/360*20+'px'
        this.$store.dispatch('setPop', 'initload')
        this.$http.get(config.url+'/userInfo')
        .then(response => {
            let alldata = JSON.parse(response.body)
            if (alldata.code !== 200) return alert('接口错误')
            this.$store.dispatch('setUserInfo', alldata.value)
            return Promise.resolve(true)
        })
    }
}
</script>

<style lang ='scss'>
html, body, h1, h2, h3, h4, h5, h6, p, ul, li, dl, section, dt, dd {
    margin: 0;
    padding: 0;
    font-weight: normal;
}

html,body{
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    height: 100%;
}

body{
    height: calc(100% - 2.43rem);
    padding-top: 2.43rem;
}
#app {
    font-family: '黑体';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
* {
    outline: 0;
}
a:link{
text-decoration:none;
}
a:visited{
text-decoration:none;
}
a:hover{
text-decoration:none;
}
a:active{
text-decoration:none;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
}
.bp {
    width: 100%;
    height: 12.5rem;
    .bpimg {
        width: 100%;
        display: block;
        margin: 0 auto;
    }
}
.transiton-color{
    transition: background-color .5s;
}
.slide-left-enter-active {
/*    transition: transform,opacity .5s,.5s ease,ease;
    opacity: 1;*/
}
.slide-left-leave-active {
/*    transition: transform .25s ease;
    opacity: 0.5;
    transform: translate(-100%, 0);*/
}
.slide-left-enter {
/*    transform: translate3d(100%, 0, 0);
    opacity: 0.5; 
    background-color: transparent;*/
}
.slide-left-leave {
    
    /*opacity: 1;*/
    /*padding-top: 100%;*/
}
</style>
