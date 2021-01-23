import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import register from '';

Vue.use(Router)

const router =  new Router({
  routes: [
    {path: '/home', component: Home },
    // 小米云服务
    {path: '/imi',component: () => import('./views/Imi.vue')},
    // 注册
    {path: '/register',component: () => import('../src/views/user/register')},
    // 小米金融
    {path: '/jr',component: () => import('./views/Jr.vue')},
    // 开发者平台
    {path: '/lot',component: () => import('./views/Lot.vue')},
    // miui
    {path: '/miui',component: () => import('./views/Miui.vue')},

    {name: 'uuser', meta: { title: '用户页面' }, path: '/user',component: () => import('./components/user.vue')},

    {path: '/all',component: () => import('./components/All.vue')},

    {path: '/logins',component: () => import('./components/Longins')},

    {path: '/vuexs',component: () => import('./components/vuexs')},

    {path: '/*', redirect:'/logins'},
  ]
})

export default router
