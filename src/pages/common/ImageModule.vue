/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/29
* Time: 9:47 AM
* name:
*/
<template>
  <div class='ImageModule'>
    <div
      class="pic"
      :style="{backgroundImage:'url(' + item.img + ')', height:height + 'rem'}"
      @click='goToNewList(item)'
    >
      <div class="left">
        <p>{{item.classify}}</p>
        <div class="line"></div>
      </div>
      <div class="right">
        <span>{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageModule',
  props: ['item', 'height'],
  methods: {
    goToNewList (item) {
      console.log(item)
      let url = 'newList' + this.$route.meta.category
      this.$router.push({name: url, params: {bookId: this.$route.meta.category, classify: item.classify}})
    }
  }
}
</script>

<style scoped lang='scss'>
  .ImageModule{
    margin-bottom: .15rem ;
  }
  .pic{
    height:100%;
    background-size: 100% 100%;
    padding:.15rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .left {
      font-size: .14rem;
      color: #fff;
      .line{
        width: .30rem;
        height: 3px;
        background: #fff;
        border-radius: 3px;
        margin-top: 6px;
      }
    }
    .right{
      font-size: .12rem;
      color: #fff;
      span {
        display: block;
        border: 1px solid #fff;
        width: .54rem;
        height: .15rem;
        text-align: center;
        border-radius: 15px;
        line-height: 15px;
      }
    }
  }
</style>
