/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/21
* Time: 上午11:58
* name:
*/
<template>
  <div class='HomePage'>
    <div class="login">
      <i class='iconfont icon-person'></i>
      <router-link to='/login' class='login_text'>个人中心</router-link>
    </div>
    <div class="logo">
      <img class='home_logo' src="static/img/logo.png" alt="">
    </div>
    <search-input></search-input>
  </div>
</template>

<script>
import SearchInput from './components/SearchInput'
export default {
  name: 'HomePage',
  components: {
    SearchInput
  }
}
</script>

<style scoped lang='scss'>
  .logo{
    text-align: center;
  }
  .HomePage{
    height: 100%;
  }
  .logo{
    margin-top:2rem;
    .home_logo{
      width: 1.11rem;
    }
  }
  .login{
    text-align: right;
    padding: 0 .13rem;
    .login_text{
      font-size: .12rem;
      vertical-align: middle;
      color: $login-color;
    }
    .iconfont{
      font-size: .18rem;
      vertical-align: middle;
      margin-right: -5px;
      color: $red;
    }
  }

</style>
