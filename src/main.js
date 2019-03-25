// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import MintUI from 'mint-ui'
import store from '@/store'
import 'mint-ui/lib/style.css'
import '../src/assets/iconfont.css'
import filter from './filter'
import request from './request/api'

Vue.use(MintUI)
Vue.prototype.$ = request
Vue.prototype.mint = MintUI
Vue.config.productionTip = false

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.hash.substr(3).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}
// 这样调用：token
let token = getQueryString('token')
console.log(token)
if (token === null) {
} else {
  localStorage.setItem('token', getQueryString('token'))
}

// if (store.state.userInfo.id === '') {
//   axios.post('/book/web/api/login/userMessage ', {pageNum: 1, pageSize: 20}).then(res => {
//     store.commit('SET_USERINFO', res.data.data)
//   })
// }
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  filter,
  components: { App },
  template: '<App/>'
})
