/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/3/20
* Time: 5:55 PM
* name:
*/
<template>
  <div class='answerDetail'>
    <div class="detail_title">
      {{answerDetail.content}}
    </div>
    <div class="detail_bottom">
      <div class="detail_left">
        <img src="https://zk.1boyun.com/static/img/photo.png" alt="">
        <span>{{answerDetail.AskPerson}}</span>
      </div>
      <div class="detail_right">
        <span>{{answerDetail.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: ['answerDetail']
}
</script>

<style scoped lang='scss'>
  .answerDetail{
    padding: .12rem .16rem .15rem .16rem;
    background: #fff;
    font-size: .15rem;
    color: #333;
    .detail_bottom{
      margin-top: .19rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .detail_left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          width: .25rem;
          height: .25rem;
          margin-right: 9px;
        }
        span{
          font-size: .13rem;
          color: #333;
        }
      }
      .detail_right{
        span {
          font-size: 10px;
          color: #aaa;
        }
      }
    }
  }
</style>
