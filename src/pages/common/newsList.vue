/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/22
* Time: 上午10:58
* name:
*/
<template>
  <div class='newsList'>
    <div class="title">
      <span class="essence">
        <i class='iconfont icon-anonymous-iconfont'></i>
        精华
      </span>
      <p class='newTitle'>2018全国人力资源市场</p>
    </div>
    <div class="content">
      <p>{{news.intro | introFormate}}</p>
    </div>
    <div class='bottom'>
      <span class='tags'>{{news.tags}}</span>
      <span class='from'>来源:{{news.source}}</span>
      <span class='time'>更新时间:{{news.ceateTime | dateShow}}</span>
    </div>
    <div class="click_button">
      <span><i class="iconfont icon-heart"></i>{{news.liked}}</span>
      <span><i class="iconfont icon-liuyan"></i>{{news.commentNum}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsList',
  props: ['news']
}
</script>

<style scoped lang='scss'>
  .newsList{
    background: #fff;
    padding: .15rem;
  }
  .title{
    display: flex;
    align-items: center;
    .essence{
      font-size: .11rem;
      background: $red;
      padding: 3px 5px;
      color: #fff;
      border-radius: 100px;
    }
    .newTitle{
      margin-left: .1rem;
      font-size: .14rem;
      color: $login-color;
      font-weight: 500;
    }
  }
  .content{
    margin-top: .1rem;
    p{
      font-size: .12rem;
      color: $navigation-color;
    }
  }
  .icon-anonymous-iconfont{
    margin-right: -2px;
    font-size: .12rem;
  }
  .bottom{
    margin-top: .14rem;
    font-size: .1rem;
    color: $input-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tags{
      border: 1px solid $input-color;
      padding:.03rem .1rem;
      border-radius: 20px;
    }
    .from{
      margin-left: .1rem;
    }
  }
  .click_button{
    font-size: .1rem;
    color: $navigation-color;
    margin-top: 14px;
    span{
      border: 1px solid $navigation-color;
      border-radius: 80px;
      padding:3px 9px;

    }
    i{
      font-size: .1rem;
      margin-right: 4px;
    }
  }
</style>
