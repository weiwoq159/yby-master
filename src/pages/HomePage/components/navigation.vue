/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/22
* Time: 上午9:00
* name:
*/
<template>
  <div class='navigation'>
    <ul>
      <li v-for='(item, index) in list'
          :key='index'>
        <router-link :to='item.link'>{{item.name}}</router-link>
      </li>
      <div class="clear" v-if='false'></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      list: [{
        name: '人力资源',
        link: '/tabGroup/HR'
      }, {
        name: '社会保障',
        link: '/tabGroup/social'
      }, {
        name: '财务税收',
        link: '/tabGroup/taxation'
      }, {
        name: '公积金',
        link: '/tabGroup/funed'
      }, {
        name: '燚精选',
        link: '/tabGroup/Selection'
      }]
    }
  }
}
</script>

<style scoped lang='scss'>
ul {
  padding: 0 .5rem;
  margin-top: .2rem;
  display: flex;
  justify-content: space-between;
}
li{
  padding: 0 .05rem;
  border-right: 1px solid $line-color;
}
li:first-child {
  padding-left: 0;
}
li:last-child {
  padding-right: 0;
  border-right-style: none;
}
a{
  font-size: .12rem;
  color: $navigation-color;
  display: block;
}
</style>
