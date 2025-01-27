import {createRouter, createWebHistory} from 'vue-router'


import home from "./pages/home.vue";
import books from './pages/books.vue'
import about from "./pages/about.vue";
import contact from "./pages/contact.vue";
import login from "./pages/Login.vue";
import register from "./pages/register.vue";
import Homepage from "./pages/Homepage.vue";
import App from "./App.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/books', name: 'books', component: books },
        { path: '/about', name: 'about', component: about },
        { path: '/contact', name: 'contact', component: contact },
        { path: '/login', name: 'login', component: login },
        { path: '/register', name: 'register', component: register },
    ],
})