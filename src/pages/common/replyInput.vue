/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/2/11
* Time: 10:18 AM
* name:
*/
<template>
  <div class='replyInput'>
    <div class="inputt">
      <input
        type="text"
        v-model='replyContent'
        @click.stop
        ref='content'
        placeholder='请输入搜索内容'
        @keyup.enter='displayReply($event)'
      >
      <i
        class='iconfont icon-tijiao'
        @click.stop='displayReply($event)'
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'replyInput',
  data () {
    return {
      reply: [],
      replyContent: ''
    }
  },
  props: ['replyMes', 'replyKind'],
  methods: {
    replyNewsOK (res) {
      console.log(res)
      let lis = {
        // id: res.data.data.commentId,
        // content: this.replyContent,
        // createTimes: (new Date()).getTime(),
        // fromUname: this.$store.state.userInfo.name,
        // fromUheadportrait: null,
        // fromUid: this.$store.state.userInfo.id,
        // goodUp: 0,
        // replyNum: 0,
        // status: 0,
        // relpy: []
      }
      // this.$store.commit('CHANGE_REPLYMES', lis)
      this.$emit('listenAddReplyMes', lis)
      this.replyContent = ''
    },
    replyOK (res) {
      let replyMes = {
        // commentId: this.replyMes.id,
        // content: this.replyContent,
        // createTime: '2019-01-17T14:04:22.000+0000',
        // createTimes: (new Date()).getDate(),
        // fromUid: this.$store.state.userInfo.id,
        // replyToUname: null,
        // replyType: 1,
        // replyUname: this.$store.state.userInfo.name,
        // toUid: null
      }
      this.$emit('listenAddReplyMes', replyMes)

      this.replyContent = ''
    },
    displayReply (e) {
      if (this.replyContent === '') {
        this.showOrDis = false
        return false
      } else {
        if (this.replyKind === 1) {
          if (localStorage.getItem('token')) {
            this.$.replyAdd(
              {
                commentId: this.replyMes.id,
                replyType: 1,
                content: this.replyContent
              }).then(this.replyOK)
          } else {
            let instance = this.mint.Toast(
              {
                message: '请登录后评论',
                className: 'toast',
                iconClass: 'iconfont icon-qingkong'
              })
            setTimeout(() => {
              instance.close()
              // location.href = 'http://tax.1boyun.com/login?goLogin=1'
              location.href = 'http://tax-test.1boyun.com:9998/#/login?goLogin=1'
            }, 2000)
          }
        } else if (this.replyKind === 2) {
          console.log('123123123123')
          if (localStorage.getItem('token')) {
            this.$.commentAdd(
              {
                bookId: this.replyMes.id,
                bookTitle: this.replyMes.title,
                bookType: this.replyMes.type,
                content: this.replyContent
              }).then(this.replyNewsOK)
          } else {
            let instance = this.mint.Toast(
              {
                message: '请登录后评论',
                className: 'toast',
                iconClass: 'iconfont icon-qingkong'
              })
            setTimeout(() => {
              instance.close()
              location.href = 'http://tax-test.1boyun.com:9998/#/login?goLogin=1'
            }, 2000)
          }
        }
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang='scss'>
  .inputt{
    background: #f6f6f6;
    width: 100%;
    height:.6rem;
    padding:10px 15px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .inputt input {
    width: 100%;
    height: 90%;
    padding: 0 12px;
    font-size: 16px;
    background:#eee;
    border-radius:100px;
    padding-right: 13vw;
    border:1px solid #f6f6f6
  }
  .icon-heart1{
    font-size: 10px;
  }
  .icon-tijiao{
    font-size: 32px;
    color: #c40000;
    margin-left: 10px;
    position:absolute;
    right:17px;
  }
  .newsReply{
    position: relative;
    height: 100%;
  }

</style>
