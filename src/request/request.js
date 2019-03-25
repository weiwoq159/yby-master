/**
 * Created with vue.js
 * User: 马强/529524114@qq.com
 * Date: 2019/3/22
 * Time: 2:24 PM
 * name:$END$
 */
import axios from 'axios'
// import stroe from '@/stroe'
import qs from 'qs'

// 根据环境配置请求
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'http://zhiku-test.1boyun.com:9998'
// } else if (process.env.NODE_ENV === 'debug') {
//   axios.defaults.baseURL = 'https://zk.1boyun.com'
// } else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = 'https://zk.1boyun.com'
// }

axios.defaults.timeout = 10000
axios.defaults.headers.post = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Origin': 'https://zk.1boyun.com',
  'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
  'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
  'x-authentication-token': localStorage.token === undefined ? '' : localStorage.token
}
function post (url, params) {
  console.log(qs.stringify(params))
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        console.log(res)
        resolve(res.data)
      })
      .catch(res => {
        console.log(res)
        reject(res)
      })
  })
}
function get (url, params) {
  console.log(qs.stringify(params))
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(res => {
        console.log(res)
        resolve(res.data)
      })
      .catch(res => {
        console.log(res)
        reject(res)
      })
  })
}
export default {
  post,
  get
}
