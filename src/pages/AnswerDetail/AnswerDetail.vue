/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/3/20
* Time: 5:55 PM
* name:
*/
<template>
  <div class='AnswerDetail'>
    <detail :answerDetail='answerDetail'></detail>
    <div class="answer_reply">
      <p class="allanswer">
        全部回答
      </p>
      <reply
        v-for='(item, index) in replyList'
        :key='index'
        :replyList='item'
      >
      </reply>
    </div>
  </div>
</template>

<script>
import detail from './components/detail'
import reply from './components/reply'
export default {
  name: 'AnswerDetail',
  data () {
    return {
      answerDetail: '',
      replyList: ''
    }
  },
  components: {
    detail,
    reply
  },
  mounted () {
    let bookId = this.$route.query.id
    console.log(bookId)
    this.$.post('book/web/api/mlbtest/answerDetail', {}).then(res => {
      this.answerDetail = res.data.data
    })
    this.$.post('book/web/api/mlbtest/answerReply', {}).then(res => {
      this.replyList = res.data.data
    })
  }
}
</script>

<style scoped>
.AnswerDetail{
  padding:.15rem .14rem 0 .14rem;
  background: #f8f8f8;
  height: 100%;
  overflow-y: scroll;
}
.allanswer{
  text-align: center;
  color: #333;
  font-size: .13rem;
  padding: .1rem;
}
</style>
