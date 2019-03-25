/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/28
* Time: 5:30 PM
* name:
*/
<template>
  <div class='Navigation'>
    <ul>
      <li
        v-for= '(item, index) in list'
        :key = 'index'>
        <router-link
          :to='item.link'
        >{{item.name}}
          <div class="line"></div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
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
.Navigation{
  ul{
    display: flex;
    justify-content: space-between;
    padding: 0 .22rem;
    background: $body-color;
    height:.35rem;
    li{
      list-style: none;
      position: relative;
      a{
        font-size: .13rem;
        color: $login-color;
        line-height: .35rem;
        font-weight: 500;
      }
      .line{
        width: .25rem;
        height: 3px;
        background: $red;
        border-radius: 4px;
        margin: 0 auto;
        margin-top: -3px;
        display: none;
      }
    }
  }
}
.router-link-active{
  color:$red !important;
  .line{
    display: block !important;
  }
}
</style>
