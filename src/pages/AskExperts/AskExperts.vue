/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2018/12/25
* Time: 下午5:09
* name:
*/
<template>
  <div class='AskExperts'>
    <div class="drowDown">
      <div class="ReleaseTitle" @click=DropDown()>
        <label class="leftTitle leftTitle2">类型：</label>
        <input type='text' v-model="publish.kind"  :disabled="true">
        <span class="iconfont icon-next1"></span>
      </div>
      <div name="fade" class="seList">
        <ul class='dropList' v-if='isDrop'>
          <li v-for='item in options' :key='item.id' @click='changeInput(item)' >
            <p>{{item.label}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="ReleaseContent">
      <label class="leftTitle">内容：</label>
      <textarea class='content' v-model="publish.content"></textarea>
    </div>
    <div class="upData">
      <button class='upButt' type="primary" @click='submit'>提交问题</button>
      <button class='upButt downButt' type="primary" @click='cancel'>取消提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AskExperts',
  data () {
    return {
      publish: {
        title: '',
        kind: '人力资源',
        content: '',
        category: ''
      },
      fullscreenLoading: false,
      isDrop: false,
      options: [{
        value: 1,
        label: '人力资源'
      }, {
        value: 2,
        label: '社会保障'
      }, {
        value: 3,
        label: '财务税收'
      }, {
        value: 4,
        label: '公积金'
      }]
    }
  },
  methods: {
    DropDown () {
      this.isDrop = !this.isDrop
    },
    changeInput (item) {
      this.publish.type = item.value
      this.publish.kind = item.label
      this.isDrop = !this.isDrop
    },
    submit () {
      console.log(this)
      if (this.publish.content === '') {
        this.mint.Toast({
          message: '正文不能为空',
          className: 'toast',
          iconClass: 'iconfont icon-qingkong'
        })
      } else if (this.publish.category === '') {
        this.mint.Toast({
          message: '请选择类型',
          className: 'toast',
          iconClass: 'iconfont icon-qingkong'
        })
      } else {
        this.mint.Indicator.open({
          text: '文章发布中...',
          spinnerType: 'fading-circle'
        })
        this.$.issueAdd(this.publish).then(res => {
          if (res.data.msg === 'success') {
            this.publish = {
              kind: '类型：',
              content: '',
              category: ''
            }
            this.$router.back(-1)
            this.mint.Indicator.close()
          } else if (res.data.code === 0) {
            this.mint.Toast({
              message: '获取用户信息失败,请登录',
              className: 'toast',
              iconClass: 'iconfont icon-qingkong'
            })
            setTimeout(() => {
              location.href = 'http://tax-test.1boyun.com:9998/#/login?goLogin=1'
            }, 1000)
          }
        })
      }
    },
    cancel () {
      this.$router.back()
    }
  },
  mounted () {
    if (this.$route.params.category) {
      let category = this.$route.params.category
      this.publish.category = this.options[parseInt(category) - 1].value
      this.publish.kind = this.options[parseInt(category) - 1].label
    } else {
      this.publish.category = this.options[0].value
    }
  }
}
</script>

<style scoped lang='scss'>
  .upData{
    position:relative;
    box-shadow: 0 25px 72px 0 #999;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 7vw;
    padding: 0.1rem 0;
    background:#fff;
    .upButt{
      background: #c40000;
      color: #fff;
      text-align: center;
      /*padding:5px 0px;*/
      display:block;
      width: 45%;
      margin: 0 auto;
      border-radius: 20px;
      align-items: center;
      font-size: 4vw;
      line-height: 4vw;
    }
  }
  .leftTitle{
    display:inline-block;
    width:30vw!important;
    text-align: center;
    font-size:4vw;
    margin-left: 1vw;
    z-index: 3;
    position: relative;
    color: #333;
    height: 40px;
    line-height: 40px;
  }
  .ReleaseTitle{
    display: flex;
    width: 100%;
    height: 12vw;
    align-items: center;
    border-bottom: 1px solid #eee;
    span{
      line-height:.38rem;
      font-size: 14px;
      position: relative;
      right:30px;
    }
  }
  .ReleaseContent{
    display: flex;
    width: 100%;
    height: .4rem;
    textarea{
      width: 100%;
      font-size: 4vw;
      line-height: 1.5;
      color: #606266;
      margin-top: 10px;
      box-sizing: border-box;
    }
    label{
      line-height: 40px;
    }
  }
  .content{
    width: 100%;
    border-style: none;
    background-color: #fff !important;
    color: #333;
    line-height: 8vw;
    font-size: 14px;
    padding-left: 10px;
    height: 300px;
  }
  input{
    width: 100%;
    border-style: none;
    background-color: #fff!important;
    color: #333;
    line-height: 8vw;
    font-size: 14px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .dropList{
    background: #eee;
    padding:.1rem;
    li{
      text-align: center;
      margin-bottom: 5px;
    }
  }
  .downButt {
    background: #ffa200!important;
  }
  button{
    border-style: none;
  }
</style>
