import $ from '../request/api'
const actions = {
  goodUp (context, index) {
    let params = {
      typeId: this.state.replyMes[index].id,
      type: 2
    }
    $.add(params).then(res => {
      console.log(res)
      context.commit('CHANGE_REPLYMES1', index)
    })
  }
}
export default actions
