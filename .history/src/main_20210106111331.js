import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui';
import ElementUI
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
