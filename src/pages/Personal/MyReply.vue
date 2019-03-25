/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2018/12/25
* Time: 下午3:26
* name:我的回复
*/
<template>
  <div class='myReply'
       type="primary"
  >
    <div
      class="my_Reply"
      v-for='(item, index) in contentList'
      :key='index'
    >
      <p class='content'> <span v-if='item.toUname'>回复：{{item.toUname}}&nbsp;</span>{{item.content}}</p>
      <p class='date'>{{item.createTime | dateShow}}</p>
      <div class='intro' @click='goToNews(item)'>
        <img src="static/img/afPic1.png" alt="">
        <p>{{item.bookTitle}}</p>
      </div>
    </div>
    <div class='noReply' v-if='contentList.length===0'>
      <p>该用户暂无评论</p>
    </div>
  </div>
</template>

<script>
import api from '../../api/api'
export default {
  name: 'myReply',
  data () {
    return {
      contentList: [],
      fullscreenLoading: false
    }
  },
  methods: {
    goToNews (item) {
      let str = 'News' + 4
      console.log(str)
      this.$router.push({name: str, params: {bookId: item.bookId}})
    },
    searchIReplys (res) {
      const loading = this.mint.Indicator
      this.contentList = [...res.data.comment, ...res.data.reply].sort(api.replyPositive1)
      if (this.contentList.length === 0) {
        console.log(this.Indicator)
        loading.open({
          text: '该用户暂无评论...',
          spinnerType: 'fading-circle'
        })
        setTimeout(() => {
          loading.close()
          this.$router.back(-1)
        }, 1400)
      }
    }
  },
  mounted () {
    // this.$.post('/book/web/api/iReplys/searchIReplys', {pageNum: 1, pageSize: 20}).then(this.searchIReplys)
    this.$.searchIReplys({pageNum: 1, pageSize: 20}).then(this.searchIReplys)
  }
}
</script>

<style>
  .noReply p {
    text-align: center;
    position: absolute;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .myReply{
    padding:15px;
    background: #f8f8f8;
    height:100%;
    position: relative;
  }
  .my_Reply{
    background: #fff;
    margin-bottom: 10px;
    padding:13px;
  }
  .content{
    font-size: 12px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  .date{
    font-size: 10px;
    margin-bottom: 11px;
    color:#999;
  }
  .el-icon-success,.el-icon-loading,.el-icon-error{
    font-size: 40px;
    margin-bottom:15px;
  }
  .el-loading-spinner{
    margin-top:-40px;
  }
  .intro{
    background: #fafafa;
    display: flex;
    align-items: center;
  }
  .intro img{
    width: 33px;
    height: 33px;
  }
  .intro p{
    margin-left:13px;
    font-size: 12px;
    color: #333;
    font-weight: bold;
  }
</style>
