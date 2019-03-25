/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/28
* Time: 5:12 PM
* name:
*/
<template>
  <div class='newsReply'>
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
    <div
      class="newsreply"
      v-for='(item, index) in replyMessage'
      :key='index'
    >
      <div class="img">
        <img class='photo' src="static/img/photo.png" alt="">
      </div>
      <div class="right">
        <div class="reply_content">
          <p class="title">{{item.fromUname | telToName}}</p>
          <p class="title" v-if='!item.fromUname'></p>
          <p class="date">{{item.createTimes | dateFilter}}</p>
        </div>
        <p class="reply">{{item.content}}</p>
        <ul class='reply_Mes' v-if='item.relpy && item.relpy.length !== 0'>
          <li
            v-for='(list, index) in item.relpy'
            :key='index'
            v-if='index < 3'
          >
            <p>
              <span class='reply_Name'>{{list.replyUname}}:</span>
              {{list.content}}
            </p>
          </li>
          <p
            class='readMore'
            @click='goToDetail(item)'
            v-if='item.relpy && item.relpy.length > 3'
          >点击查看更多</p>
        </ul>
        <div class="click_button">
            <span
              @click='like(index)'
              :class="['goodup', item.status === 1 ? 'starActive' : 'star']"
            >
              <i
                :class="['iconfont',item.status === 1 ? 'icon-heart1' : 'icon-heart']"
              ></i>{{item.goodUp | formateLike}}</span>
            <span
              class='reply'
              @click='replyOK(item)'
            ><i class="iconfont icon-liuyan"></i>{{item.replyNum | formateLike}}
            </span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import replyInput from '../../common/replyInput'
export default {
  name: 'newsReply',
  components: {
    replyInput
  },
  data () {
    return {
      replyContent: '',
      disOrShow: false,
      replyMes: '123123123', // 当前留言信息
      replyKind: 1,
      replyMessage: ''
    }
  },
  computed: {
    replyList () {
      return this.$store.state.replyMes
    }
  },
  watch: {
    replyList (newVal, oldVal) {
      this.replyMessage = newVal
    }
  },
  methods: {
    // 实时添加回复
    addReplyMes (data) {
      console.log('-----data-----')
      console.log(this.replyMes)
      console.log('-----data-----')
      // this.replyMes.relpy.push(data)
      // this.replyMes.replyNum++
      console.log('=a-sd=f-asd=f-a=dsf-=asd-f=a')
      this.disOrShow = false
      this.replyContent = ''
    },
    like (index) {
      this.$store.dispatch('goodUp', index)
    },
    // 展开评论输入框
    replyOK (item) {
      this.disOrShow = true
      this.replyMes = item
      console.log(item)
    },
    // 关闭评论输入框
    disMoudle () {
      this.disOrShow = false
    },
    goToDetail (content) {
      this.$router.push({
        name: 'ReplyDetail',
        params: {
          content: content
        }
      })
    }
  },
  mounted () {
    console.log(this.item)
  }
}
</script>

<style scoped lang='scss'>
.readMore{
  display: block;
  text-align: right;
}
.reply_Name{
  font-weight: 900;
}
.reply_Mes{
  background: $line-color;
  padding: .1rem .15rem;
  font-size: .12rem;
  color: $login-color;
}
.reply-input{
  position: fixed;
  top:0px;
  z-index: 1000;
  background: rgba(0,0,0,.3);
  width: 100%;
  left:0;
  height:100%;
}
.newsreply{
  padding: 15px;
  display: flex;
  background: #fff;
  margin-bottom: .1rem;
  .img {
    width: 40pt;
    height: 40pt;
    border-radius: .4rem;
    img{
      width: 100%;
    }
  }
  .right{
    width: 100%;
    margin-left: .15rem;
    .reply_content{
      width: 100%;
      display: flex;
      justify-content: space-between;
      .title{
        font-size: .14rem;
        color: $login-color;
        font-weight: 500;
      }
      .date{
        font-size: .10rem;
        color: $input-color;
      }
    }
    .reply{
      font-size: .12rem;
      color: $navigation-color;
      line-height: 1.5;
      margin-bottom: .18rem;
    }
  }
}
.click_button{
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
/*<!--.click_button{-->*/
  /*<!--font-size: .1rem;-->*/
  /*<!--color: $navigation-color;-->*/
  /*<!--margin-top: 14px;-->*/
  /*<!--display: flex;-->*/
  /*<!--flex-direction: row-reverse;-->*/
  /*<!--.goodup{-->*/
    /*<!--order: 2;-->*/
    /*<!--padding: 1px 9px;-->*/
    /*<!--padding-top: 3px;-->*/
  /*<!--}-->*/
  /*<!--.reply{-->*/
    /*<!--order: 1;-->*/
  /*<!--}-->*/
  /*<!--span{-->*/
    /*<!--border: 1px solid $navigation-color;-->*/
    /*<!--border-radius: 80px;-->*/
    /*<!--box-sizing: border-box;-->*/
    /*<!--display: block;-->*/
    /*<!--margin-left: 10px;-->*/
    /*<!--width: 50px;-->*/
    /*<!--height: 20px;-->*/
    /*<!--text-align: center;-->*/
  /*<!--}-->*/
  /*<!--i{-->*/
    /*<!--font-size: .1rem;-->*/
    /*<!--margin-right: 4px;-->*/
  /*<!--}-->*/
/*<!--}-->*/
.starActive{
  color:$red;
  border:1px solid $red!important;
}
</style>
