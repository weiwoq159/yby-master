/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/29
* Time: 3:20 PM
* name:
*/
<template>
  <div class='ImageModule'>
    <div
      class="pic"
      :style="{backgroundImage:'url(' + item.img + ')', height:height + 'rem'}"
      @click='goToNewList(item)'
    >
      <span class='count'>{{item.count}}</span>
      <div class="left">
        <p>{{item.classify}}</p>
        <div class="line"></div>
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
  .pic{
    height: 1rem;
    width: 1.1rem;
    background-size: 100% 100%;
    position: relative;
    .count{
      background: $red;
      color: #fff;
      display: block;
      width: .4rem;
      height: .2rem;
      text-align: center;
      line-height: .2rem;
      border-radius: 3px;
    }
    .left{
      font-size: 14px;
      width: 100%;
      text-align: center;
      color: #ffffff;
      position: absolute;
      top:35%;
      .line{
        width: .30rem;
        height: 3px;
        background: $red;
        border-radius: 3px;
        margin: 0 auto;
        margin-top: 6px;
      }
    }
  }
</style>
