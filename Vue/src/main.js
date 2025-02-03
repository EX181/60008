import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/index.css'
import {router} from '@/router.js'
import axios from "axios";
import VueAxios from 'vue-axios'



import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
