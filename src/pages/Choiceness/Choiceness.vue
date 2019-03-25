/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/29
* Time: 2:07 PM
* name:
*/
<template>
  <div class='Choiceness'>
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
    <BottomTemp></BottomTemp>
  </div>
</template>

<script>
import api from '../../api/api'
import SearchInput from '../common/SearchInput'
import NewsList from '../common/newsList'
import BottomTemp from './components/BottomTemp'
export default {
  name: 'Choiceness',
  data () {
    return {
      data: {
        category: '5'
      },
      HRList: '',
      Province: '',
      height: '1.15',
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
      page: {
        nowPage: 1,
        totalPage: 10
      }
    }
  },
  components: {
    SearchInput,
    NewsList,
    BottomTemp
  },
  methods: {
    loadMore () {
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
      this.HRList = [...this.HRList, ...res.data]
    },
    fundHomeDate (res) {
      console.log(res)
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
    this.params = {
      pageNum: 1,
      pageSize: 10,
      keyword: '',
      category: ''
    }
    this.$store.commit('SET_SEARCHCONTENT', this.params)
  },
  mounted () {
    this.params = {
      nowPage: 1,
      totalPage: 10
      // category: this.data.category
    }
    let params = {
      pageSize: 10,
      pageNum: 1,
      category: this.data.category
    }
    this.$store.commit('SET_SEARCHCATEGORIES', 5)
    this.$.search(params).then(this.fundHomeDate)
  }
}
</script>

<style scoped lang='scss'>
.Choiceness{
  position: relative;
}
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
