import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(store)
Vue.use(router)

new Vue({
  render: h => h(App),
}).$mount('#app')
