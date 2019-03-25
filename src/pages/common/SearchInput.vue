/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/22
* Time: 下午5:22
* name:
*/
<template>
  <div class='SearchInput'>
    <div class="ChooseBox">
      <p
        @click='labelDis = !labelDis'
      >
        {{name}}
        <i :class='["iconfont","icon-top",labelDis ? "aa" : "go"]'></i>
      </p>
      <transition name="fade">
        <ul v-if='labelDis'>
          <li
            v-for='(item, index) in options'
            :key='item.id'
            @click='changeChose(item,index)'
            :class="index===index1 ? 'SelectOne' : 'bbb'"
          >{{item.name}}</li>
          <div class="sanjiao"></div>
        </ul>
      </transition>
    </div>
    <div class="search_input">
      <input type="text" placeholder='请输入搜索内容' v-model='input' @keyup.enter='SearchInput'>
      <i
        class="iconfont icon-search"
        @click='SearchInput'
      ></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SearchInput',
  props: ['Province', 'data'],
  data () {
    return {
      options: [{
        id: '1',
        name: '人力资源'
      }, {
        id: '2',
        name: '社会保障'
      }, {
        id: '3',
        name: '财务税收'
      }, {
        id: '4',
        name: '公积金'
      }],
      category: null,
      input: '',
      name: '请选择',
      labelDis: false,
      params: '',
      index1: '',
      data1: {}
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'SearchCategories',
      'SearchContent'
      // ...
    ]),
    status () {
      return this.$store.state.SearchCategories
    }
  },
  watch: {
    Province (newVal, oldVal) {
      this.options = newVal
    },
    data (newVal, oldVal) {
      this.data1 = newVal
      console.log('======================')
    },
    status (newVal, oldVal) {
      console.log('newVal')
    }
  },
  methods: {
    changeChose (item, index) {
      console.log(this.data1)
      this.index1 = index
      this.data1.category = item.id
      console.log('sadfads', this.data1)
      this.name = item.name
      this.labelDis = false
    },
    SearchInput () {
      console.log(this.status)
      // 1.首页搜索
      // 2.二级页面搜索
      // 5.燚精选搜索
      if (this.SearchCategories === 1) {
        this.params = ''
        this.params = {
          pageNum: 1,
          pageSize: 10,
          keyword: this.input,
          category: this.data1.category
        }
      } else if (this.SearchCategories === 2) {
        this.params = ''
        this.params = {
          pageNum: 1,
          pageSize: 10,
          keyword: this.input,
          category: this.data.category,
          areaId: this.data1.category
        }
        console.log(this.params)
      } else if (this.SearchCategories === 3) {
        this.params = ''
        this.params = {
          pageNum: 1,
          pageSize: 10,
          keyword: this.input,
          category: parseInt(this.data1.category)
        }
      } else if (this.SearchCategories === 5) {
        this.params = ''
        this.params = {
          pageNum: 1,
          pageSize: 10,
          keyword: this.input,
          category: parseInt(this.data1.category),
          essence: 1
        }
      }
      this.$store.commit('SET_SEARCHCONTENT', this.params)
      this.$.search(this.$store.state.SearchContent).then(this.SearchResult)
      // this.$.post('/book/web/api/book/search', this.$store.state.SearchContent)
    },
    SearchResult (res) {
      this.$store.commit('SET_SEARCHRESULT', res.data)
      this.$router.push({name: 'SearchResult'})
    }
  },
  mounted () {
    console.log('-----this.data1-----')
    console.log(this.data1)
    console.log('-----this.data1-----')
    let params = this.$store.state.SearchContent
    this.input = params.keyword
    this.page = {
      nowPage: 1,
      totalPage: 10
    }
    if (this.$store.state.SearchCategories === 1) {
      this.name = '请选择'
      this.category = '1'
    }
    if (this.$route.meta.category && this.$route.meta.category !== 5) {
      this.name = '请选择省市'
    } else {
      this.name = '请选择'
    }
  },
  destroyed () {
    console.log('搜索结果页面销毁')
  }
}
</script>

<style scoped lang='scss'>
  .SelectOne{
    color:#409EFF!important;
    background: #f5f7fa;
  }
  .SearchInput{
    padding:.20rem .13rem;
    display: flex;
    justify-content: space-between;
  }
  .ChooseBox{
    position: relative;
    width: 35%;
    border: 1px solid #eee;
    border-radius: 50px;
    height: .25rem;
    p{
      color: $login-color;
      padding-left:.15rem;
      font-size: .11rem;
      line-height: .25rem;
    }
  }
  .search_input{
    position: relative;
    width: 60%;
    input{
      width: 100%;
      height: 100%;
      border: 1px solid #eee;
      border-radius: 50px;
      padding-left:.15rem;
      box-sizing: border-box;
      font-size: .11rem;
    }
    i{
      position: absolute;
      right: .11rem;
      top:6px;
      color:$input-color;
      font-weight: 900;
      z-index: 20;
    }
  }
  .icon-top{
    position: absolute;
    right:.1rem;
    font-size: .06rem;
    color:$icon-color;
  }
  .ChooseBox ul{
    position: absolute;
    background: red;
    left:0rem;
    top:.4rem;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    background-color: #fff;
    max-height: 180px;
    overflow-y: scroll;
    width: 120px;
    z-index: 999;
    li{
      list-style: none;
      line-height: .36rem;
      padding: 0 .2rem;
      margin: 0;
      font-size: .14rem;
      color: #606266;
      cursor: pointer;
      outline: none;
      text-align: left;
    }
  }
  .sanjiao{
    &:after{
      content: " ";
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      top: -10px;
      margin-left: -6px;
      border-top-width: 0;
      border-bottom-color: #fff;
      border-width: 6px;
      left:50%;
    }
  }
  .aa{
    transition: all .5s;
  }
  .go{
    transform:rotate(180deg);
    transition: all .5s;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
