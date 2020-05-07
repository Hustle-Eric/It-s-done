import Vue from 'vue'
import App from './App.vue'

// 注册axios
import http from "./http/index"; 
Vue.Prototype.$http = http;

//注册router
import router from "./router"


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
