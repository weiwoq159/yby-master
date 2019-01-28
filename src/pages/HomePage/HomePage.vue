/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/21
* Time: 上午11:58
* name:
*/
<template>
  <div class='HomePage'>
    <HomePageHeader></HomePageHeader>
    <search-input></search-input>
    <navigation></navigation>
  </div>
</template>

<script>
import HomePageHeader from './components/HomePageHeader'
import SearchInput from './components/SearchInput'
import navigation from './components/navigation'
export default {
  name: 'HomePage',
  components: {
    SearchInput,
    navigation,
    HomePageHeader
  },
  mounted () {
    this.$nextTick(function () {
      console.log('首页加载完毕')
    })
  },
  destroyed () {
    console.log('首页销毁完毕')
  }
}
</script>

<style scoped lang='scss'>

</style>
