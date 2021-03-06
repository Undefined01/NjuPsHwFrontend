import { createApp } from 'vue'
import router from './router'

import antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

import App from './App.vue'

createApp(App)
    .use(router)
    .use(antd)
    .mount('#app')
