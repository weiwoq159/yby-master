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
        <i :class='["iconfont","icon-lowertriangle",labelDis ? "aa" : "go"]'></i>
      </p>
      <transition name="fade">
        <ul v-if='labelDis'>
          <li
            v-for='item in options'
            :key='item.category'
            @click='changeChose(item)'
          >{{item.name}}</li>
          <div class="sanjiao"></div>
        </ul>
      </transition>
    </div>
    <div class="search_input">
      <input type="text" placeholder='请输入搜索内容' v-model='input'>
      <i
        class="iconfont icon-search"
        @click='SearchInput'
        @keyup.enter='SearchInput'
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data () {
    return {
      options: [{
        category: '1',
        name: '人力资源'
      }, {
        category: '2',
        name: '社会保障'
      }, {
        category: '3',
        name: '财务税收'
      }, {
        category: '4',
        name: '公积金'
      }],
      category: '',
      input: '',
      name: '请选择',
      labelDis: false,
      params: ''
    }
  },
  methods: {
    changeChose (item) {
      this.category = item.category
      this.name = item.name
      console.log(this.category, this.name)
      this.params = {
        pageNum: 1,
        pageSize: 10,
        keyword: this.input,
        category: item.category
      }
      this.$store.commit('SET_SEARCHCONTENT', this.params)
      this.labelDis = false
    },
    SearchInput () {
      this.$.post('/book/web/api/book/search', this.$store.state.SearchContent)
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    console.log('搜索结果页面执行')
    let params = this.$store.state.SearchContent
    this.input = params.keyword
    if (this.$store.state.SearchCategories === 1) {
      this.name = '人力资源'
      this.category = '1'
    }
  },
  destroyed () {
    console.log('搜索结果页面销毁')
  }
}
</script>

<style scoped lang='scss'>
  .SearchInput{
    padding:.14rem .13rem;
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
  .icon-lowertriangle{
    position: absolute;
    right:.1rem;
    font-size: .06rem;
    color:$icon-color;
  }
  .ChooseBox ul{
    position: absolute;
    background: red;
    left:.2rem;
    top:.4rem;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    background-color: #fff;
    li{
      list-style: none;
      line-height: .36rem;
      padding: 0 .2rem;
      margin: 0;
      font-size: .14rem;
      color: #606266;
      cursor: pointer;
      outline: none;
      text-align: center;
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
