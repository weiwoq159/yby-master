/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/22
* Time: 上午10:58
* name:
*/
<template>
  <div class='newsList'>
    <div @click='gotoDetail'>
      <div class="title">
      <span class="essence" v-if='news.essence === 1'>
        <i class='iconfont icon-anonymous-iconfont'></i>
        精华
      </span>
        <p class='newTitle' v-html='news.title'></p>
      </div>
      <div class="content">
        <p>{{news.intro | introFormate}}</p>
      </div>
    </div>
    <div class='bottom'>
      <span class='tags'>{{news.tags}}</span>
      <span class='from'>来源:{{news.source | fromFormate}}</span>
      <span class='time'>更新时间:{{news.ceateTime | dateShow}}</span>
    </div>
    <div class="click_button">
      <div class="butt">
        <span
          @click='like(news)'
          :class="news.isLiked === 1 ? 'starActive' : 'star'"
        >
          <i
            :class="['iconfont',news.isLiked === 1 ? 'icon-heart1' : 'icon-heart']"
          ></i>{{news.liked}}
        </span>
        <span><i class="iconfont icon-liuyan"></i>{{news.commentNum}}</span>
      </div>
      <div class='clear'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsList',
  props: ['news'],
  methods: {
    like (news) {
      this.$.add({typeId: this.news.id, type: 1}).then(res => {
        if (this.news.isLiked === 0) {
          this.news.isLiked = 1
          this.news.liked++
        } else {
          this.news.isLiked = 0
          this.news.liked--
        }
      })
    },
    gotoDetail () {
      let url = 'News' + this.news.category
      this.$router.push({name: url, params: {bookId: this.news.id}})
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang='scss'>
  .clear{
    clear: both;
  }
  .newsList{
    background: #fff;
    padding: .15rem;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  .newsList a{
    display: block;
  }
  .title{
    display: flex;
    align-items: center;
    .essence{
      font-size: .11rem;
      background: $red;
      padding: 3px 5px;
      color: #fff;
      border-radius: 100px;
      margin-right: .1rem;
      white-space: nowrap;
    }
    .newTitle{
      font-size: .14rem;
      color: $login-color;
      font-weight: 500;
    }
  }
  .content{
    margin-top: .1rem;
    p{
      font-size: .12rem;
      color: $navigation-color;
    }
  }
  .icon-anonymous-iconfont{
    margin-right: -2px;
    font-size: .12rem;
  }
  .bottom{
    margin-top: .14rem;
    font-size: .1rem;
    color: $input-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tags{
      border: 1px solid $input-color;
      padding:.03rem .1rem;
      border-radius: 20px;
    }
    .from{
      margin-left: .1rem;
    }
  }
  .click_button{
    font-size: .1rem;
    color: $navigation-color;
    margin-top: 14px;
    .butt{
      float: right;
      line-height: 20px;
      span{
        border: 1px solid $navigation-color;
        border-radius: 80px;
        padding:1px 9px;
        padding-top: 3px;
      }
      span:first-child{
        margin-right: 10px;
      }
      i{
        font-size: .1rem;
        margin-right: 4px;
      }
    }
  }
  .starActive{
    color:$red;
    border:1px solid $red!important;
  }
</style>
