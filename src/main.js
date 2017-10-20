import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'api/rem'
import 'common/fonts/iconfont.css'
import 'common/fonts/iconfont.js'
import 'common/fonts/iconfont.woff'

Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
