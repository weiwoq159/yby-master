/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/2/12
* Time: 9:36 AM
* name:
*/
<template>
  <div class='newsLis'>
    <Header></Header>
    <Navigation></Navigation>
    <SearchInput
      :Province = 'Province'
      :data='data'
      ref='search'
    ></SearchInput>
    <div
      class="newsList1"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <ul class='listSort'>
        <li v-for='item in sort'
            :key='item.id'
            :class="highLight===item.id ? 'active' : ''"
            @click="changeActive(item)"
        >{{item.name}}</li>
      </ul>
      <NewsList
        v-for='item in HRList'
        :key='item.id'
        :news='item'
      ></NewsList>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Navigation from '../tabGroup/components/Navigation'
import SearchInput from './SearchInput'
import NewsList from './newsList'
import api from '../../api/api'
export default {
  name: 'newsLis',
  components: {
    Header,
    Navigation,
    SearchInput,
    NewsList
  },
  data () {
    return {
      data: {
        category: '1'
      },
      Province: '',
      sort: [{
        name: '时间倒序',
        id: 0
      }, {
        name: '时间正序',
        id: 1
      }, {
        name: '被赞最多',
        id: 2
      }, {
        name: '回复最多',
        id: 3
      }],
      highLight: 0,
      HRList: '',
      page: {
        nowPage: 1,
        totalPage: 10
      }
    }
  },
  methods: {
    loadMore () {
      console.log(this.page.nowPage)
      let params = {
        pageNum: this.page.nowPage + 1,
        pageSize: 10,
        keyword: null,
        category: this.$route.params.bookId,
        classify: this.$store.state.classify
      }
      if (this.page.nowPage <= this.page.totalPage) {
        this.$.search(params)
          .then(this.loadCallback)
        this.page.nowPage++
      } else {
        console.log('gundongdaodi')
      }
    },
    loadCallback (res) {
      this.HRList = [...this.HRList, ...res.data]
    },
    fundHomeDate (res) {
      this.page.totalPage = Math.ceil(res.meta.total / 10)
      this.HRList = res.data
    },
    changeActive (item) {
      this.highLight = item.id
      switch (item.id) {
        case 0:
          this.HRList.sort(api.newsFlashback)
          break
        case 1:
          this.HRList.sort(api.newsPositive)
          break
        case 2:
          this.HRList.sort(api.newsLiked)
          break
        case 3:
          this.HRList.sort(api.newsReply)
          break
      }
    }
  },
  beforeMount () {
    console.log(this.$route.params)
    this.params = {
      pageNum: 1,
      pageSize: 10,
      keyword: null,
      category: ''
    }
    this.$store.commit('SET_SEARCHCONTENT', this.params)
    if (this.$route.params.classify) {
      this.$store.commit('SET_CLASSIFY', this.$route.params.classify)
    }
  },
  mounted () {
    this.page = {
      nowPage: 1,
      totalPage: 10
    }
    let params1 = {
      pageNum: 1,
      pageSize: 10,
      keyword: null,
      category: this.$route.params.bookId,
      classify: this.$store.state.classify
    }
    this.$store.commit('SET_SEARCHCATEGORIES', 3)
    let params = parseInt(this.$route.params.bookId)
    console.log(typeof params)
    this.data.category = params
    if (params === 1 || params === 2) {
      this.Province = [{
        id: '1',
        name: '权威解读'
      }, {
        id: '2',
        name: '法律法规'
      }, {
        id: '3',
        name: '劳动关系案例'
      }, {
        id: '4',
        name: '服务之窗'
      }]
    } else if (params === 3) {
      this.Province = [{
        id: '1',
        name: '办税服务'
      }, {
        id: '2',
        name: '办税指南'
      }, {
        id: '3',
        name: '财税学堂'
      }, {
        id: '4',
        name: '政策解读'
      }, {
        id: '5',
        name: '税收法规库'
      }]
    } else if (params === 4) {
      this.Province = [{
        id: '1',
        name: '政策法规'
      }, {
        id: '2',
        name: '业务指南'
      }, {
        id: '3',
        name: '公积金学堂'
      }]
    }
    console.log(this.Province)
    this.$.search(params1).then(this.fundHomeDate)
    console.log('新闻列表页面加载结束')
  }
}
</script>

<style scoped lang='scss'>
  .newsList1{
    padding:0 15px;
    background:$body-color;
    border-radius: .19rem;
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
