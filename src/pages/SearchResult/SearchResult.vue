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
    <NoResult v-if='news.data && news.data.length === 0'></NoResult>
    <div class="newList">
      <NewsList
        v-for='item in news.data'
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
      news: []
    }
  },
  methods: {
    SearchResult (res) {
      console.log(res)
      this.news = res.data
      console.log(res.data.data)
    }
  },
  mounted () {
    // this.$.post('/book/web/api/book/search', this.$store.state.SearchContent)
    //   .then(this.SearchResult)
    this.$.get('../static/news')
      .then(this.SearchResult)
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
