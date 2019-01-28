/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/21
* Time: 下午2:29
* name:
*/
<template>
  <div class='SearchInput'>
    <input
      type="text"
      v-model='input'
      placeholder='请输入搜索内容'
      class='search_input'
      @keyup.enter='goToResult'
    >
    <i
      class="iconfont icon-search"
      @click='goToResult'
    ></i>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data () {
    return {
      input: '',
      toast: ''
    }
  },
  methods: {
    goToResult () {
      if (this.toast !== '') {
        this.toast.close()
        this.toast = ''
      }
      if (this.input === '') {
        this.toast = this.mint.Toast({
          message: '请输入搜索内容',
          duration: 2000,
          className: 'toast',
          iconClass: 'iconfont icon-qingkong'
        })
        return this.toast
      } else {
        let params = {
          pageNum: 1,
          pageSize: 10,
          keyword: this.input
        }
        this.$store.commit('SET_SEARCHCONTENT', params)
        // 1. 首页搜索
        // 2. 首页搜索结果页
        this.$store.commit('SET_SEARCHCATEGORIES', 1)
        this.$router.push({
          name: 'SearchResult',
          params
        })
      }
    }
  }
}
</script>

<style scoped lang='scss'>
  .SearchInput{
    position: relative;
    padding: 0 .3rem;
    .search_input{
      width: 100%;
      height: .3rem;
      border:1px solid $input-color;
      border-radius: 30px;
      padding-left: .3rem;
      box-sizing: border-box;
    }
    .iconfont{
      position: absolute;
      right: 10px + 30px;
      top:3px;
      padding-left: .11rem;
      font-size: .20rem;
      border-left: 1px solid $input-color;
    }
  }
</style>
