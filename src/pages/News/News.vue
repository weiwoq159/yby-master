/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/28
* Time: 5:11 PM
* name:
*/
<template>
  <div class='News'>
    <Header></Header>
    <Navigation></Navigation>
    <NewsDetail :news='news'></NewsDetail>
    <div class="newReply">
      <ul class='listSort'>
        <li v-for='item in sort'
            :key='item.id'
            :class="highLight===item.id ? 'active' : ''"
            @click="changeActive(item)"
        >{{item.name}}</li>
      </ul>
      <NewsReply
      ></NewsReply>
    </div>
  </div>
</template>

<script>
import NewsDetail from './components/newsDetail'
import NewsReply from './components/newsReply'
import Header from '../common/Header'
import Navigation from '../tabGroup/components/Navigation'
import SearchInput from '../common/SearchInput'
import api from '../../api/api'
export default {
  name: 'News',
  data () {
    return {
      news: '',
      reply: '',
      sort: [
        {
          name: '时间倒序',
          id: 0
        }, {
          name: '时间正序',
          id: 1
        }, {
          name: '被赞最多',
          id: 2
        }, {
          name: '评论最多',
          id: 3
        } ],
      highLight: 0
    }
  },
  components: {
    NewsDetail,
    NewsReply,
    Header,
    Navigation,
    SearchInput
  },
  methods: {
    fundHomeDate (res) {
      console.log(res)
      this.news = res.data[0]
    },
    changeReply (res) {
      if (res.data === null) {
        this.$store.commit('SET_REPLYMES', [])
      } else {
        this.$store.commit('SET_REPLYMES', res.data.comment.sort(api.replyFlashback))
      }
    },
    changeActive (item) {
      this.highLight = item.id
      this.$store.commit('SORT_REPLYMES', item.id)
    }
  },
  mounted () {
    let bookId = this.$route.params.bookId
    console.log('-----bookId-----')
    console.log(bookId)
    console.log('-----bookId-----')
    this.$.search(
      {
        pageNum: '1',
        pageSize: 20,
        id: bookId,
        status: null
      })
      .then(this.fundHomeDate)

    this.$.commentShow({bookId: bookId, pageNum: 1, pageSize: 200})
      .then(this.changeReply)
  }
}
</script>

<style scoped lang='scss'>
.newReply{
  padding:0 .13rem;
  background: #f8f8f8;
  margin-top: 15px;
  height:100%;
}
.listSort{
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
  li{
    color: #aaa;
    font-size: .11rem;
    font-weight: 500;
  }
}
.active{
  color:#333!important
}
</style>
