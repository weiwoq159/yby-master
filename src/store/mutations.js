import * as type from './mutationType'

const mutation = {
  [type.SET_SEARCHCATEGORIES] (state, SearchCategories) {
    state.SearchCategories = SearchCategories
  },
  [type.SET_SEARCHCONTENT] (state, SearchContent) {
    state.SearchContent = SearchContent
  }
}

export default mutation
