<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    console.log(window.devicePixelRatio)
  }
}
</script>

<style lang='scss'>
@import './assets/reset.scss';
#app{
  height: 100%;
  width: 100%;
}
</style>
