/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/29
* Time: 1:57 PM
* name:
*/
<template>
  <div class='ReservedFunds'>
    <suspend :category='data.category'></suspend>
    <SearchInput
      :Province = 'Province'
      :data='data'
      ref='search'
    ></SearchInput>
    <div class="imageModule">
      <ImageModule
        v-for='item in HRList'
        :key='item.sort'
        :item='item'
        :height='height'
      ></ImageModule>
    </div>
    <div
      class="newsList1"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <p class='title'>精选推荐</p>
      <NewsList
        v-for='item in selectionList'
        :key='item.id'
        :news='item'
      ></NewsList>
    </div>
  </div>
</template>

<script>
import api from '../../api/api'
import SearchInput from '../common/SearchInput'
import ImageModule from './components/ImageModule'
import NewsList from '../common/newsList'
import suspend from '../common/suspend'
export default {
  name: 'ReservedFunds',
  data () {
    return {
      data: {
        category: '4'
      },
      HRList: '',
      Province: '',
      height: '1',
      selectionList: '',
      page: {
        nowPage: 1,
        totalPage: 10
      }
    }
  },
  components: {
    SearchInput,
    ImageModule,
    NewsList,
    suspend
  },
  methods: {
    loadMore () {
      console.log(this.page.nowPage)
      if (this.page.nowPage <= this.page.totalPage) {
        let params = {
          pageNum: this.page.nowPage + 1,
          pageSize: 10,
          category: this.data.category
        }
        this.$.search(params).then(this.loadCallback)
        this.page.nowPage++
      } else {
        console.log('gundongdaodi')
      }
    },
    loadCallback (res) {
      this.selectionList = [...this.selectionList, ...res.data]
    },
    searchHome (res) {
      this.HRList = res.data
      api.checkImg(this.HRList)
    },
    changeAddress (res) {
      this.Province = res.data
    },
    fundHomeDate (res) {
      this.page.totalPage = Math.ceil(res.meta.total / 10)
      this.selectionList = res.data
    }
  },
  beforeMount () {
    console.log('------公积金页面开始加载------')
    this.params = {
      pageNum: 1,
      pageSize: 10,
      keyword: '',
      category: ''
    }
    this.$store.commit('SET_SEARCHCONTENT', this.params)
  },
  mounted () {
    this.page = {
      nowPage: 1,
      totalPage: 10
    }
    this.$store.commit('SET_SEARCHCATEGORIES', 2)
    this.$.getAddress('').then(this.changeAddress)
    this.$.searchHome({category: this.data.category}).then(this.searchHome)
    this.$.search({pageNum: '1', pageSize: 10, category: this.data.category}).then(this.fundHomeDate)
    console.log('------公积金页面加载完成------')
  }
}
</script>

<style scoped lang='scss'>
  .imageModule{
    padding: 0 .13rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem;
  }
  .newsList1{
    background: $body-color;
    padding:0 13px;
    border-radius: .19rem;
  }
  .title{
    text-align: center;
    padding:15px 0px;
  }
</style>
