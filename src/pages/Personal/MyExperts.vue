/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/3/20
* Time: 2:51 PM
* name:
*/
<template>
  <div class='Specialist'>
    <div class="specia">
      <button class="gotoDetail" @click='AskExperts'>问专家</button>
    </div>
    <div class="specia_tab">
      <p>全部回答</p>
    </div>
    <SpList
      v-for='(item, index) in tabDetailCeil'
      :key='index'
      :choose='item'
    ></SpList>
  </div>
</template>

<script>
import SpList from './components/list'
export default {
  name: 'Specialist',
  components: {
    SpList
  },
  data () {
    return {
      speciaList: [{
        name: '最新问答',
        id: 0
      },
      {
        name: '燚精选问答',
        id: 1
      }],
      chooseList: 0,
      tabDetailCeil: []
    }
  },
  methods: {
    AskExperts () {
      this.$router.push({name: 'AskExperts'})
    }
  },
  mounted () {
    this.$.post('book/web/api/mlbtest/searchAnswer', {}).then(res => {
      this.tabDetailCeil = res.data.data
    })
  }
}
</script>

<style scoped lang='scss'>
  .specia_tab{
    background: #f8f8f8;
    padding:.14rem .14rem;
    p{
      text-align: center;
    }
  }
  .Specialist{
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    position: relative;
    padding-top:.15rem
  }
  .specia{
    padding: .23rem .3rem;
    background: #fff;
    button{
      height: .25rem;
      background: #c40000;
      font-size: .14rem;
      border-radius: 80px;
      line-height: .25rem;
      color:#fff;
      width: 100%;
      border-style: none;
    }
  }
  .line{
    height:4px;
    width: .25rem;
    background: #c40000;
    border-radius: 4px;
    margin: 0 auto;
    margin-top:.1rem;
    display: none
  }
  .tab_title{
    padding:.11rem 1.03rem;
    display: flex;
    justify-content: space-around;
    div{
      font-size: .13rem;
      color: #333;
    }
  }
  .active {
    color: #c40000!important;
    .line{
      display: block!important;
    }
  }
</style>
