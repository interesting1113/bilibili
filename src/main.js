import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './utils/http'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Toast } from 'vant';
import './assets/fonts/iconfont.css'

Vue.use(Vant);

Vue.prototype.$http = http
Vue.prototype.$toast = Toast
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
