import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/register/Register.vue'
import UserInfo from '../views/userInfo/UserInfo.vue'
import Login from '../views/login/Login.vue'
import Edit from '../views/edit/Edit.vue'
import Home from '../views/home/Home.vue'
import Article from '../views/article/Article.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: Home
    },   
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/userInfo',
        name: 'UserInfo',
        component: UserInfo,
        meta: {
            istoken: true
        }
    },
    {
        path: '/edit',
        name: 'Edit',
        component: Edit,
        meta: {
            istoken: true
        }
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: Article
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if(!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true){
        router.push('/login')
        Vue.prototype.$toast.fail('请重新登陆')
        return 
    }
    next()
   
})

export default router
