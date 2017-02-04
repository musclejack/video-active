import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routers = [{
    path: '/',
    name: 'index',
    component(resolve) {
        require.ensure(['./views/index'], () => {
            resolve(require('./views/index/index.vue'));
        });
    }
},{
    path: '/award',
    name: 'award',
    component(resolve) {
        require.ensure(['./views/award'], () => {
            resolve(require('./views/award/index.vue'));
        });
    }
},{
    path: '/saveinfo',
    name: 'saveinfo',
    component(resolve) {
        require.ensure(['./views/saveinfo'], () => {
            resolve(require('./views/saveinfo/index.vue'));
        });
    }
}];

export default routers;