// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import store from '@/store'
import 'mint-ui/lib/style.css'
import '../src/assets/iconfont.css'
import filter from './filter'

Vue.use(MintUI)
Vue.prototype.$ = axios
Vue.prototype.mint = MintUI
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  filter,
  components: { App },
  template: '<App/>'
})
