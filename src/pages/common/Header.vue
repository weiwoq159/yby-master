/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/22
* Time: 下午4:09
* name:
*/
<template>
  <div class='Header'>
    <div class='homePage'>
      <i class='iconfont icon-home'></i>
      <router-link to='/'>首页</router-link>
    </div>
    <img src="~static/img/logo.png" alt="">
    <div class="headerRight">
      <i class='iconfont icon-person'></i>
      <router-link to='/personal'>个人中心</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang='scss'>
  .Header{
    height:.34rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 .13rem
  }
  img {
    width : .74rem;
    height:.18rem;
  }
  a{
    font-size: .12rem;
    color: $login-color;
    vertical-align: middle;
  }
  i{
    margin-right: -5px;
    vertical-align: middle;
    color: $red;
  }
</style>
