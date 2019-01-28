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
    if (value.length <= 80) {
      return value
    } else {
      return value.substring(0, 80) + '...'
    }
  }
})
Vue.filter('dateShow', function (time) {
  if (time !== '' && time !== null && time !== undefined) {
    time = time.substring(0, 10)
    time = time.replace(/-/, '-').replace(/-/, '-')
    return time
  }
})

export default {}
