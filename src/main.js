import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import './assets/style/tailwind.css' //tailwind.cssのインポート
import VModal from 'vue-js-modal'

Vue.use(VModal);
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
