/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/22
* Time: 上午11:00
* name:
*/
<template>
  <div class='SearchResult'>
    <Header></Header>
    <SearchInput></SearchInput>
    <NoResult v-if='news && news.length === 0'></NoResult>
    <div
      class="newList"
      v-if='news && news.length !== 0'
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <NewsList
        v-for='item in news'
        :key='item.id'
        :news='item'
      ></NewsList>
    </div>
  </div>
</template>

<script>
import Header from '../common/Header'
import SearchInput from '../common/SearchInput'
import NoResult from './components/NoResult'
import NewsList from '../common/newsList'
import { mapGetters } from 'vuex'
export default {
  name: 'SerchResult',
  components: {
    Header,
    SearchInput,
    NoResult,
    NewsList
  },
  data () {
    return {
      news: [],
      HRList: '',
      page: {
        nowPage: 1,
        totalPage: 10
      }
    }
  },
  computed: {
    ...mapGetters([
      'SearchResult'
    ])
  },
  watch: {
    SearchResult (newVal, oldVal) {
      this.news = newVal
    }
  },
  methods: {
    loadCallback (res) {
      this.$store.commit('CHANGE_SEARCHRESULT', res.data)
    },
    loadMore () {
      // let params = {
      //   pageNum: this.page.nowPage + 1,
      //   pageSize: 10,
      //   keyword: this.$store.state.SearchContent.keyword
      // }
      // console.log(this.$store.state)
      // if (this.$store.state.SearchCategories === 1) {
      //   params = {
      //     pageNum: this.page.nowPage + 1,
      //     pageSize: 10,
      //     keyword: this.$store.state.SearchContent.keyword,
      //     category: this.$store.state.category.category
      //   }
      // } else if (this.$store.state.SearchCategories === 2) {
      //   params = {
      //     pageNum: this.page.nowPage + 1,
      //     pageSize: 10,
      //     keyword: this.$store.state.SearchContent.keyword,
      //     category: this.$store.state.SearchContent.category,
      //     areaId: this.$store.state.SearchContent.areaId
      //   }
      // } else if (this.$store.state.SearchCategories === 3) {
      //   params = {
      //     pageNum: this.page.nowPage + 1,
      //     pageSize: 10,
      //     keyword: this.$store.state.SearchContent.keyword,
      //     category: this.$store.state.SearchContent.category,
      //     classify: this.name
      //   }
      // }
      if (this.page.nowPage <= this.page.totalPage) {
        console.log(this.page.totalPage)
        let params = {}
        Object.keys(this.$store.state.SearchContent).forEach(val => {
          params[val] = this.$store.state.SearchContent[val]
        })
        this.page.nowPage++
        params.pageNum = this.page.nowPage
        this.$.search(params).then(this.loadCallback)
      } else {
        console.log('gundongdaodi')
      }
    }
  },
  mounted () {
    this.$store.commit('SET_SEARCHCATEGORIES', 3)
    if (this.$route.params) {
      this.$.search(this.$store.state.SearchContent)
      // this.$.post('/book/web/api/book/search', this.$store.state.SearchContent)
        .then(res => {
          console.log(res)
          this.HRList = res
          this.page.totalPage = Math.ceil(res.meta.total / 10)
          this.$store.commit('SET_SEARCHRESULT', res.data)
        })
    }
  }
}
</script>

<style scoped lang='scss'>
.SearchResult{
  min-height: 100%;
}
.newList{
  background: #f8f8f8;
  padding:.1rem .13rem
}
</style>
