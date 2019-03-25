/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/3/20
* Time: 5:55 PM
* name:
*/
<template>
  <div class='reply'>
    <div class="reply_top">
      <div class="user">
        <img src="https://zk.1boyun.com/static/img/photo.png" alt="">
        <span class="answer_name">{{replyList.AnswerPerson}}</span>
        <span class="position">{{replyList.position}}</span>
      </div>
      <div class="time">
        <span>{{replyList.time}}</span>
      </div>
    </div>
    <div class="content">
      <span class="answer">答:</span>
      <span class="detail_content">{{replyList.content}}</span>
    </div>
    <div class="click_button">
      <span
        @click='like(index)'
        :class="['goodup', replyList.isLiked === 1 ? 'starActive' : 'star']"
      >
        <i :class="['iconfont',replyList.isLiked === 1 ? 'icon-heart1' : 'icon-heart']"></i>
        {{replyList.liked | formateLike}}
      </span>
      <span class='reply' @click='replyOK(item)'>
        <i class="iconfont icon-liuyan"></i>{{replyList.reply.length | formateLike}}
      </span>
    </div>
    <div class="reply_Mes" v-if='replyList.reply && replyList.reply.length !== 0'>
      <div v-for='(item, index) in replyList.reply' :key='index' v-if='index < 3'>
        <div class="rep">
          <span class="reply_Name">{{item.ReplyPerson}}</span>
          <span>{{item.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reply',
  props: ['replyList']
}
</script>

<style scoped lang='scss'>
  .reply {
    padding: .15rem;
    border-top: 1px solid #eee;
  }

  .reply_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: .1rem;
    .user {
      display: flex;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
      }
      .answer_name {
        margin: 0 .12rem 0 .10rem;
        font-size: .13rem;
        color: #333;
      }
      .position {
        font-size: .13rem;
        color: #666;
      }
    }
  }

  .time span {
    font-size: .1rem;
    color: #aaa;
  }

  .content {
    margin-top: .1rem;
    display: flex;
    .detail_content {
      font-size: .12rem;
      line-height: .17rem;
      color: #666;
    }
    .answer {
      display: inline-block;
      flex: 0 0 .25rem;
      font-size: .12rem;
      color: #666;
      margin-right: .10rem;
      box-sizing: border-box;
      text-align: center
    }
  }

  .reply_Mes {
    background: #eee;
    padding: .1rem .15rem;
    font-size: .12rem;
    color: #333;
    margin: .1rem;
  }

  .rep {
    color: #666;
  }

  .reply_Name {
    font-size: .12rem;
    color: #333
  }
  .click_button{
    font-size: .1rem;
    color: $navigation-color;
    margin-top: 14px;
    display: flex;
    flex-direction: row-reverse;
    .goodup{
      order: 2;
    }
    .reply{
      order: 1;
      padding:0;
    }
    span{
      border: 1px solid $navigation-color;
      border-radius: 80px;
      box-sizing: border-box;
      display: block;
      margin-left: 10px;
      width: 50px;
      height: 20px;
      text-align: center;
    }
    i{
      font-size: .1rem;
      margin-right: 4px;
    }
  }
</style>
