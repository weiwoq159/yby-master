import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage/HomePage'
import SearchResult from '../pages/SearchResult/SearchResult'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/searchResult',
      name: 'SearchResult',
      component: SearchResult
    }
  ]
})
