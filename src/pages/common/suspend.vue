/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/3/20
* Time: 8:02 PM
* name:
*/
<template>
  <div class='suspend'>
    <span class='goto' @click='goto'>
      咨询专家
    </span>
  </div>
</template>

<script>
export default {
  name: 'suspend',
  props: ['category'],
  methods: {
    goto () {
      this.$router.push({name: 'AskExperts', params: {category: this.category}})
    }
  },
  mounted () {
    console.log(this.category)
  }
}
</script>

<style scoped>
  .goto{
    position: fixed;
    right: 30px;
    bottom: 40px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    color: aliceblue;
    background: #c40000;
    text-align: center;
    padding:10px;
    box-sizing: border-box;
    line-height: 1.1;
    font-weight: 500;
    font-size: .14rem;
  }
</style>
