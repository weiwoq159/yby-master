/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/23
* Time: 下午3:22
* name:
*/
<template>
  <div class='NoResult'>
    <img class='rocket' src="~static/img/rocket.png" alt="">
    <p>未搜索到相关内容</p>
    <p>试试从其他分类下进行搜索</p>
  </div>
</template>

<script>
export default {
  name: 'NoResult'
}
</script>

<style scoped lang='scss'>
  .NoResult{
    margin-top: .36rem;
  }
  .rocket{
    width: .25rem;
    display: block;
    margin: 0 auto;
  }
  p{
    text-align: center;
    font-size: .15rem;
    color:$navigation-color;
    margin-top:.08rem;
  }
</style>
