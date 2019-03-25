<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    // console.log(window.devicePixelRatio)
  },
  created () {
    if (localStorage.userInfo) {
      this.$store.replaceState(
        Object.assign({}, this.$store.state, JSON.parse(localStorage.userInfo))
      )
    }
    console.log('数据开始获取')
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('userInfo', JSON.stringify(this.$store.state))
      console.log('数据保存成功')
    })
  }
}
</script>

<style lang='scss'>
@import './assets/reset.scss';
#app{
  height: 100%;
  width: 100%;
}
body{
  background: #fff;
}
</style>
