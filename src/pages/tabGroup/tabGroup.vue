/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/28
* Time: 5:20 PM
* name:
*/
<template>
  <div class='tabGroup'>
    <Header></Header>
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../common/Header'
import Navigation from './components/Navigation'
export default {
  name: 'tabGroup',
  components: {
    Header,
    Navigation
  }
}
</script>

<style scoped>

</style>
