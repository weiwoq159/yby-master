/**
 * Created with vue.js
 * User: 马强/529524114@qq.com
 * Date: 2019/1/28
 * Time: 6:03 PM
 * name:$END$
 */

export default {
  checkImg (that) {
    var listArr = that.map(function (value) {
      // console.log(value)
      switch (value.classify) {
        case '办税服务' :
          value.img = '../static/img/bszn.png'
          break
        case '服务之窗' :
          value.img = '../static/img/bg.png'
          break
        case '法律法规' :
          value.img = '../static/img/law.png'
          break
        case '权威解读' :
          value.img = '../static/img/qwjd.png'
          break
        case '办税指南' :
          value.img = '../static/img/bszn1.png'
          break
        case '政策解读' :
          value.img = '../static/img/zcjd.png'
          break
        case '业务指南' :
          value.img = '../static/img/afPic2.png'
          break
        case '政策法规' :
          value.img = '../static/img/afPic1.png'
          break
        case '公积金学堂' :
          value.img = '../static/img/afPic3.png'
          break
        case '税收法规' :
          value.img = '../static/img/revenue.png'
          break
        case '劳动关系案例' :
          value.img = '../static/img/lwhzgx.png'
          break
        case '财税学堂' :
          value.img = '../static/img/csxt.png'
          break
        case '税收法规库' :
          value.img = '../static/img/revenue.png'
          break
      }
      return value
    })
    return listArr
  },
  replyPositive1 (a, b) {
    return (new Date(b.createTime)).getTime() - (new Date(a.createTime)).getTime()
  },
  newsPositive (a, b) {
    return (new Date(a.time)).getTime() - (new Date(b.time)).getTime()
  },
  newsFlashback (a, b) {
    return (new Date(b.time)).getTime() - (new Date(a.time)).getTime()
  },
  newsLiked (a, b) {
    return b.liked - a.liked
  },
  newsReply (a, b) {
    return b.commentNum - a.commentNum
  },
  replyPositive (a, b) {
    return a.createTimes - b.createTimes
  },
  replyFlashback (a, b) {
    return b.createTimes - a.createTimes
  },
  replyGoodUp (a, b) {
    return b.goodUp - a.goodUp
  },
  replyNum (a, b) {
    return b.replyNum - a.replyNum
  }
}
