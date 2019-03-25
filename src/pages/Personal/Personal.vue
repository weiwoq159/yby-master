/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/2/12
* Time: 3:25 PM
* name:
*/
<template>
  <div class='PersonalCenter'>
    <div class="pic">
      <div class="head">
        <img src="static/img/photo.png" alt="" class='photo'>
      </div>
      <div class="persongInfo">
        <p class="name">{{user.name}}</p>
        <p class="tel">{{user.phone | telToName}}</p>
      </div>
      <!--<div class="nextStep">-->
      <!--<router-link to='/'><i class='iconfont icon-next'></i></router-link>-->
      <!--</div>-->
    </div>
    <div class="personCenter">
      <router-link
        :to='item.link'
        v-for='(item, index) in clumnList'
        :key='index'
      >
        <div class="centerStep">
          <i :class="['iconfont', 'columnIcon', item.iconFont]"></i>
          <p class="columnName">{{item.name}}</p>
          <i class='iconfont icon-next columnNext'></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCenter',
  data () {
    return {
      user: '',
      clumnList: [{
        name: '我的发布',
        iconFont: 'icon-publish',
        link: '/personal/mypublish'
      }, {
        name: '我的回复',
        iconFont: 'icon-reply',
        link: 'personal/myreply'
      }, {
        name: '我的燚专家',
        iconFont: 'icon-note',
        link: 'personal/MyExperts'
      }]
    }
  },
  methods: {
    myPublish (res) {
      this.user = res.data
    }
  },
  mounted () {
    // this.$.post('/book/web/api/login/userMessage ', {pageNum: 1, pageSize: 20}).then(this.myPublish)
    this.$.userMessage({pageNum: 1, pageSize: 20}).then(this.myPublish)
  },
  beforeRouteEnter (to, from, next) {
    console.log(localStorage.getItem('token'))
    let token = localStorage.getItem('token')
    if (!token) {
      location.href = 'http://tax-test.1boyun.com:9998/#/login?goLogin=1'
    } else {
      next()
    }
  }
}
</script>

<style scoped>
  .PersonalCenter{
    height: 100%;
    background: #f8f8f8;
  }
  .photo{
    width: 100%;
  }
  .pic{
    display: flex;
    align-items: center;
    padding:.16rem .22rem;
    position: relative;
    background: #fff;
  }
  .head{
    width: .52rem;
    height:.52rem;
    /*background: #000;*/
    border-radius: .52rem;
  }
  .persongInfo{
    margin-left: .16rem;
  }
  .name{
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
  }
  .tel{
    background: #c40000;
    padding: 2px 8px;
    border-radius: 14rem;
    font-size: 11px;
    color: #fefefe;
  }
  .nextStep{
    position: absolute;
    right:10px;
  }
  .icon-next{
    font-size: 16px;
    color: #aaa;
    font-weight: bold;
  }
  .personCenter{
    padding:15px;
  }
  .centerStep{
    display: flex;
    position: relative;
    background: #fff;
    padding:14px 16px;
    align-items: center;
    border-radius: 3px;
    margin-bottom:10px;
  }
  .columnName{
    font-size: 12px;
    color: #333;
    margin-left: 16px;
  }
  .columnIcon{
    font-size: 16px;
    color: #000;
  }
  .columnNext{
    position: absolute;
    right:15px;
  }
</style>
