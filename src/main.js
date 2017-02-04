// import css from './util/prefixfree.min.js'
import Vue from 'vue'
import App from './views/index'
import VueRouter from 'vue-router'
import VueRrsource from 'vue-resource'
import routes from './router.js'
import store from './vuex/store'
import util from './util/directive'
// import css from './scss/animation.css'
Vue.use(VueRrsource)

const router = new VueRouter({
    // mode: 'history',
    routes
})
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})