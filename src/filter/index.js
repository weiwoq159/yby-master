/**
 * Created with vue.js
 * User: 马强/529524114@qq.com
 * Date: 2019/1/24
 * Time: 5:05 PM
 * name:$END$
 */
import Vue from 'vue'

Vue.filter('introFormate', function (value) {
  if (value) {
    if (value.length <= 60) {
      return value
    } else {
      return value.substring(0, 60) + '...'
    }
  }
})
Vue.filter('fromFormate', function (value) {
  if (value) {
    if (value.length <= 7) {
      return value
    } else {
      return value.substring(0, 6) + '...'
    }
  }
  return value
})
Vue.filter('dateShow', function (time) {
  if (time !== '' && time !== null && time !== undefined) {
    time = time.substring(0, 10)
    time = time.replace(/-/, '-').replace(/-/, '-')
    return time
  }
})
Vue.filter('telToName', function (value) {
  if ((/^1(3|4|5|7|8)\d{9}$/.test(value))) {
    return value.substr(0, 3) + '*****' + value.substr(8, 11)
  } else {
    return value
  }
})
Vue.filter('dateFilter', function (time) {
  var date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return year + '-' + month + '-' + day + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
})
Vue.filter('formateLike', function (value) {
  if (value === null) {
    return 0
  } else {
    return value
  }
})
Vue.filter('changeStatus', function (time) {
  if (time === 1) {
    return '已发布'
  } else if (time === 2) {
    return '审核中'
  } else if (time === 4) {
    return '审核未通过'
  }
})
Vue.filter('changeTitle', function (value) {
  if (value) {
    if (value.length <= 10) {
      return value
    } else {
      return value.substring(0, 10) + '...'
    }
  }
})
export default {}
