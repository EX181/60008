import {createRouter, createWebHistory} from 'vue-router'


import books from './pages/books.vue'
import about from "./pages/about.vue";
import contact from "./pages/contact.vue";
import login from "./pages/Login.vue";
import register from "./pages/register.vue";
import Homepage from "./pages/Homepage.vue";
import App from "./App.vue";
import User from "@/pages/User.vue";
import {auth} from "@/utils/auth.js";
import {ElMessage, Message} from "element-plus";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/books', name: 'books', component: books },
        { path: '/about', name: 'about', component: about },
        { path: '/contact', name: 'contact', component: contact },
        { path: '/login', name: 'login', component: login },
        { path: '/register', name: 'register', component: register },
        { path: '/User', name: 'User', component: User },
    ],
})
router.beforeEach((to, from, next) => {

    if ((to.path === '/login' || to.path === '/register') && auth.isLoggedIn) {
        next({ path: '/User' })
        ElMessage({
            message: '您已登录！',
            type: "warning",
        });
    }
    else if ((to.path === '/User') && !auth.isLoggedIn) {
        next({ path: '/login' })
        ElMessage({
            message: '您未登录！',
            type: "warning",
        });
    }
    else next()
})