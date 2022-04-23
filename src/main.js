import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMq from 'vue-mq'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    sm: 768,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
