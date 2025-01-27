import './assets/main.css'
import {router} from '@/router.js'
import axios from "axios";
import VueAxios from 'vue-axios'

import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App).use(router).use(VueAxios,axios)

app.mount('#app')
