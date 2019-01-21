/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/21
* Time: 下午2:29
* name:
*/
<template>
  <div class='SearchInput'>
    <input type="text" placeholder='请输入' class='search_input'>
    <i class="iconfont icon-search"></i>
  </div>
</template>

<script>
export default {
  name: 'SearchInput'
}
</script>

<style scoped lang='scss'>
  .SearchInput{
    position: relative;
    padding: 0 .3rem;
    .search_input{
      width: 100%;
      height: .3rem;
      border:1px solid $input-color;
      border-radius: 30px;
      padding-left: .3rem;
      box-sizing: border-box;
    }
    .iconfont{
      position: absolute;
      right: 10px + 30px;
      top:0px;
      bottom: 0px;
    }
  }
</style>
