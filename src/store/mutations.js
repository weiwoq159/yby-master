import * as type from './mutationType'
import api from '../api/api'
console.log(type.SET_REPLYDETAIL)
const mutation = {
  [type.SET_SEARCHCATEGORIES] (state, SearchCategories) {
    state.SearchCategories = SearchCategories
  },
  [type.SET_REPLYDETAIL] (state, replyDetail) {
    console.log(replyDetail)
    state.replyDetail = replyDetail
  },
  [type.SET_SEARCHCONTENT] (state, SearchContent) {
    state.SearchContent = SearchContent
  },
  [type.SET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [type.SET_REPLYMES] (state, replyMes) {
    state.replyMes = replyMes
  },
  [type.CHANGE_REPLYMES] (state, replyMes) {
    state.replyMes.unshift(replyMes)
  },
  [type.SET_CLASSIFY] (state, classify) {
    state.classify = classify
  },
  [type.SET_SEARCHRESULT] (state, SearchResult) {
    state.SearchResult = SearchResult
  },
  [type.CHANGE_SEARCHRESULT]  (state, SearchResult) {
    state.SearchResult = [...state.SearchResult, ...SearchResult]
    console.log(state.SearchResult)
  },
  [type.SET_CATEGORY] (state, category) {
    state.category = category
  },
  [type.CHANGE_REPLYMES1] (state, index) {
    let mes = state.replyMes[index]
    let status = state.replyMes[index].status
    if (status === 0) {
      mes.status = 1
      mes.goodUp++
    } else {
      mes.status = 0
      mes.goodUp--
    }
  },
  [type.SORT_REPLYMES] (state, status) {
    switch (status) {
      case 0:
        state.replyMes.sort(api.replyFlashback)
        break
      case 1:
        state.replyMes.sort(api.replyPositive)
        break
      case 2:
        state.replyMes.sort(api.replyGoodUp)
        break
      case 3:
        state.replyMes.sort(api.replyNum)
        break
    }
  }
}

export default mutation
