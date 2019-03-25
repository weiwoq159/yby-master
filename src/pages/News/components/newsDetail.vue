/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/28
* Time: 5:12 PM
* name:
*/
<template>
  <div class='newsDetail'>
    <div
      class="reply-input"
      @touchmove.prevent
      @click='disMoudle'
      v-show='disOrShow'
    >
      <replyInput
        :replyMes='replyMes'
        :replyKind='replyKind'
        @listenAddReplyMes='addReplyMes'
      ></replyInput>
    </div>
    <p class="title" v-html='news.title'></p>
    <p class=secondFloor>
      <span class='come_from'>来源:{{news.source}}</span>
      <span class='clickNum'>点击量:{{news.clicks}}</span>
      <span class="creatTime">时间:{{news.time}}</span>
    </p>
    <p class="content" v-html='news.content'></p>
    <div class="click_button">
      <div class="butt">
        <span
          @click='like(news)'
          :class="news.isLiked === 1 ? 'starActive' : 'star'"
        >
          <i
            :class="['iconfont',news.isLiked === 1 ? 'icon-heart1' : 'icon-heart']"
          ></i>{{news.liked}}
        </span>
        <span
          @click='replyOK(news)'
        >
          <i class="iconfont icon-liuyan"></i>
          {{$store.state.replyMes.length}}
        </span>
      </div>
      <div class='clear'></div>
    </div>
  </div>
</template>

<script>
import replyInput from '../../common/replyInput'
export default {
  name: 'newsDetail',
  components: {
    replyInput
  },
  props: ['news'],
  data () {
    return {
      disOrShow: false,
      replyMes: '123123123', // 当前留言信息
      replyKind: 2
    }
  },
  computed: {
    replyList () {
      return this.$store.state.replyMes
    }
  },
  watch: {
    replyList (newVal, oldVal) {
      this.disOrShow = false
    },
    news (newVal, oldVal) {
      console.log('------点击统计--------')
      console.log(newVal)
      this.$.click({id: newVal.id})
        .then(res => {
          console.log('-----res-----')
          console.log(res)
          console.log('-----res-----')
        })
    }
  },
  methods: {
    like (news) {
      this.$.add({typeId: this.news.id, type: 1}).then(res => {
        if (this.news.isLiked === 0) {
          this.news.isLiked = 1
          this.news.liked++
        } else {
          this.news.isLiked = 0
          this.news.liked--
        }
      })
    },
    replyOK (item) {
      this.disOrShow = true
      this.replyMes = item
      console.log(item)
    },
    addReplyMes () {
      this.disOrShow = false
      this.replyContent = ''
    },
    // 关闭评论输入框
    disMoudle () {
      this.disOrShow = false
    }
  }
}
</script>

<style lang='scss'>
  .reply-input{
    position: fixed;
    top:0px;
    z-index: 1000;
    background: rgba(0,0,0,.3);
    width: 100%;
    left:0;
    height:100%;
  }
  .content {
    width: 100%;
    p,span {
      font-size: 3.5vw!important;
      line-height: 1.5!important;
      color: $navigation-color;
    }
    img{
      width: 100%;
    }
    div{
      width: 100%!important;
      overflow-x: hidden;
    }
  }
  .newsDetail{
    padding:0 .3rem;
    background: #fff;
    position: relative;
    .title{
      font-size: .14rem;
      color: $login-color;
      text-align: center;
      margin-top: .2rem;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .secondFloor{
      font-size: .1rem;
      color: $input-color;
      text-align: center;
      margin-bottom: .18rem;
      .come_from{
        margin-right: .15rem;
      }
      .clickNum{
        margin-right: .15rem;
      }
    }
  }
  .click_button{
    font-size: .1rem;
    color: $navigation-color;
    margin-top: 14px;
    .butt{
      float: right;
      span{
        border: 1px solid $navigation-color;
        border-radius: 80px;
        padding:1px 9px;
        padding-top: 3px;
      }
      span:first-child{
        margin-right: 10px;
      }
      i{
        font-size: .1rem;
        margin-right: 4px;
      }
    }
  }
  .starActive{
    color:$red;
    border:1px solid $red!important;
  }
</style>
