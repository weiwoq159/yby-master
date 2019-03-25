/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/3/20
* Time: 3:17 PM
* name:
*/
<template>
  <div class="tab_detail_ceil">
    <div class="title">
      {{choose.title}}
      <p class='time1'>{{choose.time}}</p>
    </div>
    <div class="user">
      <img class="AnswerPortrait" src="https://zk.1boyun.com/static/img/photo.png">
      <span class="answer_name">{{choose.AnswerPerson}}</span>
      <span class="position">{{choose.position}}</span>
    </div>
    <div class="content">
      <div class="answer">答:</div>
      <div class='detail_content'>
        {{choose.content}}
      </div>
    </div>
    <div class='time'>
      <span>{{choose.time}}</span>
    </div>
    <div class="more">
      <router-link :to='"/AnswerDetail?id="+choose.id'>点击阅读更多</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['choose'],
  mounted () {
    console.log(this.choose)
  }
}
</script>

<style scoped lang='scss'>
  .tab_detail_ceil{
    padding:.13rem .15rem 0 .15rem;
    background: #fff;
    margin-bottom:.1rem;
  }
  .title{
    border-bottom: 1px solid #f5f5f5;
    padding-bottom:.1rem;
    font-size: .15rem;
    color: #333;
  }
  .user{
    display: flex;
    align-items: center;
    margin-top:.15rem;
  }
  .AnswerPortrait{
    width: .25rem;
    height: .25rem;
  }
  .answer_name, .position{
    margin:0 .12rem 0 .1rem;
    font-size: .13rem;
    color:#333;
  }
  .position{
    color:#666;
  }
  .content{
    margin-top:.1rem;
    display: flex;
  }
  .detail_content{
    font-size: .12rem;
    line-height: .17rem;
    color: #666;
  }
  .answer {
    display: inline-block;
    flex:0 0 .25rem;
    font-size: .12rem;
    color: #666;
    margin-right:.1rem;
    box-sizing: border-box;
    text-align: center
  }
  .time{
    display: flex;
    flex-direction: row-reverse;
  }
  .time span{
    margin-top: .07rem;
    font-size: .10rem;
    line-height: .17rem;
    color:#aaa;
  }
  .time1{
    margin-top: .07rem;
    font-size: .10rem;
    line-height: .17rem;
    color:#aaa;
    text-align: left;
  }
  .more{
    text-align: center;
    padding:.13rem 0 .1rem 0;
    a{
      font-size: .1rem;
      color: #aaaaaa;
    }
  }

</style>
