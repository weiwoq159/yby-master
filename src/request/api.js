/**
 * Created with vue.js
 * User: 马强/529524114@qq.com
 * Date: 2019/3/22
 * Time: 2:45 PM
 * name:$END$
 */
import request from './request'

const searchHome = params => request.post('/book/web/api/book/searchHome', params)
const getAddress = params => request.get('./static/address.json', params)
const search = params => request.post('/book/web/api/book/search', params)
const getRelease = params => request.post('/book/web/api/book/getRelease', params)
const userMessage = params => request.post('/book/web/api/login/userMessage', params)
const searchIReplys = params => request.post('/book/web/api/iReplys/searchIReplys', params)
const essence = params => request.post('/book/web/api/release/essence', params)
const add = params => request.post('/book/web/api/praise/add', params)
const replyAdd = params => request.post('/book/web/api/reply/replyAdd', params)
const commentAdd = params => request.post('/book/web/api/comment/commentAdd', params)
const click = params => request.post('/book/web/api/book/click', params)
const commentShow = params => request.post('/book/web/api/comment/commentShow', params)
const issueAdd = params => request.post('/book/web/api/issue/add', params)

export default {
  searchHome,
  getAddress,
  search,
  getRelease,
  userMessage,
  searchIReplys,
  essence,
  add,
  replyAdd,
  commentAdd,
  click,
  commentShow,
  issueAdd
}
