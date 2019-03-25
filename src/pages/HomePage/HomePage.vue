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
    console.log(this.$route)
    this.$store.commit('SET_SEARCHCATEGORIES', 1)
    this.$nextTick(function () {
      console.log('首页加载完毕')
    })
    if (this.$route.query.token) {
      localStorage.setItem('token', this.$route.query.token)
    } else {
      console.log('123123')
      console.log(this.$route.query.token)
    }
  },
  destroyed () {
    console.log('首页销毁完毕')
  }
}
</script>

<style scoped lang='scss'>
.HomePage{
  height:100%;
}
</style>
